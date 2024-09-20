import mongoose from "mongoose";

const itemSchema = new mongoose.Schema(
  {
    names: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const itemModel = mongoose.model("Item", itemSchema);

export default itemModel;
