import 'dotenv/config'
import express from 'express';
import { engine } from 'express-handlebars';
import path from 'path';
import webRoutes from './routes/web.route.js'
import fileUpload from 'express-fileupload';
import userRoutes from './routes/user.route.js'
const __dirname = import.meta.dirname;

const app = express()

app.use(fileUpload());
app.use(express.static(path.join(__dirname, '/public')));
//MIDELWARES BODY
app.use(express.urlencoded({extended: true}))
app.use(express.json())
//HANDLEBARS CONFIG
app.engine('.hbs', engine({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname,'./views'));




app.use('/', webRoutes)
app.use('/users', userRoutes)

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`El servidor se inicio en http://localhost:${PORT}`)
})