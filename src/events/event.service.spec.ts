import { Test, TestingModule } from '@nestjs/testing';
import { EventService } from 'src/events/event.service';
import { eventStub } from 'src/events/__mocks__/events.stub';

describe('EventService', () => {
  let service: EventService;

  const mockEventService = {
    findAll: jest.fn().mockReturnValue([eventStub()]),
    insertOne: jest.fn().mockReturnValue(eventStub()),
    findOne: jest.fn().mockReturnValue(eventStub()),
    remove: jest.fn().mockReturnValue(eventStub()),
    updateOne: jest.fn().mockReturnValue(eventStub()),
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
        event = service.insertOne(eventStub());
      });

      it('should add one event', () => {
        expect(service.insertOne(eventStub())).toEqual(event);
      });
    });
  });

  describe('findOne', () => {
    describe('when findOne is called', () => {
      let event;
      beforeEach(() => {
        event = service.findOne('userID');
      });

      it('should call eventService.findOne', () => {
        expect(service.findOne).toHaveBeenCalledWith('userID');
      });

      it('should get user consents', () => {
        expect(service.findOne('userID')).toEqual(event);
      });
    });
  });

  describe('updateOne', () => {
    describe('when updateOne is called', () => {
      let event;
      beforeEach(() => {
        event = service.updateOne('userID', 'email_notifications', false);
      });

      it('should call eventService.updateOne', () => {
        expect(service.updateOne).toHaveBeenCalledWith(
          'userID',
          'email_notifications',
          false,
        );
      });

      it('should update user consents', () => {
        expect(
          service.updateOne('userID', 'email_notifications', false),
        ).toEqual(event);
      });
    });
  });
});
