import express from 'express'
import cors from 'cors'

const app = express()

app.use(cors())

app.get('/', (_, res) => {
	res.send('All good!')
})

app.listen(4000, () => {
    console.log('Server started on localhost:4000');
})