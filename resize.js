import { Jimp } from "jimp";
import fs from "fs";

async function makeFavicons() {
  try {
    const image = await Jimp.read("public/logo.png");
    
    // Create a 192x192 PNG for general high-res favicon
    const img192 = image.clone();
    img192.resize({ w: 192, h: 192 });
    await img192.write("public/favicon-192.png");
    
    // Create a 32x32 PNG for standard favicon
    const img32 = image.clone();
    img32.resize({ w: 32, h: 32 });
    await img32.write("public/favicon-32.png");
    
    console.log("Favicons created successfully.");
  } catch (err) {
    console.error("Error creating favicons:", err);
  }
}

makeFavicons();
