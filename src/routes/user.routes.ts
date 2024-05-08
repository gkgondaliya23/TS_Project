import express from "express";
const userRoutes = express.Router();
import { upload } from "../helpers/imageUpload";
import { verifyToken } from "../helpers/verifyToken";
import {
  registerUser,
  loginUser,
  getProfile,
  changePassword,
  updateProfile,
} from "../controller/user.controller";

userRoutes.post("/register-user", upload.single("profileImage"), registerUser);
userRoutes.post("/login-user", loginUser);
userRoutes.get("/get-profile", verifyToken, getProfile);
userRoutes.put("/change-password", verifyToken, changePassword);
userRoutes.put("/update-profile", verifyToken, upload.single("profileImage"), updateProfile);

export default userRoutes;
