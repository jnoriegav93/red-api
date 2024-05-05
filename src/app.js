import express from 'express';
import morgan from 'morgan';
import authRoutes from './routes/authRoutes.js';
import hiloRoutes from './routes/hiloRoutes.js';
import mufaRoutes from './routes/mufaRoutes.js';
import onuRoutes from './routes/onuRoutes.js';
import posteRoutes from './routes/posteRoutes.js';
import splitterRoutes from './routes/splitterRoutes.js';
import cookieParser from 'cookie-parser';

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());

//Test
app.use((req, res, next) => {
    // res.header('Access-Control-Allow-Origin', 'http://127.0.0.1:5500');
    res.header('Access-Control-Allow-Origin', 'https://jnoriegav93.github.io');
    // res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});
app.use('/api', 
        authRoutes,
        hiloRoutes,
        mufaRoutes,
        onuRoutes,
        posteRoutes,
        splitterRoutes
    );
export default app;


// 1:46:20 https://www.youtube.com/watch?v=NmkY4JgS21A&ab_channel=FaztCode


