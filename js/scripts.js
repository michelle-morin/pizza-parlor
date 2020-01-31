// Back-end logic:
function Pizza(size, sauce, toppings) {
  this.size = size,
  this.sauce = sauce,
  this.toppings = toppings
}

Pizza.prototype.addTopping = function(topping) {
  this.toppings.push(topping);
}

Pizza.prototype.determinePrice = function() {
  var price;
  if (this.size === "small") {
    price = 10;
  } else if (this.size === "medium") {
    price = 16;
  } else if (this.size === "large") {
    price = 22;
  }
  for (var i=0; i < this.toppings.length; i++) {
    var tierOneToppings = ["black olives", "pineapple", "mushrooms", "garlic", "peppers", "artichoke hearts", "onion", "tomatoes", "cheese"];
    var tierTwoToppings = ["pepperoni", "ham", "bacon"];
    if (tierOneToppings.includes(this.toppings[i])) {
      price += 1;
    } else if (tierTwoToppings.includes(this.toppings[i])) {
      price += 2;
    }
  }
  return price;
}

// Front-end logic:

var displayOrderDetails = function(pizza) {
  $("ul#selected-toppings").empty();
  $("#order-review").show();
  $(".pizza-size").html(pizza.size);
  $(".pizza-sauce").html(pizza.sauce);
  pizza.toppings.forEach(function(topping) {
    $("ul#selected-toppings").append("<li>" + topping + "</li>");
  });
  var pizzaPrice = pizza.determinePrice();
  $(".pizza-price").html(pizzaPrice);
}

var completePurchase = function() {
  $("#pizza-menu").hide();
  $("#order-review").hide();
  var confirmationNumber = (Math.random() * 100000).toFixed(0);
  $(".confirmation-number").html(confirmationNumber);
  $("#order-confirmation").show();
}

$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    var inputSize = $("input:radio[name=pizza-size]:checked").val();
    var inputSauce = $("input:radio[name=pizza-sauce]:checked").val();
    var inputToppings = [];
    var userPizza = new Pizza(inputSize, inputSauce, inputToppings);

    $("input:checkbox[name=topping]:checked").each(function() {
      var inputTopping = $(this).val();
      userPizza.addTopping(inputTopping);
    });
    console.log(userPizza.toppings);

    displayOrderDetails(userPizza);

    $("button#purchase").click(function() {
      completePurchase();
    })
  });
});