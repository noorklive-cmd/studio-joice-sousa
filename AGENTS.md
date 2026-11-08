# AGENTS.md

## Arquitetura
Site estático de uma página. Tudo está em `index.html` (CSS no `<style>`, JS no `<script>` no fim do body). Não há framework, bundler nem build — `netlify.toml` publica a raiz (`publish = "."`).

## Diretórios
- `assets/` — fotos originais. Os nomes `joice.jpg`, `antes.jpg` e `depois.jpg` são referenciados no HTML; a dona do site troca as fotos substituindo os arquivos.

## Convenções e decisões
- Conteúdo e copy em português (pt-BR). Manter o tom "alta costura / engenharia capilar".
- Paleta definida em variáveis CSS no `:root` (preto `--bg`, dourado `--gold`).
- Imagens são servidas via Netlify Image CDN (`/.netlify/images?url=/assets/<arquivo>&w=<largura>&fm=webp`), nunca o original direto.
- `joice.jpg` foi recortado para remover um ícone sobreposto do Instagram presente no print original.
- Todos os CTAs usam `wa.me/5511980345487` com mensagem pré-preenchida (URL-encoded). Os botões de "O que você quer transformar?" montam a mensagem a partir de `data-message`.
- Sem persistência/backend até o momento.
- Hero: título em 4 linhas com animação de entrada, retrato em arco, selo giratório (SVG `textPath`) e faixa de técnicas em loop. Animações são desligadas com `prefers-reduced-motion`.
- Card de mapa (`#localizacao`): não há chave da Google Maps Static API, então usa o embed sem chave (`maps.google.com/maps?...&output=embed`) com `pointer-events: none` (comporta-se como mapa estático), filtro escuro/dourado e pino próprio. O iframe é deslocado 140px para cima para esconder o cartão do Google; o pino usa `top: calc(50% - 70px)` — se mudar um, ajuste o outro. O selo do mapa mostra só o status ("Aberto agora" / "Fechado · abre amanhã às 10h"), calculado no fuso America/Sao_Paulo (ter–sáb, 10h–19h).
- Seções (fora da hero) têm `data-index="01"…"07"` (resultado, diferenciais, método, orçamento, valores, protocolo & dúvidas, localização), que gera o numeral gigante vazado ao fundo (com paralaxe via `--py`), aura dourada e fio entre seções (classe `.in-view`). Títulos `h2` usam `.split-title` > `.h-line` > `span` (destaque em `.accent`, itálico dourado com brilho) e entram em linhas quando o bloco `.reveal-on-scroll` pai recebe `.is-visible`.

- Página enxuta: Valores em abas (`.price-tabs`, um `.price-card` por vez); Protocolo e FAQ unidos em um único acordeão (`#protocolo`), sem repetir conteúdo; diferenciais viram carrossel horizontal no celular.
- Preços e regras (seções `#valores` e `#protocolo`) vêm da tabela oficial da Joice. Se um preço mudar, atualize também o `priceRange` do JSON-LD (e o "A partir de" da hero, se for o menor valor).
- Sem informação duplicada: cada dado aparece em um só lugar. Preços só em `#valores`; prazo de retoque só no seletor de técnicas (`TECHS` em `#metodo`); "cabelo cobrado à parte" só na nota de `#valores`; endereço só no card do mapa; horário só no card "Atendimento". Os demais blocos apontam para esses lugares em vez de repetir.
- Hierarquia dos cards: `.card-number` é reservado ao numeral grande (01, 02…) dos diferenciais. Cards de valores usam `.price-head` com um `h3` que descreve o serviço (o nome já está na aba, não repita). No `TECHS`, cada dado é `[valor, detalhe opcional]`: o valor aparece em destaque e o detalhe em letra menor. Não use o elemento `<header>` dentro de cards, porque ele herda o estilo do cabeçalho fixo. As abas de valores ocultam os painéis com `display: none` (não empilham), para o card não ficar com um vão vazio.
- Orçamento: os botões `.concern` selecionam o objetivo e abrem o questionário `#quiz` (opcional); `#quizSend` monta a mensagem.
- Origem: `?origem=instagram` (ou `utm_source`) é salvo em `sessionStorage` e acrescenta "(via Instagram)" a todas as mensagens do WhatsApp.
- `#depoimentos` está com `hidden` até haver depoimentos/fotos reais — nunca inventar prova social.
- `og:image`, `canonical` e JSON-LD usam a URL absoluta `studio-joice-sousa.netlify.app`; trocar se houver domínio próprio. Favicon em `favicon.svg`.

- Fluidez: seções recebem `.in-screen` (IntersectionObserver) e as animações contínuas pausam fora da tela. A paralaxe dos numerais só roda com mouse e tela ≥760px. O brilho do cursor só anima enquanto o mouse se move. No toque, os cartões só mostram brilho e não inclinam, para não dar tranco ao rolar. Evitar `filter: blur` e `will-change` permanentes em elementos animados ou repetidos.

## Próximos passos sugeridos
Publicar depoimentos e galeria de casos, domínio próprio e perfil no Google Meu Negócio.
