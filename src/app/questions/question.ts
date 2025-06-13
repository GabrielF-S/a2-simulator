import { Alternative } from "./alternative";

export class Question {
    enunciado!: string;
    alternatives!: Alternative[];
    resolucao!: string;
    respostaSelecionada?: string; 
    category!: string;

}