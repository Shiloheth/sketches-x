"use client";

export default function Grid() {
  const posts = [];

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

  let imageIndex = 0;

  for (let i = 1; i <= 80; i++) {
    let item = {
      id: i,
      title: `Post ${i}`,
      date: `${i < 10 ? 0 : ""}${i}/10/2021 `,
      image: images[imageIndex],
    };
    posts.push(item);
    imageIndex++;
    if (imageIndex > images.length - 1) imageIndex = 0;
  }

  console.log(posts);

  return (
    <div className="flex gap-10 w-full px-10">
      <div className="flex flex-1 flex-col gap-10">
        {posts.map((post, idx) => (
          <div key={idx}>
            <img src={`${post.image}`} />
          </div>
        ))}
      </div>
      <div className="flex flex-1 flex-col gap-10">
        {posts.map((post, idx) => (
          <div key={idx}>
            <img src={`${post.image}`} />
          </div>
        ))}
      </div>
      <div className="flex flex-1 flex-col gap-10">
        {posts.map((post, idx) => (
          <div key={idx}>
            <img src={`${post.image}`} />
          </div>
        ))}
      </div>
      <div className="flex flex-1 flex-col gap-10">
        {posts.map((post, idx) => (
          <div key={idx}>
            <img src={`${post.image}`} />
          </div>
        ))}
      </div>
    </div>
  );
}
