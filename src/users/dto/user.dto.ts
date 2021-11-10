export class CreateUserDto {
  id?: string;
  email: string;
  consents?: object[];
}

export class DeleteUserDto {
  id: string;
}
