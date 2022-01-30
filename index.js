const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())

app.get('/', (_, res) => {
	res.send('All good!')
})

app.listen(4000, () => {
    console.log('Server started on localhost:4000');
})