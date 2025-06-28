import { PortableText as BasePortableText } from 'next-sanity'
import Image from 'next/image'
import { urlFor } from '@/lib/sanity'

const components = {
  types: {
    image: ({ value }: any) => {
      if (!value?.asset?._ref) {
        return null
      }
      
      return (
        <div className="my-8">
          <Image
            src={urlFor(value).width(800).height(400).url()}
            alt={value.alt || 'Image'}
            width={800}
            height={400}
            className="rounded-lg"
          />
          {value.alt && (
            <p className="text-sm text-secondary-600 text-center mt-2">
              {value.alt}
            </p>
          )}
        </div>
      )
    },
  },
  block: {
    h1: ({ children }: any) => (
      <h1 className="text-3xl font-bold text-secondary-900 mb-4">{children}</h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-2xl font-bold text-secondary-900 mb-3">{children}</h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-xl font-bold text-secondary-900 mb-2">{children}</h3>
    ),
    normal: ({ children }: any) => (
      <p className="text-secondary-700 mb-4 leading-relaxed">{children}</p>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-primary-500 pl-4 italic text-secondary-600 my-6">
        {children}
      </blockquote>
    ),
  },
  marks: {
    link: ({ children, value }: any) => (
      <a
        href={value.href}
        className="text-primary-600 hover:text-primary-700 underline"
        target={value.blank ? '_blank' : undefined}
        rel={value.blank ? 'noopener noreferrer' : undefined}
      >
        {children}
      </a>
    ),
    strong: ({ children }: any) => (
      <strong className="font-semibold">{children}</strong>
    ),
    em: ({ children }: any) => (
      <em className="italic">{children}</em>
    ),
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="list-disc list-inside mb-4 space-y-1">{children}</ul>
    ),
    number: ({ children }: any) => (
      <ol className="list-decimal list-inside mb-4 space-y-1">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }: any) => (
      <li className="text-secondary-700">{children}</li>
    ),
    number: ({ children }: any) => (
      <li className="text-secondary-700">{children}</li>
    ),
  },
}

interface PortableTextProps {
  value: any[]
  className?: string
}

export function PortableText({ value, className }: PortableTextProps) {
  return (
    <div className={className}>
      <BasePortableText value={value} components={components} />
    </div>
  )
}