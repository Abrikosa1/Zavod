class NewsService
{
    getNewsById(id)
    {
         var request = new XMLHttpRequest();
         request.open('GET', '/Zavod/GetNewsById?id=' + id, false);
         request.send();
         if (request.status != 200)  {
              alert( request.status + ': ' + request.statusText ); 
         } 
         else    {
             var news= JSON.parse(request.responseText );
             return news;
         }
         return null;
    }
    getAllNews()
    {
         var request = new XMLHttpRequest();
         request.open('GET', '/Zavod/GetAllNews',false);
         request.send();
         if (request.status != 200)  {
              alert( request.status + ': ' + request.statusText ); 
         } 
         else    {
             var newsList= JSON.parse(request.responseText );
             return newsList;
         }
         return null;
    }
}


