import { Component, OnInit } from '@angular/core';
import { QuestionsService } from '../../questions.service';
import { Question } from '../question';

@Component({
  selector: 'app-questions',
  standalone: false,
  templateUrl: './questions.component.html',
  styleUrl: './questions.component.css'
})
export class QuestionsComponent implements OnInit {
  inicio: boolean = false;
  

  alternaticeCorrect: string ='';
  notas!: number;
  questions: Question[] = [];
  qtdQuestionTotal: number = 0;
  qtdRespondida: number = 0;
  actualQuestion: Question = new Question();
  answered: Question[] = [];
  selectdAlternative: string = '';
  questinIndex: number = 1;
  temas: string[];
  temaSelecionado: string = ''
  constructor(private service: QuestionsService) {
    this.temas = ['Geral', 'Produto cartesiano e conjuntos',
      'Polinômios', 'Relações e funções', 'Vetores',
      'Matrizes e sistemas de equações lineares', 'Derivadas e suas aplicações', 'Integrais e suas aplicações']
  }

  ngOnInit(): void {

  }
  submit(): void {
    this.notas=0;
    this.answered.forEach(q=> {
      const correct = q.alternatives.find(alt => alt.correta);
      q.alternaticaCorreta =correct?.texto;
      if(correct &&  correct.texto === q.respostaSelecionada){
        this.notas++;
      }
    })
    this.inicio=false;

  }
  salvarResposta(): void {
    this.actualQuestion.respostaSelecionada = this.selectdAlternative;
    if (!this.answered.includes(this.actualQuestion)) {
      this.answered.push(this.actualQuestion);
    }

    this.qtdRespondida++;
    if (this.qtdRespondida < this.qtdQuestionTotal) {
      this.actualQuestion = this.questions[this.qtdRespondida];
      this.selectdAlternative = this.actualQuestion.respostaSelecionada ?? '';
      this.questinIndex++;
    }


  }
  voltarQuestion(): void {
    this.qtdRespondida--;
    this.questinIndex--;
    this.actualQuestion = this.questions[this.qtdRespondida];
    this.selectdAlternative = this.actualQuestion.respostaSelecionada ?? '';

  }

  shuffleArray<T>(array: T[]): T[] {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array.slice(0, 25);
  }

  start(tema: string) {
    this.inicio=true;
    this.service.getQuestion().subscribe(
      response => {
        if (tema == '' || tema == 'Geral'){
          this.questions = this.shuffleArray(response);
        }else{
          this.questions = this.shuffleArray(
          response.filter(q => q.category === tema)
        );      
        }
        this.qtdQuestionTotal = this.questions.length;
        this.questions.forEach(q => {
          q.alternatives = this.shuffleArray(q.alternatives)
        })
        this.actualQuestion = this.questions[this.qtdRespondida];

      }, responseError => {
        console.log("Error")
      }
      
    )


  }


  quit(){
  this.inicio=false;
  this.questions = [];
  this.qtdQuestionTotal = 0;
  this.qtdRespondida = 0;
  this.questinIndex = 1;
  this.actualQuestion = new Question();
  this.answered = [];
  this.selectdAlternative = '';
  this.temaSelecionado = '';
  this.notas = 0;
  }

}
