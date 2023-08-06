"use strict";

{
  const btn = document.querySelector("#btn");
  const result = document.querySelector("#result");

  btn.addEventListener("click", () => {
    // const results=['大吉','中吉','小吉','凶'];
    const n = Math.random();

    if (n < 0.4) {
      result.textContent = "大吉";
      /*40%*/
    } else if (n < 0.7) {
      result.textContent = "中吉"; /*30%*/
    } else if (n < 0.85) {
      result.textContent = "小吉"; /*15%*/
    } else {
      result.textContent = "凶"; /*15%*/
    }

    const box = document.querySelector("#box").animate(
      [
        // keyframes
        { transform: "translateY(0px)" },
        { transform: "translateY(-30px)" },
        { transform: "translateY(0px)" },
      ],
      {
        // timing options
        duration: 650,
        iterations: 2,
      }
    );

    // おみくじ結果の文字　フェードイン
    const resultAnime = result.animate([{ opacity: "0" }, { opacity: "1" }], {
      duration: 3000,
      delay: 1300,
    });
  });
}
