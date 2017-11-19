# bamazon

The bamazon application is a node.js console based application that mimics an online department store.

The application uses the inquirer npm package to take in user information and a local MySQL database to store the data. A few pictures were added to show the data was being successfully stored in the database.

The project has three parts to it, the customer portion, manager portion and supervisor portion.

In the customer side, users can go in and see a list of products availabe and chose to purchase them. The quantity remaing is reduced by however many are being purchased or an error message is returned if there aren't enough in stock to meet the request.

The manager portion allows a manager to view pruducts, add new products, view low inventory or add to inventory.

The supervisor allows a supervisor to manage the different departments in the store.

