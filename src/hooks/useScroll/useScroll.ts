import * as React from 'react'

export const useScroll = () => {
  const scrollEvent = 'scroll'
  const [scrollTop, setScrollTop] = React.useState<number>(0)
  const [isTop, setTop] = React.useState<boolean>(true)

  React.useEffect(() => {
    const onScroll = (event: any) => {
      setScrollTop(event.target.documentElement.scrollTop)
      setTop(event.target.documentElement.scrollTop === 0)
    }
    window.addEventListener(scrollEvent, onScroll)
    return () => window.removeEventListener(scrollEvent, onScroll)
  }, [scrollTop])

  return {
    scrollTop,
    isTop
  }
}
