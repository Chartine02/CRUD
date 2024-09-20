import itemModel from "../models/model.js";

const itemController = {
  createNewItem: async (req, res) => {
    try {
      const newItem = await itemModel.create(req.body);
      res.status(201).json({
        message: "Item successfully added...👌🏽😎",
        item: newItem,
      });
    } catch (error) {
      res.status(500).json({
        message: "Internal server error",
        error,
      });
    }
  },

  getAllItems: async (req, res) => {
    try {
      const items = await itemModel.find();
      res.status(200).json({
        message: "Successfully retrieved all items",
        items: items,
      });
    } catch (error) {
      res.status(500).json({
        message: "Error retrieving items",
      });
    }
  },

  getItemById: async (req, res) => {
    try {
      const item = await itemModel.findById(req.params.id);
      if (!item) {
        return res.status(404).json({
          message: "item not found",
        });
      }

      res.status(200).json({
        message: "item found",
        item: item,
      });
    } catch (error) {
      res.status(500).json({
        message: "Internal server error",
      });
    }
  },

  deleteItemById: async (req, res) => {
    const item = await itemModel.findByIdAndDelete(req.params.id);

    if (!item) {
      res.status(404).json({
        message: "item not found",
      });
    }
    res.status(200).json({
      message: "item successfully deleted",
    });
  },

  updateItemById: async (req, res) => {
    try {
      const updateditem = await itemModel.findByIdAndUpdate(
        req.params.id,
        req.body
      );

      if (!updateditem)
        res.status(404).json({
          message: "item not found",
        });

      res.status(200).json({
        message: "item successfully updated",
        items: updateditem,
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

export default itemController;
