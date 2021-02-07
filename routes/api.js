const express = require("express");
const router = express.Router();
const { Workout } = require("../models");

// get last workout
router.get("/workouts", async (req, res) => {
 await Workout.totalDuration()
    .then(results => {
      res.send(results);
    })
    .catch(error => {
      res.status(500).send(error);
    });
});

// post new exercise
router.post('/workouts', ({ body }, res) => {
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
await Workout.totalDuration()
    .then(results => {
      res.send(results);
    })
    .catch(error => {
      res.status(500).send(error);
    });
});

module.exports = router;