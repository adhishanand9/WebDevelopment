var http = require('http');
var url = require('url');
var fs = require('fs');

function readAndServe(path, contentType, response)
{
  fs.readFile(path, function(error, data) {
    if (error) {
      throw error;
    }

    response.writeHead(200, {'Content-type': contentType});
    response.write(data);
    response.end();
  });
}

/* Serves files for the task list, and provides routes to create/delete tasks. */
http.createServer(function(request, response)
{
  var pathname = url.parse(request.url).pathname;
//use pathname=request.pathname
  if (request.method === "GET") {
    if (pathname === "/") {
      readAndServe('Main.html', 'text/html', response);
    } else if (pathname === "/css/Style.css") {
      readAndServe('.' + pathname, 'text/css', response);
    } else if (pathname === "/js/Script.js") {
      readAndServe('.' + pathname, 'text/javascript', response);
    } else {
      response.end();
    }
  } else if (request.method === "POST") {
    if (pathname === "/tasks") {
      readJSONBody(request, function(task) {
        createTask(task.text, function() {
          // must wait until task is stored before returning response
          response.end();
        });
      });
    } else {
      response.end();
    }
  } else {
    response.end();
  }
}).listen(8000, '127.0.0.1');

console.log('Running on 127.0.0.1:8000');
