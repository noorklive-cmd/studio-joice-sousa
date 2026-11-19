# Assistente JR · MVP V1 Design

## Intent
Construir uma primeira experiência de chat para visitantes do site Studio Joice Sousa. A assistente responde dúvidas documentadas sobre Mega Hair, identifica a intenção e encaminha pedidos para a equipe humana.

## Why
Reduzir atrito no primeiro contato e organizar pedidos sem fazer a visitante navegar por blocos longos de conteúdo.

## Goals
- Conversa curta e natural em pt-BR.
- Respostas baseadas na base de conhecimento versionada.
- Cinco técnicas acessíveis em respostas rápidas.
- Dúvidas de preço/manutenção respondidas sem extrapolar a tabela.
- Handoff humano explícito para avaliação e agendamento.

## Non-goals
API, LLM conectado, banco de dados, persistência, agenda, pagamentos, cobrança de sinal, confirmação automática, diagnóstico e publicação.

## Approaches considered
1. Chat simulado determinístico: seguro e barato para validar UX e fluxo; não mede qualidade real de um LLM.
2. Chat com modelo/API: mais realista, mas exige credenciais, política de dados, custo e integração ainda não aprovados.
3. Chat estático em imagem: rápido para apresentar, mas não permite validar interação.

## Chosen approach
Abordagem 1: protótipo navegável de chat com respostas de demonstração determinísticas, rotuladas como protótipo. O prompt real fica versionado separadamente para avaliação posterior. Não simular envio de WhatsApp nem disponibilidade.

## Visual direction
Minimalismo premium, branco/off-white predominante, preto e cinzas monocromáticos, logo oficial sem alterações, espaço negativo, tipografia refinada, poucos controles e texto de 1–3 frases. Sem dashboard, gradientes, brilho ou cards em excesso.

## User flow
Abertura -> motivo do contato -> resposta breve -> pergunta de contexto quando necessária -> pedido de encaminhamento -> consentimento -> resumo de handoff -> aviso de que aguarda confirmação humana.

## Constraints
A base oficial está em ai/knowledge-base-v1.md; o prompt operacional está em ai/assistente-jr-system-prompt-mvp-v1.md. Preços e regras são publicados e precisam de confirmação antes da ativação pública. Não solicitar sinal. Não confirmar agendamento.

## Acceptance
- Identidade exibida como Assistente JR.
- Mobile-first e legível em 360–390 px.
- As cinco técnicas aparecem sem poluição.
- Respostas curtas e corretas nos casos T01–T12.
- Estados de conversa, foco, erro e handoff distinguíveis.
- Sem qualquer alegação de integração real.
