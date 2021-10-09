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
import verifyToken from "../helpers/jwtMiddleware.js";
import {
  signupValidation,
  signInValidation,
  profileValidation,
  paymentValidation,
} from "../helpers/validationMiddleware.js";

const router = express.Router();

/* authentication routes */
router.post("/auth/sign-in", signInValidation, signInController);
router.post("/auth/sign-up", signupValidation, signUpController);

/* user routes */
router.post(
  "/user/create-profile",
  verifyToken,
  profileValidation,
  createProfileController
);
router.post("/user/payment", verifyToken, paymentValidation, paymentController);

router.post("/user/get-chapters", verifyToken, getChaptersController);

export default router;
