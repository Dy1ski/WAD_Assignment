function fields()
{
  var name = document.getElementById("first").value;
  var last = document.getElementById("last").value;
  var password = document.getElementById("password").value;
  var cpassword = document.getElementById("compassword").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var errMessage="";
  var patt =  new RegExp(/^\D*0(\D*\d){9}\D*$/);
  var phpDoc = "details.php";
    if(name == "")
    {
      errMessage = errMessage + "First Name \n";
    }
    if(last == "")
    {
      errMessage = errMessage + "Last Last \n";
    }

    if(password == "")
    {
      errMessage = errMessage + "Password\n";
    }
    if(cpassword == "")
    {
      errMessage = errMessage + "Password Comfiramtion\n";
    }
    if(email == "")
    {
      errMessage = errMessage + "Email \n";
    }
    // Reference: This regex is in reference to this website: https://tinyurl.com/ya2wx7tv
    if(!patt.test(phone))
    {
      errMessage = errMessage + "Phone \n";
    }


/////
    if(password !== cpassword)
    {
      errMessage = errMessage + "Passwords do not match \n";
    }
    //TODO: add in the phone validation -> as long as it is not empty
    if(errMessage != "")
    {
      alert("The following fields need your attention: \n " + errMessage);
      return false;
    }
    // if all fields are valid and correct
    // worked on the last test perfomred
    alert("All fields are valid thank you");
    postDoc(phpDoc,name,last,password,email,phone);
    alert("Sucessful Registration");
    window.location.replace("https://mercury.swin.edu.au/cos30020/s100579461/Assignment2/buyonline.htm");
    return true;
}

function itemCheck()
{
  var item = document.getElementById("item").value;
  var itemPrice = document.getElementById("itemPrice").value;
  var itemQuantity = document.getElementById("itemQuantity").value;
  var description = document.getElementById("description").value;
  var errMessage = "";
  var itemDoc = "listing.php";

    if(item == "")
    {
      errMessage = errMessage + "Item Name\n";
    }
    if(itemPrice == "")
    {
      errMessage = errMessage + "Item Price\n";
    }
    if(itemQuantity =="")
    {
      errMessage = errMessage + "Quantity\n"
    }
    if(description == "")
    {
      errMessage = errMessage + "Description\n"
    }
    if(errMessage !="")
    {
      alert("The following fields need your attention: \n" + errMessage);
      return false;
    }
    alert("All fields are valid Thank You");
    postItem(itemDoc,item,itemPrice,itemQuantity,description);
    alert("Successful Item Add");
    return true;

}
 function reset()
 {
   var rForm = document.getElementById("details");
   rForm.reset()
 }
