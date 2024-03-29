import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SignUpData } from '../interfaces';

@Injectable()
export class SignUpService {
    constructor(private http: HttpClient) {}

    /**
     * Send sign up data to API
     * @param {SignUpData} signUpData
     * @returns Observable<void>
     */
    public signUp(signUpData: SignUpData): Observable<void> {
        return this.http.post<void>('https://demo-api.now.sh/users', {
            ...signUpData
        });
    }
}
