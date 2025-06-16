import { Schema, model } from "mongoose";

const tasksSchema = new Schema(
  {
    title: {
      type: String,
      required: true,  
    },
    description: { 
      type: String,
      required: true,  
    },
    completed: {
      type: Boolean,
      required: true
    },
  },
  {
    timestamps: true,  
    strict: true,  
  }
);

export default model("Tasks", tasksSchema);