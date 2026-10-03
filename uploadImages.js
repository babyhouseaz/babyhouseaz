const fs = require('fs');
const path = require('path');
const https = require('https');

const API_KEY = '1a84a40d0e1c20ba4a7024cda7e65499';

async function uploadToImgbb(imageSource) {
  return new Promise((resolve, reject) => {
    let postData;
    if (imageSource.startsWith('http')) {
      postData = `key=${API_KEY}&image=${encodeURIComponent(imageSource)}`;
    } else {
      const bitmap = fs.readFileSync(imageSource);
      const base64Str = Buffer.from(bitmap).toString('base64');
      postData = `key=${API_KEY}&image=${encodeURIComponent(base64Str)}`;
    }

    const options = {
      hostname: 'api.imgbb.com',
      path: '/1/upload',
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': Buffer.byteLength(postData)
      }
    };

    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', (chunk) => {
        data += chunk;
      });
      res.on('end', () => {
        try {
          const json = JSON.parse(data);
          if (json.success) {
            resolve(json.data.url);
          } else {
            reject(json);
          }
        } catch (e) {
          reject(e);
        }
      });
    });

    req.on('error', (e) => reject(e));
    req.write(postData);
    req.end();
  });
}

const imagesToUpload = [
  path.join(__dirname, 'public/Photo1.jpg'),
  path.join(__dirname, 'public/Photo2.jpg'),
  path.join(__dirname, 'public/Photo3.jpg'),
  'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500', // Teacher 1
  'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500', // Teacher 2
  'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500', // Teacher 3
  'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=500', // Teacher 4
];

async function run() {
  console.log("Uploading images...");
  for (let i = 0; i < imagesToUpload.length; i++) {
    try {
      const url = await uploadToImgbb(imagesToUpload[i]);
      console.log(`Image ${i}: ${url}`);
    } catch (e) {
      console.error(`Error uploading Image ${i}:`, e.message || e);
    }
  }
}

run();
