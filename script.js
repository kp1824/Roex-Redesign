gsap.registerPlugin(ScrollTrigger);

const video = document.querySelector(".compuny-video-div video");

gsap.timeline({
  scrollTrigger: {
    trigger: ".compuny-video-div",
    start: "center center",         // Video div reaches center of screen
    end: "+=600",                // Scroll duration for animation
    scrub: true,                 // Smooth scroll-linked animation
    pin: true,                   // Keep video in place during scroll
    anticipatePin: 1
  }
})
.to(video, {
  scale: 3,                    // Enlarge video
  xPercent: -50,
  left: "50%",                   // Move to horizontal center
  top: "50%",                    // Move to vertical center
  transform: "translateY(-50%)",
  ease: "power2.out",
  borderRadius: "20px",
  opacity: 1
});


const swiper = new Swiper('.slider-wrapper', {
    loop: true,
    grabCursor: true,
    spaceBetween: 30,
    // Pagination bullets
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true
    },
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    // Responsive breakpoints
    breakpoints: {
      0: {
        slidesPerView: 1
      },
      768: {
        slidesPerView: 2
      },
      1024: {
        slidesPerView: 3
      }
    }
  });



  const section = document.querySelector('.section');
  const main = section.querySelector('.main');
  const wrap = section.querySelector('.wrap');

  const totalScrollWidth = wrap.scrollWidth;
  const viewportHeight = window.innerHeight;
  const scrollLength = totalScrollWidth - window.innerWidth + viewportHeight;

  // Set dynamic height to .section to allow scrolling
  section.style.height = scrollLength + 'px';

  window.addEventListener('scroll', () => {
    const sectionTop = section.offsetTop;
    const scrollY = window.scrollY;

    if (scrollY >= sectionTop && scrollY <= sectionTop + scrollLength) {
      const horizontalScroll = scrollY - sectionTop;
      wrap.style.transform = `translateX(-${horizontalScroll}px)`;
    }
  });