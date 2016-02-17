//ExampleView Object constructor
/*
var ExampleView = function (container) {
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	this.numberOfGuests = container.find("#numberOfGuests");
	this.plusButton = container.find("#plusGuest");
	this.minusButton = container.find("#minusGuest");
	
	this.numberOfGuests.html("Hello World");
	
   }
*/
 
//ExampleView Object constructor

var ExampleView = function (container,model) {
 
 // Get all the relevant elements of the view (ones that show data
 // and/or ones that responded to interaction)
 this.numberOfGuests = container.find("#numberOfGuests");
 this.plusButton = container.find("#plusGuest");
 this.minusButton = container.find("#minusGuest");
 
 //this.numberOfGuests.html(model.getNumberOfGuests());
 //this.numberOfGuests.html("ten");
 //this.numberOfGuests.html("Hello World");
 //this.numberOfGuests = model.getNumberOfGuests();
 //console.log(this.numberOfGuests);
 //this.numberOfGuests.html(model.getNumberOfGuests());

}

var ListDishesView = function (container, model){
	// is a loop, print all dishes in that category
	
    this.listAllDishes = container.find("#listAllDishes");
	var dishes = model.getAllDishes('starter');
	var alldishesHtml = "";

    /*
	this.dishImg.html("<img src='images/" + dishes[0].image + "' > ");
	this.dishName.html(dishes[0].name);
	this.dishDescription.html(dishes[0].description);
	console.log(dishes[0].description);
	*/
	
     for (var i = 0; i < dishes.length; i++) {

		alldishesHtml +=  "<div>" + 
						     " <div> " +
							     "<center>" + " <img src=\'images/" + dishes[i].image + "\' ></center> " +
							    " <center><label>" + dishes[i].name + "</label></center>" +
							    "<span> " + dishes[i].description + "</span>"
						     "</div>" 
					      "<div>";

     }

     this.listAllDishes.html(alldishesHtml);
}