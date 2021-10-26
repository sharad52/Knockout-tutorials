function SeatReservation(name, initialMeal) {
    var self = this;
    self.name = name;
    self.meal = ko.observable(initialMeal);

    self.formattedPrice = ko.computed(function() {
        var price = self.meal().price;
        return price ? "$" + price.toFixed(2):"None";
    });
}

function ReservationsViewModel() {
    var self = this;

    self.availableMeals = [
        { mealName: "Standard(sandwich)",price: 10 },
        { mealName: "Medium(MoMo)",price: 20 },
        { mealName: "Large(French Fries and MoMo Combo)",price: 100 },
        { mealName: "Small(PopCorn and Coke)",price: 200 }
    ];
    self.seats = ko.observableArray([
        new SeatReservation("Aaron",self.availableMeals[0]),
        new SeatReservation("Glen",self.availableMeals[1])
    ]);
    
    self.addSeat = ()=> {
        self.seats.push(new SeatReservation("", self.availableMeals[0]));
    }
    
    self.removeSeat = (seat) => { self.seats.remove(seat)}

    self.totalPrice = ko.computed( ()=> {
        var total = 0;
        for(var i = 0; i < self.seats().length; i++) 
            total += self.seats()[i].meal().price;
        return total;
        
    })
    
}
//applying bindings here
ko.applyBindings(new ReservationsViewModel());
