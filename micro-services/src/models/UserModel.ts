import mongoose, {Document, Schema} from "mongoose";
import bcrypt from 'bcryptjs';

export interface IUser extends Document {
    username: String;
    email: string;
    password: string;
    matchPassword(password: string): Promise<boolean>;
}

const userSchema: Schema<IUser> = new Schema({
    username : {
        type: String, 
        required: [true, 'UserName is requried'],
        unique: true,
        minlength: 3,
        maxlength: 20
    },
    email: {
        type: String,
        requried: [true, 'Email is required'], 
        unique: true,
        match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    },
    password: {
        type: String, 
        required: [true, 'Email is required'],
        minlength: 6
    }
});

// Hash password before saving user to DB
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();
  
    try {
      const salt = await bcrypt.genSalt(10);
      this.password = await bcrypt.hash(this.password, salt);
      next();
    } catch (error) {
      next();
    }
  });

userSchema.methods.matchPassword = async function (password: string): Promise<boolean> {
    return await bcrypt.compare(password, this.password)
};

const User = mongoose.model<IUser>('User', userSchema);

export default User;