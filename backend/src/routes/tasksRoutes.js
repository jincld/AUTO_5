import express from "express";
import tasksController from "../controllers/tasksController.js"; 

const router = express.Router();

router
  .route("/")   
  .get(tasksController.getTasks)
  .post(tasksController.createTasks);

router
  .route("/:id")
  .put(tasksController.updateTasks)
  .delete(tasksController.deleteTasks);

export default router;