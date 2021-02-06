const express = require("express");
const router = express.Router();
const { Workout } = require("../models");

// get last workout
router.get("/workouts", async (req, res) => {
  await Workout.find({})
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
router.put("/workouts/:id", async ({ body, params }, res) => {
  console.log(`updated workout data ${body}`)
  //  If you set new: true, findOneAndUpdate() will instead give you the object after update was applied.
  await Workout.findByIdAndUpdate(params.id,{ $push: { exercises: body } },{ new: true })
    .then(results => {
      res.send(results);
    })
    .catch(error => {
      res.status(500).send(error);
    });
});

// get workouts in range - lookup aggregate query function to use here
router.get("/workouts/range", async (req, res) => {
// $addFields outputs documents that contain all existing fields from the input documents and newly added fields.  
await Workout.aggregate([{ $addFields: { totalDuration: { $sum: "$exercises.duration" } } }])
    .then(results => {
     // console.log(`aggregated range ${results}`);
      res.send(results);
    })
    .catch(error => {
      res.status(500).send(error);
    });
});

module.exports = router;