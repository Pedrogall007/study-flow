import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
interface Materia {
  nome: string;
  status: 'concluida' | 'pendente' | 'futura';
}

@Component({
  imports: [FormsModule],
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

novaMateriaNome = '';
novoMateriaStatus: 'concluida' | 'pendente' | 'futura' = 'pendente';

cadastrarMateria(){
  const nome = this.novaMateriaNome.trim();

  if(!nome){
    return
  }
  this.materias.push({
    nome,
    status: this.novoMateriaStatus
  })
  this.novaMateriaNome = '';
}

concluirMateria(materia: Materia){
  if (materia.status === 'pendente') {
    materia.status = 'concluida';
  }
}

iniciarMateria(materia: Materia){
  if (materia.status === 'futura'){
    materia.status = 'pendente';
  }


}

get materiasPendentes() {
  return this.materias.filter(
    (materia) => materia.status === 'pendente'
  );
}

get materiasFuturas(){
  return this.materias.filter(
    (materia) => materia.status === 'futura'
  )
}

}