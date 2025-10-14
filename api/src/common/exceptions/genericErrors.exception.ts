import { HttpStatus } from '@nestjs/common';
import { IExceptionHandler } from './exception.interface';

export class GenericErrorHandler implements IExceptionHandler {
  canHandle(exception: unknown): boolean {
    return exception instanceof Error;
  }

  handle(exception: unknown): { status: HttpStatus; message: string } {
    const err = exception as Error;
    return { status: HttpStatus.INTERNAL_SERVER_ERROR, message: err.message };
  }
}