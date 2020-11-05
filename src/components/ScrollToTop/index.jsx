import React, { useState, useEffect } from 'react';
import { useWindowScroll } from 'react-use'

import { ScrollIcon } from './ScrollIcon';
import { ScrollToTopContainer } from './StyledScrollToTop';

export const ScrollToTop = () => {
  const { y: pageYOffset } = useWindowScroll();

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (pageYOffset > 400) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [pageYOffset]);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  if (!visible) {
    return false;
  }

  return (
    <ScrollToTopContainer>
      <ScrollIcon onClick={scrollToTop} />
    </ScrollToTopContainer>
  );
};

// import { useEffect } from 'react';
// import { useLocation } from 'react-router-dom';

// export default function ScrollToTop () {
//     const { pathname } = useLocation();

//     useEffect(() => {
//         window.scrollTo(0, 0);
//     }, [pathname]);

//     return null;
// };
