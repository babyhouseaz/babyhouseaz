const sharp = require('sharp');

async function run() {
  await sharp('public/LogoMain.png')
    .resize(400, 200, { fit: 'contain' })
    .extend({
      top: 156,
      bottom: 156,
      left: 56,
      right: 56,
      background: { r: 255, g: 255, b: 255, alpha: 1 }
    })
    .flatten({ background: { r: 255, g: 255, b: 255 } })
    .toFile('src/app/icon.png');
  console.log("Created perfect white icon from LogoMain!");
}

run();
