function loginValidation()
{
  var id = document.getElementById('cid').value;
  var password = document.getElementById('password').value;
  var errMsg ="";

    if(id == "")
    {
      errMsg = errMsg + "ID\n";
    }
    if(password == "")
    {
      errMsg = errMsg + "Password\n";
    }

    if(errMsg !="")
    {
      alert("The following fields need your attention:\n" + errMsg);
      return false;
    }
    return true;
}
