const express = require('express')
const app = express()
const port = 3000
let booklog = {}  //本来は複数形が望ましいが、複雑になるので単数形で処理

app.use(express.json())

app.post('/booklog', (req, res) => {
  booklog = req.body

  if (!(booklog.name && booklog.text)) {
    return res.json({
      "ok": false,
      "error": "Invelid parameter"
    })
  }

  res.json({
    "ok": true,
    "booklog": booklog
  })
})

app.get("/booklog", (req, res) => {
  res.json({
    "ok": true,
    "booklog":[
      booklog
    ]
  }
  )
})

app.listen(port, () => {
  console.log(`App Listening at http://localhost:${port}`)
})