import express from 'express';
import methodOverride from 'method-override';
import mongoose from 'mongoose';
import { mongoDBURL, PORT } from './config.js';
import bookRoutes from './routes/bookRoutes.js';
import ejsMate from 'ejs-mate';
//import path from 'path';

const app = express();

//app.set('views', path.join(__dirname, 'views'));
app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

//Home Page '/'
app.get('/', (req, res) => {
    console.log(req);
    res.send('Welcome to the Home Page of BrewApps Books Project');
})

//Book Routes
app.use('/books', bookRoutes);

//MongoDB Connection
mongoose.connect(mongoDBURL)
    .then(() => {
        console.log('App Connected to Database..!!');
        app.listen(PORT, () => {
            console.log(`App is listening to Port: ${PORT}`);
        })
    })
    .catch((error) => {
        console.log(error);
    })

