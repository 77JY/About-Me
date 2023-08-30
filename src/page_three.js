const page2_clicked_img = document.querySelectorAll(".pics_img");

function Texts(text) {
  const page2_Text = {
    c: "열혈 C프로그래밍 책으로 입문, 42서울을 통해 C언어를 약 2달간 학습 주로 함수의 구현을 배우기 시작한 단계",
    js: "생활 코딩을 통해 js의 기초를 배우기 시작, 추후 있을 db사용하기 위해 mysql을 같이 학습했으며 추가학습을 위해 노마드코더의 클론코딩을 학습하기 시작",
    python:
      "미래에 있을 코딩테스트를 위한 파이썬의 문법과 함수공부 및 웹스크래핑을 위해서 학습",
    nodejs:
      "웹에서 백엔드 처리와 db연결을 위해 웹에서 쓰이는 프레임워크인 nodejs, express를 사용하며 배우고 + mongoDB,mysql 을 같이 공부하기 시작",
  };
  return page2_Text[text];
}

function Typing(text, Text_Area) {
  let textCount = 0;
  Text_Area.innerHTML = "";
  for (i = 0; i < text.length; i++) {
    setTimeout(() => {
      Text_Area.innerHTML += text[textCount];
      textCount += 1;
    }, 25 * i);
  }
}

page2_clicked_img.forEach(function (e) {
  e.addEventListener("click", function () {
    const object = e.value;
    const Text_Area = document.querySelector("." + object);
    const innerTexts = Texts(object);
    if (Text_Area.innerHTML == "" || Text_Area.innerHTML == innerTexts) {
      Typing(Texts(object), Text_Area);
    }
  });
});
