/* eslint-disable no-console */
import { User as UserType } from '../generated';
import { User } from '../models';

export async function createUser(args: UserType) {
  const user = new User({ name: args.name });
  try {
    await user.save();
    return user.toJSON();
  } catch (error) {
    console.log(`There was an error`);
  }
}

export async function allUsers() {
  const users = await User.find({});
  return users;
}
