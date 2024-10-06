// import db to exceute sql queryies from config folder
// const db = require('../config/database');

// const FeedbackModel = {
//     async insertFeedback(category, feedbackData) {
//         const tableName = `${category}_feedback_table`;
//         const query = `INSERT INTO ${tableName} (unique_id, sub_category, feedback_type, feedback, suggestion) VALUES (?, ?, ?, ?, ?)`;
//         await db.query(query, [
//             feedbackData.uniqueId,
//             feedbackData.subCategory,
//             feedbackData.feedbackType,
//             feedbackData.feedback,
//             feedbackData.suggestion
//         ]);
//     }
// };

// module.exports = FeedbackModel;

const pool = require('../config/database');

exports.checkUserExists = async (uniqueId) => {
    const [rows] = await pool.query('SELECT * FROM base_table WHERE unique_id = ?', [uniqueId]);
    return rows.length > 0;
};

exports.submitFeedback = async ({ uniqueId, category, subCategory, feedbackType, feedback, suggestion }) => {
    const sql = `INSERT INTO ${category}_feedback_table (unique_id, sub_category, feedback_type, feedback, suggestion) VALUES (?, ?, ?, ?, ?)`;
    await pool.query(sql, [uniqueId, subCategory, feedbackType, feedback, suggestion]);
};

