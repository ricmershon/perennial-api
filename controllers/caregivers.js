const express = require('express')
const router = express.Router()
const Caregiver = require('../models/caregivers.js')
const SeedData = require('../models/seed.js')

router.get('/', (req, res) => {
  Caregiver.find({}, (err, foundCaregivers) => {
    if (err) {
      res.status(400).json({ error: err.message })
    }
    res.status(200).json(foundCaregivers)
  })
})

router.post('/', (req, res) => {
  Caregiver.create(req.body, (error, createdCaregiver) => {
      console.log(createdCaregiver);
    if (error) {
      res.status(400).json({ error: error.message })
    }
    res.status(200).send(createdCaregiver) //  .json() will send proper headers in response so client knows it's json coming back
  })
})

router.get('/seed', (req, res) => {
    Caregiver.create(SeedData, (err, newData) => {
        if (err) {
            console.log(err);
        }
        res.redirect('/perennial-api')
    })
})

router.get('/drop', (req, res) => {
    Caregiver.remove({}, (err, removedData) => {
        if (err) {
            console.log(err);
        }
        res.redirect('/perennial-api')
    })
})

router.put('/:id', (req, res) => {
  Caregiver.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedCaregiver) => {
    if (err) {
      res.status(400).json({ error: err.message })
    }
    res.status(200).json(updatedCaregiver)
  })
})

router.delete('/:id', (req, res) => {
  Caregiver.findByIdAndRemove(req.params.id, (err, deletedCaregiver) => {
    if (err) {
      res.status(400).json({ error: err.message })
    }
    res.status(200).json(deletedCaregiver)
  })
})


module.exports = router
