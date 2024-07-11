import { Router } from "express";
import {getUser, login, logout, signup, updateUserInfo } from "../controllers/auth";
import { confirmEmail } from "../controllers/confirmEmail";
import { isAuthenticated } from "../middlewares/auth";

const authRoutes = Router()

authRoutes.post("/signup", signup)

authRoutes.post("/login", login)
//TODO removed isAuthenticated
authRoutes.post("/logout", logout)

authRoutes.get('/confirm-email', confirmEmail);

export default authRoutes