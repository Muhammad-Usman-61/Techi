import React, { ReactNode, useEffect, useState } from 'react'

type FadeInProps = {
  children: ReactNode
  time?: number
  className?: string
  open?: boolean
  delay?: number
  onClick?: (e: React.MouseEvent) => void
}

const FadeIn = ({
  children,
  time = 0.3,
  className = '',
  open = true,
  delay = 0,
  onClick = undefined
}: FadeInProps) => {
  const [visible, setVisible] = useState(false)
  const [shouldRender, setShouldRender] = useState(open)

  useEffect(() => {
    // When 'open' is true, set visible to true for fade-in effect and show children.
    if (open) {
      setShouldRender(true)
      setTimeout(() => setVisible(true), 0)
    }
    // When 'open' is false, set visible to false for fade-out effect.
    else {
      setVisible(false)
      // After the fade-out duration, set shouldRender to false to remove from DOM.
      const timer = setTimeout(() => setShouldRender(false), time * 1000)
      return () => clearTimeout(timer)
    }
  }, [open, time])

  return shouldRender ? (
    <>
      {/* eslint-disable-next-line react/no-unknown-property */}
      <style jsx>{`
        .fade-in {
          opacity: 0;
          transition: opacity ${time}s ease-in-out !important;
          transition-delay: ${delay}s !important;
        }

        .fade-in.visible {
          opacity: 1;
        }
      `}</style>

      <div
        onClick={onClick}
        className={`fade-in ${visible ? 'visible' : ''} ${className}`}
      >
        {children}
      </div>
    </>
  ) : null
}

export default FadeIn
