import { blog } from './blog';
import defs from './api';

export type apitype = typeof defs;
export const api = { blog } as apitype;
