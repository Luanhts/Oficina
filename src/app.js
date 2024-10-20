import express from 'express';
import connectDb from './config/dbConfig.js';
import workshopRouter from './routes/workshopRouter.js';
import vehicleRouter from './routes/vehicleRouter.js';
import maintenanceRouter from './routes/maintenanceRouter.js'

connectDb();

const app = express();
app.use(express.json());

app.use('/workshops', workshopRouter);
app.use('/vehicles', vehicleRouter);
app.use('/maintenance', maintenanceRouter);

app.listen(3000, () => console.log(`Server is runnig in the port 3000`));