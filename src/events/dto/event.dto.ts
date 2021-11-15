import { ApiProperty } from '@nestjs/swagger';

import { IConsent } from 'src/common/models';

export class UpdateConsentsDto {
  @ApiProperty({
    type: Object,
  })
  user: {
    id: string;
  };

  @ApiProperty({
    type: [Object],
  })
  consents?: IConsent[];
}
