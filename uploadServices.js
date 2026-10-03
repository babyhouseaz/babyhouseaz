async function uploadUrl(url, name) {
  try {
    const res = await fetch(`https://api.imgbb.com/1/upload?key=1a84a40d0e1c20ba4a7024cda7e65499&name=${name}&image=${encodeURIComponent(url)}`, { method: 'POST' });
    const data = await res.json();
    return data.data.url;
  } catch(e) {
    console.error("Error for", name, e.message);
    return url;
  }
}

async function run() {
  const images = [
    { url: "https://images.unsplash.com/photo-1514088927958-382a934335c0?auto=format&fit=crop&w=600&q=80", name: "food" },
    { url: "https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=600&q=80", name: "lang" },
    { url: "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?auto=format&fit=crop&w=600&q=80", name: "chess" },
    { url: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=600&q=80", name: "art" },
    { url: "https://images.unsplash.com/photo-1536640712-4d4c36ff0e4e?auto=format&fit=crop&w=600&q=80", name: "psy" },
    { url: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=600&q=80", name: "nanny" },
    { url: "https://images.unsplash.com/photo-1627552245715-77d79bbf6fe2?auto=format&fit=crop&w=600&q=80", name: "bus" },
    { url: "https://images.unsplash.com/photo-1557088195-201639d67ef2?auto=format&fit=crop&w=600&q=80", name: "cam" },
  ];

  for (let i of images) {
    const finalUrl = await uploadUrl(i.url, i.name);
    console.log(i.name, '->', finalUrl);
  }
}

run();
