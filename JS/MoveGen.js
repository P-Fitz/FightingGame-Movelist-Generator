/**
 * Created by b00247535 and b00248158 on 26/10/2014.
 */
var nameField, damageField, inputField, descriptionField;

/**
 * This is the Move constructor.  It will create a new Move with the given
 * name, damage, input and description.
 * @param name - a string
 * @param damage - a string
 * @param input - a string
 * @param description - a string
 * @constructor
 */
var Move = function(name, damage, input, description){
    this.name = name;
    this.damage = damage;
    this.image = [];
    for ( var i = 0; i < input.length; i++ ) {
    currentChar = input.charAt(i);
        this.image[i] = Imageconvert(currentChar);
    }
    this.description = description;
};
/**
 * This function takes each character from the users input and looks for an image
 * of the same name from the images folder, when returned each character is stored
 * as part of an array images within the array of moves for display later
 */
var Imageconvert = function(currentChar){
        a = ( '<img src="Images/' + currentChar + '.png" />' );
    return a;
};
/**
 * This is our list of moves.
 * @type {Array}
 */
var movelist = []; // An array of moves.

Move.prototype.tableRow = function(){
    var tr =
        "<tr><td>" + this.name +
            "</td><td>" + this.damage +
            "</td><td>" + this.image +
            "</td><td>" + this.description +
            "</td><td><input type='checkbox' value='" + this.completed + "'>" + "</td></tr>";
        "</td></tr>";
    return tr;
};
/**
 * This function adds a new move to the list, with values picked up
 * from the HTML input controls (name, input, description etc.)  Once a move
 * has been added, the HTML table showing the list of appointments should be
 * re-built.
 * @param namField
 * @param dmgField
 * @param inField
 * @param descField
 */
var addMove = function(namField, dmgField, inField, descField){
    var a = new Move(namField.value, dmgField.value,  inField.value, descField.value);
    movelist.push(a); // adds it to the end of the array
};
/**
 * This function performs the useful task of clearing out the HTML
 * input controls.
 */
var clearUI = function(){
    nameField.value = "";
    damageField.value = "";
    inputField.value = "";
    descriptionField.value = "";
};
var pressConfirmButton = function(){
    addMove(nameField, damageField, inputField, descriptionField);
    showTable(); // Display the whole list of movelist
};
/**
 * When the page loads, we need to set up various things.
 * e.g. assign HTML elements to appropriate JS variables so
 * we can manipulate them, assign functions to events etc.
 */
window.onload = function(){
    nameField = document.getElementById("name");
    damageField = document.getElementById("damage");
    inputField = document.getElementById("input");
    descriptionField = document.getElementById("description");
    confirmButton = document.getElementById("confirm");
    confirmButton.onclick = pressConfirmButton;
    clearButton = document.getElementById("clear");
    clearButton.onclick = clearUI;
    clearUI();
    showTutorial = document.getElementById("tutorial");
    showTutorial.onclick = tutorial;
};
/**
 * This function is called after someone has inputted all their move information,
 * the information is sorted into a table and added to a list of previously
 * created moves or on its own if it's the first created move and displayed.
 */
var showTable = function(){
    var tableDiv = document.getElementById("table"),
        table = "<table border='1'>" +
            "<thead><th>Name</th><th>Damage</th><th>Input</th><th>Description</th><th>Selection</th></thead>";
    for(var i=0, j=movelist.length; i<j; i++){
        var appt = movelist[i];
        table += appt.tableRow();
    }
    table+="</table>";
    // Now add the table to the page...
    tableDiv.innerHTML = table;
};
/**
 * This function is a toggle that sets the tutorial images to visible if
 * they are invisible, or sets the images to invisible if they are visible.
 */
var tutorial = function() {
    if(document.getElementById("joystick").style.visibility == "visible"){
        document.getElementById("joystick").style.visibility = "hidden";
        document.getElementById("hadouken").style.visibility = "hidden";
        document.getElementById("example").style.visibility = "hidden";
    }
    else {
        document.getElementById("joystick").style.visibility = "visible";
        document.getElementById("hadouken").style.visibility = "visible";
        document.getElementById("example").style.visibility = "visible";
    }
};