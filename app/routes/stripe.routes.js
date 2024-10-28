import express from 'express';
const router = express.Router();


import { customers } from '../controllers/stripe.controller.js';


router.post('/customers', express.raw({type: 'application/json'}), customers)


export default router;