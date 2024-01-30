import RSS from "rss";

import { getBlogPostList } from "@/helpers/file-helpers";

export async function GET() {
  const site_url = "localhost:3000";
  const feedOptions = {
    title: "Blog posts | RSS Feed",
    description: "Welcome!",
    site_url: site_url,
    feed_url: `${site_url}/rss.xml`,
    pubDate: new Date(),
  };

  const rss = new RSS(feedOptions);
  const posts = await getBlogPostList();
  posts.map((post) => {
    rss.item({
      title: post.title,
      description: post.abstract,
      url: `${site_url}/${post.slug}`,
      date: post.publishedOn,
    });
  });

  const xml = rss.xml({ indent: true });

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}

