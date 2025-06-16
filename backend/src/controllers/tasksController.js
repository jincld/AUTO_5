// Controlador para el modelo tasks
const tasksController = {};
import tasksModel from "../models/tasks.js";

// GET - Obtener todas las tasks
tasksController.getTasks = async (req, res) => {
  try {
    const tasks = await tasksModel.find();
    res.json(tasks);
  } catch (error) {
    console.error('Error getting tasks:', error);
    res.status(500).json({ message: 'Error getting tasks' });
  }
};

// POST - Crear nuevo tasks
tasksController.createTasks = async (req, res) => {
  const { title, description, completed } = req.body;
  try {
    const newTask = new tasksModel({ title, description, completed });
    const taskSaved = await newTask.save();
    res.json({ message: "Task saved", tasks: taskSaved });
  } catch (error) {
    console.error('Error saving task:', error);
    res.status(500).json({ message: 'Error saving task' });
  }
};

// DELETE - Eliminar tasks por ID
tasksController.deleteTasks = async (req, res) => {
  try {
    const deletedTask = await tasksModel.findByIdAndDelete(req.params.id);
    if (!deletedTask) {
      return res.status(404).json({ message: "Task not found" });
    }
    res.json({ message: "Task deleted" });
  } catch (error) {
    console.error('Error deleting task:', error);
    res.status(500).json({ message: 'Error deleting task' });
  }
};

// PUT - Actualizar tasks por ID
tasksController.updateTasks = async (req, res) => {
  const { title, description, completed } = req.body;
  try {
    const updatedTask = await tasksModel.findByIdAndUpdate(
      req.params.id,
      { title, description, completed },
      { new: true }
    );
    if (!updatedTask) {
      return res.status(404).json({ message: "Task not found" });
    }
    res.json({ message: "Task updated", tasks: updatedTask });
  } catch (error) {
    console.error('Error updating task:', error);
    res.status(500).json({ message: 'Error updating task' });
  }
};

export default tasksController;