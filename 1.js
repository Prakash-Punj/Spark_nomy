const elements = document.querySelectorAll('.scroll-animation');
  
    const handleScroll = () => {
      const viewportHeight = window.innerHeight;
  
      elements.forEach((element) => {
        const elementTop = element.offsetTop;
        const elementBottom = elementTop + element.offsetHeight;
        const scrollPosition = window.pageYOffset;
  
        if (scrollPosition + viewportHeight > elementTop && scrollPosition < elementBottom) {
          element.classList.add('animate'); 
        } else {
          element.classList.remove('animate'); 
        }
      });
    };
  
    window.addEventListener('scroll', handleScroll);

    handleScroll();
