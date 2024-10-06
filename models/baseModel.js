const db = require('../config/database');

const BaseModel = {
    async findStudentOrEmployeeById(uniqueId) {
        const [rows] = await db.query('SELECT * FROM base_table WHERE unique_id = ?', [uniqueId]);
        return rows[0];
    }
};

module.exports = BaseModel;
