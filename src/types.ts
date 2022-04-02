import { User } from 'firebase/auth';
import { Key } from 'react';

export interface IError {
  error: any;
}

export interface IMain {
  authentication: any | undefined;
  user: User | null | undefined;
}

export interface ILogin extends IMain {
  key: Key | null | undefined;
}

export interface INavbar {}

export interface IChat {}

export interface IRouter extends IMain {}

export interface IContext {
  firebase: any;
  authentication: any;
  firestore: any;
}
