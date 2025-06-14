import { Component} from '@angular/core';
import { LearningService } from '../learning.service';

import { Conteudo } from './conteudo';

@Component({
  selector: 'app-leraning-material',
  standalone: false,
  templateUrl: './leraning-material.component.html',
  styleUrl: './leraning-material.component.css'
})
export class LeraningMaterialComponent  {
   
  
  temas: string[] = [
    'Produto cartesiano e conjuntos',
    'Polinômios',
    'Relações e Funções',
    'Vetores',
    'Matrizes e sistemas de equações lineares',
    'Derivadas e suas aplicações',
    'Integrais e suas aplicações'
  ];

  temaSelecionado: string = '';

conteudos: any = {
    'Produto cartesiano e conjuntos': {
      titulo: 'Produto cartesiano e conjuntos',
      html: `
        <p><strong>Produto Cartesiano:</strong> Dados dois conjuntos A e B, o produto cartesiano A × B é o conjunto de todos os pares ordenados (a, b) onde a ∈ A e b ∈ B.</p>
        <p><strong>Fórmula:</strong> |A × B| = |A| × |B|</p>
        <p><strong>Exemplo:</strong> Se A = {1, 2} e B = {x, y}, então A × B = {(1,x), (1,y), (2,x), (2,y)}</p>
      `
    },
    'Polinômios': {
      titulo: 'Polinômios',
      html: `
        <p>Polinômios são expressões algébricas formadas por soma de termos com coeficientes e potências inteiras de uma variável.</p>
        <p><strong>Fórmulas úteis:</strong></p>
        <ul>
          <li>(a + b)<sup>2</sup> = a<sup>2</sup> + 2ab + b<sup>2</sup></li>
          <li>a<sup>2</sup> - b<sup>2</sup> = (a - b)(a + b)</li>
        </ul>
      `
    },"Relações e Funções": {
      "titulo": "Relações e Funções",
      "html": "<p><strong>Relação:</strong> Uma correspondência entre elementos de dois conjuntos.</p><p><strong>Função:</strong> É uma relação em que a cada elemento de um conjunto A está associado um único elemento de um conjunto B.</p><ul><li>Representações: algébrica, gráfica, tabelar.</li><li><strong>Classificações:</strong> injetora, sobrejetora, bijetora, crescente, decrescente.</li></ul>"
    },
    "Vetores": {
      "titulo": "Vetores",
      "html": "<p>Vetores são objetos com direção, sentido e módulo (tamanho).</p><ul><li>Representação: <strong>v</strong> = (x, y) ou (x, y, z).</li><li><strong>Operações:</strong> adição, subtração, multiplicação por escalar, produto escalar e vetorial.</li><li><strong>Módulo:</strong> |v| = √(x² + y² + z²).</li></ul>"
    },
    "Matrizes e sistemas de equações lineares": {
      "titulo": "Matrizes e Sistemas Lineares",
      "html": "<p><strong>Matriz:</strong> Tabela de números organizada em linhas e colunas.</p><ul><li>Operações: adição, multiplicação, transposição.</li><li><strong>Determinante:</strong> Valor numérico associado a matrizes quadradas, importante na resolução de sistemas.</li><li><strong>Sistemas Lineares:</strong> Conjuntos de equações lineares resolvidos por substituição, escalonamento ou método de Cramer.</li></ul>"
    },
    "Derivadas e suas aplicações": {
      "titulo": "Derivadas e Suas Aplicações",
      "html": "<p>Derivada mede a taxa de variação de uma função.</p><ul><li>Definição formal: f'(x) = lim(h→0) [f(x+h) - f(x)] / h</li><li>Regras: derivada da soma, produto, quociente e cadeia.</li><li><strong>Aplicações:</strong> máxima/mínima de funções, crescimento/decrescimento, concavidade, ponto de inflexão.</li></ul>"
    }, 
    "Integrais e suas aplicações": {
      "titulo": "Integrais e Suas Aplicações",
      "html": "<p>Integral representa a área sob a curva de uma função.</p><ul><li>Integral definida: ∫<sub>a</sub><sup>b</sup> f(x) dx</li><li>Regras: soma, constante, substituição e por partes.</li><li><strong>Aplicações:</strong> cálculo de áreas, volumes de sólidos de revolução, trabalho, deslocamento.</li></ul>"
    }
  };

  constructor(
    private service: LearningService
  ){}

  get conteudoAtual() {
    return this.conteudos[this.temaSelecionado];
  }

}
