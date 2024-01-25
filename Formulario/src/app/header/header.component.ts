import { Component, Input, OnInit, input } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatToolbarModule, MatIconModule, MatButtonModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {

  isPhonePortrait = false;

  @Input() titleT = '';

  constructor(private responsive: BreakpointObserver){

  }

  ngOnInit() {
      this.responsive.observe([Breakpoints.HandsetPortrait, Breakpoints.TabletPortrait]).subscribe(result => {
        
        this.isPhonePortrait = false;
        const breakpoints = result.breakpoints

        if (breakpoints[Breakpoints.TabletPortrait]){
          console.log("screens matches")
        }

        if (breakpoints[Breakpoints.HandsetPortrait]) {
          console.log("true");
          this.isPhonePortrait = true
        }

      })
  }

}
