import { DataService } from './../data-service.service';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-tela-inicial',
  standalone: true,
  imports: [MatButtonModule, RouterModule, HeaderComponent],
  templateUrl: './tela-inicial.component.html',
  styleUrl: './tela-inicial.component.css'
})
export class TelaInicialComponent {

  title = 'Tela inicial';

  constructor(private dataService: DataService) {
    
  }

}
