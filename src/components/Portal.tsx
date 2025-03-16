'use client'
import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

const Portal = ({ children }: { children: React.ReactNode }) => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true) // Runs only in the browser
  }, [])

  if (!isMounted) return null // Avoid rendering on the server

  return createPortal(children, document.body)
}

export default Portal
