$(document).ready(function () {
  var myEvents = []
  $('#evoCalendar').evoCalendar({
    calendarEvents: myEvents,
    language: 'en',
    firstDayOfWeek: 1,
    todayHighlight: true
  });

  // HOLIDAY CALENDAR API//
  fetch("https://date.nager.at/api/v3/publicholidays/2021/US")
    .then(response => response.json())
    .then(data => {
      console.log('data', data)
      for (var i = 0; i < data.length; i++) {
        var date = data[i].date
        var dateFormatted = moment(date).format('MMM/DD/YYYY')
        console.log('dateFormatted', dateFormatted)
        var obj = {
          id: "myEvents" + (i + 1),
          name: data[i].name,
          date: dateFormatted,
          type: "holiday",
          everyYear: true
        };
        myEvents.push(obj)
      }
      console.log('myEvents', myEvents)

    })
  console.log('myEventsOutsideFetch', JSON.stringify(myEvents))




//  WEATHER//

// works but does not have accurate time and zipcode//
fetch('http://api.weatherstack.com/current?access_key=44e35a7ab430e8b30e70fb403ee03b91&query=Houston')
  .then((res) => res.json())
  .then(data2 => {
    console.log('data2', data2)
    var description = data2.current.weather_descriptions[0]
    var today = moment().format('MMM/DD/YYYY')
    var weather = {
      id: "myEventsWeather",
      name: "Todays weather is",
      date: today,
      type: "weather",
      description: description,
      everyYear: false
    }
    
// if (description === Sunny) {
//   description.textcontent = description + "Sun is out you can walk/ride your bike"
// }else if ( description === Cloudy) {
// description.textcontent = description + "Chances of rain! Might need a ride/umbrella"
// } else if (description === Rain) {
//   description.textcontent = description + "ALERT: Pick up required!!!"
// }


    console.log('test', myEvents.push(weather))
    console.log('weather',weather)
  })

});



