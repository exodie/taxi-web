import * as mongoose from 'mongoose';

export const CustomerSchema = new mongoose.Schema({
  username: String,
  email: String,
  firstname: String,
  lastname: String,
  phoneNumber: {
    numbers: String,
    statusConfirmed: Boolean,
    additional: String,
  },
  rating: Number,
  currentAddress: String,
});
