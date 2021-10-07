
    var schoolZipEl = document.querySelector("#school_zip_code");
    var weekPickerEl = document.querySelector("#action");
    var releaseTime = document.querySelector("#school-release-time");
    var formSubmitButton = document.querySelector("#submit_button");
    var outputContainer = document.querySelector("#ulcontainer");

    // create array to hold pickup weeks and associated date for saving
    var pickupWeekArray = [];

    var formEl = document.querySelector("#school_pickup_form");
    
    var schoolPickupFormHandler = function (event) {
         event.preventDefault();
        var weekSelectEl = $('#school_week_number :selected').text();
        var mondaySelect = $('#Monday_Select :selected').text();
        var tuesdaySelect = $('#Tuesday_Select :selected').text();
        var wednesdaySelect = $('#Wednesday_Select :selected').text();
        var thursdaySelect = $('#Thursday_Select : selected').text();
        var fridaySelect = $('#Friday_Select :selected').text();
                                
    // defining variable that elements will attach to

    var createPickUpListItem = document.createElement("li");
    var createPickUpInfo = document.createElement("div");
  
    createPickUpInfo.innerHTML = "<h4 class= 'school_week'>" + weekSelectEl + "/<h4><table><tr><th>Monday</th><th>Tuesday</th><th>Wednesday</th><th>Thursday</th><th>Friday</th></tr><tr><td>" + mondaySelect + "</td><td>" + tuesdaySelect + "</td><td>" + wednesdaySelect + "</td><td>" + thursdaySelect + "</td><td>" + fridaySelect + "</td></tr></table>";

    createPickUpListItem.appendChild(createPickUpInfo);
    outputContainer.appendChild(createPickUpListItem);

      };

      formEl.addEventListener("submit", schoolPickupFormHandler);


  
    






