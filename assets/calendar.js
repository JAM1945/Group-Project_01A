$(document).ready(function () {
  // $('#calendar').evoCalendar({
  //   settingName: settingValue
  // })

  myEvents = [
    {
      id: "required-id-1",
      name: "New Year",
      date: "Wed Jan 01 2020 00:00:00 GMT-0800 (Pacific Standard Time)",
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

  var evoCalObj = $('#evoCalendar').evoCalendar({
    calendarEvents: myEvents
  });
  console.log(evoCalObj)


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

})
