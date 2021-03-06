$(function() {
	//We instantiate our model
	var model = new DinnerModel();
	//var view = new DinnerView();
	
	//And create the needed controllers and views
	var guestNumberView = new GuestNumberView($("#GuestNumberView"),model);
	var guestNumberViewController = new GuestNumberViewController(guestNumberView,model);
    
    var dinnerMenuView = new DinnerMenuView($("#DinnerMenuView"),model);

	var listDishesView = new ListDishesView($("#ListDishesView"),model);
	var listDishesViewController = new ListDishesViewController(listDishesView,model);

    var overviewDinnerView = new OverviewDinnerView($("#overviewPage"),model);
    var overviewController = new OverviewController(overviewDinnerView,model);

    var preparationView = new PreparationView($("#PreparationView"),model);

    var selectDishView = new SelectDishView($("#SelectDishView"),model);
});