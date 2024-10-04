import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class AboutComponent implements OnInit, OnDestroy {
  #listener: () => void = this.#handleEvent.bind(this);

  #handleEvent() {
    alert('about do MFE1 escutou a shell');
  }

  retornarPraShell() {
    //this.router.navigate(['/'])
    location.href = 'http://localhost:4200'; //MODO RUIM, porém, pra logout estaria OK
  }

  ngOnInit(): void {
    window.addEventListener('say-hello-from-shell-event', this.#listener);
  }

  ngOnDestroy(): void {
    window.removeEventListener('say-hello-from-shell-event', this.#listener);
  }
}
