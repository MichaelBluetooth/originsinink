import { HttpClient } from '@angular/common/http';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  modalRef: BsModalRef;

  mailMessage: string;
  mailTitle: string;

  contactData: any = {
    name: '',
    email: '',
    subject: '',
    message: '',
  };

  constructor(private http: HttpClient, private modalService: BsModalService) {}

  ngOnInit() {}

  sendMail(template: TemplateRef<any>) {
    this.http
      .post('/sendmail.php', JSON.stringify(this.contactData), {
        responseType: 'text',
      })
      .subscribe(
        (response) => {
          this.contactData = { name: '', email: '', subject: '', message: '' };
          this.mailTitle = 'Your message was sent';
          this.mailMessage =
            'Thank you for your message! We will get back to you soon.';
          this.modalRef = this.modalService.show(template);
        },
        (response) => {
          this.mailTitle = 'An error occured';
          this.mailMessage =
            'An unexpected error occured while sending your message. Please try sending it again later, or give us a call!';
          this.modalRef = this.modalService.show(template);
        }
      );
  }
}
