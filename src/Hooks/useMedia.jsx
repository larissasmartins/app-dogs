import React, { useEffect, useState } from 'react';

const useMedia = (media) => {
  const [match, setMatch] = useState(null);

  useEffect(() => {
    // everytime the window is resized the function is activated
    function changeMatch() {
      const { matches } = window.matchMedia(media);
      setMatch(matches);
    }
    changeMatch();
    window.addEventListener('resize', changeMatch);
    // clean the return
    return () => {
      window.removeEventListener('resize', changeMatch);
    };
  }, [media]);

  return match;
};

export default useMedia;
