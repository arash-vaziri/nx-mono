import { HttpStatus } from '@nestjs/common';
import { IExceptionHandler } from './exception.interface';

export class FallbackHandler implements IExceptionHandler {
  canHandle(_exception: unknown): boolean {
    return true; // catch anything else
  }

  handle(_exception: unknown): { status: HttpStatus; message: string } {
    return { status: HttpStatus.INTERNAL_SERVER_ERROR, message: 'Unexpected error' };
  }
}