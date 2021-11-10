import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from 'src/users/user.service';
import { config } from 'src/constants';
import { userStub } from './__mocks__/users.stub';

describe('UserService', () => {
  let service: UserService;

  const mockUserRepository = {
    find: () => {
      return {
        exec: () => {
          return [userStub()];
        },
      };
    },
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserService,
        {
          provide: config.database.user_provider,
          useValue: mockUserRepository,
        },
      ],
    }).compile();

    service = module.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getUsers', () => {
    describe('when getUsers is called', () => {
      it('should return users', () => {
        expect(service.getUsers()).toEqual([userStub()]);
      });
    });
  });
});
