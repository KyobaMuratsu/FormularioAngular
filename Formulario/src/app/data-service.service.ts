import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private dadosSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  getDados(): Observable<any> {
    return this.dadosSubject.asObservable();
  }

  salvarDados(dados: any): void {
    this.dadosSubject.next(dados);
  }
}