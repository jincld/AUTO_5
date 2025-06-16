// Importo todo lo de la libreria de Express
import express from "express";
import cookieParser from "cookie-parser";
import tasksRoutes from "./src/routes/tasksRoutes.js";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import fs from "fs";
import path from "path";

// Creo una constante que es igual a la libreria que importé
const app = express();

app.use(cors({
    origin: "*",
    credentials: true
  }));


//Que acepte datos en json
app.use(express.json());
//Que acepte cookies en postman
app.use(cookieParser());

const swaggerDocument = JSON.parse(
    fs.readFileSync(path.resolve("./auto_tasks.json"), "utf-8")
  );

// Definir las rutas de las funciones que tendrá la página web
app.use("/api/tasks", tasksRoutes);
app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
// Exporto la constante para poder usar express en otros archivos
export default app;