function date() {
    setInterval(function() {
        var today=new Date(),
        h=today.getHours(),
        m=today.getMinutes(),
        s=today.getSeconds();
        let time = "Bangladesh Time = " + h + ":" + m + ":" + s;
        document.getElementById("text").innerHTML =time;

    },1000);
}

// function date() {
//     setInterval(function() {
//         document.getElementById("text").innerHTML = new Date().toString();

//     },1000);
// }