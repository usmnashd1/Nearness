import type { CollectionEntry } from 'astro:content';
import readingTime from 'reading-time';

export type Post = CollectionEntry<'posts'>;

export const isPublished = (post: Post) => !post.data.draft || import.meta.env.DEV;

export const sortPosts = (posts: Post[]) =>
  [...posts].filter(isPublished).sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());

export const getReadingTime = (post: Post) => readingTime(post.body || '').text.replace('read', 'min read');

export const formatDate = (date: Date, language = 'en') =>
  new Intl.DateTimeFormat(language === 'ur' ? 'ur-PK' : 'en-GB', {
    day: 'numeric', month: 'long', year: 'numeric',
  }).format(date);

export const unique = (values: string[]) => [...new Set(values)].sort((a, b) => a.localeCompare(b));

export const postPath = (id: string) => `/posts/${id.replace(/\.(md|mdx)$/, '')}/`;
