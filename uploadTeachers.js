const fs = require('fs');

async function uploadUrl(url, name) {
  try {
    const response = await fetch(`https://api.imgbb.com/1/upload?key=1a84a40d0e1c20ba4a7024cda7e65499&name=${name}&image=${encodeURIComponent(url)}`, { method: 'POST' });
    const data = await response.json();
    console.log(name, '->', data.data.url);
  } catch(e) {
    console.error("Error for", name, e.message);
  }
}

async function run() {
  // Good professional caucasian faces
  const teachers = [
    { url: "https://images.unsplash.com/photo-1544717302-de2939b7ef71?auto=format&fit=crop&w=500&q=80", name: "teacher1" }, // woman 1
    { url: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=500&q=80", name: "teacher2" }, // woman 2
    { url: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=500&q=80", name: "teacher3" }, // woman 3
    { url: "https://images.unsplash.com/photo-1598550874175-4d0ef43ee90d?auto=format&fit=crop&w=500&q=80", name: "teacher4" }, // woman 4
  ];

  for (let t of teachers) {
    await uploadUrl(t.url, t.name);
  }
}

run();
