import { HttpException, HttpStatus } from '@nestjs/common';
import { IExceptionHandler } from './exception.interface';

export class HttpExceptionHandler implements IExceptionHandler {
  canHandle(exception: unknown): boolean {
    return exception instanceof HttpException;
  }

  handle(exception: unknown): { status: HttpStatus; message: string } {
    const ex = exception as HttpException;
    return { status: ex.getStatus(), message: ex.getResponse() as string };
  }
}