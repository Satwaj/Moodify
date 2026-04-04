const songModel = require(`../models/songs.model`)
const storageService = require(`../services/storage.services`)
const id3 = require(`node-id3`)

async function uploadSong(req,res){

  const songBuffer = req.file.buffer
  const {mood} = req.body

  const tags = id3.read(songBuffer)
  const title = tags.title || `track-${Date.now()}`
  const imageBuffer = tags?.image?.imageBuffer
  const fallbackPosterUrl = process.env.DEFAULT_POSTER_URL || "https://placehold.co/600x600/png?text=Moodify"

  const songUploadPromise = storageService.uploadSong({
    buffer:songBuffer,
    filename:title + `.mp3`,
    folder:"/cohort-2/moodify/songs"
  })

  const posterUploadPromise = imageBuffer
    ? storageService.uploadFile({
        buffer:imageBuffer,
        filename:title + `.jpg`,
        folder:"/cohort-2/moodify/posters"
      })
    : Promise.resolve({ url: fallbackPosterUrl })

  const [songFile, posterFile] = await Promise.all([
    songUploadPromise,
    posterUploadPromise
  ])

  const song = await songModel.create({
    title,
    url:songFile.url,
    posterUrl:posterFile.url,
    mood
  })

  res.status(201).json({
    message:"Song uploaded successfully",
    song
  })
}

async function getSongs(req,res){

  const {mood} = req.query

  if (!mood) {
    const songs = await songModel.find({}).sort({ createdAt: -1 })

    return res.status(200).json({
      message:"Songs fetched successfully",
      songs
    })
  }

  const randomSongs = await songModel.aggregate([
    { $match: { mood } },
    { $sample: { size: 1 } }
  ])

  const song = randomSongs[0] || null

  res.status(200).json({
    message:"Songs fetched successfully",
    song
  })
}

module.exports = {
  uploadSong,
  getSongs
}