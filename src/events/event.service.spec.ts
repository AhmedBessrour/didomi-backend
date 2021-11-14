import { Test, TestingModule } from '@nestjs/testing';
import { EventService } from 'src/events/event.service';
import { eventStub } from './__mocks__/events.stub';

describe('EventService', () => {
  let service: EventService;

  const mockEventService = {
    findAll: jest.fn().mockReturnValue([eventStub()]),
    insertOne: jest.fn().mockReturnValue(eventStub()),
    findOne: jest.fn().mockReturnValue(eventStub()),
    remove: jest.fn().mockReturnValue(eventStub()),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: EventService,
          useValue: mockEventService,
        },
      ],
    }).compile();

    service = module.get<EventService>(EventService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('insertOne', () => {
    describe('when insertOne is called', () => {
      let event;
      beforeEach(() => {
        event = service.insertOne({
          email: eventStub().email,
        });
      });

      it('should add one event', () => {
        expect(
          service.insertOne({
            email: eventStub().email,
          }),
        ).toEqual(event);
      });
    });
  });
});
