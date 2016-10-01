var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var articles = {
                 articleOne: {
                    title: 'Article | Manzoor',
                    heading: 'Article One',
                    date: 'sep 30, 2016',
                    content: `  
                                <p>
                                    This is my content for my first article.This is my content for my first article.This is my content for my first article. 
                                </p>
                                <p>
                                    This is my content for my first article.This is my content for my first article.
                                </p>
                                <p>
                                    This is my content for my first article.
                                </p> `
                },
                 articleTwo: {
                    title: 'Article Two | Manzoor',
                    heading: 'Article Two',
                    date: 'sep 30, 2016',
                    content: `  
                                <p>
                                    This is my content for my first article.This is my content for my first article.This is my content for my first article. 
                                </p>
                                <p>
                                    This is my content for my first article.This is my content for my first article.
                                </p>
                                <p>
                                    This is my content for my first article.
                                </p> `
                },
                 articleThree : {
                    title: 'Article Three | Manzoor',
                    heading: 'Article Three',
                    date: 'sep 30, 2016',
                    content: `  
                                <p>
                                    This is my content for my first article.This is my content for my first article.This is my content for my first article. 
                                </p>
                                <p>
                                    This is my content for my first article.This is my content for my first article.
                                </p>
                                <p>
                                    This is my content for my first article.
                                </p> `
                }
};

function createTemplate(data) 
{
    var title = data.title;
    var date = data.date;
    var heading = data.heading;
    var content = data.content;

        var htmlTemplate = `
            <html>
            <head>
                <title>
                    Artice One |Manzoor
                </title>  
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                   <link href="/ui/style.css" rel="stylesheet" />
            </head>
            <body>
                <div class="container">
                    <div>
                        <a href="/">Home</a>
                    </div>
                    <hr/>
                    <h3>
                        ${heading}
                    </h3>
                    <div>
                        ${date}
                    </div>
                    <div>
                        ${content}
                    </div>
                </div>
            </body>
        </html> 
        `;
        return htmlTemplate;
}    

app.get('/', function (req, res) {
  res.sendFile(path.join(_dirname, 'ui', 'index.html'));
});
app.get(':/articleName', function(req, res)
{    // articleName = article-one
    //articles[articleName] = {} content object for article one
    articleName =req.params.articleName;
    res.send(createTemplate(articles[articleName]));  
});
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
