import { HttpClient } from '@angular/common/http';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit, OnChanges {

  // serviceData: any = {
  //   section1: {
  //     heading: 'Innovative Digital Web Solutions', content: 'Our credibility is defined by our inventions and refined by our smart work. Built on strategy, driven by data.',
  //   },
  //   section2: {
  //     heading: 'Our Working Process', content: 'We constantly refine our software development life cycle to work more efficiently and build software faster.',
  //     cards: [
  //       { url: 'assets/images/planning.png',text: 'Planning', content: 'In the earliest stage, by gathering all your ideas, expectations, and objectives, we come up with a proposal that includes a step-by-step executable task list and user stories further broken down into Deliverable Milestones. We have exposure to almost all Project Management tools like Jira, Asana, Trello, Mondey.com, Zoho, AirTable, etc… and Code Repositories like GitHub and BitBucket'},
  //       { url: 'assets/images/design.png', text: 'Design', content: 'We use Figma, Adobe XD, PhotoShop, and Adobe AI extensively to present the User Interface in high (or low) fidelity designs to give an accurate idea to the clients of how the website, software, or application interface will exactly look after development. This covers branding expectations, user flow, and functional prototyping decreasing iterations during the programming phase.' },
  //       { url: 'assets/images/development.png', text: 'Development', content: 'We follow standard development practices and keep up to date with technologies. We use Waterfall as well as Agile and sometimes even Hybrid project development methodologies to achieve on-time and accurate project delivery.'},
  //       { url: 'assets/images/process-testing.png', text: 'Testing', content: 'Our skilled Testers do a detailed analysis to check the functionality and behavior of your software, application, or website. This process is intended to check and fix potential bugs, and the bug-free application is set to be delivered.' },
  //       { url: 'assets/images/support.png', text: 'Support', content: 'After a successful delivery, we always pay attention to your website performance and maintenance. We provide free support to clever all the work delivered for a fixed duration of time agreed in the planning phase as per the length and demand of the client. Further, we provide paid support on demand and we provide high priority to existing clients.'}
  //     ]
  //   },
  //   section3: {
  //     shadow: 'Services', heading: 'We design and build user centered software products.', content: 'We grow them with data driven consumer insights.',
  //     cards: [
  //       { url: 'assets/images/product-design.png',text: 'Product Design', content: 'UI/UX Design', design: 'We deliver the best experience when users interact with the application or website and improve the presentation and interactivity with our UI/UX Design technology. Our hand-to-hand technologies Adobe XD, Figma, Webflow, FlowMapp, etc..', link: 'Find out more'},
  //     ]
  //   },
  //   section4: {
  //     heading: 'Mobile Development',
  //     cards: [
  //       { url: 'assets/images/android-develop.png', text: 'Android Development', content: 'We specialize in delivering high-performing mobile apps for B2B, B2E, and B2C clients from various industries. We use high-end, latest technologies to develop Android apps in Swift, Kotlin, React Native, etc.', link:'Find out more', routerlink: '/services/android-development'},
  //       { url: 'assets/images/android-develop.png', text: 'iOS Development', content: 'We use modern programming tools and languages like Swift, SwiftUI, Objective-C, XCode, and CircleCI. Get full-stack iOS app products for iOS mobile devices, including iPhones, iPads, and Apple Watches. ', link:'Find out more', routerlink: '/services/ios-development'},
  //     ]
  //   },
  //   section5: {
  //     heading: 'Web Development',
  //     cards: [
  //       { url: 'assets/images/database-development.png', routerLink: '/services/frontend-development', text: 'Frontend Development', content: 'Our agile frontend development methodology practice tools and frameworks such as React, Angular, Vue JS, Svelte, Ember JS, and many more. We understand your business goals and create the best solutions for your', link:'Find out more'},
  //       { url: 'assets/images/database-development.png', routerLink: '/services/backend-development', text: 'Backend Development', content: 'We build extensible on-premise and cloud-based backend solutions for mobile, web, desktop, and IoT systems that scale with your growing business needs. Our backend development solutions include creating scalable back ends for enterprise systems, web apps, IoT, etc.', link:'Find out more'},
  //     ]
  //   },
  //   section6: {
  //     heading: 'Quality Assurance',content: 'Software testing & QA',
  //     cards: [
  //       { url: 'assets/images/testing.png', design: 'Our testing engineers provide outstanding QA testing services through a deep analysis that discovers any bugs in the earliest stages and fixes issues promptly. We are validating UI testing, API testing, and Functional testing.', link:'Find out more'},
  //     ]
  //   },
  //   section7: {
  //     heading: 'Digital marketing',content: 'Digital marketing',
  //     cards: [
  //       { url: 'assets/images/management.png', design: "Get more sales and revenue for your business with digital marketing services from Vision Vivante, a complete digital marketing agency that's helped small, mid-size, and larger enterprises. We deliver SEO, PPC, and SMO services.", link:'Find out more'},
  //     ]
  //   },
  //   section8: {
  //     heading: "Industries We're Proud To Have Served", heading1: 'Served',
  //     cards: [
  //       { url: 'assets/images/education.png', text: 'Education'},
  //       { url: 'assets/images/food-delivery.png', text: 'Food Delivery'},
  //       { url: 'assets/images/medical-pharmacy.png', text: 'Medical Pharmacy'},
  //       { url: 'assets/images/ecommerce.png', text: 'e-Commerce'},
  //       { url: 'assets/images/taxi-dispatch.png', text: 'Taxi Dispatch'},
  //       { url: 'assets/images/beauty-service.png', text: 'Beauty Services'},
  //       { url: 'assets/images/laundry.png', text: 'Laundry Services'},
  //       { url: 'assets/images/fleet-management.png', text: 'Fleet Management'},
  //     ]
  //   },
  //   section9: {
  //     heading: 'Got a project in mind? Get started now.',content: 'It’s a pleasure to have you on our website. Let us know if there’s an opportunity for us to do something together.',
  //     cards: [
  //       { link: "Let's Talk" },
  //     ]
  //   }
  // }

  constructor(private apiservice: ServiceService, private title: Title, private meta: Meta, private http:HttpClient, public route:ActivatedRoute) { 
    this.getpageData()
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  }

  serviceData:any;

  ngOnInit(): void {
    let data = this.apiservice.seodata.find((res: any) => res.page == 'Service');
    if (data) {
      this.title.setTitle(data.title);
      data.tags.forEach((tag: any) => {
        this.meta.updateTag({ name: tag.name, content: tag.content })
      });
    }
  }

  
  getpageData(){
    this.http.get("/assets/metatags/service-component.json").subscribe(res => {
      this.serviceData = res;
    })
  } 

}
