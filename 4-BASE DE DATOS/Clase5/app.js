const express = require("express");
const app = express();
const port = 3000;
const SalesOrder = require("./models").SalesOrder;
const User = require("./models").User;

app.use(express.json());
app.get("/sales-order", async (req, res) => {
  const salesOrders = await SalesOrder.findAll({
    include: [
      {
        model: User,
        attributes: ["firstName"],
      },
    ],
    attributes: [
      "order_id",
      "order_date",
      // "total_order",
      // "createdAt",
      // "updatedAt",
    ],
  });
  res.json(salesOrders);
});
app.use("/users", require("./routes/user.routes"));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
