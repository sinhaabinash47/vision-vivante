import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  homeData:any;

  constructor(private http: HttpClient) {
    this.getpageData();
  }

  ngOnInit(): void {

  }
  getpageData(){
    this.http.get("/assets/metatags/footer-component.json").subscribe(res => {
      this.homeData = res;
    })
  }

}
