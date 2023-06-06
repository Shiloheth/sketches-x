"use client";
import { useMemo, useState } from "react";

export default function Grid() {
  const images = [
    "https://dr.savee-cdn.com/things/thumbnails/6/4/642cf54328b4a345b42419.webp",
    "https://dr.savee-cdn.com/things/thumbnails/6/4/696b847a5f4e900846edc2.webp",
    "https://dr.savee-cdn.com/things/5/e/68f35e1404e45961765299.gif",
    "https://dr.savee-cdn.com/things/thumbnails/6/4/64c7a64328b4a3450202ff.webp",
    "https://dr.savee-cdn.com/things/thumbnails/6/4/654b6857704213c64285df.webp",
    "https://dr.savee-cdn.com/things/thumbnails/6/4/67a69735f381842d8d66a6.webp",
    "https://dr.savee-cdn.com/things/thumbnails/6/4/3da8191825fc4451d91e1f.webp",
    "https://dr.savee-cdn.com/things/thumbnails/6/4/6b9cdf923519b907b852b0.webp",
    "https://dr.savee-cdn.com/things/thumbnails/6/4/696a04efc9a6b70b2baa73.webp",
  ];

  // Using a useMemo hook so this function runs once
  const posts: any = useMemo(() => {
    let imageIndex = 0;
    const generatedPosts = [];

    for (let i = 1; i <= 80; i++) {
      const item = {
        id: i,
        title: `Post ${i}`,
        date: `${i < 10 ? 0 : ""}${i}/10/2021 `,
        image: images[imageIndex],
      };
      generatedPosts.push(item);
      imageIndex++;
      if (imageIndex > images.length - 1) imageIndex = 0;
    }

    return generatedPosts;
  }, []);

  const totalIterations = posts.length / 20;

  let columns = Array.from({ length: totalIterations });

  return (
    <div className="flex gap-10 w-full px-10">
      {columns.map((column, idx) => (
        <div key={idx} className="flex flex-1 flex-col gap-10">
          {posts
            .slice(idx * 20, (idx + 1) * 20)
            .map((post: any, imageIndex: any) => (
              <img
                key={imageIndex}
                src={post.image}
                alt={`Image ${imageIndex}`}
              />
            ))}
        </div>
      ))}
    </div>
  );
}
