// import moment here; use this package in each function
const moment= require("moment")
const today = () => {
  //write code for dates.today
 return moment(new Date()).format("dddd")
}


//Return the current date in the format: May 29, 2019
// Hint: moment().format(?)
const calendar = () => {
  console.log(moment({Y   :2019, M:   "May",  d:  29}).format('MM-DD-YYYY'))
}

const currentTime = () => {
  return moment().format(" h:mm:ss");
  
}

module.exports = {
  today,
  calendar,
  currentTime
}