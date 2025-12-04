"use client"

import React from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState(false)

  React.useEffect(() => {
    if (typeof window === "undefined") return

    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)

    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }

    // Add listener
    mql.addEventListener("change", onChange)

    // Initial check
    onChange()

    // Cleanup
    return () => {
      mql.removeEventListener("change", onChange)
    }
  }, [])

  return isMobile
}
