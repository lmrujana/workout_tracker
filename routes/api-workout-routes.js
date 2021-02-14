const db = require("../models");

module.exports = function(app){
    app.get("/api/workouts", (req, res) => {
        // console.log(req)
        db.Workout.find({})
        .then(dbWorkout => {
            // console.log(dbWorkout);
            dbWorkout.forEach(workout => workout.totalDuration = 14);
            console.log(dbWorkout);
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        })
    });

    app.put("/api/workouts/:id", (req, res) => {
        // console.log(req.body);
        const id = req.params.id;
        const exercise = req.body;
        console.log(exercise);
        db.Workout.findOneAndUpdate({_id: id}, { $push: { exercises: exercise } }, {new: true})
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        })
    });

    app.post("/api/workouts", (req, res) => {
        console.log(req.body);
        const workout = req.body;

        db.Workout.create(workout)
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        })
    });

    app.get("/api/workouts/range", (req, res) => {
        // console.log(req)
        db.Workout.find({})
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        })
    })
}