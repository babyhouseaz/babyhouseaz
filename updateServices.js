const fs = require('fs');
let content = fs.readFileSync('src/data/services.tsx', 'utf8');

const mapping = {
  "saglam-qidalanma": "https://i.ibb.co/dJpJqYTD/food.jpg",
  "xarici-dil-dersleri": "https://i.ibb.co/xSVmWzwr/lang.jpg",
  "sahmat-ve-mentiq": "https://i.ibb.co/tP3XT4Rx/chess.jpg",
  "incesenet-ve-yaradiciliq": "https://i.ibb.co/VYRDGr8G/art.jpg",
  "psixoloji-destek": "https://i.ibb.co/QFB6Rs1G/psy.jpg",
  "daye-xidmeti": "https://i.ibb.co/1fw9Ch3J/nanny.jpg",
  "bagca-servisi": "https://i.ibb.co/PGgQgsTD/bus.jpg",
  "24-7-kamera": "https://i.ibb.co/HD8bvHR1/cam.jpg"
};

for (const [slug, img] of Object.entries(mapping)) {
  const regex = new RegExp(`(slug:\\s*"${slug}"[\\s\\S]*?image:\\s*")[^"]+(")`, 'g');
  content = content.replace(regex, `$1${img}$2`);
}

fs.writeFileSync('src/data/services.tsx', content);
console.log("Updated services.tsx");
