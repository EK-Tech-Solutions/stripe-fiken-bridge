# stripe-fiken-bridge
A Stripe to Fiken bridge created using Node

## Usage

### Self-hosted

Node server that accepts webhook requests from Stripe and adds, updates or deactivates customers in Fiken accounting software (fiken.no). Container releases are available so that you can host your own server.

### Hosted by EK Tech Solutions AS

If you would like us to host this service for you we will happily do so for a small fee. The service will be updated to latest release and availability monitored by our team. Contact us at [post@ekts.no](mailto:post@ekts.no) for more information.


## Features in progress
- Create customer in Fiken from Stripe Event customer.created ([#1](https://github.com/EK-Tech-Solutions/stripe-fiken-bridge/issues/1))
- Update customer in Fiken from Stripe Event customer.updated ([#2](https://github.com/EK-Tech-Solutions/stripe-fiken-bridge/issues/2))
- Set a customer as inactive in Fiken from Stripe Event customer.deleted ([#3](https://github.com/EK-Tech-Solutions/stripe-fiken-bridge/issues/3))


## Enviroment variables

Use `PORT` to specify which port the service accepts connections to. Default is 3000.

Use `STRIPE_ENDPOINT_SECRET` for endpoint secret provided by Stripe. This is **required**.

Use `FIKEN_API_TOKEN` for personal API token created in Fiken. This is **required**.

Use `FIKEN_COMPANY_SLUG` which company to add customers in Fiken. This is **required**.

### Example enviroment file

```
PORT=3001
STRIPE_ENDPOINT_SECRET=whsec_...
FIKEN_API_TOKEN=aaa-bbb-ccc
FIKEN_COMPANY_SLUG=demo-company-as
```
