import { DataService } from './../data-service.service';
import { Component, OnInit } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
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
  FormGroup,
  FormBuilder,
} from '@angular/forms';
import { HeaderComponent } from '../header/header.component';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';

@Component({
  selector: 'app-pagina-cadastro',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule, MatDatepickerModule, FormsModule, ReactiveFormsModule, HeaderComponent, MatIconModule, MatButtonModule],
  templateUrl: './pagina-cadastro.component.html',
  styleUrl: './pagina-cadastro.component.css'
})

export class PaginaCadastroComponent implements OnInit {
  formulario: FormGroup = this.fb.group({});
  matcher = new MyErrorStateMatcher();
  title = 'Cadastro';

  nome = new FormControl('')
  sobrenome = new FormControl('')
  datanascimento = new FormControl('')
  logradouro = new FormControl('')
  numerologradouro = new FormControl('')
  bairro = new FormControl('')
  cidade = new FormControl('')
  estado = new FormControl('')
  cep = new FormControl('')
  complemento = new FormControl('')
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  constructor(private responsive: BreakpointObserver, private fb: FormBuilder, private dataService: DataService){ }



  ngOnInit() {
    
    this.formulario = this.fb.group({
      nome: this.nome,
      sobrenome: this.sobrenome,
      datanascimento: this.datanascimento,
      email: this.emailFormControl,
      logradouro: this.logradouro,
      numerologradouro: this.numerologradouro,
      bairro: this.bairro,
      cidade: this.cidade,
      estado: this.estado,
      cep: this.cep,
      complemento: this.complemento

    })
    
    this.responsive.observe([Breakpoints.HandsetLandscape, Breakpoints.TabletPortrait]).subscribe(result => {

        const breakpoints = result.breakpoints

        if (breakpoints[Breakpoints.TabletPortrait]){
          console.log("screens matches")
        }

        if (breakpoints[Breakpoints.HandsetLandscape]) {

        }

      })
  }

  onSubmit() {
    if (this.formulario.valid) {
      const dadosFormulario = this.formulario.value;
      console.log('Dados do Formulario: ', dadosFormulario);
      this.dataService.salvarDados(dadosFormulario);
    } else {
      // Lidar com erros de validação
    }
  }
}


export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
