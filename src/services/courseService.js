const Course = require('../models/course');

const updateCourse = async (courseId, updates) => {
  const course = await Course.findById(courseId);

  if (!course) throw new Error('Course not found');

  Object.keys(updates).forEach((key) => {
    course[key] = updates[key];
  });

  await course.save();
  return course;
};

module.exports = { updateCourse };
