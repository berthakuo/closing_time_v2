// ********************************************************************
// Global Variables
// ********************************************************************
var currentLat;
var currentLng;

// ********************************************************************
// Main script
// ********************************************************************
detCurrentLoc();


// ********************************************************************
// Get current location lat/lng values
// ********************************************************************
function detCurrentLoc(){
	if(navigator.geolocation){
		navigator.geolocation.getCurrentPosition(showPosition);
	}
	else{
		console.log("enable geolocation on your browser");
	}	
}

function showPosition(position){
	currentLat=position.coords.latitude;
	currentLng=position.coords.longitude;
}





// // $(".arrow-button").on("click", clickArrow);

// // function clickArrow(){
// // 	console.log("arrowbutton")
// // 	$("ul").css({"margin-top":"-100px"},{"transition":"1s ease"});
// // 	resetList();
// // 	getFirstStore();
// // }



// // /******************************
// // /***********************************/

// // $(".mobile-button").on("click",showHeader);

// // function showHeader(){
// // 	$(".icon-row").toggleClass("show");
// // 	$(".icon-row").toggleClass("hidden")
// // }


// // /******************************
// // /***********************************/

// // var lastIndex=0;
// // $(".button").on("click",resetList);

// // function resetList(){

// // 	var firstItem = $("li").first();
// // 	$("ul").append(firstItem);


// /********************************
// GLOBAL VARIABLES
// /***********************************/
// var markers = [];
// var names =[];


// /***********************************
// USER CLICKS ON A STORE
// /***********************************/
// $("ul").on("click", "li", styleList);

// function styleList(){
// 	//for(var i=0; i<listlength; i++)
// 	$("ul li").removeClass("yellow");
// 	$(this).addClass("yellow");
// 	var poop=($(this).children());
// 	addYellowMarker(poop);
// }

// /***********************************
// ADD OR REMOVE YELLOW MARKER
// /***********************************/
// //$('<div />').html("Chris&apos; corner").text()


// function addYellowMarker(poop){
// 	//updateMarker(markers,lastIndex,"#ffae73");
// 	for(var i=0; i<names.length; i++){
// 		var pee = poop.first().html();
// 		if($('<div />').html(pee).text() == names[i]){

// 			updateMarker(markers,i,"#ebb721");
// 		}
// 		else{
// 			updateMarker(markers,i,"black");

// 		}	
// 	}
// }

// function removeYellowMarker(){
// 	//updateMarker(markers,lastIndex,"#ffae73");
//  $('<div />').html("Chris&apos; corner").text();

// 	for(var i=0; i<names.length; i++){
// 		if($("li>div").first().html() == names[i]){
// 			updateMarker(markers,i,"ebb721");

// 		}
// 		else{
// 			updateMarker(markers,i,"black");
// 		}
// 		lastIndex=i;
// 	}
// }

// /******************************
// /***********************************/
// // if($(window).width()<500){
// // 	$(".icon").toggleClass("fa-2x");
// // 	$(".icon").toggleClass("fa-5x");
// // }
// // else{
// // 	$(".icon").toggleClass("fa-5x");
// // 	$(".icon").toggleClass("fa-2x");
// // }
// /********************************
// GET CURRENT LOCATION COORDINATES
// /***********************************/
//  if (navigator.geolocation){ 
//  	navigator.geolocation.getCurrentPosition(showPosition);
//  }
// else{
// 	console.log("this doesn't work on your browser");
// }

// // function showPosition(position){
// //  	var currentLat=position.coords.latitude;
// // 	var currentLng=position.coords.longitude;
// //}


// /********************************
// TOGGLE ICON COLORS
// **********************************/

// $(".bar").on("click", toggleIcon);
// $(".coffee").on("click", toggleIcon);
// $(".restaurant").on("click", toggleIcon);
// // $(".restaurant").click()
// function toggleIcon(){
// 	if($(this).hasClass("on")){
// 		$(this).removeClass("on");
// 		deleteMarkers();
// 		$("ul").empty();
// 	}
// 	else{
// 		$(".fa").removeClass("on");
// 		$(this).addClass("on");
// 		createInput();
// 		refreshMap();
// 	}
// }
// /****************************
// SETS UP THE MAP
// **********************************/
// var map;

// /*function loadCambridge (){*/

// // var here;
// // getLocation;

// // function getLocation()
// //   {
// //   if(navigator.geolocation){
// //     navigator.geolocation.getCurrentPosition(showPosition);
// //     }
// //   else{
// //   	console.log("Geolocation is not supported by this browser.")
// //   }
// //   }
// var here;
//  function showPosition(position){
//    var lat=position.coords.latitude;
//    var lng=position.coords.longitude; 

