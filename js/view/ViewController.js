//ExampleViewController Object constructor
var GuestNumberViewController = function(view, model) {

 view.plusButton.click(function(){
    model.setNumberOfGuests(model.getNumberOfGuests() + 1);
 });
 
 view.minusButton.click(function(){
    model.setNumberOfGuests(model.getNumberOfGuests() - 1);
 });
 
}

var ListDishesViewController = function(view, model){
  view.selectType.change(function(){
  	//console.log(view.selectType.val());
  	var dishType = view.selectType.val();
  	model.setSelectedDish(dishType);
  });
   
  view.search.click(function(){
  	var filter = view.keyWords.val();
  	model.setFilter(filter);
  });

  view.selectDish.click(function(){
    var value = [];
    var selectClass = $(".selectDish");
    var id = $(this).attr('id');
    console.log(id);
    model.setDishID(id); 
  });
}


