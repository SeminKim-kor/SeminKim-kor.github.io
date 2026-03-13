alert("Welcome to our store!");
let name = prompt("Enter your name:");
let item = prompt("Enter the item requested:");
let quantity = prompt("Enter the number of items:");
let now = new Date();
let hour = now.getHours();
let greeting = "";
if (hour < 12) {
    greeting = "Good Morning";
} else if (hour < 18) {
    greeting = "Good Afternoon";
} else {
    greeting = "Good Evening";
}
let arrival = new Date();
arrival.setDate(arrival.getDate() + 7);
document.getElementById("output").innerHTML =
    greeting + " " + name + ", Thank you for Ordering!<br>" +
    "Item Requested: " + item + "<br>" +
    "Number of Items: " + quantity + "<br>" +
    "Arrival Date: " + arrival.toDateString();