import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-typeform-feedback-page',
  templateUrl: './typeform-feedback-page.component.html',
  styleUrls: ['./typeform-feedback-page.component.scss']
})
export class TypeformFeedbackPageComponent implements OnInit {
  form: string = '';
  url: SafeResourceUrl;

  constructor(private route: ActivatedRoute, private sanitizer: DomSanitizer, private titleService: Title) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.form = params['f'];
    });
    this.url = this.sanitizer.bypassSecurityTrustResourceUrl("https://form.typeform.com/to/"+this.form+"?typeform-medium=embed-snippet");
    this.titleService.setTitle('Feedback | Facts for Friends')
  }

}
