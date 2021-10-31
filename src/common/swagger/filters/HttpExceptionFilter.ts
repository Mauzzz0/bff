import { ArgumentsHost, Catch, ExceptionFilter, HttpStatus } from '@nestjs/common';
import { Request, Response } from 'express';
import { ErrorResponse } from '../types/ErrorResponse';
import { SuccessOrErrorEnum } from '../types/SuccessOrErrorEnum';

@Catch(Error)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: Error, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    // сначала наш код, затем нейм эксепшена если есть, затем UNTRACKED
    const code = exception['code'] || exception.name || 'UNTRACKED_APP_ERROR';
    const { message } = exception;

    const responseObject: ErrorResponse = {
      status: SuccessOrErrorEnum.Error,
      payload: { code, message },
    };
    response.status(HttpStatus.INTERNAL_SERVER_ERROR).json(responseObject);
  }
}
