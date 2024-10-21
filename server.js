require('dotenv').config();

const express = require('express')
const morgan = require('morgan')
const { sequelize } = require('./BaseDatos/ConexionPostgres');
const { User } = require('./Models/usersModels');
const { Recipe } = require('./Models/recipesModels');



const products = [{ 'id': 1, 'name': 'laptop', 'price': 3000 }]

const port = process.env.PORT

const app = express()

// Middleware
app.use(morgan('dev'))
app.use(express.json())


app.get('/products', (req, res) => {
    res.json(products)
})

app.post('/products', (req, res) => {
    products.push({ ...req.body, id: products.length + 1 })


    res.json(products)
})

app.put('/products', (req, res) => {
    res.send('put')
})

app.delete('/products', (req, res) => {
    res.send('delete')
})

app.get('/products/:id', (req, res) => {
    console.log(req.params.id)
    res.send('un solo producto')
})

// Conexion a base de datos
sequelize
    .authenticate()
    .then(() => {
        console.log('Conexion exitosa');
        return sequelize.sync();
    })
    .then(() => {
        console.log('Modelos sincronizados');
        app.listen(port, () => {
            console.log(`Server listen on http://localhost:${port}`);
        });
    })
    .catch((error) => {
        console.error('Error en la conexion a la base de datos', error);
    });