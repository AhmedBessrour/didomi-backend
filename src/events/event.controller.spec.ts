import { Test, TestingModule } from '@nestjs/testing';
import { EventController } from 'src/events/event.controller';
import { EventService } from 'src/events/event.service';
import { eventStub } from 'src/events/__mocks__/events.stub';

jest.mock('src/events/event.service');

describe('EventController', () => {
  let eventController: EventController;
  let eventService: EventService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EventController],
      providers: [EventService],
    }).compile();

    eventController = module.get<EventController>(EventController);
    eventService = module.get<EventService>(EventService);
  });

  it('should be defined', () => {
    expect(eventController).toBeDefined();
  });

  describe('updateConsents', () => {
    describe('when updateConsents is called', () => {
      let event;
      beforeEach(() => {
        event = eventController.updateConsents({
          user: { id: eventStub().user.id },
        });
      });

      it('should call eventService.updateConsents', () => {
        expect(eventService.insertOne).toHaveBeenCalledWith({
          user: { id: eventStub().user.id },
        });
      });

      it('should return updated consents', () => {
        expect(event).toStrictEqual(eventStub());
      });
    });
  });
});
