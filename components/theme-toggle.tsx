"use client"

import * as React from "react"
import { Moon, Sun } from '@phosphor-icons/react'
import { useTheme } from "next-themes"

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const mounted = React.useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  )

  if (!mounted) {
    return <div className="h-11 w-11" aria-hidden="true" />
  }

  const isLight = resolvedTheme === 'light'

  return (
    <button
      type="button"
      onClick={() => setTheme(isLight ? "dark" : "light")}
      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card/85 text-foreground shadow-sm backdrop-blur-md hover:border-primary/40 hover:bg-accent active:scale-[0.96]"
      aria-label={isLight ? 'Switch to dark mode' : 'Switch to light mode'}
      title={isLight ? 'Dark mode' : 'Light mode'}
    >
      {isLight ? (
        <Moon className="h-[1.2rem] w-[1.2rem]" weight="regular" />
      ) : (
        <Sun className="h-[1.2rem] w-[1.2rem]" weight="regular" />
      )}
    </button>
  )
}
