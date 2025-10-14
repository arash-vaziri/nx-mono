import { ExceptionFilter, Catch, ArgumentsHost } from '@nestjs/common';
import handlers from '../exceptions';

@Catch()
export class GlobalExceptionFilter implements ExceptionFilter {
  
    private handlers = handlers;

  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();

    const handler = this.handlers.find((h) => h.canHandle(exception))!;
    const { status, message } = handler.handle(exception);

    response.status(status).json({
      success: false,
      statusCode: status,
      path: request.url,
      timestamp: new Date().toISOString(),
      message,
    });
  }
}