import * as mongoose from 'mongoose';

export const DriverSchema = new mongoose.Schema({
  drivername: String,
  email: String,
  organization: String,
  firstname: String,
  lastname: String,
  phoneNumber: {
    numbers: String,
    statusConfirmed: Boolean,
    additional: String,
  },
  rating: Number,
  tripCount: Number,
  experienceCount: Number,
});
