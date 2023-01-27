window.onload = function () {
  const prevBtn = document.querySelector(".prevBtn");
  const nextBtn = document.querySelector(".nextBtn");
  let h1 = document.getElementsByTagName("h1")[0];
  let pageNum = 1;
  let body = document.getElementsByTagName("body")[0];
  const img = document.querySelectorAll("img");
  const section = document.getElementsByTagName("section");
  const totalNum = section.length;

  prevBtn.addEventListener("click", function () {
    if (pageNum > 1) {
      pageNum--;
    } else {
      pageNum = totalNum;
    }
    changePage();
  });

  nextBtn.addEventListener("click", function () {
    if (pageNum < totalNum) {
      pageNum++;
    } else {
      pageNum = 1;
    }
    changePage();
  });

  function changePage() {
    h1.innerHTML = `now ${pageNum}page`;
    body.style.background = img[pageNum];
    //   window.scrollTo(0, section[pageNum].offsetTop);
    window.scrollTo({
      top: section[pageNum - 1].offsetTop,
      behavior: "smooth",
    });
  }

  // 처음 실행
  changeBgImg();
};
