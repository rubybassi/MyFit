const express = require("express");
const router = express.Router();
const { Workout } = require("../models");

// get last workout
router.get("/workouts", (req, res) => {
  Workout.find({})
    .then(results => {
      console.log(`all workouts ${results}`);
      res.send(results);
    })
    .catch(error => {
      res.status(500).send(error);
    });
});

// post new exercise
router.post('/workouts', ({ body }, res) => {
  console.log(`workout created ${body}`);
  Workout.create(body)
      .then(results => {
        res.send(results);
      })
      .catch((error) => {
        res.status(500).send(error);
      });
});

// update new exercise
router.put("/workouts/:id", ({ body, params }, res) => {
  console.log(`updated workout data ${body}`)
  //  If you set new: true, findOneAndUpdate() will instead give you the object after update was applied.
  Workout.findByIdAndUpdate(params.id,{ $push: { exercises: body } },{ new: true })
    .then(results => {
      res.send(results);
    })
    .catch(error => {
      res.status(500).send(error);
    });
});

// get workouts in range - lookup aggregate query function to use here
router.get("/workouts/range", (req, res) => {
// $addFields outputs documents that contain all existing fields from the input documents and newly added fields.  
Workout.aggregate([{ $addFields: { totalDuration: { $sum: "$exercises.duration" } } }])
    .then(results => {
     // console.log(`aggregated range ${results}`);
      res.send(results);
    })
    .catch(error => {
      res.status(500).send(error);
    });
});

module.exports = router;