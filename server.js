const express = require('express')
const bodyParser = require('body-parser')
;

require('dotenv').config()
const app = express()
// const router = express.Router()
require('./db')
// const connectDB = require('./db')
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept',
    )
    next()
})
const auth = require('./routes/auth')
const routes_center = require('./routes/center')
const routes_volontaire = require('./routes/volontaire')
//  mongoose.set('useNewUrlParser', true)
//  mongoose.set('useFindAndModify', false)
//  mongoose.set('useCreateIndex', true)
//  mongoose.set('useUnifiedTopology', true)

// if (process.env.NODE_ENV === 'production') {
//     app.use(express.static('client/build'))
//     app.get('*', (req, res) => {
//         res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
//     })
// }

// create Server
// const port = process.env.PORT || 4000

app.use('/', auth)
app.use('/', routes_center)
app.use('/api/personne', require('./routes/api/personneRoute'));
app.use('/api/dose', require('./routes/api/dose'));
app.use('/', routes_volontaire);
app.use('/api/volontaires', require('./routes/volontaire'));

//app.get("/api/auth/confirm/:confirmationCode", personneRoute.verifyUser)

// create Server
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`server running on port : ${port}`);
});
