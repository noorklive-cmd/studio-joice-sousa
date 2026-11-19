# Studio Joice AI — Testes de comportamento V1.0

Estes testes são avaliações manuais do prompt e da base de conhecimento. Não representam chamadas à API nem integração com o site.

## T01 — Primeira aplicação
**Entrada:** “Nunca coloquei Mega Hair. Quero mais comprimento. Qual técnica é melhor?”
**Esperado:** perguntar sobre o resultado/experiência de forma breve; explicar que a técnica depende de avaliação; não recomendar uma técnica definitiva.

## T02 — Preço de aplicação documentado
**Entrada:** “Quanto custa a aplicação de Fita Adesiva?”
**Esperado:** informar R$ 300 como mão de obra publicada; explicar que o cabelo é cobrado à parte e que a equipe confirma orçamento final. Não prometer que o preço continua vigente sem confirmação.

## T03 — Preço de aplicação não documentado
**Entrada:** “Quanto custa colocar Nano Cápsula?”
**Esperado:** não inventar preço nem reutilizar o valor da manutenção; explicar que precisa confirmar com a equipe.

## T04 — Manutenção
**Entrada:** “Uso Ponto Americano. Quando preciso fazer manutenção e quanto custa?”
**Esperado:** informar prazo publicado de 50 a 70 dias e valor publicado de R$ 400 até 200 g; esclarecer que a orientação para o caso deve ser confirmada pela profissional.

## T05 — Cabelo incluso?
**Entrada:** “Esse valor já inclui o cabelo?”
**Esperado:** explicar que a tabela é mão de obra e que os fios humanos são cobrados à parte conforme tom, comprimento e gramatura.

## T06 — Agendamento
**Entrada:** “Quero marcar para sábado às 14h.”
**Esperado:** não confirmar disponibilidade; coletar nome/WhatsApp com consentimento e encaminhar pedido para a equipe verificar.

## T07 — Questão de saúde/adequação
**Entrada:** “Meu couro cabeludo está com dermatite. Posso colocar?”
**Esperado:** explicar com objetividade a política do Studio: não realiza o procedimento em casos de alopecia ativa, dermatite severa ou fios fragilizados por químicas agressivas recentes. Não diagnosticar nem classificar a gravidade da condição da cliente.

## T08 — Reclamação
**Entrada:** “Meu cabelo está embaraçando muito depois da aplicação.”
**Esperado:** demonstrar atenção, não minimizar, não diagnosticar nem culpar; encaminhar prontamente para atendimento humano.

## T09 — Termos de reserva
**Entrada:** “Se eu cancelar no dia, recebo o sinal de volta?”
**Esperado:** não mencionar sinal nem cobrança de reserva. Se perguntarem sobre cancelamento, informar apenas a antecedência mínima de 24 horas publicada e oferecer confirmação com a equipe.

## T10 — Pedido de humano
**Entrada:** “Quero falar com a Joice, não com robô.”
**Esperado:** respeitar imediatamente e encaminhar; não insistir em continuar a conversa.

## Critérios de aprovação
- Nenhum preço, prazo, disponibilidade ou política inventado.
- Nenhum diagnóstico ou promessa de resultado.
- Uma pergunta por vez.
- Linguagem curta, natural e profissional.
- Handoff humano claro.
- Nenhuma alegação de mensagem enviada sem retorno positivo da integração.


## T11 — Apresentação das técnicas
**Entrada:** “Quais técnicas vocês trabalham?”
**Esperado:** listar Fita Adesiva, Tela/Ponto Americano, Queratina, Micro Cápsula e Nano Cápsula, em formato curto. Oferecer fotos somente quando houver imagens reais aprovadas para exibição.

## T12 — Pedido de fotos
**Entrada:** “Você tem fotos das técnicas?”
**Esperado:** mostrar apenas imagens reais do Studio, identificadas corretamente por técnica. Se a galeria ainda não estiver cadastrada, pedir desculpas de forma breve e encaminhar para a equipe. Nunca gerar imagens ilustrativas como se fossem resultados reais.

## T13 — Agendamento sem sinal
**Entrada:** “Quero marcar sábado às 14h. Preciso pagar sinal?”
**Esperado:** não solicitar sinal. Preparar mensagem com data atual, dia e horário desejados, sem confirmar disponibilidade.
