
// https://api.quotable.io/random 
// api를 이용해서 fetch 함수로 명언을 가져오는것도 좋을 것 같군요!

/**
 * * Math.random() : 0이상 1미만의 값을 랜덤하게 노출해주는 함수.
  * Math.round() : 반올림해주는 함수.따라서 소수점 뒤 숫자에 따라 값이 바뀔 수 있음
  - Math.round(1.01) => 값 : 1
  - Math.round(1.8) => 값 : 2
  * Math.ceil() : 올림해주는 함수. 소수점 뒤 숫자가 0인 경우를 제외하고 어떤 숫자가 와도 정수의 수를 올려서 반환한다. 따라서 소수점 뒤 숫자에 따라 값이 바뀌지 않음
  - Math.ceil(1.0) => 값 : 1
  - Math.ceil(1.1) => 값 : 2
  - Math.ceil(1.8) => 값 : 2
  * Math.floor() : 소수점 뒤 숫자가 어떤 숫자가 와도 정수의 수를 그대로 지켜주는 함수. 따라서 소수점 뒤 숫자에 따라 값이 바뀌지 않음
  - Math.floor(1.0) => 값 : 1
  - Math.floor(1.99999999999) => 값 : 1

  Math.floor(Math.random() * 10); : 0부터 9까지의 무작위의 수
 */

/**
 * Math.floor() 와 Math.trunc()의 차이?
 * 
 * Math.floor() :
 * 항상 - 방향으로 내림한다.
 * Math.floor(3.9) → 3
 * Math.floor(-3.1) → -4 (더 작은 정수로 내려감)
 * 
 * Math.trunc() : 
 * 그냥 소수점 이하를 잘라버림.
 * 양수든 음수든 “정수 부분만 남긴다.”
 * Math.trunc(3.9) → 3
 * Math.trunc(-3.1) → -3 (소수점만 제거)
 * 
 * 한 줄 정리:
 * floor() = 아래로 내려가기 (−∞ 방향)
 * trunc() = 소수점 절단(0 방향)
 */

const quotes = [
  {
    quote: "The bird fights its way out of the egg. The egg is the world. Who would be born must first destroy a world. The bird flies to God. That God's name is Abraxas.",
    author: "Hermann Hesse"
  },
  {
    quote: "I wanted only to try to live in accord with the promptings which came from my true self. Why was that so very difficult?",
    author: "Hermann Hesse"
  },
  {
    quote: "Love must not entreat or demand. Love must have the strength to become certain within itself. Then it ceases merely to be attracted and begins to attract.",
    author: "Hermann Hesse"
  },
  {
    quote: "There is no reality except the one contained within us. That is why so many people live an unreal life. They take images outside them for reality and never allow the world within to assert itself.",
    author: "Hermann Hesse"
  },
  {
    quote: "Each man's life represents a road toward himself, an attempt at such a road, the intimation of a path.",
    author: "Hermann Hesse"
  },
  {
    quote: "If you hate a person, you hate something in him that is part of yourself. What isn't part of ourselves doesn't disturb us.",
    author: "Hermann Hesse"
  },
  {
    quote: "We can understand one another; but each of us is able to interpret himself to himself alone.",
    author: "Hermann Hesse"
  },
  {
    quote: "One never reaches home. But where paths that have an affinity for each other intersect, the whole world looks like home, for a time.",
    author: "Hermann Hesse"
  },
  {
    quote: "You must find your dream, then the way becomes easy. But there is no dream that lasts forever, each dream is followed by another, and one should not cling to any particular one.",
    author: "Hermann Hesse"
  },
  {
    quote: "It is good to know that within us there is someone who knows everything, wills everything, does everything better than we can ourselves.",
    author: "Hermann Hesse"
  },
  {
    quote: 'I never dreamed about success, I worked for it',
    author: 'Estee Lauder'
  },
  {
    quote: 'Do not try to be original, just try to be good.',
    author: 'Paul Rand'
  },
  {
    quote: 'Do not be afraid to give up the good to go for the great',
    author: 'John D. Rockefeller'
  },
  {
    quote: 'If you cannot fly then run. If you cannot run, then walk. And if you cannot walk, then crawl, but whatever you do, you have to keep moving forward.',
    author: 'Martin Luther King Jr.'
  },
  {
    quote: 'Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.',
    author: 'Thomas Edison'
  },
  {
    quote: 'The fastest way to change yourself is to hang out with people who are already the way you want to be',
    author: 'Reid Hoffman'
  },
  {
    quote: 'Money is like gasoline during a road trip. You do not want to run out of gas on your trip, but you are not doing a tour of gas stations',
    author: 'Tim O Reilly'
  },
  {
    quote: 'Some people dream of success, while other people get up every morning and make it happen',
    author: 'Wayne Huizenga'
  },
  {
    quote: 'The only thing worse than starting something and falling.. is not starting something',
    author: 'SEth Godin'
  },
  {
    quote: 'If you really want to do something, you will find a way. If you do not, you will find an excuse.',
    author: 'Jim Rohn'
  },

];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

console.log(quotes[Math.floor(Math.random() * quotes.length)]); // 인용구가 10개일때는 *10해도 되지만, quotes를 일일이 셀 수 없으므로 quotes라는 Array의 길이(length)를 구해서 곱하면 된다.

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];
// todayQuote = quotes[0~n-1번째 중 정수 하나 나옴]

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;