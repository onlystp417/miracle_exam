let list = [
  {
    imgUrl: "https://fakeimg.pl/350x400/?text=World&font=lobster",
    name: "鬥魚",
    type: "fish"
  },
  {
    imgUrl: "https://fakeimg.pl/350x400/?text=World&font=lobster",
    name: "三花",
    type: "cat"
  },
  {
    imgUrl: "https://fakeimg.pl/350x400/?text=World&font=lobster",
    name: "鯊魚",
    type: "fish"
  },
  {
    imgUrl: "https://fakeimg.pl/350x400/?text=World&font=lobster",
    name: "老鷹",
    type: "bird"
  },
  {
    imgUrl: "https://fakeimg.pl/350x400/?text=World&font=lobster",
    name: "美短",
    type: "cat"
  },
  {
    imgUrl: "https://fakeimg.pl/350x400/?text=World&font=lobster",
    name: "鯉魚",
    type: "fish"
  },
  {
    imgUrl: "https://fakeimg.pl/350x400/?text=World&font=lobster",
    name: "正宗台灣土狗",
    type: "dog"
  },
  {
    imgUrl: "https://fakeimg.pl/350x400/?text=World&font=lobster",
    name: "米克斯",
    type: "dog"
  },
  {
    imgUrl: "https://fakeimg.pl/350x400/?text=World&font=lobster",
    name: "拉布拉多",
    type: "dog"
  },
  {
    imgUrl: "https://fakeimg.pl/350x400/?text=World&font=lobster",
    name: "虎斑",
    type: "cat"
  },
  {
    imgUrl: "https://fakeimg.pl/350x400/?text=World&font=lobster",
    name: "鯨魚",
    type: "fish"
  },
  {
    imgUrl: "https://fakeimg.pl/350x400/?text=World&font=lobster",
    name: "金魚",
    type: "fish"
  },
  {
    imgUrl: "https://fakeimg.pl/350x400/?text=World&font=lobster",
    name: "波斯",
    type: "cat"
  },
  {
    imgUrl: "https://fakeimg.pl/350x400/?text=World&font=lobster",
    name: "柴犬",
    type: "dog"
  },
  {
    imgUrl: "https://fakeimg.pl/350x400/?text=World&font=lobster",
    name: "文鳥",
    type: "bird"
  },
  {
    imgUrl: "https://fakeimg.pl/350x400/?text=World&font=lobster",
    name: "旗魚",
    type: "fish"
  },
  {
    imgUrl: "https://fakeimg.pl/350x400/?text=World&font=lobster",
    name: "烏鴉",
    type: "bird"
  },
  {
    imgUrl: "https://fakeimg.pl/350x400/?text=World&font=lobster",
    name: "賓士",
    type: "cat"
  },
  {
    imgUrl: "https://fakeimg.pl/350x400/?text=World&font=lobster",
    name: "貴賓",
    type: "dog"
  },
  {
    imgUrl: "https://fakeimg.pl/350x400/?text=World&font=lobster",
    name: "小丑魚",
    type: "fish"
  },
  {
    imgUrl: "https://fakeimg.pl/350x400/?text=World&font=lobster",
    name: "麻雀",
    type: "bird"
  }
];

renderList(list);

function renderList(contentArray) {
  const contentList = document.querySelector(".content-list");
  listElement = contentArray.map(item => {
    return `
      <li class="content-item" data-name="${item.name}">
        <img src="${item.imgUrl}">
        <div>名稱：${item.name}</div>
        <div>分類：${item.type}</div>
      </li>
    `
  });
  contentList.innerHTML = listElement.join("");
}

// carousle

const prevButton = document.getElementById("carousel-button-prev");
const nextButton = document.getElementById("carousel-button-next");
const slideNav = document.getElementById("carousel-slide-nav");
const slides = document.querySelectorAll(".carousel-item");
const totalSlides = slides.length;
let slidePos = 0;
let navigation = slideNav.childNodes;

