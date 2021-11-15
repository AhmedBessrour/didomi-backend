import { Test, TestingModule } from '@nestjs/testing';
import { LoggerService } from './logger.service';

describe('LoggerService', () => {
  let service: LoggerService;

  const mockLoggerService = {
    logAction: jest.fn().mockReturnValue({}),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: LoggerService,
          useValue: mockLoggerService,
        },
      ],
    }).compile();

    service = module.get<LoggerService>(LoggerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('logAction', () => {
    describe('when logAction is called', () => {
      let event;
      beforeEach(() => {
        event = service.logAction('userID', 'email_notifications', true);
      });

      it('should add event logs', () => {
        expect(
          service.logAction('userID', 'email_notifications', true),
        ).toEqual(event);
      });
    });
  });
});
