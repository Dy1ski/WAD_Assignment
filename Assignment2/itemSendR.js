var xhr = createRequest();
function postItem(dataSource, aItem, aItemPrice, aItemQuantity, aDescription){

    if(xhr)
    {
      var url = dataSource+"?item="+aItem+"&itemPrice="+aItemPrice+"&itemQuantity="+aItemQuantity+"&description="+aDescription;
      xhr.open("GET",url, true);
      xhr.onreadystatechange = function()
      {
        if(xhr.readyState == 4 && xhr.status == 200)
        console.log(xhr.responseText);
      }
    }
    xhr.send(null);
}
