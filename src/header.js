const header_clicks = document.querySelectorAll(".move");

function PageMoveHandler(page) {
  let size = document.documentElement.clientHeight;
  size = size > 650 ? size : 650;
  console.log(size);
  window.scrollTo(0, size * page);
}

header_clicks.forEach(function (event) {
  event.addEventListener("click", function () {
    PageMoveHandler(event.value);
  });
});
