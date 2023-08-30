const motive_box = document.querySelectorAll(".chats");

function motive_textbox(e) {
  const texts = {
    t0: "즐겁지 않았던 학업, 배움이 없던 일, 그저 반복되며 지루한 지쳐가는 일상의 두려움",
    t1: "어떤 것에 대한 두려움이었는가",
    t2: "적어도 60살까지 일을 하게 될 텐데 도전하지 않고 쉬운 길을 고른 내가 후회할 것이라는 확신에",
  };
  return texts[e];
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

motive_box.forEach(function (e) {
  e.addEventListener("click", function () {
    const t_var = $(e).attr("value");
    const texts = motive_textbox(t_var);
    if (e.innerHTML == "" || e.innerHTML == texts) {
      Typing(texts, e);
    }
  });
});
