import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public service:ServiceService) { }

  headeData: any = {
    section1: {
      headers: [
        { url: "assets/images/online-course.png", text: " Tutors & Online courses"},
        { url: "assets/images/delivery.png", text: "Food Delivery" },
        { url: "assets/images/b2c.png", text: "E-Commerce B2C Websites" },
        { url: "assets/images/e-commerce-marketplace.png", text: "E-Commerce Marketplace"},
        { url: "assets/images/travel.png", text: "Travel" },
        { url: "assets/images/job.png", text: "Jobs" },
        { url: "assets/images/healthcare.png", text: "Healthcare" },
        { url: "assets/images/blog.png", text: "Blogs" },
        { url: "assets/images/booking.png", text: "Booking" },
        { url: "assets/images/odering.png", text: "Food Ordering" },
        { url: "assets/images/multilavel-marketing.png", text: "Multilevel marketing"},
        { url: "assets/images/pos.png", text: "POS ( Point of Sale)" },
        { url: "assets/images/crm.png", text: "CRM ( Customer Relationship Management)"},
        { url: "assets/images/saas.png", text: "SAAS ( Software as a Services )"},
        { url: "assets/images/beauty.png", text: "Beauty Services" },
        { url: "assets/images/social-networking.png", text: "Social Networking"},
        { url: "assets/images/money-tranfer.png", text: "Money Transfer" },
        { url: "assets/images/auction.png", text: "Auctions" },
        { url: "assets/images/laundry-services.png", text: "Laundry Services"},
        { url: "assets/images/insurance.png", text: "Insurance" },
        { url: "assets/images/pets-and-animals.png", text: "Pets and Animals"},
        { url: "assets/images/pickup-delivery.png", text: "Pickup And Delivery"},
        { url: "assets/images/banking-and-finance.png", text: "Banking and Finance"},
        { url: "assets/images/informative.png", text: "Informative" },
        { url: "assets/images/medicine.png", text: "Medicine Delivery" },
        { url: "assets/images/oil-and-gas.png", text: "Oil & gas" },
        { url: "assets/images/charity.png", text: "Charity" },
        { url: "assets/images/multisite.png", text: "Multi-site" },
        { url: "assets/images/taxi-dispatched.png", text: "Dispatch" },
        { url: "assets/images/sports-tourism.png", text: "Leisure, Sports and Tourism"},
        { url: "assets/images/babysitter-service.png", text: " Babysitters Services"},
        { url: "assets/images/personal-trainer.png", text: "Personal Trainer"},
        { url: "assets/images/trading.png", text: "Trading" },
        { url: "assets/images/car-rental.png", text: "Car Rental" }
      ],
      "image": [{ "url": "assets/images/admin-panel.png" }]
    }
  }

  ngOnInit(): void {

    let position = $(window).scrollTop();
    $(window).scroll(function () {
      let scroll = $(window).scrollTop();
      if (scroll && position && (scroll > position)) {
        $('.header-fixed').addClass('up');
      } else {
        $('.header-fixed').removeClass('up');
      }
      position = scroll;
    });

    $(document).ready(function () {
      $(".dropdown-close-btn").click(function () {
        $(".offcanvas-body.dropdown-menu").toggle();
      });
    });

    $(window).scroll(function() {
      var height = $(window).scrollTop();
      if(height && (  height > 50)) {
        $(".logo-fixed-section").addClass('fixed');
      } else{
        $(".logo-fixed-section").removeClass('fixed');
      }
    });

  }
}

