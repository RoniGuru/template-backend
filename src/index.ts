import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
import { healthRouter } from './routes/health';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(helmet());
app.use(cors());
app.use(express.json());

// Routes
app.use('/health', healthRouter);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
