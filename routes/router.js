import express from "express";
import itemController from "../controllers/controller.js";

const route = express.Router();

route.get("/", itemController.getAllItems);
route.post("/", itemController.createNewItem);
route.get("/:id", itemController.getItemById);
route.delete("/:id", itemController.deleteItemById);
route.put("/:id", itemController.updateItemById);

export default route;
