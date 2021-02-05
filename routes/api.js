const express = require('express');
const router = express.Router();

router.get('/workouts', (req, res) => {
    // get last workout
});

router.post('/workouts/', (req, res) => {
    // create new workout
})

router.put('/workouts/', (req, res) => {
    // put add exercise
});

router.get('/workouts/range', (req, res) => {
    // get workouts in range
});

module.exports = router;