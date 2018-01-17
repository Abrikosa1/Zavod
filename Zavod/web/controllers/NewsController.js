class NewsController
{
    constructor()
    {
        this.newsService = new NewsService();
    }
    
    // DATAController
    getNewsById(id)
    {
        return this.newsService.getNewsById(id);
    }
    
    //ViewController
   getNewsByIdView2(id)  {
        var data=this.getNewsById(id);
        var result="";
            var id=data.id;
            var title=data.title;
            var shortDescription=data.shortDescription;
            var fullDescription=data.fullDescription;
            var date=data.date;
            var image=data.image;
            alert(data.title);
            result +=  "<div class='row'>"+
                        "<div class='col-sm-12 col-md-12'>"+
                          "<div class='thumbnail'>"+
                            "<img src='data:image/png;base64,"+ image +"'/>"+
                            "<div class='caption'>"+
                              "<h3>"+title+"</h3>"+
                              "<p>"+shortDescription+"</p>"+
                              "<p align='right'>"+date+"</p>"+
                            "</div>"+
                          "</div>"+
                        "</div>"+
                      "</div>";
        var element =document.getElementById("news");
        element.innerHTML = result;
    }
    
    getNewsByIdView(id)  {
        var data=this.getNewsById(id);
        var data2 = this.getAllNews();
        var result="";
            var id=data.id;
            var title=data.title;
            var shortDescription=data.shortDescription;
            var fullDescription=data.fullDescription;
            var date = new Date(data.date);           
           var options = {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                    hour: 'numeric',
                    minute: 'numeric'
                  };
            date = date.toLocaleString("ru", options);
            var image=data.image;
            result +="<div class='container-fluid news-blog'>"+
                    "<div class='row'>"+
                        "<div class='col-lg-12'>"+
                            "<div class='page-header'>"+
                                "<h1>News</h1>"+
                            "</div>"+
                            "<div class='col-sm-6 col-md-6'>"+
                                "<a href='#'>"+
                                    "<div class='thumbnail principal-post'>"+
                                        "<img src='data:image/png;base64,"+ image +"'/>"+
                                        "<div class='caption'>"+
                                            "<h2>"+title+"</h2>"+
                                            "<span class='date-of-post'>"+date+"</span>"+
                                            "<p>"+shortDescription+"</p>"+
                                        "</div>"+
                                    "</div>"+
                                "</a>"+
                            "</div>"+
                            "<div class='col-sm-6 col-md-6'>";
                    for(var j=1;j<data2.length;j++){
                        var title2 = data2[j].title;
                        var date2 = new Date(data2[j].date);           
                        var options = {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                            hour: 'numeric',
                            minute: 'numeric'
                        };
                        date2 = date.toLocaleString("ru", options);
                          result+="<div class='thumbnail'>"+
                                    "<a href='#'>"+
                                        "<div class='caption'>"+
                                            "<h2>"+title2+"</h2>"+
                                            "<span class='date-of-post'>"+date2+"</span>"+
                                        "</div>"+
                                    "</a>"+
                                "</div>";}
                            result+="</div>"+
                        "</div>"+
                    "</div>"+
                "</div>";
        var element =document.getElementById("news");
        element.innerHTML = result;
    } 
    
    getAllNews()
    {
        return this.newsService.getAllNews();
    }
    
    //ViewController
    getAllNewsView()
    {
        var data=this.getAllNews();
        var result="";
        for(var i=0; i<data.length;i++)
        {
            var id=data[i].id;
            var title=data[i].title;
            var shortDescription=data[i].shortDescription;
            var fullDescription=data[i].fullDescription;
            var date=data[i].date;
            var image=data[i].image;
            result +=  "<div class='row'>"+
                        "<div class='col-sm-12 col-md-12'>"+
                          "<div class='thumbnail'>"+
                            "<img src='data:image/png;base64,"+ image +"'/>"+
                            "<div class='caption'>"+
                              "<h3>"+title+"</h3>"+
                              "<p>"+shortDescription+"</p>"+
                              "<p align='right'>"+date+"</p>"+
                            "</div>"+
                          "</div>"+
                        "</div>"+
                      "</div>";
        }

        var element =document.getElementById("news");
        element.innerHTML = result;
    }
}





