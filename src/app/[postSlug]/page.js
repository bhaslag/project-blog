import React from "react";

import BlogHero from "@/components/BlogHero";

import { loadBlogPost } from "@/helpers/file-helpers";
import COMPONENT_MAP from "@/helpers/mdx-components";

import { notFound } from "next/navigation"
import { MDXRemote } from "next-mdx-remote/rsc";

import styles from "./postSlug.module.css";

export async function generateMetadata({ params }) {
  const postData = await loadBlogPost(params.postSlug);

  if (!postData) {
    return null;
  }

  return {
    title: postData.frontmatter.title,
    description: postData.frontmatter.abstract,
  };
}

async function BlogPost({ params }) {
  const postData = await loadBlogPost(params.postSlug);

  if (!postData) {
    notFound();
  }

  return (
    <article className={styles.wrapper}>
      <BlogHero
        title={postData.frontmatter.title}
        publishedOn={postData.frontmatter.publishedOn}
      />
      <div className={styles.page}>
        <MDXRemote source={postData.content} components={COMPONENT_MAP} />
      </div>
    </article>
  );
}

export default BlogPost;
