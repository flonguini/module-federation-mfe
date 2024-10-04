import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class HomeComponent {
  retornarPraShell() {
    //this.router.navigate(['/'])
    location.href = 'http://localhost:4200'; //MODO RUIM, porém, pra logout estaria OK
  }
}
