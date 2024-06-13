const http = require("http");

const serverHttp = http.createServer();

serverHttp.on("request", (request, response) => {

    // /
    if(request.url === "/"){
        response.end("Sei nella home")
    }

    // /users
    else if(request.url === "/users"){
        response.end("Sei nella sezione users")
    }

    // /users/admin
    else if(request.url === "/users/admin"){
        response.end("Sei nella sezione users però di tutti gli admin")
    }

    // /orders
    else if(request.url === "/orders"){
        response.end("Sei nella sezione degli ordini")
    }

    // /orders/1
    else if(request.url === "/orders/1"){
        response.end("Sei nella sezione dell'articolo 1")
    }

    else response.end("404");

});

serverHttp.listen(8080);