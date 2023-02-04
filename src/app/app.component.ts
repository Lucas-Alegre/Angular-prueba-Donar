import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'AngularDonacion';
  url = 'https://mercado-pago-alkemi.vercel.app/checkout';


  //url ='https://mercado-pago-alkemi-wze7vs3.vercel.app/checkout';
  /*
  <input type="hidden" name="title" value="Donación a Ng Wallers">
      <input type="hidden" name="price" value="2500"> */
}
