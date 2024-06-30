function newTime() {
  // London
  let londonElement = document.querySelector("#london");
  if (londonElement) {
    let londonDate = londonElement.querySelector(".date");
    let londonTime = londonElement.querySelector(".time");
    let londonNewtime = moment().tz("Europe/London");

    londonDate.innerHTML = londonNewtime.format("MMMM	Do YYYY");
    londonTime.innerHTML = londonNewtime.format("h:mm:ss [<small>]A[</small>]");
  }

  // New York
  let New_YorkElement = document.querySelector("#new-york");
  if (New_YorkElement) {
    let newyorkDate = New_YorkElement.querySelector(".date");
    let newyorkTime = New_YorkElement.querySelector(".time");
    let newyorkNewtime = moment().tz("America/New_York");

    newyorkDate.innerHTML = newyorkNewtime.format("MMMM	Do YYYY");
    newyorkTime.innerHTML = newyorkNewtime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "currentlocation") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city">
    <div>
      <h2>${cityName}</h2>
      <div class="date">${cityTime.format("MMMM	Do YYYY")}</div>
    </div>
    <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format(
    "A"
  )}</small></div>
  </div>
  <a href="/">Back to Home Page</a>
  `;
}

newTime();
setInterval(newTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
