import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from 'src/users/user.controller';
import { UserService } from 'src/users/user.service';
import { userStub } from 'src/users/__mocks__/users.stub';

jest.mock('src/users/user.service');

describe('UserController', () => {
  let userController: UserController;
  let userService: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [UserService],
    }).compile();

    userController = module.get<UserController>(UserController);
    userService = module.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(userController).toBeDefined();
  });

  describe('getUsers', () => {
    describe('when getUsers is called', () => {
      it('should return users', () => {
        expect(userController.getUsers()).toStrictEqual([userStub()]);
      });
    });
  });

  describe('createUser', () => {
    describe('when createUser is called', () => {
      let user;
      beforeEach(() => {
        user = userController.createUser({
          email: userStub().email,
        });
      });

      it('should call userService.createUser', () => {
        expect(userService.insertOne).toHaveBeenCalledWith({
          email: userStub().email,
        });
      });

      it('should add one user', () => {
        expect(user).toStrictEqual(userStub());
      });
    });
  });

  describe('deleteUser', () => {
    describe('when deleteUser is called', () => {
      it('should call deleteUser.createUser', () => {
        userController.deleteUser({ id: userStub().id });
        expect(userService.remove).toHaveBeenCalledWith({
          id: userStub().id,
        });
      });
    });
  });
});
