import http from "node:http"

const server = http.createServer((req, res) => {

if (req.url === '/') {
  res.end('You are on the root homepage!');
    return
}

if (req.url === '/shashank') {
  res.end('iam shashank');
    return
}
  res.end('page not found');
})

server.listen(3000, ()=> {
    console.log("Server is running on port 3000")
})
