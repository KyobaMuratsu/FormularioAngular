import { Component, Input, OnInit, input } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatToolbarModule, MatIconModule, MatButtonModule, CommonModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {

  isDesktop = false
  isPhonePortrait = false;
  isPhoneLandscape = false;
  isTabletPortrait = false;
  isTabletLandscape = false;

  @Input() titleT = '';

  constructor(private responsive: BreakpointObserver){

  }

  ngOnInit() {
      this.responsive.observe([Breakpoints.Handset, Breakpoints.Tablet, Breakpoints.HandsetLandscape, Breakpoints.HandsetLandscape]).subscribe(result => {
        
        this.isPhonePortrait = false;
        this.isPhoneLandscape = false;
        this.isTabletPortrait = false;
        this.isTabletLandscape = false;

        const breakpoints = result.breakpoints

        if (breakpoints[Breakpoints.TabletPortrait]){
          console.log("screens matches Tablet Portrait")
          this.isTabletPortrait = true
        }

        if (breakpoints[Breakpoints.TabletLandscape]){
          console.log("screens match Tablet")
          this.isTabletLandscape = true
        }

        if (breakpoints[Breakpoints.HandsetPortrait]) {
          console.log("screens match PHONE");
          this.isPhonePortrait = true
        }

        if(this.isTabletPortrait === false){
            this.isDesktop = true;
        }else
            this.isDesktop = false;

      })
  }

}
