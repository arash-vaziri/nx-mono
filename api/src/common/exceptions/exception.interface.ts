import { HttpStatus } from '@nestjs/common';

export interface IExceptionHandler {
  canHandle(exception: unknown): boolean;
  handle(exception: unknown): { status: HttpStatus; message: string };
}
