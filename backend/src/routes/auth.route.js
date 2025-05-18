import express from "express";
import { signup, logout, signup } from "../controllers/auth.controller.js"

const router = express.Router();

router.post("/signup", )

router.post("/login", (req, res) => {
    res.send("login route");
})

router.get("/logout", (req, res) => {
    res.send("logout route");
})

export default router;