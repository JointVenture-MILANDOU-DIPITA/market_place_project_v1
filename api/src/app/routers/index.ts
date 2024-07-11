import { Router } from "express";;
import authRoutes from "./auth";
import paymentRoutes from "./payment";
import adminRoutesUser from "./admin";
import adminProducts from "./adminProducts";
import Shop from "./Shop";
import User from "./user";
import adminOrders from "./adminOrders";
import { createPaymentSession } from "../controllers/payment";

const rootRouter : Router = Router()

rootRouter.use("/auth", authRoutes)

rootRouter.use("/user", User)

rootRouter.use("/admin/orders", adminOrders)

//rootRouter.use("/shop/payment", paymentRoutes)

rootRouter.use("/shop", Shop)

rootRouter.use("/admin", adminRoutesUser)

rootRouter.use("/admin/products", adminProducts)

rootRouter.post('/create-payment-session', createPaymentSession)

rootRouter.get("/", (req, res)=>{
    //TODO Supprimer documentationURL
    //const documentationUrl = "https://5f98-92-88-171-222.ngrok-free.app/api-docs";
    return res.status(200).json({message : "Hi buddy, welcome to my marketplace API, get the doc here:"})
})



export default rootRouter