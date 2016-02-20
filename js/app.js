$(function() {
	//We instantiate our model
	var model = new DinnerModel();
	
	//And create the needed controllers and views
	var exampleView = new ExampleView($("#exampleView"),model);

	var listDishesView = new ListDishesView($("#ListDishesView"),model);

    var overviewDinnerView = new OverviewDinnerView($("#OverviewDinnerView"),model);

    var preparationView = new PreparationView($("#PreparationView"),model);

    var selectDishView = new SelectDishView($("#SelectDishView"),model)
});