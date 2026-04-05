import { CanActivate, ExecutionContext, ForbiddenException, Injectable } from '@nestjs/common';

@Injectable()
export class TenantGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest<{ tenantId?: string }>();

    if (!request.tenantId) {
      throw new ForbiddenException('Tenant context missing');
    }

    return true;
  }
}
