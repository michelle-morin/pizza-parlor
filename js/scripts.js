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
  if (pizza.toppings.length >= 1) {
  pizza.toppings.forEach(function(topping) {
    $("ul#selected-toppings").append("<li>" + topping + "</li>");
    $("ul#selected-toppings").show();
    $(".and").html("and the following toppings:");
  });
  } else {
    $("ul#selected-toppings").hide();
    $(".and").html("");
  }
  var pizzaPrice = pizza.determinePrice();
  $(".pizza-price").html(pizzaPrice);
}

var completePurchasePickup = function() {
  $("#pizza-menu").hide();
  $("#order-review").hide();
  var confirmationNumber = (Math.random() * 100000).toFixed(0);
  $(".confirmation-number").html(confirmationNumber);
  $(".delivery-pickup").html("ready for pick-up");
  $("p.pickup").show();
  $("p.delivery").hide();
  $("#order-confirmation").show();
}

var selectDelivery = function() {
  $("#delivery-details").show();
  $("#pizza-menu").hide();
  $("#order-review").hide();
}

var completePurchaseDelivery = function(name, address, zipcode) {
  $("#pizza-menu").hide();
  $("#order-review").hide();
  $("#delivery-details").hide();
  $(".delivery-pickup").html("delivered");
  $("p.pickup").hide();
  $("p.delivery").show();
  $(".name").html(name);
  $(".address").html(address);
  $(".zipcode").html(zipcode);
  $("#order-confirmation").show();
}

$(document).ready(function() {
  $("form#order").submit(function(event) {
    event.preventDefault();
    var inputSize = $("input:radio[name=pizza-size]:checked").val();
    var inputSauce = $("input:radio[name=pizza-sauce]:checked").val();
    var inputToppings = [];
    var userPizza = new Pizza(inputSize, inputSauce, inputToppings);
    $("input:checkbox[name=topping]:checked").each(function() {
      var inputTopping = $(this).val();
      userPizza.addTopping(inputTopping);
    });

    displayOrderDetails(userPizza);
    $("button#purchase-pickup").click(function() {
      completePurchasePickup();
    });
    $("button#purchase-delivery").click(function() {
      selectDelivery();
      $("form#deliver").submit(function(event) {
        event.preventDefault();
        var inputName = $("input#name").val();
        var inputAddress = $("input#address").val();
        var inputZipcode = parseInt($("input#zipcode").val());
        completePurchaseDelivery(inputName, inputAddress, inputZipcode);
      });
    });
  });
});