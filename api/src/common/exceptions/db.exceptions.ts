import { QueryFailedError } from 'typeorm';
import { HttpStatus } from '@nestjs/common';
import { IExceptionHandler } from './exception.interface';

export class DatabaseExceptionHandler implements IExceptionHandler {
  canHandle(exception: unknown): boolean {
    return exception instanceof QueryFailedError;
  }

  handle(exception: unknown): { status: HttpStatus; message: string } {
    const err: any = exception;
    let status = HttpStatus.BAD_REQUEST;
    let message = err.message;

    // Map unique constraint errors
    if (err.code === 'SQLITE_CONSTRAINT' || err.code === '23505') {
      status = HttpStatus.CONFLICT;
      message = 'Duplicate key error';
    }

    return { status, message };
  }
}