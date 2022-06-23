import { SetMetadata } from "@nestjs/common";



export const TOKEN = 'roles';

export const CustomHeader = (...roles: string[]) => SetMetadata(TOKEN, roles);