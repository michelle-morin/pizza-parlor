# _Pizza Parlor_

#### _Object-Oriented JavaScript Independent Project for Epicodus_, _31 January 2020_

#### By _**Michelle Morin**_

## Description

_This webpage allows a user to choose a pizza size, sauce, and optionally one or more individual toppings, then outputs an order review including a final cost of the pizza. In the order review, the webpage includes a button to order for pick-up and a button to order for delivery. When a user selects the pick-up button, the webpage displays an order confirmation with a confirmation number. When the user selects the delivery option, the webpage displays a form for the user to input thier name, street address, and zip code, all of which are required fields. When the user submits their delivery information, the webpage either displays an order confirmation (when the user's zip code is within Portland city limits) or directs the user to order a pizza for pick-up (if the user's zip code is outside of Portland city limits)._

## Specifications:

| Specification | Example Input | Example Output |
| ------------- |:-------------:| --------------:|
| Webpage determines user selection of pizza size when the user submits menu form | user selects "10" (small)" and clicks "review order" button | size = "small" |
| Webpage determines user selection of pizza sauce when the user submits menu form | user selects "Marinara" and clicks "review order" button | sauce = "red" |
| Webpage determines user selection of one or more toppings when user submits menu form | user selects "pepperoni" and "black olives" then clicks "review order" button | toppings = ["pepperoni", "black olives"] |
| Webpage determines price of the pizza based on size (small: 10; medium: 16; large: 22) and toppings selections (+1 or +2 each, depending on topping type) | user selects size "small" and topping "pepperoni" | price: 12 |
| Webpage displays total price of pizza when user submits menu form | user clicks "review order" button | price: $12 |
| Webpage displays order confirmation when user clicks pick-up order button | user clicks "pick-up order" button | "It's pizza time!" |
| Webpage displays form for obtaining delivery details when user clicks order delivery button | user clicks "order delivery" button | Webpage displays form fields for name, street address, and zipcode, as well as a button to submit form responses |
| Webpage displays order confirmation when user submits delivery details form and input zip code is within Portland city limits | name: "Michelle" address: 123 Main Street" zip code: 97205 | "It's pizza time!" |
| Webpage displays message directing user to create an order for pick-up when user submits delivery details form and input zip code is outside of Portland city limits | name: "Michelle" address: "456 South Street" zip code: 999999 | "Delivery is only available within Portland. Click to place a pick-up order." |


## Setup/Installation Requirements

* _First, clone this repository to your desktop by navigating to the desktop in the Terminal (entering "cd desktop" in the Terminal) and then entering "git clone https://github.com/michelle-morin/pizza-parlor"._
* _Once the project directory is cloned to your desktop, navigate to the directory in the terminal by entering "cd pizza-parlor" in the Terminal._
* _Confirm that you have navigated to the project directory by entering "pwd" in the Terminal._
* _Once you have navigated to the pizza-parlor directory in the terminal, open the contents of the directory in a text editor or IDE of your choice (e.g., to open the contents of the directory in Visual Studio Code, enter the command "code ." in the Terminal)._
* _Open index.html in a browser of your choice (e.g., Google Chrome)._

## Technologies Used

_Git, HTML, CSS (custom and Bootstrap v4.1.3), JavaScript, jQuery_

### License

*This webpage is licensed under the MIT license.*

Copyright (c) 2020 **_Michelle Morin_**
