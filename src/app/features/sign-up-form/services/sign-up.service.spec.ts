import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { SignUpData, ThumbnailUrl } from '../interfaces';

import { SignUpService } from './sign-up.service';

describe('SignUpService', () => {
    let service: SignUpService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [SignUpService]
        });
        service = TestBed.inject(SignUpService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should get users', inject(
        [HttpTestingController, SignUpService],
        (httpMock: HttpTestingController, signUpService: SignUpService) => {
            const mockData: SignUpData = {
                firstName: 'Test',
                lastName: 'McTester',
                email: 'test@test.com'
            };
            const mockThumbnailUrl: ThumbnailUrl = {
                albumId: 1,
                id: 1,
                title: 'Mock title',
                url: '',
                thumbnailUrl: ''
            };
            signUpService.signUp(mockData).subscribe(() => {});

            const mockReq = httpMock.expectOne('https://jsonplaceholder.typicode.com/photos/8');
            expect(mockReq.cancelled).toBeFalsy();
            expect(mockReq.request.method).toEqual('GET');
            mockReq.flush(mockThumbnailUrl);

            // Second request
            const mockReq2 = httpMock.expectOne('https://jsonplaceholder.typicode.com/users');
            expect(mockReq2.cancelled).toBeFalsy();
            expect(mockReq2.request.method).toEqual('POST');
            mockReq2.flush({});

            httpMock.verify();
        }
    ));
});
