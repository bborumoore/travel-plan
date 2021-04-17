const express = require('express').Router();
const location = require('../../models/location');

//returns all locations
express.get('/',function (req, res) {
    res.send('travelers')
})

//returns a single locations data
express.get('/',function (req, res) {
    res.send('')
})

//creates a location
express.post('/',function (req, res) {
    res.send('')
})

//removes a location
express.delete('/',function (req, res) {
    res.send('')
})
