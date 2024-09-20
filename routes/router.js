import express from "express";
import itemController from "../controllers/controller.js";

const route = express.Router();

route.post("/items/add", itemController.createNewItem);
route.get("/items", itemController.getAllItems);
route.get("/items/item/:id", itemController.getItemById);
route.delete("/items/item/:id", itemController.deleteItemById);
route.put("/items/item/:id", itemController.updateItemById);

export default route;
