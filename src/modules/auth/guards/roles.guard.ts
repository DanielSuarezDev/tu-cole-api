import {
  Injectable,
  CanActivate,
  ExecutionContext,
  ForbiddenException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { UserService } from 'src/modules/user/user.service';
import { User } from 'src/database/schemas';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    private userService: UserService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const requiredRoles = this.reflector.get<string[]>(
      'roles',
      context.getHandler(),
    );
    if (!requiredRoles) {
      return true;
    }

    const request = context.switchToHttp().getRequest();
    const userId = request.user.user_id;

    const user: User = await this.userService.findByUserId(userId);

    if (!user || !requiredRoles.includes(user.role)) {
      throw new ForbiddenException(
        'Acceso denegado debido a roles insuficientes.',
      );
    }

    return true;
  }
}
