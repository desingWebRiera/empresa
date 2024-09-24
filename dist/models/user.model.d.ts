import { Entity } from '@loopback/repository';
export declare class User extends Entity {
    hasAccount?: number;
    id: number;
    name?: string;
    [prop: string]: any;
    constructor(data?: Partial<User>);
}
export interface UserRelations {
}
export type UserWithRelations = User & UserRelations;
