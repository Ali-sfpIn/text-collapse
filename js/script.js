"use strict";
// Selections/////////////////////////////////////////////////////////////////////
const container = document.querySelector(".container");
const defCollapsedTexts = document.querySelectorAll(".collapsed-text");
const defBtns = document.querySelectorAll(".collapse-btn");
// State Variables////////////////////////////////////////////////////////////////
let collapsedText, btn, btnNumber;
// Event handlers/////////////////////////////////////////////////////////////////
container.addEventListener("click", function (e) {
  btn = e.target.closest(".collapse-btn");
  if (!btn) return;
  btnNumber = btn.dataset.number;
  collapsedText = document.querySelector(`.collapse-text-${btnNumber}`);

  defCollapsedTexts.forEach((clText) => {
    !clText.classList.contains(`collapse-text-${btnNumber}`)
      ? clText.classList.remove("open")
      : "";
  });

  defBtns.forEach((btn) => {
    if (btn.dataset.number === btnNumber) return;
    btn.className = "collapse-btn chev-down-src";
  });

  // toggling the classes...
  collapsedText.classList.toggle("open");
  ["btn-active", "chev-down-src", "chev-up-src"].map((cl) =>
    btn.classList.toggle(cl)
  );
});
