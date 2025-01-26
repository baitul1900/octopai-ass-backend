const mongoose = require("mongoose");
const { Schema } = mongoose;

const courseSchema = new Schema({
    title: String,
    description: String,
    modules: [
      {
        moduleName: String,
        videos: [
          {
            title: String,
            url: String,
          },
        ],
      },
    ],
}, { versionKey: false, timestamps: true } );

const courseModel = mongoose.model("courses", courseSchema);

module.exports = courseModel;