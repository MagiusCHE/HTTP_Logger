const http = require("http");

const server = http.createServer((request, response) => {
    const { rawHeaders, httpVersion, method, socket, url } = request;
    const { remoteAddress, remoteFamily } = socket;
    const result = JSON.stringify({
        timestamp: Date.now(),
        rawHeaders,
        httpVersion,
        method,
        remoteAddress,
        remoteFamily,
        url
    });

    console.log(result);
    response.write(result);
    response.end();
});

console.log('HTTP Server started on port 8888');
server.listen(8888);
