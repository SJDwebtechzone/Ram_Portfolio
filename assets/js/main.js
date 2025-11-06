/**
* Template Name: iPortfolio
* Template URL: https://bootstrapmade.com/iportfolio-bootstrap-portfolio-websites-template/
* Updated: Jun 29 2024 with Bootstrap v5.3.3
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

(function() {
  "use strict";

  /**
   * Header toggle
   */
  const headerToggleBtn = document.querySelector('.header-toggle');

  function headerToggle() {
    document.querySelector('#header').classList.toggle('header-show');
    headerToggleBtn.classList.toggle('bi-list');
    headerToggleBtn.classList.toggle('bi-x');
  }
  headerToggleBtn.addEventListener('click', headerToggle);

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.header-show')) {
        headerToggle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
    navmenu.addEventListener('click', function(e) {
      e.preventDefault();
      this.parentNode.classList.toggle('active');
      this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
      e.stopImmediatePropagation();
    });
  });

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', aosInit);

  /**
   * Init typed.js
   */
  const selectTyped = document.querySelector('.typed');
  if (selectTyped) {
    let typed_strings = selectTyped.getAttribute('data-typed-items');
    typed_strings = typed_strings.split(',');
    new Typed('.typed', {
      strings: typed_strings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000
    });
  }

  /**
   * Initiate Pure Counter
   */
  new PureCounter();

  /**
   * Animate the skills items on reveal
   */
  let skillsAnimation = document.querySelectorAll('.skills-animation');
  skillsAnimation.forEach((item) => {
    new Waypoint({
      element: item,
      offset: '80%',
      handler: function(direction) {
        let progress = item.querySelectorAll('.progress .progress-bar');
        progress.forEach(el => {
          el.style.width = el.getAttribute('aria-valuenow') + '%';
        });
      }
    });
  });

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Init isotope layout and filters
   */
  document.querySelectorAll('.isotope-layout').forEach(function(isotopeItem) {
    let layout = isotopeItem.getAttribute('data-layout') ?? 'masonry';
    let filter = isotopeItem.getAttribute('data-default-filter') ?? '*';
    let sort = isotopeItem.getAttribute('data-sort') ?? 'original-order';

    let initIsotope;
    imagesLoaded(isotopeItem.querySelector('.isotope-container'), function() {
      initIsotope = new Isotope(isotopeItem.querySelector('.isotope-container'), {
        itemSelector: '.isotope-item',
        layoutMode: layout,
        filter: filter,
        sortBy: sort
      });
    });

    isotopeItem.querySelectorAll('.isotope-filters li').forEach(function(filters) {
      filters.addEventListener('click', function() {
        isotopeItem.querySelector('.isotope-filters .filter-active').classList.remove('filter-active');
        this.classList.add('filter-active');
        initIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        if (typeof aosInit === 'function') {
          aosInit();
        }
      }, false);
    });

  });

  /**
   * Init swiper sliders
   */

  function initSwiper() {
    document.querySelectorAll(".init-swiper").forEach(function(swiperElement) {
      let config = JSON.parse(
        swiperElement.querySelector(".swiper-config").innerHTML.trim()
      );

      if (swiperElement.classList.contains("swiper-tab")) {
        initSwiperWithCustomPagination(swiperElement, config);
      } else {
        new Swiper(swiperElement, config);
      }
    });
  }

  window.addEventListener("load", initSwiper);


  /**
   * Correct scrolling position upon page load for URLs containing hash links.
   */

  window.addEventListener('load', function(e) {
    if (window.location.hash) {
      if (document.querySelector(window.location.hash)) {
        setTimeout(() => {
          let section = document.querySelector(window.location.hash);
          let scrollMarginTop = getComputedStyle(section).scrollMarginTop;
          window.scrollTo({
            top: section.offsetTop - parseInt(scrollMarginTop),
            behavior: 'smooth'
          });
        }, 100);
      }
    }
  });

  const books = [
  {
    image: "assets/img/portfolio/book-1.jpg",
    title: "Fundamentals of Intelligent Information of Things (IIoT), Book Publication",
    CoAuthors: "-",
    year: "2023",
    publisher: "Notion Press",
    isbn: "9789357579759",
    description: "Summary for book 1",
    link: "#"
  },
  {
    image: "assets/img/portfolio/book-2.jpg",
    title: "Blockchain and Its Applications in IoT(Chapter in: Advances in Blockchain Technologypp. pp 45–60)",
    CoAuthors: "A. Jayanthiladevi",
    year: "2021",
    publisher: "Springer",
    isbn: "9789876543210",
    description: "Summary for book 2",
    link: "#"
  },
  // ... Add up to 13 books in this array
  {
    image: "assets/img/portfolio/book-3.jpg",
    title: "AI Enabled Cybersecurity for IoT Devices(Book Chapter in:Cybersecurity Trends and Challenges pp. 329–345)",
    CoAuthors: " N. Keerthana ",
    year: "2021",
    publisher: "IGI Global",
    isbn: "9789123456789",
    description: "Summary for book 3",
    link: "#"
  },
  {
    image: "assets/img/portfolio/book-3.jpg",
    title: " Machine Learning for Smart Healthcare Systems, Book Chapter in: Intelligent Healthcare Systems pp. 10–22",
    CoAuthors: " R. Vaishnavi ",
    year: "2021",
    publisher: " CRC Press",
    isbn: "9789123456789",
    description: "Summary for book 3",
    link: "#"
  },{
    image: "assets/img/portfolio/book-3.jpg",
    title: "Book Title 3",
    authors: "Author D, Author E",
    year: "2021",
    publisher: "Publisher 3",
    isbn: "9789123456789",
    description: "Summary for book 3",
    link: "#"
  },{
    image: "assets/img/portfolio/book-3.jpg",
    title: "Book Title 3",
    authors: "Author D, Author E",
    year: "2021",
    publisher: "Publisher 3",
    isbn: "9789123456789",
    description: "Summary for book 3",
    link: "#"
  },{
    image: "assets/img/portfolio/book-3.jpg",
    title: "Book Title 3",
    authors: "Author D, Author E",
    year: "2021",
    publisher: "Publisher 3",
    isbn: "9789123456789",
    description: "Summary for book 3",
    link: "#"
  },{
    image: "assets/img/portfolio/book-3.jpg",
    title: "Book Title 3",
    authors: "Author D, Author E",
    year: "2021",
    publisher: "Publisher 3",
    isbn: "9789123456789",
    description: "Summary for book 3",
    link: "#"
  },{
    image: "assets/img/portfolio/book-3.jpg",
    title: "Book Title 3",
    authors: "Author D, Author E",
    year: "2021",
    publisher: "Publisher 3",
    isbn: "9789123456789",
    description: "Summary for book 3",
    link: "#"
  },{
    image: "assets/img/portfolio/book-3.jpg",
    title: "Book Title 3",
    authors: "Author D, Author E",
    year: "2021",
    publisher: "Publisher 3",
    isbn: "9789123456789",
    description: "Summary for book 3",
    link: "#"
  },{
    image: "assets/img/portfolio/book-3.jpg",
    title: "Book Title 3",
    authors: "Author D, Author E",
    year: "2021",
    publisher: "Publisher 3",
    isbn: "9789123456789",
    description: "Summary for book 3",
    link: "#"
  },
  {
    image: "assets/img/portfolio/book-3.jpg",
    title: "Book Title 3",
    authors: "Author D, Author E",
    year: "2021",
    publisher: "Publisher 3",
    isbn: "9789123456789",
    description: "Summary for book 3",
    link: "#"
  },
  {
    image: "assets/img/portfolio/book-3.jpg",
    title: "Book Title 3",
    authors: "Author D, Author E",
    year: "2021",
    publisher: "Publisher 3",
    isbn: "9789123456789",
    description: "Summary for book 3",
    link: "#"
  }
  // Repeat, up to 13 entries!
];

