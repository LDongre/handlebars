const express = require('express')
const app = express()
const hbs = require('express-handlebars')
const path = require('path')

app.use(express.static('public'))

app.set('view engine', 'handlebars')
app.engine('handlebars', hbs({
  defaultLayout: 'main',
  extname: '.handlebars',
  layoutsDir: path.join(__dirname + '/views/layouts'),
  partialsDir: path.join(__dirname + '/views/partials/'),
  //helpers: require('./helpers')
}))

//

//routing
app.get('/', (req, res) => {
  res.render('index', {
    title: 'homepage',
    content: "this is homepage",
    completed: true
  });
})

app.get('/dashboard', (req, res) => {
  res.render('dashboard', {
    title: 'dashboard',
    isListEnabled: false,
    author: {
      firstname: 'lovesh',
      lastname: 'dongre'
    }
  });
})

app.get('/lookup', (req, res) => {
  res.render('lookup', {
    title: 'lookup',
    user: {
      username: 'lovesh',
      age: 20,
      phone: '1234'
    }
  });
})

app.get('/contact', (req, res) => {
  res.render('contact', {
    title: 'contact',
    list: [
      ['one', 'two', 'three'],
      ['one', 'two', 'three']
    ],
    users: {
      username: 'lovesh',
      age: 20,
      phone: 123345
    }
  });
})

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'about',
    content: 'this is about'
  });
})

app.listen(3000, () => {
  console.log('running at 3000')
})
