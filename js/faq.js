var faqQuestion = document.getElementsByClassName("faqQuestion");
var i;
for (i = 0; i < faqQuestion.length; i++) {
  faqQuestion[i].addEventListener("click", function () {
    this.classList.toggle("activefaq");

    var faqAnswer = this.nextElementSibling;
    if (faqAnswer.style.maxHeight) {
        faqAnswer.style.maxHeight = null;
    } else {
        faqAnswer.style.maxHeight = faqAnswer.scrollHeight + "px";
    }
  });
}
