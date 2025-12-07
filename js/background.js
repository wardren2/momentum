// const images = [
//   "0.png",
//   "1.png",
//   "2.png",
//   "3.png"
// ]

// const chosenImage = images[Math.floor(Math.random() * images.length)];
// const bgImage = document.createElement("img");

// bgImage.src = `img/${chosenImage}`  //img/는 폴더명

// document.body.appendChild(bgImage);
// // document.body.prepend(bgImage);
// // append 뜻 : 덧붙이다, 첨부하다. (뒤에)
// // prepend : 앞에 붙이는 것

// console.log(chosenImage); // 2.png
// console.log(bgImage); // case1. <img> / case2. bgImage.src를 설정하면 -> <img src="img/2.png">
// console.log(bgImage.src); // http://127.0.0.1:5500/momentum/img/2.png
// console.log(bgImage.getAttribute("src"));

// /**
//  * Q. bgImage.src = img/${chosenImage} 인데,
//  *    왜 console.log(bgImage.src)를 찍으면 예로 들어서 img/2.png 라고 나오지 않고, 전체경로로 나오나?
//  * 
//  * A. 브라우저가 상대 경로를 자동으로 절대 URL로 변환하기 때문.
//  *    src 속성에 값을 설정할 때는 상대 경로를 쓸 수 있지만, 
//  *    src 속성을 읽을 때는 브라우저가 절대 URL로 변환해서 반환해줘.
//  *    상대 경로를 그대로 보고 싶으면 getAttribute()를 사용
//  */

const images = [
  "0.png",
  "1.png",
  "2.png",
  "3.png",
  "4.png",
  "5.png",
  "6.png",
  "7.png",
  "8.png",
  "9.png",
  "10.png",
  "11.png",
  "12.png",
  "13.png",
  "14.png",
  "15.png",
  "16.png",
  "17.png",
  "18.png",
  "19.png",
  "20.png",
  "21.png",
  "22.png",
  "23.png",
  "24.png",
  "25.png",
  "26.png"
]

const chosenImage = images[Math.floor(Math.random() * images.length)];
const bgImageSrc = `img/${chosenImage}`;
document.body.style.backgroundImage = `url(${bgImageSrc})`;
document.body.style.backgroundSize = "cover";
// document.body.style.backgroundImage = `url(img/${chosenImage})`;
// backgroundImage 속성은 url() 안에 이미지 경로를 넣어줘야 함
// 따라서 `url(${bgImageSrc})` 형태로 작성

