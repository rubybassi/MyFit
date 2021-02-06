const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  
  day: {
    type: Date,
    default: Date.now,
  },
  
  exercises: [
    {
      type: {
        type: String,
        trim: true,
        required: "Exercise type required",
      },
      name: {
        type: String,
        trim: true,
        required: "Exercise name type required",
      },
      duration: {
        type: Number,
        trim: true,
        required: "Value required",
      },
      weight: {
        type: Number,
      },
      reps: {
        type: Number,
      },
      sets: {
        type: Number,
      },
      distance: {
        type: Number,
      }
    },
  ],

});

const Workout = mongoose.model("Workout", WorkoutSchema, "workouts");

module.exports = Workout;
