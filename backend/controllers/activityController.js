import Activity from "../models/Activity.js";

export const createActivity = async (req, res) => {
  try {
    const { action } = req.body;
    const activity = await Activity.create({ userId: req.user.id, action });
    res.json(activity);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getActivities = async (req, res) => {
  try {
    const activities = await Activity.find().populate("userId", "username email");
    res.json(activities);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
