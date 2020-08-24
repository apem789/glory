import { AuthGuard } from "@nestjs/passport";

/** local策略 */
export class LocalGuardForAdmin extends AuthGuard('local') {}
