import express from "express";
import { createActivity, getActivities } from "../controllers/activityController.js";
import { protect } from "../middleware/authMiddleware.js";
import { authorizeRoles } from "../middleware/roleMiddleware.js";

const router = express.Router();

router.post("/", protect, createActivity);
router.get("/", protect, authorizeRoles("admin"), getActivities);

export default router;
