import { Component, OnInit } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon';
import {ErrorStateMatcher, provideNativeDateAdapter} from '@angular/material/core';
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { HeaderComponent } from '../header/header.component';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';

@Component({
  selector: 'app-pagina-cadastro',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule, MatDatepickerModule, FormsModule, ReactiveFormsModule, HeaderComponent, MatIconModule],
  templateUrl: './pagina-cadastro.component.html',
  styleUrl: './pagina-cadastro.component.css'
})
export class PaginaCadastroComponent implements OnInit {
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  matcher = new MyErrorStateMatcher();

  constructor(private responsive: BreakpointObserver){

  }

  ngOnInit() {
      this.responsive.observe([Breakpoints.HandsetLandscape, Breakpoints.TabletPortrait]).subscribe(result => {

        const breakpoints = result.breakpoints

        if (breakpoints[Breakpoints.TabletPortrait]){
          console.log("screens matches")
        }

        if (breakpoints[Breakpoints.HandsetLandscape]) {

        }

      })
  }

}

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
