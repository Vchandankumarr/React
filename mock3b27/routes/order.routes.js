const express = require("express");
const { OrderModel } = require("../models/order.models");
// const { UserModel } = require("../models/user.models");
// const { RestaurantModel } = require("../models/restaurant.models");

const OrderRouter = express.Router();

OrderRouter.get("/api/orders-get", async (req, res) => {
  try {
    const orders = await OrderModel.find();
    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve orders" });
  }
});

// Place an order
OrderRouter.post("/api/orders", async (req, res) => {
  try {
    const { userId, restaurantId, items, totalPrice, deliveryAddress, status } = req.body;

    const order = new OrderModel({
      userId,
      restaurantId,
      items,
      totalPrice,
      deliveryAddress,
      status,
    });

    await order.save();

    const populatedOrder = await OrderModel.findById(order._id)
      .populate("userId", "-password")
      .populate("restaurantId")
      .exec();

    res.status(201).json(populatedOrder);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to place order" });
  }
});

// Get a specific order by ID
OrderRouter.get("/api/orders/:id", async (req, res) => {
  try {
    const order = await OrderModel.findById(req.params.id);
    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }
    res.json(order);
  } catch (error) {
    res.status(500).json({ message: "Failed to retrieve order" });
  }
});

// Update the status of an order
OrderRouter.patch("/api/orders/:id", async (req, res) => {
  try {
    const { status } = req.body;
    const order = await OrderModel.findByIdAndUpdate(req.params.id, { status }, { new: true });
    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }
    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ message: "Failed to update order status" });
  }
});

module.exports = {
  OrderRouter,
};
