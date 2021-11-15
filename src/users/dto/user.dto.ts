import { ApiProperty } from '@nestjs/swagger';
import { Event } from 'src/events/models';

export class CreateUserDto {
  @ApiProperty()
  id?: string;

  @ApiProperty({
    required: true,
  })
  email: string;

  @ApiProperty()
  consents?: Event[];
}

export class DeleteUserDto {
  @ApiProperty()
  id: string;
}
