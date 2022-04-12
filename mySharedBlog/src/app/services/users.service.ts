// import { Injectable } from '@angular/core';
// import {
//   collection,
//   doc,
//   docData,
//   Firestore,
//   getDoc,
//   setDoc,
//   updateDoc,
// } from '@angular/fire/firestore';
// import { filter, from, map, Observable, of, switchMap } from 'rxjs';
// import { IUser } from '../shared/user';
// import { AuthService } from './auth.service';

// @Injectable({
//   providedIn: 'root',
// })
// export class UsersService {
//   constructor(private firestore: Firestore, private authService: AuthService) {}

//   get currentUserProfile$(): Observable<IUser | null> {
//     return this.authService.currentUser$.pipe(
//       switchMap((user) => {
//         if (!user?.uid) {
//           return of(null);
//         }

//         const ref = doc(this.firestore, 'users', user?.uid);
//         return docData(ref) as Observable<IUser>;
//       })
//     );
//   }

//   addUser(user: IUser): Observable<void> {
//     const ref = doc(this.firestore, 'users', user.uid);
//     return from(setDoc(ref, user));
//   }

//   updateUser(user: IUser): Observable<void> {
//     const ref = doc(this.firestore, 'users', user.uid);
//     return from(updateDoc(ref, { ...user }));
//   }
// }