var xhr = createRequest()
function displayItems()
{
  var xmlDocument = xhr.responseXML;
  var displayTable = "<tr><th>ItemNumber</th><th>Name</th><th>Description</th><th>Price</th><th>Quantity</th><th>Add</th></tr>";
  var xt = xmlDocument.getElementsByTagName("good");
  // testing to see if i can get a button worknig
  for (i = 0; i < xt.length; i++)
  {
    displayTable += "<tr><td>" +
    xt[i].getElementsByTagName("item_number")[0].childNodes[0].nodeValue +
    "</td><td>"+
    xt[i].getElementsByTagName("name")[0].childNodes[0].nodeValue +
    "</td><td>"+
    xt[i].getElementsByTagName("description")[0].childNodes[0].nodeValue +
    "</td><td>"+
    xt[i].getElementsByTagName("price")[0].childNodes[0].nodeValue +
    "</td><td>"+
    xt[i].getElementsByTagName("quantity")[0].childNodes[0].nodeValue +
    "</td></str>"
  }
  document.getElementById("output").innerHTML = displayTable;
  console.log("Updated.");
  setTimeout(loadXMLDoc,1000);
}



function loadXMLDoc()
{
    xhr.onreadystatechange = function()
    {
      if(xhr.readyState == 4 && xhr.status == 200){
        displayItems();
      }
    };
    xhr.open("GET", "data/goods.xml", true);
    xhr.send();
}
