import mongoose from "mongoose";

const jobPostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    salary: {
      type: String,
      required: true,
    },
    companyName: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    postedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    jobTypes: {
      type: [String],
      required: true,
    },
  },
  { timestamps: true }
);

const JobPost = mongoose.model("JobPost", jobPostSchema);
module.exports = JobPost;
