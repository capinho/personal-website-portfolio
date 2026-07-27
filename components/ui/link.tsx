'use client'

import NextLink from 'next/link'
import type { AnchorHTMLAttributes, ReactNode } from 'react'

interface CustomLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string
  children: ReactNode
}

export function CustomLink({ href, children, ...props }: CustomLinkProps) {
  if (href.startsWith('#')) {
    return (
      <a href={href} {...props}>
        {children}
      </a>
    )
  }

  return (
    <NextLink 
      href={href} 
      {...props}
      className={props.className || ''}
    >
      {children}
    </NextLink>
  )
}
