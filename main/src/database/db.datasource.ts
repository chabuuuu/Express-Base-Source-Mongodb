import 'dotenv/config';
import 'reflect-metadata';
import mongoose, { Mongoose } from 'mongoose';

export class AppDataSourceSingleton {
  private static instance: Mongoose;

  private constructor() {}

  public static async getInstance(): Promise<Mongoose> {
    if (!AppDataSourceSingleton.instance) {
      AppDataSourceSingleton.instance = await mongoose.connect('mongodb://127.0.0.1:27017/test');
    }
    return AppDataSourceSingleton.instance;
  }
}

export const AppDataSource = AppDataSourceSingleton.getInstance();
