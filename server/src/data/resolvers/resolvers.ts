import { User } from '../generated';
import { allUsers, createUser } from './user';

export const resolvers = {
  Mutation: {
    createUser: (_: any, args: User) => createUser(args),
  },
  Query: {
    allUsers: () => allUsers(),
  },
};
