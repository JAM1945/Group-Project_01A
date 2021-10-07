$(document).ready(function () {
  var myEvents = []
  $('#evoCalendar').evoCalendar({
    calendarEvents: myEvents
  });

  // HOLIDAY CALENDAR//
  // https://date.nager.at/Api Workssss //
  fetch("https://date.nager.at/api/v3/publicholidays/2021/US")
    .then(response => response.json())
    .then(data => {
      console.log('data', data)
      for (var i = 0; i < data.length; i++) {
        var obj = {
          id: "myEvents" + (i + 1),
          name: data[i].name,
          date: data[i].date,
          type: "holiday",
          everyYear: true
        };
        myEvents.push(obj)
      }
      console.log('myEvents', myEvents)

    })
  $('#evoCalendar').evoCalendar({
    format: 'mm/dd/yyyy',
    titleFormat: 'MM yyyy',
    eventHeaderFormat: 'MM d, yyyy'
  });

  $('#evoCalendar').evoCalendar({
    language: 'en',
    dates: {
      en: {
        days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
        months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        noEventForToday: "No event for today.. so take a rest! :)",
        noEventForThisDay: "No event for this day.. so take a rest! :)"
      },
    }

  });

  $('#evoCalendar').evoCalendar({
    firstDayOfWeek: 1 // Monday
  });

  $('#evoCalendar').evoCalendar({
    todayHighlight: true
  });


  //   });

  //WEATHER//

  // // works but does not have accurate time and zipcode//
  // fetch('http://api.weatherstack.com/current?access_key=44e35a7ab430e8b30e70fb403ee03b91&query=Houston')
  //   .then((res) => res.json())
  //   .then(res => console.log('res', res))
 console.log('myEventsOutsideFetch', JSON.stringify(myEvents))
});
