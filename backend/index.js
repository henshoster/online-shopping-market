const express = require("express");
const app = express();
const port = 3000;

const bodyParser = require("body-parser");
const cors = require("cors");

const costumerRouter = require("./routers/costumer_router");
const categoryRouter = require("./routers/category_router");
const productRouter = require("./routers/product_router");
const shoppingCartRouter = require("./routers/shopping_cart_router");
const cartItemRouter = require("./routers/cart_item_router");
const paymentRouter = require("./routers/payment_router");

app.use(cors());
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use("/costumer", costumerRouter);
app.use("/category", categoryRouter);
app.use("/product", productRouter);
app.use("/shopping-cart", shoppingCartRouter);
app.use("/cart-item", cartItemRouter);
app.use("/payment", paymentRouter);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