slideNavigation();

function displaySlide(element, className) {
  for (let item = 0; item < totalSlides; item++) {
    item === slidePos
      ? element[item].classList.add(className)
      : element[item].classList.remove(className);
  }
}

function nextSlide() {
  if (slidePos === totalSlides - 1) {
    slidePos = 0;
  } else {
    slidePos++;
  }
  displaySlide(slides, "carousel-item-visible");
  displaySlide(navigation, "nav-current");
}

function prevSlide() {
  if (slidePos === 0) {
    slidePos = totalSlides - 1;
  } else {
    slidePos--;
  }
  displaySlide(slides, "carousel-item-visible");
  displaySlide(navigation, "nav-current");
}

function slideNavigation() {
  for (let slide = 0; slide < totalSlides; slide++) {
    let span = document.createElement("span");
    if (slide === slidePos) {
      span.classList.add("nav-current");
    }
    slideNav.append(span);
    span.addEventListener("click", function () {
      slidePos = slide;
      displaySlide(slides, "carousel-item-visible");
      displaySlide(navigation, "nav-current");
    });
  }
}

prevButton.addEventListener("click", prevSlide);
nextButton.addEventListener("click", nextSlide);

setInterval(nextSlide, 3000);

// countDown

countDown();

function countDown() {
  const countdown = document.querySelector(".countdown");
  let totalTime = 86400;

  const clockID = setInterval(() => {
    totalTime--;
    const hour = Math.floor(totalTime / 3600);
    const minutes = Math.floor(totalTime % 3600 / 60);
    const seconds =
      totalTime % 60 >= 10
        ? totalTime % 60
        : `0${totalTime % 60} `;
    countdown.textContent = `${hour}:${minutes}:${seconds}`;
    if (!totalTime) {
      clearInterval(clockID);
    }
  }, 1000);
}

// search bar
const searchTerm = document.querySelector(".searchTerm");
const searchButton = document.querySelector(".searchButton");

searchTerm.addEventListener("input", search);
searchButton.addEventListener("click", search)

function search() {
  const name = searchTerm.value;
  const contentArray = list.filter(item => {
    return item.name.includes(name) || item.type.includes(name);
  });
  renderList(contentArray);
  if(name === "") {
    renderList(list);
  }
}

// type sort
const sortButtons = document.querySelectorAll('.sort-button');
sortButtons.forEach(button => button.addEventListener("click", sortType));

function sortType(e) {
  const type = e.target.dataset.type;
  const contentArray = list.filter(item => item.type === type);
  if(type === "all") {
    renderList(list);
    return;
  }
  renderList(contentArray);
}

// popover
const listItems = document.querySelectorAll(".content-item");
listItems.forEach(item => item.addEventListener("click", showItem));

function showItem(e) {
  // const container = document.querySelector(".container");
  const modal = document.querySelector(".modal-base");

  const currentItem = list.find(item => item.name === e.currentTarget.dataset.name)
  const imgUrl = currentItem.imgUrl;
  const name = currentItem.name;
  const type = currentItem.type;
  
  modal.innerHTML = `
    <div class="modal">
      <img src="${imgUrl}" alt="">
      <div>名稱:${name}</div>
      <div>分類:${type}</div>
      <button class="ok-button">OK</button>
    </div>
  `
  modal.classList.remove("d-none");

  const okButton = document.querySelector(".ok-button");
  okButton.addEventListener("click", closeModal);
}


function closeModal() {
  const modal = document.querySelector(".modal-base");
  modal.classList.add("d-none");
}

// scrool top
const scollTopButton = document.querySelector(".scroll-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 300) {
    scollTopButton.style.display = "block";
  } else {
    scollTopButton.style.display = "none";
  }
  scollTopButton.addEventListener("click", topFunction);
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  if(window.scrollY != 0) {
    setTimeout(function() {
      window.scrollTo(0,window.scrollY-30);
      topFunction();
    }, 5);
  }
}
