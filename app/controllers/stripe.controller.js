import stripe from 'stripe';

export const customers = async (req, res) => {
  console.log('POST /stripe/customers');

  let event;
  try {
    event = stripe.webhooks.constructEvent(req.body, req.headers['stripe-signature'], process.env.STRIPE_ENDPOINT_SECRET);
  } catch (error) {
    console.error(error);
    res.status(400).send(`Webhook Error: ${error.message}`);
    return;
  }
  console.log(event);

  switch (event.type) {
    case 'customer.created':
      {
        // Code to handle customer.created event
        // TODO: #1 REST API call to create customer in Fiken
        break;
      }
    case 'customer.updated':
      {
        // Code to handle customer.updated event
        // TODO: #2 REST API call to update customer in Fiken
        break;
      }
    case 'customer.deleted':
      {
        // Code to handle customer.deleted event
        // TODO: #3 REST API call to set customer as inactive in Fiken
        break;
      }
    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  res.status(200).json();
}