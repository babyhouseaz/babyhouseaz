const Jimp = require('jimp');

async function run() {
  // Load original logo
  const logo = await Jimp.read('public/Logo.png');
  
  // Make a white background image of size 512x512
  const bg = new Jimp(512, 512, '#FFFFFF');
  
  // Resize logo to fit inside the 512x512 (e.g., width 400, height auto)
  logo.contain(460, 460); // Contain inside 460x460 to leave padding
  
  // Composite logo over background
  bg.composite(logo, 26, 26);
  
  // Write to src/app/icon.png
  await bg.writeAsync('src/app/icon.png');
  console.log("Created src/app/icon.png with white bg");
}

run();
