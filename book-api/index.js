const http = require("http");
const books = "['Atomic Habits', 'Eloquent JavaScript',]";

const server = http.createServer((req, res) => {
    const endpoint = req.url;

    if (endpoint === '/') {
        res.end('This is the landing page.')
    } else if (endpoint === '/home') {
        res.end('This is the home page. Welcome!');
    } else if (endpoint === '/books') {
<<<<<<< HEAD
        // res.end('Here is all our books:');
=======
>>>>>>> 486ce882bbda26ae9a71443970c99055aee3dc03
        res.end(books.toString());
    } else {
        res.end("Page Not Found");
    }
})

const port = 8989;
const hostname = 'localhost';

server.listen(port, hostname, () => {
    console.log('server is up and running');
});