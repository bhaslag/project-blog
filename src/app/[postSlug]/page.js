import React from 'react';

import BlogHero from '@/components/BlogHero';
import { loadBlogPost } from '@/helpers/file-helpers';
import { MDXRemote } from 'next-mdx-remote/rsc';

import styles from './postSlug.module.css';

async function BlogPost({ params }) {
  const blogContent = await loadBlogPost(params.postSlug);

  return (
    <article className={styles.wrapper}>
      <BlogHero
        title="Example post!"
        publishedOn={new Date()}
      />
      <div className={styles.page}>
        <MDXRemote source={blogContent.content} />
      </div>
    </article>
  );
}

export default BlogPost;
