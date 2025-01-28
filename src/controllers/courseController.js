const { updateCourse } = require('../services/courseService.js');

const updateCourseHandler = async (req, res) => {
  try {
    const updatedCourse = await updateCourse(req.params.courseId, req.body);
    res.json({ success: true, course: updatedCourse });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = { updateCourseHandler };
