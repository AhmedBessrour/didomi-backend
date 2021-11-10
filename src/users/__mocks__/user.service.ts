import { userStub } from './users.stub';

export const UserService = jest.fn().mockReturnValue({
  getUsers: jest.fn().mockReturnValue([userStub()]),
  createUser: jest.fn().mockReturnValue(userStub()),
  deleteUser: jest.fn().mockReturnValue({}),
});
