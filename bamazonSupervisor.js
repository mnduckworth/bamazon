var mysql = require("mysql");

var inquirer = require("inquirer");

var connection = mysql.createConnection({
	host: "localhost",
	port: 3306,
	user: "root",
	password: "pieeater",
	database: "bamazon"
});

connection.connect(function(err){
	if(err){
		console.log(err);
	};
	start();
});

function start(){
	inquirer.prompt([
			{
				name: "choice",
				message: "What action would you like to take?",
				type: "list",
				choices: ["View Product Sales by Department", "Create New Department"]
			}
		])
	.then(function(response){
		if(response.choice == "View Product Sales by Department")
	})
}