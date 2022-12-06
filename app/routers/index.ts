import { Router } from 'express';
const router = Router();
router.get('/', function(req:any, res:any, next:any) {
  res.json('index');
});

export default router;
