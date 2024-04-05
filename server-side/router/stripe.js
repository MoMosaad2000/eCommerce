// stripe.js
const router = require("express").Router();
const stripe = require("stripe")(process.env.STRIPE_KEY);

router.post("/payment", (req, res) => {
  stripe.charges.create(
    {
      source: req.body.token,
      amount: req.body.amount,
      currency: "USD",
    },
    // Pass the Stripe secret API key in the Authorization header
    {
      apiKey: process.env.STRIPE_KEY,
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        console.error("Stripe error:", stripeErr);
        return res.status(500).json({ error: stripeErr.message });
      } else {
        res.status(200).json(stripeRes);
      }
    }
  );
});

module.exports = router;
