import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { inject, TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { Api, IApiResponse } from './api';

const urlEndPoint = 'test';
const mockTestData: ITest = {
   id: 1,
   name: 'someName'
};

interface ITest {
   id: number;
   name: string;
}


describe('Api Class', () => {
   beforeEach(() => {
      TestBed.configureTestingModule({
         imports: [HttpClientTestingModule],
         providers: [HttpClient]
      });
   });

      it('should get the response with model',
         inject([HttpTestingController, HttpClient], (httpMock: HttpTestingController, http: HttpClient) => {
            const api: Api<ITest> = new Api<ITest>(http, urlEndPoint);
            const mockData = {
               data: mockTestData
            };
            api.get()
            .subscribe((response: IApiResponse) => {
               expect(response.data).toEqual(mockData.data);
            });
            const req = httpMock.expectOne(`${urlEndPoint}`);
            expect(req.request.method).toEqual('GET');
            req.flush(mockData);
         }));
   afterEach(inject([HttpTestingController], (httpMock: HttpTestingController) => {
      httpMock.verify();
   }));
});
