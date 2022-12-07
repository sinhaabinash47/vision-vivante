import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  seodata: any;

  constructor(private http: HttpClient, private toastr: ToastrService) { }

  sendData(data: any) {
    return new Promise((resolve, reject) => {
      this.http.post(environment.contactformurl + 'contact_us.php', JSON.stringify(data), {
        headers: new HttpHeaders({ 'Content-Type': 'application/json;' })
      }).subscribe(res => {
        resolve(res);
      }, (err: HttpErrorResponse) => {
        reject(err);
      });
    });
  }

  sendQuoteData(data: any) {
    return new Promise((resolve, reject) => {
      this.http.post(environment.contactformurl + 'get_quote.php', data
      ).subscribe(res => {
        resolve(res);
      }, (err: HttpErrorResponse) => {
        reject(err);
      });
    });
  }

}
