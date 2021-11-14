import { eventStub } from './events.stub';

export const EventService = jest.fn().mockReturnValue({
  findAll: jest.fn().mockReturnValue([eventStub()]),
  insertOne: jest.fn().mockReturnValue(eventStub()),
  remove: jest.fn().mockReturnValue(eventStub()),
});
