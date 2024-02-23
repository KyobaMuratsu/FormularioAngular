import { Component, Input, OnInit, input } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  providers: [],
  imports: [MatToolbarModule, MatIconModule, MatButtonModule, CommonModule, RouterLink, MatMenuModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {

  isPhonePortrait = false;
  isTabletPortrait = false;

  @Input() titleT = '';

  constructor(private responsive: BreakpointObserver){

  }

  ngOnInit() {
      this.responsive.observe([Breakpoints.Handset, Breakpoints.Tablet, Breakpoints.HandsetLandscape, Breakpoints.HandsetLandscape]).subscribe(result => {
        
        this.isPhonePortrait = false;
        this.isTabletPortrait = false;

        const breakpoints = result.breakpoints

        if (breakpoints[Breakpoints.TabletPortrait]){
          console.log("screens matches Tablet Portrait")
          this.isTabletPortrait = true
        }

        if (breakpoints[Breakpoints.HandsetPortrait]) {
          console.log("screens match PHONE");
          this.isPhonePortrait = true
        }

      })
  }

}
