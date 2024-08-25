const express = require('express')
const {
    getWorkouts,
    getWorkout,
    createWorkout,
    deleteWorkout,
    updateWorkout
} = require('../controller/workoutController')

const router = express.Router()

// Get all workouts
router.get('/',getWorkouts)

// Get workout by id
router.get('/:id',getWorkout)

// Post a new workout
router.post('/',createWorkout)

// Delete a workout
router.delete('/:id',deleteWorkout)

// Update a workout
router.patch('/:id',updateWorkout)


module.exports = router

