import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-dashboard',
  styleUrl: './dashboard.css',
  templateUrl: './dashboard.html',
})
export class Dashboard {
  tarefasConcluidas = ['Português', 'Matemática', 'História'];
  tarefasPendentes = ['Física', 'artes', 'Programação'];
  tarefasFuturas = ['Elementos da natureza','Cálculo 1']
  get materiasCadastradas() {
  return [
    ...this.tarefasConcluidas,
    ...this.tarefasPendentes,
    ...this.tarefasFuturas,
  ];}
}