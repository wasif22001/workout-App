const express = require('express')
const {
    getWorkouts,
    getWorkout,
    createWorkout,
} = require('../controller/workoutController')

const router = express.Router()

// Get all workouts
router.get('/',getWorkouts)

// Get workout by id
router.get('/:id',getWorkout)

// Post a new workout
router.post('/',createWorkout)

// Delete a workout
router.delete('/:id',(req,res) => {
    res.json(
        {
            msg:'Delete a workout'
        }
    )
})

// Update a workout
router.patch('/:id',(req,res) => {
    res.json(
        {
            msg:'Update a workout'
        }
    )
})


module.exports = router

