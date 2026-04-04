const express = require('express');
const songsController = require('../controllers/songs.controller')
const upload = require(`../middlewares/upload.middleware`)

const router = express.Router()


//
//  /api/songs/
router.post(`/`, upload.single("song"), songsController.uploadSong )

router.get(`/`, songsController.getSongs)



module.exports = router