function updateBookInfo(index) {
  const book = books[index];
  document.getElementById("book-info-panel").innerHTML = `
    <h3>Books</h3>
    <ul>
      <li><strong>Title</strong>: ${book.title}</li>
      <li><strong>Co-Authors</strong>: ${book.authors}</li>
      <li><strong>Year</strong>: ${book.year}</li>
      <li><strong>Publisher</strong>: ${book.publisher}</li>
      <li><strong>ISBN</strong>: ${book.isbn}</li>
      <li><strong>Description</strong>: ${book.description}</li>
      <div class="button-center">
        <button class="btn" onclick="window.open('${book.link}', '_blank')">BuyNow</button>
      </div>
    </ul>
  `;
}

document.addEventListener("DOMContentLoaded", function() {
  const mySwiper = new Swiper(".portfolio-details-slider", {
    loop: true,
    speed: 600,
    autoplay: { delay: 2000 },
    slidesPerView: "auto",
    pagination: { el: ".swiper-pagination", type: "bullets", clickable: true },
    on: {
      init: function() {
        updateBookInfo(this.realIndex);
      },
      slideChange: function() {
        updateBookInfo(this.realIndex);
      }
    }
  });
});


  /**
   * Navmenu Scrollspy
   */
  let navmenulinks = document.querySelectorAll('.navmenu a');

  function navmenuScrollspy() {
    navmenulinks.forEach(navmenulink => {
      if (!navmenulink.hash) return;
      let section = document.querySelector(navmenulink.hash);
      if (!section) return;
      let position = window.scrollY + 200;
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        document.querySelectorAll('.navmenu a.active').forEach(link => link.classList.remove('active'));
        navmenulink.classList.add('active');
      } else {
        navmenulink.classList.remove('active');
      }
    })
  }
  window.addEventListener('load', navmenuScrollspy);
  document.addEventListener('scroll', navmenuScrollspy);


})();


document.addEventListener('DOMContentLoaded', function () {
      const links = document.querySelectorAll('.services-list a');
      const panels = document.querySelectorAll('.year-panel');

      links.forEach(link => {
        link.addEventListener('click', function (e) {
          e.preventDefault();
          const year = link.dataset.year;

          links.forEach(l => l.classList.toggle('active', l === link));
          panels.forEach(p => p.classList.toggle('is-active', p.dataset.year === year));

          // Refresh AOS animations after click
          if (window.AOS && typeof window.AOS.refresh === 'function') {
            setTimeout(() => window.AOS.refresh(), 50);
          }
        });
      });

      // Refresh AOS animations after DOM is ready
      if (window.AOS && typeof window.AOS.refresh === "function") {
        setTimeout(function () { window.AOS.refresh(); }, 50);
      }
    });

