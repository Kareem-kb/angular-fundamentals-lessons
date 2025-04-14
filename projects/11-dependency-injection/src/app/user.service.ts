import { data, User } from './data';
import { inject, Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root',
})
export class UserService {
  private userData: User[] = data;

  constructor() {}

  getUserData(): Promise<User[]> {
    return new Promise((resolve) => {
      resolve(this.userData);
    });
  }
}
