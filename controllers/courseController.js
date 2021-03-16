const Course = require('../models/Course')

const create_course = async (req, res, next) => {
    const { course_name, batch, organization } = req.body
    try {
        const createdCourse = await Course.create({ course_name, batch, organization })
        res.json(createdCourse)
    } catch (e) {
        res.status(500).send('Error while creating the course')
    }
}

module.exports = {
    create_course
}