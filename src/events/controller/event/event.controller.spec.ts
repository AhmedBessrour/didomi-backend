import { Test, TestingModule } from '@nestjs/testing';
import { EventController } from './event.controller';

describe('EventController', () => {
  let eventController: EventController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EventController],
    }).compile();

    eventController = module.get<EventController>(EventController);
  });

  it('should be defined', () => {
    expect(eventController).toBeDefined();
  });

  describe('Event related actions', () => {
    it('should create/update user events', () => {
      expect(eventController.addEvents()).toEqual('This action add events');
    });
  });
});
