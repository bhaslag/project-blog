import React from "react";

import BlogHero from "@/components/BlogHero";
import { loadBlogPost } from "@/helpers/file-helpers";
import { MDXRemote } from "next-mdx-remote/rsc";

import styles from "./postSlug.module.css";

export async function generateMetadata({ params }) {
  console.log(params);
  const blogContent = await loadBlogPost(params.postSlug);

  console.log(blogContent);

  return {
    title: blogContent.frontmatter.title,
    name: 'description',
    content: blogContent.frontmatter.abstract
  };
}

async function BlogPost({ params }) {
  const blogContent = await loadBlogPost(params.postSlug);

  return (
    <article className={styles.wrapper}>
      <BlogHero
        title={blogContent.frontmatter.title}
        publishedOn={blogContent.frontmatter.publishedOn}
      />
      <div className={styles.page}>
        <MDXRemote source={blogContent.content} />
      </div>
    </article>
  );
}

export default BlogPost;
