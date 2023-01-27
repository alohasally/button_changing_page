window.onload = function () {
  const prevBtn = document.querySelector(".prevBtn");
  const nextBtn = document.querySelector(".nextBtn");
  let h1 = document.getElementsByTagName("h1")[0];
  let pageNum = 0;
  let body = document.getElementsByTagName("body")[0];
  const img = document.querySelectorAll("image");
  const totalNum = img.length;

  prevBtn.addEventListener("click", function () {
    if (pageNum > 0) pageNum--;
    h1.innerHTML = `now ${pageNum}page`;
    changeBgImg();
  });

  nextBtn.addEventListener("click", function () {
    if (pageNum < totalNum) pageNum++;
    h1.innerHTML = `now ${pageNum}page`;
    changeBgImg();
  });

  function changeBgImg() {
    body.style.background = img[pageNum];
  }

  //처음 실행
  changeBgImg();
};
