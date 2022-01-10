const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  addReactionThought,
  deleteReactionThought,
} = require('../../controllers/thoughtController.js');

// /api/Thoughts
router.route('/').get(getThoughts).post(createThought);

// /api/Thoughts/:ThoughtId
router.route('/:thoughtId').get(getSingleThought).put(updateThought).delete(deleteThought);

router.route(`/:thoughtId/reactions`).post(addReactionThought)

router.route(`/:thoughtId/reactions/:reactionId`).delete(deleteReactionThought)

module.exports = router;