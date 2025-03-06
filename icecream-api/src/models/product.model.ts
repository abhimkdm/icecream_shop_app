import mongoose, { Document, Schema } from "mongoose";

interface IProductType extends Document {
  id: number;
  title: string;
  price: number;
  type: string;
}

const ProductSchema = new Schema<IProductType>(
  {
    id: { type: Number, required: true },
    title: { type: String, required: true },
    price: { type: Number, required: true },
    type: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

export const productModel = mongoose.model<IProductType>("Product", ProductSchema);