const mongoose = require("mongoose");

const UserPredictionSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
    },
    eventId: {
      type: mongoose.Schema.ObjectId,
      ref: "Event",
    },
    predictions: [
      {
        fightId: mongoose.Schema.ObjectId,
        winnerFighter: {
          type: String,
          enum: ["red", "blue"],
        },
        winMethod: {
          type: String,
          enum: ["KO/TKO", "Submission", "Decision"],
        },
      },
    ],
    score: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("UserPrediction", UserPredictionSchema);
