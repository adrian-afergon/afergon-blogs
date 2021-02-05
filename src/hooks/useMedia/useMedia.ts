import { useEffect, useState } from 'react'
import { MediaSizes } from './media-sizes'

export const useMedia = () => {
  const [isExtraLargeScreen, setIsExtraLargeScreen] = useState(false)
  const [isLargeScreen, setIsLargeScreen] = useState(false)
  const [isMediumScreen, setIsMediumScreen] = useState(false)
  const [isSmallScreen, setIsSmallScreen] = useState(false)

  const onResize = () => {
    const screenWidth = window.innerWidth
    switch (true) {
      case screenWidth >= MediaSizes.maxExtraLarge:
        setIsExtraLargeScreen(true)
        setIsLargeScreen(true)
        setIsMediumScreen(true)
        setIsSmallScreen(true)
        break
      case screenWidth >= MediaSizes.maxLarge:
        setIsExtraLargeScreen(false)
        setIsLargeScreen(true)
        setIsMediumScreen(true)
        setIsSmallScreen(true)
        break
      case screenWidth >= MediaSizes.maxMedium:
        setIsExtraLargeScreen(false)
        setIsLargeScreen(false)
        setIsMediumScreen(true)
        setIsSmallScreen(true)
        break
      case screenWidth >= MediaSizes.maxSmall:
        setIsExtraLargeScreen(false)
        setIsLargeScreen(false)
        setIsMediumScreen(false)
        setIsSmallScreen(true)
        break
      default:
        setIsExtraLargeScreen(false)
        setIsLargeScreen(false)
        setIsMediumScreen(false)
        setIsSmallScreen(false)
    }
  }

  useEffect(() => {
    onResize()
    window.addEventListener('resize', onResize, false)
    onResize()
    return () => {
      window.removeEventListener('resize', onResize, false)
    }
  }, [])

  return {
    isExtraLargeScreen,
    isLargeScreen,
    isMediumScreen,
    isSmallScreen
  }
}
