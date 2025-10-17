import * as fs from 'fs';
import * as path from 'path';
import { IExceptionHandler } from './exception.interface';
import { DatabaseExceptionHandler } from './db.exceptions';
import { FallbackHandler } from './fallback.exception';
import { GenericErrorHandler } from './genericErrors.exception';
import { HttpExceptionHandler } from './http.exception';

const handlers: IExceptionHandler[] = [
  new DatabaseExceptionHandler,
  new HttpExceptionHandler,
  new GenericErrorHandler,
  new FallbackHandler,
];

export default handlers;