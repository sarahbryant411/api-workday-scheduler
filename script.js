// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var currentDayEl = document.querySelector("#currentDay");
var currentDay = new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
currentDayEl.textContent = currentDay
var currentHour = new Date().getHours()


var rowContainer = document.querySelector(".container-lg")
var rowTemplate = document.querySelector("#row-template")
var hoursArray = [9, 10, 11, 12, 13, 14, 15, 16, 17]
for (let i = 0; i < hoursArray.length; i++) {
  const thisHour = hoursArray[i];
  var rowClone = rowTemplate.cloneNode(true).content;
  rowClone.querySelector(".hour").textContent = getTimeStamp(thisHour)
  rowClone.querySelector("textarea").classList.add(getClass(thisHour))
  rowClone.querySelector("button").addEventListener("click", () => {saveText(i)}
  )
  rowContainer.append(rowClone)
}

const textAreas = document.querySelectorAll(".description")


function getTimeStamp(thisHour) {
  switch (thisHour) {
    case 9:
      return "9AM";
    case 10:
      return "10AM";
    case 11:
      return "11AM";
    case 12:
      return "12PM";
    case 13:
      return "1PM";
    case 14:
      return "2PM";
    case 15:
      return "3PM";
    case 16:
      return "4PM";
    case 17:
      return "5PM"
  }
}

function getClass(thisHour) {
  if (currentHour < thisHour) {
    return "past"
  } else if (currentHour === thisHour) {
    return "present"
  } else return "future"
}



function saveText(i) {
  console.log(textAreas[i].value)
}
// November 16th, 2023
// TODO: Add a listener for click events on the save button. This code should
// use the id in the containing time-block as a key to save the user input in
// local storage. HINT: What does `this` reference in the click listener
// function? How can DOM traversal be used to get the "hour-x" id of the
// time-block containing the button that was clicked? How might the id be
// useful when saving the description in local storage?
//
// TODO: Add code to apply the past, present, or future class to each time
// block by comparing the id to the current hour. HINTS: How can the id
// attribute of each time-block be used to conditionally add or remove the
// past, present, and future classes? How can Day.js be used to get the
// current hour in 24-hour time?
//
// TODO: Add code to get any user input that was saved in localStorage and set
// the values of the corresponding textarea elements. HINT: How can the id
// attribute of each time-block be used to do this?
//
// TODO: Add code to display the current date in the header of the page.
