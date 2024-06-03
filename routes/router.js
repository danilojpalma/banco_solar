import express from 'express';
import { home } from '../controllers/controller.js';
const router = express.Router();

router.get('/', home);



router.get('*', (req, res) => {
    res.status(404).send('Not Found');
});

export default router;