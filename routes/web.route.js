import { Router } from "express";
const router = Router()

import { webController } from "../controllers/web.controller.js";


router.get('/', webController.inicio)
router.get('/login', webController.login)
router.get('/register', webController.register)
export default router;