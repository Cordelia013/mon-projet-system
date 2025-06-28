import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: '2024-01-01',
  useCdn: process.env.NODE_ENV === 'production',
  token: process.env.SANITY_API_TOKEN,
})

const builder = imageUrlBuilder(client)

export function urlFor(source: any) {
  return builder.image(source)
}

// Queries GROQ pour récupérer les données
export const queries = {
  // Pages
  getAllPages: `*[_type == "page"] | order(publishedAt desc)`,
  getPageBySlug: `*[_type == "page" && slug.current == $slug][0]`,
  
  // Articles
  getAllPosts: `*[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    mainImage,
    publishedAt,
    featured,
    author->{name, slug, image},
    categories[]->{title, slug, color}
  }`,
  
  getPostBySlug: `*[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    excerpt,
    mainImage,
    content,
    publishedAt,
    featured,
    seo,
    author->{name, slug, image, bio},
    categories[]->{title, slug, color}
  }`,
  
  getFeaturedPosts: `*[_type == "post" && featured == true] | order(publishedAt desc) [0...3] {
    _id,
    title,
    slug,
    excerpt,
    mainImage,
    publishedAt,
    author->{name, slug, image},
    categories[]->{title, slug, color}
  }`,
  
  // Auteurs
  getAllAuthors: `*[_type == "author"] | order(name asc)`,
  getAuthorBySlug: `*[_type == "author" && slug.current == $slug][0]`,
  
  // Catégories
  getAllCategories: `*[_type == "category"] | order(title asc)`,
  getCategoryBySlug: `*[_type == "category" && slug.current == $slug][0]`,
  
  getPostsByCategory: `*[_type == "post" && references(*[_type == "category" && slug.current == $slug]._id)] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    mainImage,
    publishedAt,
    author->{name, slug, image},
    categories[]->{title, slug, color}
  }`,
}

// Types TypeScript pour Sanity
export interface SanityImage {
  _type: 'image'
  asset: {
    _ref: string
    _type: 'reference'
  }
  alt?: string
}

export interface SanitySlug {
  _type: 'slug'
  current: string
}

export interface Author {
  _id: string
  name: string
  slug: SanitySlug
  image?: SanityImage
  bio?: any[]
  email?: string
  website?: string
  social?: {
    twitter?: string
    linkedin?: string
    github?: string
  }
}

export interface Category {
  _id: string
  title: string
  slug: SanitySlug
  description?: string
  color: string
}

export interface Post {
  _id: string
  title: string
  slug: SanitySlug
  excerpt?: string
  mainImage?: SanityImage
  content?: any[]
  publishedAt: string
  featured: boolean
  author?: Author
  categories?: Category[]
  seo?: {
    metaTitle?: string
    metaDescription?: string
    keywords?: string[]
  }
}

export interface Page {
  _id: string
  title: string
  slug: SanitySlug
  description?: string
  content?: any[]
  publishedAt: string
  seo?: {
    metaTitle?: string
    metaDescription?: string
    keywords?: string[]
  }
}