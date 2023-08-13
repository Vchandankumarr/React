const express = require("express")
const { connection } = require("./config/db")
const cors = require("cors")
const { RestaurantRouter } = require("./routes/restaurant.routes")
const { UserRouter } = require("./routes/user.routes")
const { OrderRouter } = require("./routes/order.routes")

const app = express()
app.use(express.json())
app.use(cors())


app.get("/", (req, res) => {
    res.status(400).send("Welcome to food delivery")
})

app.use(UserRouter)
app.use(RestaurantRouter)
app.use(OrderRouter)



app.listen(process.env.PORT, async () => {
    console.log(`Server runs at ${process.env.PORT}`);
    try {
      await connection
      console.log("Connected to DB Successfully");
    } catch (err) {
        console.log(err)
      console.log("Not connected to DB");
    }
  });