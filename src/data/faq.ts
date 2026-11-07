export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category:
    | "dor"
    | "manutencao"
    | "compatibilidade"
    | "cabelo"
    | "agendamento";
}

export const faq: FAQItem[] = [
  {
    id: "mega-hair-doi",
    question: "Mega Hair dói?",
    answer:
      "A aplicação não deve causar dor durante um procedimento realizado corretamente. Pode existir uma sensação de adaptação nos primeiros dias, principalmente conforme o couro cabeludo se acostuma ao novo peso e à nova distribuição dos fios. A técnica e a quantidade utilizadas são definidas considerando as características do cabelo.",
    category: "dor",
  },

  {
    id: "quando-fazer-manutencao",
    question: "Quando preciso fazer a manutenção?",
    answer:
      "O intervalo depende da técnica utilizada, do crescimento do cabelo, da rotina e dos cuidados realizados em casa. De forma geral, as técnicas trabalhadas no Studio possuem intervalos que variam de aproximadamente 45 a 90 dias.",
    category: "manutencao",
  },

  {
    id: "qualquer-cabelo-pode-usar",
    question: "Todo tipo de cabelo pode receber Mega Hair?",
    answer:
      "A possibilidade de aplicação depende das condições atuais dos fios e do couro cabeludo, além da técnica escolhida. A avaliação é importante para definir uma solução compatível com a estrutura, densidade, comprimento e objetivo de cada pessoa.",
    category: "compatibilidade",
  },

  {
    id: "cabelo-humano",
    question: "O cabelo utilizado é humano?",
    answer:
      "Sim. O cabelo humano é comercializado separadamente e o valor varia de acordo com cor, comprimento e gramatura. A escolha do cabelo deve considerar o projeto desejado e a compatibilidade com os fios naturais.",
    category: "cabelo",
  },

  {
    id: "posso-levar-meu-cabelo",
    question: "Posso levar meu próprio cabelo?",
    answer:
      "A possibilidade de utilização depende da avaliação do cabelo apresentado e das condições necessárias para a técnica escolhida. O material precisa ser compatível com o projeto e estar em condições adequadas para aplicação.",
    category: "cabelo",
  },

  {
    id: "manutencao-inclui-cabelo",
    question: "O valor da manutenção inclui o cabelo humano?",
    answer:
      "Não. Os valores de aplicação e manutenção informados são referentes ao serviço técnico. O cabelo humano é cobrado separadamente conforme cor, comprimento e gramatura.",
    category: "cabelo",
  },

  {
    id: "como-reservar",
    question: "Como faço para reservar meu horário?",
    answer:
      "A reserva é confirmada mediante sinal de 30% do serviço. Para organizar a agenda e garantir o horário escolhido, o pagamento do sinal é obrigatório.",
    category: "agendamento",
  },

  {
    id: "atraso",
    question: "Existe tolerância para atraso?",
    answer:
      "Sim. A tolerância é de até 15 minutos. Após esse período, a realização do atendimento pode precisar ser reavaliada de acordo com a agenda do dia.",
    category: "agendamento",
  },

  {
    id: "desmarcacao",
    question: "Com quanto tempo preciso avisar se não puder comparecer?",
    answer:
      "O aviso de desmarcação deve ser feito com no mínimo 24 horas de antecedência.",
    category: "agendamento",
  },

  {
    id: "avaliacao",
    question: "Preciso fazer uma avaliação antes de escolher a técnica?",
    answer:
      "Sim. A avaliação é importante para entender o objetivo, analisar as características dos fios e definir a técnica, quantidade e estrutura mais adequadas para o projeto.",
    category: "compatibilidade",
  },
];
