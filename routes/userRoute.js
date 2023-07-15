const express = require("express");
const router = express.Router();

const {
  createPredictions,
  getMyPredictions,
  getOthersPredictions,
  getStandings,
  getUpcomingEventEvent,
  getProfile,
  updateProfile,
  editPredictions,
} = require("../controllers/userControllers");
const { authenticate } = require("../middlewares/authentication");

router.get("/", getUpcomingEventEvent);
router.get("/standings/:eventId", getStandings);

router.use(authenticate);

router.route("/predictions").post(createPredictions).get(getMyPredictions);

router
  .route("/predictions/:userPredictionsId")
  .get(getOthersPredictions)
  .patch(editPredictions);

router.route("/profile").get(getProfile).patch(updateProfile);

module.exports = router;