// 	 here = new google.maps.LatLng(lat,lng);
// 	//var cambridge = new google.maps.LatLng(42.364081,-71.101503);

// 	var mapOptions = {
// 		center:here,
// 		zoom: 16
// 	};

// 	map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

// 	var styles = [
// 	  {
// 	    stylers: [
// 	      { hue: "#110d24" },
// 	      { saturation: -100 }
// 	    ]
// 	  },{
// 	    featureType: "road",
// 	    elementType: "geometry",
// 	    stylers: [
// 	      { lightness: 100 },
// 	      { visibility: "simplified" }
// 	    ]
// 	  },{
// 	    featureType: "road",
// 	    elementType: "labels",
// 	    stylers: [
// 	      { visibility: "off" }
// 	    ]
// 	  }
// 	];

// 	map.setOptions({styles: styles});	
// }
// /********************************
// Clear markers and SET UP SEARCH ARRAY
// **********************************/
// var input=[];
// function createInput(){
// 	input=[];
// 	deleteMarkers();


// 	allIconClasses =[".bar", ".coffee", ".restaurant"];
// 	allIcons = ["bar", "cafe", "restaurant"];

// 	for(var i=0; i < allIcons.length; i++){
// 		if ($(allIconClasses[i]).hasClass("on") == true) {
// 			input.push(allIcons[i]);
// 		}
// 	}

// 	// if(input.length != 0){
// 	// 	refreshMap();
// 	// 	markers[0].icon.fillColor="#299bd4";


// 	// }
// }
// /********************************
// GET & DISPLAY BARS
// **********************************/
// function deleteMarkers() {
// 	for (var i = 0; i < markers.length; i++) {
// 		markers[i].setMap(null);
// 	}
// 	markers=[];
// 	names=[];
// }

// function refreshMap(){
// 	var request = {
// 		location: here,
// 		radius: 300,
// 		types:input
// 	};
// 	service = new google.maps.places.PlacesService(map);
// 	service.search(request, createMarkers);
// }

// 	// 	console.log("markers in refreshmap");
// 	// 	console.log(input);
// var closingTime="";

// function createMarkers(results, status) {
// 	//("ul").children().remove();
// markers=[];
// names=[];
// 	if (status == google.maps.places.PlacesServiceStatus.OK) {
// 		$("ul").empty();

// 		for (var i = 0; i < results.length; i++) {
// 			if(results[i].opening_hours && results[i].opening_hours.open_now){
// 				var marker = new google.maps.Marker({position: results[i].geometry.location, map: map, icon: {
// 					path:'M0-165c-27.618 0-50 21.966-50 49.054C-50-88.849 0 0 0 0s50-88.849 50-115.946C50-143.034 27.605-165 0-165z',
// 					fillColor: 'black',
// 					fillOpacity: 0.8,
// 					strokeColor: '',
// 					strokeWeight: 0,
// 					scale: 1/4}
// 				});

// 				markers.push(marker);
// 				names.push(results[i].name);
// 				console.log(results[i].name)	
// 				// var name = results[i].name;

// 				service.getDetails({reference:results[i].reference}, function (placeResult){;
// 					var address = placeResult.formatted_address.replace(", United States","")
// 					$("ul").append(
// 						"<li>"+ 
// 							"<div class='name'>"+
// 								placeResult.name+ 
// 							"</div>" + 
// 							"<div class='address'>" + 
// 								address + 
// 							"</div>"+
// 							"</li>");
// 				})
// 			}
// 		}
// 	}
// }
// function updateMarker(markers,index,color){
// 	markers[index].icon.fillColor=color;
// 	markers[index].setIcon(markers[index].icon);
// }			


// // function openingHours(PlaceResult){
// // 	if(PlaceResult.opening_hours){
// // 		var openHours=PlaceResult.opening_hours;
// // 		var todaysDay=new Date().getDay();
// // 		console.log(openHours.periods[todaysDay].close.hours);
// // 		var closingTime = openHours.periods[todaysDay].close.hours;
// // 		//console.log(h24);
// // 		//console.log(typeof(closingTime))

// // 		if ($(h24 < closingTime) && closingTime>=10){
// // 			b=true;
// // 			console.log("ran through openinngHour function");
// // 		}
// // 		else if ($(h24 < closingTime+24) && closingTime<10){
// // 			b=true;
// // 			console.log("ran through openinngHour function");
// // 		}
// // 	}
// // }


// 	/*google.maps.event.addDomListener(window, 'load', initialize);*/