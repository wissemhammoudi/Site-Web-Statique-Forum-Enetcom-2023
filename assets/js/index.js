window.onload = (event) => {
    AOS.init();
    var options = {
        strings: ["ENET'COM ANNUAL FORUM"],
        typeSpeed: 50,
        backSpeed: 25,
        startDelay: 500,
        backDelay: 2000,
        loop: true,
    };

    var typed = new Typed('#autotype-text', options);
    const typed_cursor = document.getElementsByClassName('typed-cursor')[0];
    typed_cursor.style.display = "none";
    countDown();
};

function countDown() {
    var countDownDate = new Date("Nov 18, 2023 00:00:00").getTime();
    var x = setInterval(function () {
        var now = new Date().getTime();
        var distance = countDownDate - now;
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Add leading zeros if the number is less than 10
        days = days < 10 ? "0" + days : days;
        hours = hours < 10 ? "0" + hours : hours;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        document.getElementById("days").innerHTML = days;
        document.getElementById("hours").innerHTML = hours;
        document.getElementById("minutes").innerHTML = minutes;
        document.getElementById("seconds").innerHTML = seconds;

        if (distance < 0) {
            clearInterval(x);
            document.getElementById("countdown").innerHTML = "EXPIRED";
        }
    }, 1000);
}

function toggleNavbar() {
    const nav = document.getElementsByTagName('nav')[0];
    nav.children[0].classList.toggle("open-navbar");
    nav.classList.toggle("navbar-display");
}

//FAQ
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
  const question = item.querySelector('.faq-question');
  const answer = item.nextElementSibling;
  const icon = item.querySelector('i');

  item.addEventListener('click', () => {
    faqItems.forEach(otherItem => {
      if (otherItem !== item) {
        const otherAnswer = otherItem.nextElementSibling;
        const otherIcon = otherItem.querySelector('i');

        otherAnswer.classList.remove('active');
        otherIcon.classList.remove('active');
        otherAnswer.style.maxHeight = "0";
      }
    });

    answer.classList.toggle('active');
    icon.classList.toggle('active');
    if (answer.classList.contains('active')) {
      answer.style.maxHeight = answer.scrollHeight + "px";
    } else {
      answer.style.maxHeight = "0";
    }
  });
});

// schedule

(function ($) {
  $(function () {


      $(window).on('scroll', function () {
          fnOnScroll();
      });

      $(window).on('resize', function () {
          fnOnResize();
      });


      var agTimeline = $('.js-timeline'),
          agTimelineLine = $('.js-timeline_line'),
          agTimelineLineProgress = $('.js-timeline_line-progress'),
          agTimelinePoint = $('.js-timeline-card_point-box'),
          agTimelineItem = $('.js-timeline_item'),
          agOuterHeight = $(window).outerHeight(),
          agHeight = $(window).height(),
          f = -1,
          agFlag = false;

      function fnOnScroll() {
          agPosY = $(window).scrollTop();

          fnUpdateFrame();
      }

      function fnOnResize() {
          agPosY = $(window).scrollTop();
          agHeight = $(window).height();

          fnUpdateFrame();
      }

      function fnUpdateWindow() {
          agFlag = false;

          agTimelineLine.css({
              top: agTimelineItem.first().find(agTimelinePoint).offset().top - agTimelineItem.first().offset().top,
              bottom: agTimeline.offset().top + agTimeline.outerHeight() - agTimelineItem.last().find(agTimelinePoint).offset().top
          });

          f !== agPosY && (f = agPosY, agHeight, fnUpdateProgress());
      }

      function fnUpdateProgress() {
          var agTop = agTimelineItem.last().find(agTimelinePoint).offset().top;

          i = agTop + agPosY - $(window).scrollTop();
          a = agTimelineLineProgress.offset().top + agPosY - $(window).scrollTop();
          n = agPosY - a + agOuterHeight / 2;
          i <= agPosY + agOuterHeight / 2 && (n = i - a);
          agTimelineLineProgress.css({ height: n + "px" });

          agTimelineItem.each(function () {
              var agTop = $(this).find(agTimelinePoint).offset().top;

              (agTop + agPosY - $(window).scrollTop()) < agPosY + .5 * agOuterHeight ? $(this).addClass('js-ag-active') : $(this).removeClass('js-ag-active');
          })
      }

      function fnUpdateFrame() {
          agFlag || requestAnimationFrame(fnUpdateWindow);
          agFlag = true;
      }


  });
})(jQuery);

//slider 
let slideIndex = [1, 1];
    let slideId = ["mySlides1"];
    showSlides(1, 0);
    showSlides(1, 1);
    
    function plusSlides(n, no) {
      showSlides(slideIndex[no] += n, no);
    }
    
    function showSlides(n, no) {
      let i;
      let x = document.getElementsByClassName(slideId[no]);
      if (n > x.length) {
        slideIndex[no] = 1;
      }
      if (n < 1) {
        slideIndex[no] = x.length;
      }
      for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
      }
      x[slideIndex[no] - 1].style.display = "block";
    }
