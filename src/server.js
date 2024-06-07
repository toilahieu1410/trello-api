import express from 'express'

const app = express()

const hostname = 'localhost'
const port = 3000

app.get('/', function(req, res)  {
    res.send('<h1>Xin chao minh hieu</h1>')
})

app.listen(port, hostname, () => { // port trc xong mới hostname
    console.log(`Hello Minh hieu xem ${hostname}:${port}`)
})