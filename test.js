//HOLIDAY CALENDAR//
// // https://date.nager.at/Api Workssss //
// fetch("https://date.nager.at/api/v3/publicholidays/2021/US")
// .then(response => response.json())
//    .then(data => console.log(data));



//WEATHER//

// // works but does not have accurate time and zipcode//
// fetch('http://api.weatherstack.com/current?access_key=44e35a7ab430e8b30e70fb403ee03b91&query=Houston')
// .then((res) => res.json())
// .then(res => console.log('res', res))


// // does not want to accept key//
// fetch('https://api.weatherbit.io/v2.0/current&access_key=269b0379131c40b0a91c3ee39c006c39&postal_code=77008&country=US')
// .then((res) => res.json())
// .then(res => console.log('res', res))


///MAPS//


//not working///


// fetch("https://weatherapi-com.p.rapidapi.com/current.json?q=houston", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "weatherapi-com.p.rapidapi.com",
// 		"x-rapidapi-key": "68b1aa5164msh526753166a72319p10a65ejsne9f4f958217b"
// 	}
// })
// .then(response => {
// 	console.log(response);
// })
// .catch(err => {
// 	console.error(err);
// });

// fetch("https://weatherapi-com.p.rapidapi.com/current.json?q=77008US", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "weatherapi-com.p.rapidapi.com",
// 		"x-rapidapi-key": "68b1aa5164msh526753166a72319p10a65ejsne9f4f958217b"
// 	}
// })
// .then(response => {
// 	console.log(response);
// })
// .catch(err => {
// 	console.error(err);
// });

// ///weather from challange API without time//
// fetch("https://api.openweathermap.org/data/2.5/onecall?lat=29.76&lon=-95.37&exclude=minutely&appid=0b511ddd7a9e1f781148f73c4e808cf6")
// .then(response => response.json())
// .then(data => console.log(data));
