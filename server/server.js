const express = require("express");
const cors = require("cors");
const bodyparser = require("body-parser");
const dotenv = require("dotenv");
const path = require("path");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4242;

app.use(express.static("public"));
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
if (process.env.NODE_ENV !== "production") {
  app.use(cors({ origin: "http://localhost:4200", credentials: true }));
}

const stripe = require("stripe")(process.env.STRIPE_TOKEN);

const origin =
  process.env.NODE_ENV === "production"
    ? "https://perseverance-store.onrender.com"
    : `http://localhost:${PORT}`;

app.get("/test", async (req, res, next) => {
  res.status(200).json({
    text: "Hello World!",
  });
});

app.post("/checkout", async (req, res, next) => {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      shipping_address_collection: {
        allowed_countries: ["US", "CA"],
      },
      shipping_options: [
        {
          shipping_rate_data: {
            type: "fixed_amount",
            fixed_amount: {
              amount: 0,
              currency: "usd",
            },
            display_name: "Free shipping",
            // Delivers between 5-7 business days
            delivery_estimate: {
              minimum: {
                unit: "business_day",
                value: 5,
              },
              maximum: {
                unit: "business_day",
                value: 7,
              },
            },
          },
        },
        {
          shipping_rate_data: {
            type: "fixed_amount",
            fixed_amount: {
              amount: 1500,
              currency: "usd",
            },
            display_name: "Next day air",
            // Delivers in exactly 1 business day
            delivery_estimate: {
              minimum: {
                unit: "business_day",
                value: 1,
              },
              maximum: {
                unit: "business_day",
                value: 1,
              },
            },
          },
        },
      ],
      line_items: req.body.items.map((item) => ({
        price_data: {
          currency: "usd",
          product_data: {
            name: item.name,
            images: [item.product],
          },
          unit_amount: item.price * 100,
        },
        quantity: item.quantity,
      })),
      mode: "payment",
      success_url: `${origin}/success.html`,
      cancel_url: `${origin}/cancel.html`,
    });

    res.status(200).json(session);
  } catch (error) {
    next(error);
  }
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client", "dist", "client")));

  // app.get('*', (req, res) => {
  app.get("/{*any}", (req, res) => {
    res.sendFile(
      path.join(__dirname, "../client", "dist", "client", "index.html")
    );
  });
}

app.listen(PORT, () => console.log("Server is running on PORT:", PORT));
