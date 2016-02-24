//ExampleView Object constructor
var GuestNumberView = function (container,model) {
 
 // Get all the relevant elements of the view (ones that show data
 // and/or ones that responded to interaction)

 // attach the view to listener
 model.attach(this);

 this.numberOfGuests = container.find("#numberOfGuests");
 this.plusButton = container.find("#plusGuest");
 this.minusButton = container.find("#minusGuest");
 var number = model.getNumberOfGuests();

 this.numberOfGuests.html(number);

 this.update = function(args){
 	if (args == "people") {
 		number = model.getNumberOfGuests();
 		this.numberOfGuests.html(number); 
 	}
 }
 
 // write an update function if their happened any changes
}

var ListDishesView = function (container, model){
	// is a loop, print all dishes in that category
	model.attach(this);
    this.listAllDishes = container.find("#listAllDishes");
    this.selectType = container.find("#selection");
    this.search = container.find("#search");
    this.keyWords = container.find("#keyWords");
    //console.log(this.selectType.length);

    //var dishType = model.getSelectedDish('starter','eggs');
	//var dishes = model.getAllDishes('starter');
	var dishes = [];
	dishes = model.getAllDishes('all');
	//var dishes = model.getAllDishes(dishType);
	var alldishesHtml = "";

    for (var i = 0; i < dishes.length; i++) {

		alldishesHtml +=  "<div class=\"col-md-3 dishbox\">" + 
		                       "<a href=\'#\' class=\'selectDish\' id=\' "+ dishes[i].id +"\''><div class=\" dish\" id=\'dishID\' > " +
							     "<center>" + " <img src=\'images/" + dishes[i].image + "\' ></center> " +
							     " <div class=\"dishname\">" + dishes[i].name + "</div>" +
							   "</div></a>" + 
							   "<div class=\"description\"> " + dishes[i].description + "</div>" +
					      "</div>";
					  }

     //this.selectDish = container.find('#listAllDishes .selectDish');
     //console.log(this.selectDish);

     this.listAllDishes.html(alldishesHtml);

     this.update = function(args){
     	//c
        if (args == "dishType" || args == "filter") {
        	
        	var dishType = model.getSelectedDish();
        	var filter = model.getFilter();
        	var dishes = model.getAllDishes(dishType,filter);
        	console.log(filter);
     
        var alldishesHtml = "";

    	for (var i = 0; i < dishes.length; i++) {
    		//console.log("hi");
			alldishesHtml +=  "<div class=\"col-md-2 dishbox\">" + 
		                       "<a href=\"#\"><div class=\" dish\"> " +
							     "<center>" + " <img src=\'images/" + dishes[i].image + "\' ></center> " +
							     " <div class=\"dishname\">" + dishes[i].name + "</div>" +
							   "</div></a>" + 
							   "<div class=\"description\"> " + dishes[i].description + "</div>" +
					      "</div>";
					  }
    
        this.listAllDishes.html(alldishesHtml);
 	};
 } 
}

