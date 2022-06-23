import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const AuthToken = createParamDecorator(
  (data: any, context: ExecutionContext) => {
    const request = context.switchToHttp().getRequest();

    const auth = request.rawHeaders[1];
    const token = auth.split(' ')[1];
    return String(token);
  },
);
