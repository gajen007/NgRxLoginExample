import { createReducer, on } from '@ngrx/store';
import { login, logout, toSave, toErase } from './auth.actions';

export const authState = false;

export const authReducer = createReducer(
  authState,
  on(login, (state) => true),
  on(logout, (state) => false)
);

export const savedData = "Initial";

export const dataReducer = createReducer(
  savedData,
  on(toSave, (state,payload) => state=payload.carryingData),
  on(toErase, (state) => "")
);

