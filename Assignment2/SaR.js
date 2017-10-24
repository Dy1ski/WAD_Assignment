var xhr = createRequest();
function postDoc(dataSource, aFirst, aLast, aPassword, aEmail ,aPhone){

    if(xhr)
    {
      var url = dataSource+"?first="+aFirst+"&last="+aLast+"&password="+aPassword+"&email="+aEmail+"&phone="+aPhone;
      xhr.open("GET",url, true);
      xhr.onreadystatechange = function()
      {
           if (xhr.readyState == 4 && xhr.status == 200)
            console.log(xhr.responseText);
      }
}
  xhr.send(null);
}
