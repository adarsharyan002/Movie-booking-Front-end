// const apiUrl = " https://serverwebmonth.herokuapp.com";
const apiUrl = "http://localhost:8000"

var key = localStorage.getItem("email");
let email = key;

window.addEventListener("load", () => {
  fetch(`${apiUrl}/movie/info`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email }),
  })
    .then((res) => res.json())
    .then((data) => {
      document.getElementById("name").innerHTML =`Movie Name:${data[0].moviename}` ;
      document.getElementById("user").innerHTML =`User:${data[0].email}`;

      document.getElementById("date").innerHTML =`Date:${data[0].date}` ;
    })
    .catch((err) => {
      alert("Error Fetching data");
      console.log(err);
    });
});
