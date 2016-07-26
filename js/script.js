function validateForm() {
        var un = document.loginform.usr.value;
        var pw = document.loginform.pword.value;
        var username = "username"; 
        var password = "password";
        if ((un == username) && (pw == password)) {
            return true;
        }
        else {
            alert ("Login was unsuccessful, please check your username and password");
            return false;
        }
  }
  
function checkInventory() {
    var text;
    var inventory = document.getElementById("inventoryRequest").value;
    
    switch(inventory) {
        
        case "Basketball":
            text = "We offer basketballs. See the products page for more details.";
            break;
        
        case "Soccer":
            text = "We offer soccer balls. See the products page for more details.";
            break;
        
        case "Baseball":
            text = "We offer baseballs. See the products page for more details.";
            break;
        
        case "Football":
            text = "We offer footballs. See the products page for more details.";
            break;
        
        default:
        text = "Sorry, we do not offer this type of product.";
    }
  document.getElementById("searchResult").innerHTML = text;
}