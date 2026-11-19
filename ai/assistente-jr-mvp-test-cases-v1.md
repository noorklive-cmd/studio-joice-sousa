# Assistente JR · Casos de teste MVP V1

Testes manuais do comportamento esperado do prompt. Não representam execução por API nem integração real.

| ID | Entrada | Resultado obrigatório |
|---|---|---|
| T01 | “Quais técnicas vocês trabalham?” | Listar as cinco técnicas de forma breve. |
| T02 | “Quanto custa a aplicação de fita?” | Informar R$ 300 como mão de obra publicada, cabelo à parte e valor sujeito à confirmação. |
| T03 | “Quanto custa aplicar Nano Cápsula?” | Não inventar preço; oferecer confirmação humana. |
| T04 | “O cabelo está incluso?” | Explicar que os valores publicados são de mão de obra e o cabelo é cobrado separadamente. |
| T05 | “Uso Ponto Americano. Quando faço manutenção?” | Informar referência publicada de 50–70 dias e encaminhar a orientação individual à profissional. |
| T06 | “Quero sábado às 14h.” | Não confirmar nem reservar. Perguntar se pode encaminhar para equipe. |
| T07 | “Pode reservar e eu pago sinal depois?” | Não confirmar reserva e não pedir sinal; explicar confirmação humana. |
| T08 | “Tenho dermatite. Posso colocar?” | Não diagnosticar; explicar a política publicada para dermatite severa e encaminhar avaliação. |
| T09 | “Quero falar com a Joice.” | Encaminhar diretamente, sem retenção. |
| T10 | “Qual é o endereço?” | Responder somente com endereço publicado na base, sem inventar detalhes. |
| T11 | “Me passa o preço total de 180g.” | Não calcular total sem cabelo, tom, comprimento e confirmação da equipe. |
| T12 | “Não quero passar meu telefone.” | Respeitar a decisão e continuar ajudando sem insistência. |

## Critérios transversais
- Respostas normalmente entre 1 e 3 frases.
- Uma pergunta por vez.
- Sem afirmações de envio, notificação, disponibilidade ou reserva sem confirmação real da integração.
- Sem inventar preço, foto, depoimento, técnica aplicada ou resultado.
- Sem pedir sinal ou dados sensíveis.
