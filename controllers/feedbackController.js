const feedbackModel = require('../models/feedbackModel');

const subCategories = {
    'Labs': ['Physics Lab', 'Chemistry Lab', 'Workshop', 'BEE Lab','Graphics Lab','BE lab','Signal system lab','Java Lab','C Lab','C++ Lab','Python Lab','RDS Lab','Digital Electrnonics Lab'],
    'AdministrationBlock':['Waiting Halls','Seminar Halls','Mini Auditoriums','Workshop Halls','Restrooms'],
    'Sports': ['Equipment', 'Cricket Nets', 'Football Ground','Tabble Tennis Rooms','Indoor Games','Basketball Court','Volleyball Court','Badminton Courts','Throwball Court'],
    'ExaminationBranch':['Fee Issue','Exam Timetable','Seating Plan','Hallticket and Certificates','Others'],
    'Cafeteria': ['Food Quality', 'Timings', 'Menu','Juice Counter','Sanitization','Ice Cream Counter','Chat Counter'],
    'Library':['Books','Timings','Sanitization','Digital Resources','Computer Stations'],
    'PlacementCell':['NFS','Arjuna','Project Buildings','Placement Drive','Others'],
    'Infra':['Classrooms','Restrooms','Walkways','Security','Transport']

};

exports.showFeedbackForm = (req, res) => {
    const category = req.query.category; // Getting category from query parameter
    res.render('feedbackForm', { category,subCategories: subCategories[category] });
};

exports.submitFeedback = async (req, res) => {
    const { uniqueId, subCategory, feedbackType, feedback, suggestion } = req.body;
    const category = req.body.category; // Getting category from the form body
    console.log(category);

    try {
        // Check if user exists in the base table
        const userExists = await feedbackModel.checkUserExists(uniqueId);

        if (!userExists) {
            return res.status(400).send('<script>alert("Invalid ID, please enter a correct ID."); window.history.back();</script>');
        }

        // Insert feedback into the respective category table
        await feedbackModel.submitFeedback({ uniqueId, category, subCategory, feedbackType, feedback, suggestion });
        res.redirect(`/api/thank-you`);
    } catch (error) {
        console.error("Error submitting feedback:", error);
        res.status(500).send("Internal Server Error");
    }
};

