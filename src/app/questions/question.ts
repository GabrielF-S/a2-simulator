import { Alternative } from "./alternative";

export class Question {
    enunciado: string;
    alternatives: Alternative[];
    resolucao: string;
    respostaSelecionada?: string; 
    category: string;

    constructor(
        enunciado: string = '',
        alternatives: Alternative[] = [],
        resolucao: string = '',
        respostaSelecionada?: string,
        category: string = ''
    ) {
        this.enunciado = enunciado;
        this.alternatives = alternatives;
        this.resolucao = resolucao;
        this.respostaSelecionada = respostaSelecionada;
        this.category = category;
    }


}