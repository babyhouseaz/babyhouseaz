const fs = require('fs');
const https = require('https');

const API_KEY = '1a84a40d0e1c20ba4a7024cda7e65499';

async function uploadToImgbb(imageSource) {
  return new Promise((resolve, reject) => {
    let postData = `key=${API_KEY}&image=${encodeURIComponent(imageSource)}`;

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
  "https://images.unsplash.com/photo-1540479859555-17af45c78602?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1503454537195-1dc534823483?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1518536643697-393278c5d9f0?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1581602498263-ce3159dc23a7?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1610438250910-38cbbaaf2b9b?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1558021211-6d1403321394?auto=format&fit=crop&w=600&q=80"
];

async function run() {
  console.log("Uploading services images...");
  for (let i = 0; i < imagesToUpload.length; i++) {
    try {
      const url = await uploadToImgbb(imagesToUpload[i]);
      console.log(`Service ${i}: ${url}`);
    } catch (e) {
      console.error(`Error uploading Service ${i}:`, e.message || e);
    }
  }
}

run();
