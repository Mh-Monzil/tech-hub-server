import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      index: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    fullName: {
      type: String,
      required: true,
      trim: true,
      index: true,
    },
    profilePicture: {
      type: String, //cloudinary url
      default: "https://i.ibb.co.com/TwNQ3cH/user-Default-Avatar.jpg",
    },
    bio: {
      type: String,
    },
    skills: [
      {
        type: String,
      },
    ],
    role: {
      type: String,
      enum: [
        "admin",
        "candidate",
        "recruiter",
        "entrepreneur",
        "investor",
        "member",
      ],
      required: true,
      default: "member",
    },
    refreshToken: {
      type: String,
    },
  },
  { timestamps: true }
);

export const User = mongoose.model("User", userSchema);
