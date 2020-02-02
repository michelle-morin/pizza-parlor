// Back-end logic:
function Pizza() {
  this.size = "size",
  this.sauce = "sauce",
  this.toppings = [],
  this.price = 0
}

Pizza.prototype.addTopping = function(topping) {
  this.toppings.push(topping);
}

Pizza.prototype.addSize = function(size) {
  this.size = size;
}

Pizza.prototype.addSauce = function(sauce) {
  this.sauce = sauce;
}

Pizza.prototype.determinePrice = function() {
  if (this.size === "small") {
    this.price += 10;
  } else if (this.size === "medium") {
    this.price += 16;
  } else if (this.size === "large") {
    this.price += 22;
  }
  for (var i=0; i < this.toppings.length; i++) {
    var tierOneToppings = ["black olives", "pineapple", "mushrooms", "garlic", "peppers", "artichoke hearts", "onion", "tomatoes", "cheese"];
    var tierTwoToppings = ["pepperoni", "ham", "bacon"];
    var tierThreeToppings = ["oregano", "basil"];
    if (tierOneToppings.includes(this.toppings[i])) {
      this.price += 1;
    } else if (tierTwoToppings.includes(this.toppings[i])) {
      this.price += 2;
    } else if (tierThreeToppings.includes(this.toppings[i])) {
      this.price += 0.50;
    }
  }
  this.price = this.price.toFixed(2);
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
    $(".and").html("and:");
  });
  } else {
    $("ul#selected-toppings").hide();
    $(".and").html("");
  }
  pizza.determinePrice();
  $(".pizza-price").html(pizza.price);
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

var deliveryAvailable = function(zipcode) {
  var portlandZipCodes = [97203, 97217, 97211, 97218, 97220, 97230, 97233, 97216, 97213, 97215, 97212, 97232, 97214, 97202, 97206, 97266, 97236, 97219, 97239, 97201, 97221, 97205, 97209, 97210, 97229, 97231];
  if (portlandZipCodes.includes(zipcode)) {
    return true;
  } else {
    return false;
  }
}

var completePurchaseDelivery = function(name, address, zipcode) {
  $("#pizza-menu").hide();
  $("#order-review").hide();
  $("#delivery-details").hide();
  if (deliveryAvailable(zipcode)) {
    $(".delivery-pickup").html("delivered");
    $("p.pickup").hide();
    $("p.delivery").show();
    $(".name").html(name);
    $(".address").html(address);
    $(".zipcode").html(zipcode);
    $("#order-confirmation").show();
  } else if (deliveryAvailable(zipcode) === false) {
    $(function() {
      $("#no-delivery").show();
    });
  }
}

$(document).ready(function() {
  $("form#order").submit(function(event) {
    event.preventDefault();
    var userPizza = new Pizza();
    var inputSize = $("input:radio[name=pizza-size]:checked").val();
    userPizza.addSize(inputSize);
    var inputSauce = $("input:radio[name=pizza-sauce]:checked").val();
    userPizza.addSauce(inputSauce);
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
        deliveryAvailable(inputZipcode);
        completePurchaseDelivery(inputName, inputAddress, inputZipcode);
      });
    });
  });
});