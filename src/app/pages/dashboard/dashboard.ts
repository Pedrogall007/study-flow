import { Component } from '@angular/core';

interface Materia {
  nome: string;
  status: 'concluida' | 'pendente' | 'futura';
}

@Component({
  imports: [],
  selector: 'app-dashboard',
  styleUrl: './dashboard.css',
  templateUrl: './dashboard.html',
})
export class Dashboard {
  get tarefasConcluidas() {
    return this.materias
      .filter((materia) => materia.status === 'concluida')
      .map((materia) => materia.nome);
}

  get tarefasPendentes() {
    return this.materias
      .filter((materia) => materia.status === 'pendente')
      .map((materia) => materia.nome);
}

  get tarefasFuturas() {
    return this.materias
      .filter((materia) => materia.status === 'futura')
     .map((materia) => materia.nome);
}

  get materiasCadastradas() {
    return this.materias.map((materia) => materia.nome);
}

  materias: Materia[] = [
  { nome: 'Português', status: 'concluida' },
  { nome: 'Matemática', status: 'concluida' },
  { nome: 'Física', status: 'pendente' },
  { nome: 'Artes', status: 'pendente' },
  { nome: 'Elementos da natureza', status: 'futura' },
];
}