import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

class Mfe1 extends HTMLElement {
  connectedCallback() {
    const element = document.createElement('app-root-mfe1');
    this.appendChild(element);
    bootstrapApplication(AppComponent, appConfig)
      .catch((err) => console.error(err));
  }
}

customElements.define('mfe1-web-component', Mfe1);