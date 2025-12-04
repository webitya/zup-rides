"use client"

import React from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState(false)

  React.useEffect(() => {
    if (typeof window === "undefined") return

    const checkScreen = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }

    checkScreen()

    window.addEventListener("resize", checkScreen)

    return () => {
      window.removeEventListener("resize", checkScreen)
    }
  }, [])

  return isMobile
}
