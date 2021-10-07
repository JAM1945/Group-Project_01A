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
});


 //WEATHER//
HEAD
  // works but does not have accurate time and zipcode//
  document.getElementById('weather').addEventListener('click',weather);
   function weather(){
    
  fetch('http://api.weatherstack.com/current?access_key=44e35a7ab430e8b30e70fb403ee03b91&query=Houston')
    .then((res) => res.json())
    .then(data => console.log(data));
   document.getElementById('output').textContent=data;
   }

 



myEvents = [
        {
          id: "required-id-1",
          name: "New Year",
          date: "Wed Jan 1 2020 00:00:00 GMT-0800 (Pacific Standard Time)",
          type: "holiday",
          everyYear: true
        },
        {
          id: "required-id-2",
          name: "Valentine's Day",
          date: "Fri Feb 14 2020 00:00:00 GMT-0800 (Pacific Standard Time)",
          type: "holiday",
          everyYear: true,
          color: "#222"
        },
        {
          id: "required-id-3",
          name: "Custom Date",
          badge: "08/03 - 08/05",
          date: ["August/03/2020", "August/05/2020"],
          description: "Testing",
          type: "event",
        },
        // more events here
      ]

      $('#evoCalendar').evoCalendar({
        calendarEvents: myEvents
      });
