'use client'

import NextLink from 'next/link'

interface CustomLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string
  children: React.ReactNode
}

export function CustomLink({ href, children, ...props }: CustomLinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (href.startsWith('#')) {
      e.preventDefault()
      const element = document.querySelector(href)
      element?.scrollIntoView({ behavior: 'smooth' })
    }
    
    if (props.onClick) {
      props.onClick(e)
    }
  }

  return (
    <NextLink 
      href={href} 
      onClick={handleClick} 
      {...props}
      className={props.className || ''}
    >
      {children}
    </NextLink>
  )
}
