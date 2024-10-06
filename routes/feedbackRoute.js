// const express = require('express');
// const router = express.Router();
// const feedbackController = require('../controllers/feedbackController');

// router.get('/api/feedback/:category', feedbackController.showFeedbackForm);
// router.post('/api/feedback/:category', feedbackController.submitFeedback);

// module.exports = router;


const express = require('express');
const router = express.Router();
const feedbackController = require('../controllers/feedbackController');

router.get('/api/feedback', feedbackController.showFeedbackForm);
router.post('/api/feedback', feedbackController.submitFeedback);

router.get('/api/thank-you', (req, res) => {
    res.render('thankyou');
});

module.exports = router;
