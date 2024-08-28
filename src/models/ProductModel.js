//models\ProductModel.js
import mongoose, { Schema } from "mongoose";

const topicSchema = new Schema(
  {
    name: { type: String, required: true },
    image: { type: String, required: true },
    implement: { type: String, required: true },
    email: { type: Number, required: true },
    mobile: { type: String, required: true },
    bunget: { type: Number, required: true },
    year: { type: Number, required: true },
    eveluation: { type: Number, required: true },
    weak: { type: String, required: true },
    strength: { type: String, required: true },
    development: { type: String, required: true },
    suggestion: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const ProductModel =
  mongoose.models.Product || mongoose.model("Product", topicSchema);

export default ProductModel;
