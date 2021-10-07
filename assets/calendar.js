$(document).ready(function () {
  // $('#calendar').evoCalendar({
  //   settingName: settingValue
  // })


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


  // // HOLIDAY CALENDAR//
  // // https://date.nager.at/Api Workssss //
  // fetch("https://date.nager.at/api/v3/publicholidays/2021/US")
  //   .then(response => response.json())
  //   .then(data => {
  //     console.log(data)
  //     var myEvents = []
  //     for (var i = 0; i < data.length; i++) {
  //       var obj = {
  //         id: "myEvents" + (i+1),
  //         name: data[i].name,
  //         date: data[i].date,
  //         type: "holiday",
  //         everyYear: true
  //       };
  //       myEvents.push(obj)
  //       console.log(myEvents)
  //     }

  //     // $("#evoCalendar").evoCalendar('addCalendarEvents', 
  //     //        myEvents
  //     // );
  //     // $('#evoCalendar').evoCalendar({
  //     //   calendarEvents: myEvents
  //     // });


  //   });

  //WEATHER//

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
})

