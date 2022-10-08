import { SetMetadata } from '@nestjs/common';

export const ONLY_ADMIN_KEY = 'onlyAdmin';
export const OnlyAdmin = () => SetMetadata(ONLY_ADMIN_KEY, true);
