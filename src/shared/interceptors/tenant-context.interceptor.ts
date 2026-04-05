import {
  CallHandler,
  ExecutionContext,
  ForbiddenException,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class TenantContextInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<unknown> {
    const request = context.switchToHttp().getRequest<{
      user?: { tenantId?: string };
      tenantId?: string;
      path?: string;
    }>();

    if (
      request.path === '/api' ||
      request.path === '/api/' ||
      request.path?.startsWith('/api/tenants')
    ) {
      return next.handle();
    }

    const tenantId = request.user?.tenantId;

    if (!tenantId) {
      throw new ForbiddenException('Tenant context missing');
    }

    request.tenantId = tenantId;
    return next.handle();
  }
}
