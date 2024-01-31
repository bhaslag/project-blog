import React from 'react';

import { BLOG_TITLE } from '@/constants';

import styles from './homepage.module.css';

export const metadata = {
  title: `404 Not found • ${BLOG_TITLE}`,
};

function NotFound() {
  return (
    <div className={styles.wrapper}>
      <h2>404 Not Found</h2>
      <p>The requested page does not exist. Check the URL and try again.</p>
    </div>
  );
}

export default NotFound;
