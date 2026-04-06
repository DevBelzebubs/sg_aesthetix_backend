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
      method?: string;
      headers: Record<string, string | string[] | undefined>;
    }>();

    if (
      request.path === '/api' ||
      request.path === '/api/' ||
      request.path?.startsWith('/api/tenants')
    ) {
      return next.handle();
    }

    if (request.path === '/api/appointments' && request.method === 'POST') {
      const publicTenantId = request.headers['x-tenant-id'] as string;

      if (!publicTenantId) {
        throw new ForbiddenException(
          'Header x-tenant-id is required for public bookings',
        );
      }

      request.tenantId = publicTenantId;
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
