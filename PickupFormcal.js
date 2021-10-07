3
    var schoolZipEl = document.querySelector("#zipCode");
    var formSubmitButton = document.querySelector("#submit_button");
    var dataSetHolder = document.querySelector("#datasetHolder");

    // create array to hold pickup weeks and associated date for saving

    var formEl = document.querySelector("#school_pickup_form");
    
    var schoolPickupFormHandler = function (event) {
            event.preventDefault();
            var pickupDate = document.querySelector("#pickupDate");
            var pickupMethod = $('#Pickup_Selector :selected').text();
            var releaseTime = document.querySelector("#pickupTime").value;
                                
    // defining variable that elements will attach to

    var createPickUpListItem = document.createElement("li");
    var createPickUpInfo = document.createElement("div");
  
    createPickUpInfo.innerHTML = "<h6 class= 'pickup_Method'>"+pickupMethod+"</h6><h6 class= 'pickupT'>"+releaseTime+"</h6>";

    createPickUpListItem.appendChild(createPickUpInfo);
    dataSetHolder.appendChild(createPickUpListItem);

      };

      formEl.addEventListener("submit", schoolPickupFormHandler);


  
    






