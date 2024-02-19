import { DataService } from './../data-service.service';
import { Component, OnInit } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon';
import {ErrorStateMatcher, provideNativeDateAdapter, DateAdapter, MAT_DATE_LOCALE, MAT_DATE_FORMATS} from '@angular/material/core';
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators,
  FormsModule,
  ReactiveFormsModule,
  FormGroup,
  FormBuilder,
  FormArray,
} from '@angular/forms';
import { HeaderComponent } from '../header/header.component';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';

const MY_DATE_FORMATS = {
  parse: {
     dateInput: {month: 'short', year: 'numeric', day: 'numeric'}
  },
  display: {
     dateInput: 'input',
     monthYearLabel: {year: 'numeric', month: 'short'},
     dateA11yLabel: {year: 'numeric', month: 'long', day: 'numeric'},
     monthYearA11yLabel: {year: 'numeric', month: 'long'},
  }
};

@Component({
  selector: 'app-pagina-cadastro',
  standalone: true,
  providers: [    { provide: MAT_DATE_LOCALE, useValue: 'pt' },
                  { provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS },
                  provideNativeDateAdapter()],
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule, MatDatepickerModule, FormsModule, ReactiveFormsModule, HeaderComponent, MatIconModule, MatButtonModule],
  templateUrl: './pagina-cadastro.component.html',
  styleUrl: './pagina-cadastro.component.css'
})


export class PaginaCadastroComponent implements OnInit {
  formulario: FormGroup = this.fb.group({});
  matcher = new MyErrorStateMatcher();
  title = 'Codefi';
  images: { url: string }[] = [];

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
  imagem = new FormControl([]);


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
      complemento: this.complemento,
      imagem: this.fb.array([])
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

  onFileSelected(event: any): void {
    const files: FileList = event.target.files;

    // Converte a lista de arquivos para um array
    const fileList: File[] = Array.from(files);

    for (let i = 0; i < files.length; i++) {
      const file: File = files[i];

      const reader = new FileReader();

      fileList.forEach((file: File) => {
        // Cria uma URL temporária para exibir a imagem
        const imageUrl = URL.createObjectURL(file);
  
        // Adiciona a imagem ao array de imagens
        this.images.push({ url: imageUrl });
      });

      reader.onload = (e) => {
        if (e.target && e.target.result) {
          const base64String = e.target.result as string;

          // Obtenha o controle FormArray do campo imagem
          const imagemControl = this.formulario.get('imagem') as FormArray;

          // Adicione um novo controle FormControl à matriz
          imagemControl.push(this.fb.control(base64String));

          // Exibe a representação em Base64 da imagem no console.log
          console.log('Imagem em Base64:', base64String);
        }
      };

      reader.readAsDataURL(file);
    }
  }
}

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
