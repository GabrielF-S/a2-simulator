import { Component, OnInit } from '@angular/core';
import { QuestionsService } from '../../questions.service';
import { Question } from '../question';

@Component({
  selector: 'app-questions',
  standalone: false,
  templateUrl: './questions.component.html',
  styleUrl: './questions.component.css'
})
export class QuestionsComponent implements OnInit{

  questions : Question [] = [];
  qtdQuestionTotal: number = 0;
  qtdRespondida: number = 0;
  actualQuestion: Question = new Question();
  answered: Question[] = [];
  selectdAlternative: string = '';
  questinIndex: number = 1;
  constructor(private service: QuestionsService){}

  ngOnInit(): void{
    this.service.getQuestion().subscribe(
      response => {
        this.questions= this.shuffleArray(response);
        this.qtdQuestionTotal = this.questions.length;
        this.questions.forEach(q => {
          q.alternatives = this.shuffleArray(q.alternatives)
        })
        this.actualQuestion = this.questions[this.qtdRespondida];
      }, responseError =>{
        console.log("Error")
      }
    )

  }
  submit(): void{

  }
  salvarResposta(): void{
      this.actualQuestion.respostaSelecionada = this.selectdAlternative;
      if(!this.answered.includes(this.actualQuestion)){
        this.answered.push(this.actualQuestion);
      }
      
      this.qtdRespondida++;
      if(this.qtdRespondida<this.qtdQuestionTotal){
        this.actualQuestion =  this.questions[this.qtdRespondida];
        this.selectdAlternative = this.actualQuestion.respostaSelecionada?? '';
        this.questinIndex ++;
      }
      console.log(this.answered)

  }
  voltarQuestion(): void{
    //const lastAnswere  =  this.answered.pop();
    this.qtdRespondida--;
    this.questinIndex --;
    this.actualQuestion =  this.questions[this.qtdRespondida];
    this.selectdAlternative = this.actualQuestion.respostaSelecionada?? '';
    console.log(this.answered)
  }

  shuffleArray<T>(array: T[]): T[] {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}



}
