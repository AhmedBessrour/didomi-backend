import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from 'src/users/user.service';
import { userStub } from './__mocks__/users.stub';

describe('UserService', () => {
  let service: UserService;

  const mockUserRepository = {
    findAll: jest.fn().mockReturnValue([userStub()]),
    insertOne: jest.fn().mockReturnValue(userStub()),
    findOne: jest.fn().mockReturnValue(userStub()),
    remove: jest.fn().mockReturnValue(userStub()),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: UserService,
          useValue: mockUserRepository,
        },
      ],
    }).compile();

    service = module.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('findAll', () => {
    describe('when findAll is called', () => {
      it('should return users', () => {
        expect(service.findAll()).toEqual([userStub()]);
      });
    });
  });

  describe('insertOne', () => {
    describe('when insertOne is called', () => {
      let user;
      beforeEach(() => {
        user = service.insertOne({
          email: userStub().email,
        });
      });

      it('should add one user', () => {
        expect(
          service.insertOne({
            email: userStub().email,
          }),
        ).toEqual(user);
      });
    });
  });

  describe('findOne', () => {
    describe('when findOne is called', () => {
      let user;
      beforeEach(() => {
        user = service.findOne(userStub().id);
      });

      it('should call userService.createUser', () => {
        expect(service.insertOne).toHaveBeenCalledWith({
          email: userStub().email,
        });
      });

      it('should find one user', () => {
        expect(service.findOne(userStub().id)).toEqual(user);
      });
    });
  });

  describe('remove', () => {
    describe('when remove is called', () => {
      it('should remove one user', () => {
        service.remove({ id: userStub().id });
        expect(service.remove).toHaveBeenCalledWith({
          id: userStub().id,
        });
      });
    });
  });
});
