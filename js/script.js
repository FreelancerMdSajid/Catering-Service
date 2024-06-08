// FAQ
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

// Show Time
function timeShow() {
  setInterval(function () {
    var today = new Date(),
      h = today.getHours(),
      m = today.getMinutes(),
      s = today.getSeconds();
    let time = "Current Time = " + h + ":" + m + ":" + s;
    document.getElementById("timeShow").innerHTML = time;
  }, 1000);
}

// function date() {
//     setInterval(function() {
//         document.getElementById("text").innerHTML = new Date().toString();

//     },1000);
// }

// Contact Form  Submit Alert
function alertMassage() {
  confirm("You Have Submitted Successfully");
}
