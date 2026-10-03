const fs = require('fs');
let content = fs.readFileSync('src/data/services.tsx', 'utf8');

const mapping = {
  "saglam-qidalanma": "/Qida.jpeg",
  "xarici-dil-dersleri": "/English.jpeg",
  "sahmat-ve-mentiq": "/Sahmat.jpeg",
  "incesenet-ve-yaradiciliq": "/Resim.jpeg",
  "psixoloji-destek": "/Psix.jpeg",
  "daye-xidmeti": "/Daye.jpeg",
  "bagca-servisi": "/Security.jpeg",
  "24-7-kamera": "/Kamera.jpeg"
};

for (const [slug, img] of Object.entries(mapping)) {
  const regex = new RegExp(`(slug:\\s*"${slug}"[\\s\\S]*?image:\\s*")[^"]+(")`, 'g');
  content = content.replace(regex, `$1${img}$2`);
}

fs.writeFileSync('src/data/services.tsx', content);
console.log("Updated services.tsx with local photos");