var SelectDishView = function (container, model){
    // GET The number of people
	/*
	this.numberOfPeople = container.find(".numberOfPeople");
	this.numberOfPeople.html(model.getNumberOfGuests());
	*/

	// Get the total price of selected dish;
	model.attach(this);
	this.update = function(args){
		if (args == 'dishDetail') {
			
			var dishID = model.getDishID();
			//console.log(dishID);
			this.totalDishPrice = container.find("#totalDishPrice");
			var totalPrice = model.getTotalDishPrice(dishID);
			//console.log("the price is " + totalPrice);
			this.totalDishPrice.html(totalPrice);

    //Get the dish Name
    		this.dishname = container.find("#dishName");

	//Get the dish Introduction

	//Get the dish Ingredients
			this.dishIngre = container.find("#dishIngre");
			var allIngre = model.getDishIngredients(dishID);
			var getIngre = "";
			for (var i = 0; i < allIngre.length; i++) {
				getIngre +=  "<tr>" +
						"<td>" + allIngre[i].quantity + "</td>" +
						"<td>" + allIngre[i].unit + "</td>" +
					    "<td style= \"width: 55%;\"> " + allIngre[i].name + "</td>" +
						"<td> SEK </td> " + " " +
						"<td> " + allIngre[i].price + " </td>" +
					 "</tr></br>";
			};

			this.dishIngre.html(getIngre + " SEK " + totalPrice);
		};
	}

    /*
    var dishID = model.getDishID();
	this.totalDishPrice = container.find("#totalDishPrice");
	var totalPrice = model.getTotalDishPrice(dishID);
	this.totalDishPrice.html(totalPrice);

    //Get the dish Name
    this.dishname = container.find("#dishName");

	//Get the dish Introduction

	//Get the dish Ingredients
	this.dishIngre = container.find("#dishIngre");
	var allIngre = model.getDishIngredients(dishID);
	var getIngre = "";
	for (var i = 0; i < allIngre.length; i++) {
		getIngre +=  "<tr>" +
						"<td>" + allIngre[i].quantity + "</td>" +
						"<td>" + allIngre[i].unit + "</td>" +
					    "<td style= \"width: 55%;\"> " + allIngre[i].name + "</td>" +
						"<td> SEK </td> " + " " +
						"<td> " + allIngre[i].price + " </td>" +
					 "</tr></br>";
	};

	this.dishIngre.html(getIngre + " SEK " + totalPrice);
	*/
	

}

var OverviewDinnerView = function (container, model){
	// GET The number of people
	this.numberOfPeople = container.find(".numberOfPeople");
	this.numberOfPeople.html(model.getNumberOfGuests());

	// Get the list of the selected dishes in the menu
	this.listSelectDishes = container.find("#listSelectDishes");
	this.printDishes = container.find("#printDishes");
	var selectDishes = "";
	var PrintDishes = "";
    
    var fullMenu = model.getFullMenu();

	for (var i = 0; i < fullMenu.length; i++) {
		//var price = model.getTotalDishPrice(i);
		selectDishes += "<div class=\"col-md-2 col-md-offset-0\">" +
						    "<div class=\"dish\">" +
						    "<div><img src=\'images/" + fullMenu[i].image + "\' ></div>" +
						    "<div class=\"dishname\">" + fullMenu[i].name + "</div>" +
						    "</div>" +
						    "<div class= \"price\"> " +
							"25.7" + "SEK" +
						    "</div>" +
				        "</div>";

		PrintDishes += "<div class=\"row\" >" +	               
		               "<div class= \"col-md-2 dishimg\">" +
						  "<div class= \"dish\"> " +
						  "<div><img src=\'images/" + fullMenu[i].image + "\'></div>" +
						  "</div>" +
				       "</div>" +
				      "<div class= \"col-md-4 dishinfo\" >" +
						  "<div class=\"dishname\">" + fullMenu[i].name + "</div>" +
						  "<div class=\"dishtext\">" + fullMenu[i].description +
						  "</div>" +
				      "</div>" + 
				          "<div class= \"col-md-6 dishpre\" >" +
						  "<div class=\"dishname\"> Preparation </div>" +
						  "<div class=\"dishtext\">" + fullMenu[i].description +
						  "</div>" +
				      "</div>" +
				      "</div>"

	};

    this.listSelectDishes.html(selectDishes);
    this.printDishes.html(PrintDishes);

    // Get the full price
    this.totalPrice = container.find("#totalPrice");
    this.totalPrice.html(model.getTotalMenuPrice());

}

var PreparationView = function (container, model){
	this.listAllPreparation = container.find("#listAllPreparation");
    var selectDishes = "";
    
    var fullMenu = model.getFullMenu();

	for (var i = 0; i < fullMenu.length; i++) {
		selectDishes += " <img src=\'images/" + fullMenu[i].image + "\' "+ fullMenu[i].name + fullMenu[i].description + fullMenu[i].description;
	};

    this.listAllPreparation.html(selectDishes);


    // this is the test code 
    this.getAllIngre = container.find("#getAllIngre");
    var allIngre = model.getAllIngredients();

}



