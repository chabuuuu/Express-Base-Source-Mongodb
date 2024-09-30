import { Schema, model, Document, Model, Types } from 'mongoose';

// Define an interface representing a document in MongoDB.
export interface ICategory extends Document {
  id: Types.ObjectId;
  name: string;
  picture: string;

  createAt: Date;
  updateAt: Date;
  deleteAt: Date;
  createBy: string;
  updateBy: string;
}

// Create a Schema corresponding to the document interface.
const categorySchema = new Schema<ICategory>({
  id: { type: Schema.Types.ObjectId, auto: true },
  name: { type: String, required: true },
  picture: { type: String, required: false },

  createAt: { type: Date, default: Date.now() },
  updateAt: { type: Date, default: Date.now() },
  deleteAt: { type: Date, default: null },
  createBy: { type: String, required: false },
  updateBy: { type: String, required: false }
});

// Create a Model.
const Category = model<ICategory>('Category', categorySchema);

export default Category;
