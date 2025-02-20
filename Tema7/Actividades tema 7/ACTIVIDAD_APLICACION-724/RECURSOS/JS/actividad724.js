document.addEventListener("DOMContentLoaded", () => {
  window.removeVowel = function (vowel) {
    const textElement = document.getElementById("text");
    textElement.innerText = textElement.innerText.replace(
      new RegExp(vowel, "gi"),
      ""
    );
  };
});
