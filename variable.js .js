// Using let 
let name = "Tyler";
let age = "19";
let isStudent = true;



document.getElementById("demo1").innerHTML =
"Name: " + name + "<br>Age: " + age + "<br>Student: " + isStudent + "<br>My vacation was good! I spent time with family and friends! It was just too short. " ;


var city = "Brooklyn";  // Function-scoped
let state = "NY";       // Block-scoped
const country = "USA";  // Cannot be reassigned


document.getElementById("demo2").innerHTML =
  "Location: " + city + ", " + state + ", " + country;

