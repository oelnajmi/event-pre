import { model, models, Schema } from 'mongoose';

const userSchema = new Schema(
  {
    firstName: String,
    lastName: String,
    userName: String,
    email: String,
    password: String,
  },
  {
    timestamps: true,
  }
);

const Users = models.user || model('user', userSchema);

export default Users;
