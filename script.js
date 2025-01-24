document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.getElementById('menu-icon');
    const menuBox = document.getElementById('menu-box');
    const closeMenu = document.getElementById('close-menu');

    menuIcon.addEventListener('click', () => {
        menuBox.classList.add('open');
    });

    closeMenu.addEventListener('click', () => {
        menuBox.classList.remove('open');
    });
});





//vedio
let currentSlideIndex = 0;
let slides = document.querySelectorAll('.slide');
let totalSlides = slides.length;

// Function to show the slide
function showSlide(index) {
    // Reset all slides to hidden
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
    });

    // Show the current slide
    slides[index].classList.add('active');
}

// Function to change slides automatically
function changeSlide() {
    currentSlideIndex += 1;
    if (currentSlideIndex >= totalSlides) {
        currentSlideIndex = 0; // Reset to the first slide after the last slide
    }
    showSlide(currentSlideIndex);
}

// Initialize the first slide
showSlide(currentSlideIndex);

// Change slide every 8 seconds
setInterval(changeSlide, 5000); // 8000ms = 8 seconds


//Review


const reviews = [
    {
      text: "St Xavier's Bangalore is a great place to be. Being a part of this institution is an honor in itself. A plethora of opportunities come your way for you to grab on, help find the real you. So, it's a promise of great experiences with an excellent faculty team and many events for you to take part in. While you are here, build networks, take chances and compete as if your life is at stake and you will be rewarded with the best!",
      name: "AISHWARYA AGRWAL",
      photo: "assets/images/r1.jpg"
    },
    {
      text: "It is a matter of pride for me to say that I studied at St.Xavier's College. Because College has helped me a lot to develop my career And support me to understood what my skills and abilities are. The faculty's support is invaluable, they helped me to enrich my knowledge and guide me to achieve my dreams. I would also like to mention our Placement Officer's continuous support as She helped us to achieve our career goals and motivated us like no one else. I would like to express my sincere gratitude to the college authority and faculty, and especially our Placement Officer who supported me a lot, for helping to make my dream of an MBA come true In short, the 2 years of MBA life will never be forgotten. It really changed my career as well as my life too!",
      name: "APARNA RAJU",
      photo: "assets/images/r2.jpg"
    },
    {
      text: "As a student of St Xavier's I would like to appreciate this college for its facilities like Library, clubs, Extra classes like french classes, Advanced Excel, SAP, etc. Though, here I go through different cultures because I have teachers and friends who belong to different regions of India. The infrastructure of my college is very adequate and adjustable. The way of teaching is very attractive (Smart classes, workshops, seminars). No doubt there are ups and downs in every student life, but in my college, I even feel happy during my downs because of my friends & the cooperative environment of the College. And if I come to placements, this college provides a pathway for each & every student to meet their goals. Moreover, we have so many extra curriculum activities that help me to increase my skills. Actually, St Xavier's indulges their students to go out of the college and participate in fest and other competition that helps us to gain more confidence. In nutshell I wanna say please come & join St Xavier's to live a better life. Hence, I wanna conclude that my 2 years of experience in this college is much better than what I expected. Thanks st. xavier's to give me chance to become your part",
      name: "SHAKUN KAUSHAL",
      photo: "assets/images/r5.png"
    },
    {
        text: " 2 Year MBA at St Xavier's College had its own ups and downs but it has really helped me to come out of my shell truly and give me the opportunity to express my talents and help me realize my potential. I will be forever great full to all the staff members who taught me My sincere appreciation & gratitude to the Training & Placement Cell and all staff of this Institute for their efforts in imparting all the required skills and knowledge. I am very grateful to them for effectively and sincerely helping me to grab the first-ever opportunity that came into my life.",
        name: "ANAKHA TILAKARAJ",
        photo: "assets/images/r4.jpg"
      },
      {
        text: " It gives me pleasure to say with pride that I have completed my post-graduation diploma in data science and HR from St Xavier's college Bangalore. The relationship between faculty and students is very cordial, which gave me an opportunity to excel in my area of interest. Even the guest lecturer is also very good they also helped me a lot to excel in my career. The two years spent here were splendid and have helped me a lot to grow better professionally as well as personally. I would like to thanks St. Xavier's college and all the faculty members and staff for making me a Better Person",
        name: "DEBADRI GHOSH",
        photo: "assets/images/r5.jpg"
      },
      {
        text: " I thank our college for providing this placement cell to us. I had a good experience with placement cell staff and they were good to me also. She uses to help us with interviews. From college, there were some ups and downs and that helped me personally a lot. These 2 years teach me good things and gave Chance to follow some best staff that I have ever seen",
        name: "ASHISH VARGHESE",
        photo: "assets/images/r8.jpg"
      },
      {
        text: " My 2 years of experience at Lorvens St. Xaviers College have enriched my life in many ways. The college has helped me to enhance my skills and taught me valuable knowledge and concepts which helped me discover myself and will eventually help me to become more successful in life. I want to thank the faculty department of SXB for their all-time support that helped us in this journey I would also like to thank our placement officer for her unmatched support and for helping us endeavor our career goals Overall it was a blissful experience at Lorvens St.Xaviers College.",
        name: "KARTIK RAJESH",
        photo: "assets/images/r6.jpg"
      },
      {
        text: " My 2 years of experience at Lorvens St. Xaviers College have enriched my life in many ways. The college has helped me to enhbarich my skills and taught me valuable knowledge and concepts which helped me discover myself and will eventually help me to become more successful in life. I want to thank the faculty department of SXB for their all-time support that helped us in this youmiry I would also like to thank our placement officer for her unmatched support and for helping us endeavor our career goals Overall it was a blissful experience at Lorvens St. Xaviers College.",
        name: "FAYIS K T",
        photo: "assets/images/r7.jpg"
      },


  ];
  
  let currentReviewIndex = 0;
  
  function showReview(index) {
    const reviewText = document.querySelector('.review-text');
    const studentName = document.querySelector('.student-name');
    const studentPhoto = document.querySelector('.student-photo');
  
    reviewText.textContent = reviews[index].text;
    studentName.textContent = reviews[index].name;
    studentPhoto.src = reviews[index].photo;
  }
  
  document.querySelector('.arrow.left').addEventListener('click', () => {
    currentReviewIndex = (currentReviewIndex === 0) ? reviews.length - 1 : currentReviewIndex - 1;
    showReview(currentReviewIndex);
  });
  
  document.querySelector('.arrow.right').addEventListener('click', () => {
    currentReviewIndex = (currentReviewIndex === reviews.length - 1) ? 0 : currentReviewIndex + 1;
    showReview(currentReviewIndex);
  });
  
  // Initialize the first review
  showReview(currentReviewIndex);
  

 