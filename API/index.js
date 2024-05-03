import express from 'express';
import cors from 'cors';
import Router from './routers/router.js';
const app = express();
const PORT = 1000;

app.use(cors());
app.use(express.json());
app.use('/api', Router);


app.listen(PORT, ()=>{
  console.log(`Server running on http://localhost:${PORT}`);
});
