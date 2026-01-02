import { onRequest } from "firebase-functions/v2/https";
import { logger } from "firebase-functions/logger"; // must be named import
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import Stripe from "stripe";

dotenv.config();

const stripe = new Stripe(process.env.STRIPE_KEY);

const app = express();
app.use(cors({ origin: true }));
app.use(express.json());

app.get("/", (req, res) => {
  logger.info("Hello endpoint called");
  res.status(200).json({ message: "Hello from Firebase!" });
});

app.post("/payments/create", async (req, res) => {
  const total = parseFloat(req.query.total) * 100; // convert dollars → cents
  if (!total || total <= 0) {
    return res.status(400).json({ error: "Invalid total amount" });
  }

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(total), // must be integer
      currency: "usd",
    });

    res.status(201).json({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Stripe payment creation failed" });
  }
});

export const api = onRequest(app);
