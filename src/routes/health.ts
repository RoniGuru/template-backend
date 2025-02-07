import { Router } from 'express';

export const healthRouter = Router();

healthRouter.get('/', (req, res) => {
  console.log('connected');
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});
