# stripe-fiken-bridge
A Stripe to Fiken bridge created using Node

## Features in progress
- Create customer in Fiken from Stripe Event customer.created (issue #1)
- Set a customer as inactive in Fiken from Stripe Event customer.deleted (issue #2)

## Enviroment variables

Use `PORT` to specify which port the service accepts connections to. Default is 3000.

Use `STRIPE_ENDPOINT_SECRET` for endpoint secret provided by Stripe. This is required.
