import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';

describe('UserController', () => {
  let userController: UserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
    }).compile();

    userController = module.get<UserController>(UserController);
  });

  it('should be defined', () => {
    expect(userController).toBeDefined();
  });

  describe('User related actions', () => {
    it('should return users"', () => {
      expect(userController.getUser()).toBe('This action returns all users');
    });

    it('should add users"', () => {
      expect(userController.addUser()).toBe('This action will get a user');
    });

    it('should add users"', () => {
      expect(userController.deleteUser()).toBe('This action will delete a user');
    });
  });
});
