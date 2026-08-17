 let name = localStorage.getItem("userName");

if (!name) {
    name = prompt("Please enter your name:");

    if (name) {
        localStorage.setItem("userName", name);
    }
}

document.getElementById("userName").innerText = name || "Guest";


        function goCart() {

    window.location.href = "cart.html";
        }


        function showDateTime() {

    let now = new Date();

    let date = now.toLocaleDateString("en-US", { weekday: "long", month: "long",day: "numeric", year: "numeric" });

    let time = now.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit", second: "2-digit"});

    document.getElementById("currentDate").innerText =  date;

    document.getElementById("currentTime").innerText =  time;
}

showDateTime();

setInterval(showDateTime, 1000);