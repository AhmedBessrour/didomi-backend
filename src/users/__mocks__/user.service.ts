import { userStub } from './users.stub';

export const UserService = jest.fn().mockReturnValue({
  findAll: jest.fn().mockReturnValue([userStub()]),
  findOne: jest.fn().mockReturnValue(userStub()),
  insertOne: jest.fn().mockReturnValue(userStub()),
  remove: jest.fn().mockReturnValue(userStub()),
});
