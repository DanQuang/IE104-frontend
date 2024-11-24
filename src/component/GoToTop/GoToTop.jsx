import { useState, useEffect } from 'react';
import './GoToTop.css';

const GoToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 100) {
      setIsVisible(true); 
    } else {
      setIsVisible(false); 
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', 
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    isVisible && ( 
      <div className="go-to-top" onClick={scrollToTop}>
        <div className="line"></div>
        <div className="text">Go To Top</div>
      </div>
    )
  );
};

export default GoToTop;



