import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, switchMap } from 'rxjs';

import { SignUpData, ThumbnailUrl } from '../interfaces';

@Injectable()
export class SignUpService {
    constructor(private http: HttpClient) {}

    /**
     * Send sign up data to API
     * @param {SignUpData} signUpData
     * @returns Observable<void>
     */
    public signUp(signUpData: SignUpData): Observable<void> {
        return this.getThumbnail(signUpData.lastName).pipe(
            switchMap((thumbnailUrl: ThumbnailUrl) => {
                return this.http.post<void>('https://jsonplaceholder.typicode.com/users', {
                    ...signUpData,
                    thumbnailUrl
                });
            })
        );
    }

    /**
     * Get thumbnail from last name
     * @param {string} lastName
     * @returns Observable<string>
     */
    private getThumbnail(lastName: string): Observable<ThumbnailUrl> {
        return this.http.get<ThumbnailUrl>(`https://jsonplaceholder.typicode.com/photos/${lastName.length}`);
    }
}
