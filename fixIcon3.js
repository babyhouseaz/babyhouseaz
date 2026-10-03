const sharp = require('sharp');

async function run() {
  await sharp('public/LogoMain.png')
    .resize(512, 512, { 
      fit: 'contain', 
      background: { r: 255, g: 255, b: 255, alpha: 0 } // Transparent padding!
    })
    .toFile('src/app/icon.png');
  console.log("Created square transparent icon!");
}

run();
