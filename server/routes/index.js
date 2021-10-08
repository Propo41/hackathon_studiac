import express from "express";
import {
  signInController,
  signUpController,
} from "../controllers/authController.js";
import {
  createProfileController,
  getChaptersController,
  getLessonsController,
  paymentController,
} from "../controllers/userController.js";
import {
  signupValidation,
  signInValidation,
} from "../helpers/validationMiddleware.js";

const router = express.Router();

/* authentication routes */
router.post("/auth/sign-in", signInValidation, signInController);
router.post("/auth/sign-up", signupValidation, signUpController);

/* user routes */
router.post("/user/create-profile", createProfileController);
router.post("/user/payment", paymentController);

router.get("/user/get-chapters", getChaptersController);
router.get("/user/get-lessons", getLessonsController);

export default router;
