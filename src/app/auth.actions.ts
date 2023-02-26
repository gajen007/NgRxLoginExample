import { createAction, props } from '@ngrx/store';
export const login = createAction('For Login');
export const logout = createAction('For Logout');
export const toSave = createAction('For Save', props<{ carryingData: string }>());
export const toErase = createAction('For Erase');