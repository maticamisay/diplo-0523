const express = require("express");
const userRoutes = require("./routes/user-routes");
const app = express();
const PORT = 3000;

app.use(express.json());

app.use("/users", userRoutes);

app.listen(PORT, () => {
  console.log(`Server on port http://localhost:${PORT}`);
});
