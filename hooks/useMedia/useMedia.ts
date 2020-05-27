import { useEffect, useState } from 'react';

export const useMedia = () => {
  const [isExtraLargeScreen, setIsExtraLargeScreen] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const [isMediumScreen, setIsMediumScreen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const onResize = () => {
    const screenWidth = window.innerWidth;
    switch (true) {
    case screenWidth >= 1200:
      setIsExtraLargeScreen(true);
      setIsLargeScreen(true);
      setIsMediumScreen(true);
      setIsSmallScreen(true);
      break;
    case screenWidth >= 992:
      setIsExtraLargeScreen(false);
      setIsLargeScreen(true);
      setIsMediumScreen(true);
      setIsSmallScreen(true);
      break;
    case screenWidth >= 768:
      setIsExtraLargeScreen(false);
      setIsLargeScreen(false);
      setIsMediumScreen(true);
      setIsSmallScreen(true);
      break;
    case screenWidth >= 576:
      setIsExtraLargeScreen(false);
      setIsLargeScreen(false);
      setIsMediumScreen(false);
      setIsSmallScreen(true);
      break;
    default:
      setIsExtraLargeScreen(false);
      setIsLargeScreen(false);
      setIsMediumScreen(false);
      setIsSmallScreen(false);
    }
  };

  useEffect(() => {
    onResize();
    window.addEventListener('resize', onResize, false);
    onResize();
    return () => {
      window.removeEventListener('resize', onResize, false);
    };
  }, []);

  return {
    isExtraLargeScreen,
    isLargeScreen,
    isMediumScreen,
    isSmallScreen,
  };
};
