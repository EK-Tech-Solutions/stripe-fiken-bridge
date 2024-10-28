import express from 'express';
const app = express();

const PORT = process.env.PORT || 3000;

import stripeRoutes from './routes/stripe.routes.js';
app.use('/stripe', stripeRoutes);

app.listen(PORT, () => {
  console.log(`stripe-fiken-bridge service listening on port ${PORT}`);
});