# stripe-fiken-bridge
A Stripe to Fiken bridge created using Node

## Features in progress
- Create customer in Fiken from Stripe Event customer.created ([#1](https://github.com/EK-Tech-Solutions/stripe-fiken-bridge/issues/1))
- Update customer in Fiken from Stripe Event customer.updated ([#2](https://github.com/EK-Tech-Solutions/stripe-fiken-bridge/issues/2))
- Set a customer as inactive in Fiken from Stripe Event customer.deleted ([#3](https://github.com/EK-Tech-Solutions/stripe-fiken-bridge/issues/3))

## Enviroment variables

Use `PORT` to specify which port the service accepts connections to. Default is 3000.

Use `STRIPE_ENDPOINT_SECRET` for endpoint secret provided by Stripe. This is required.
