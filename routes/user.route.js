import { Router } from "express";
import { usersController } from "../controllers/users.controller.js";
const router = Router()

router.post('/register', usersController.userAgregar)

export default router;