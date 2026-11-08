# Studio Joice Sousa — Alta Costura Capilar

Landing page do Studio Joice Sousa, especialista em Mega Hair em São Paulo/SP. O site apresenta o trabalho da Joice, mostra um comparativo antes/depois interativo, explica as técnicas e leva a cliente direto ao WhatsApp com uma mensagem pronta.

## Tecnologias

- HTML, CSS e JavaScript puros (sem etapa de build)
- Google Fonts (DM Sans + Playfair Display)
- Netlify Image CDN para entregar as fotos otimizadas em WebP

## Estrutura

```
index.html        # página completa (estilos e scripts embutidos)
assets/
  joice.jpg       # retrato da Joice (hero)
  antes.jpg       # foto "antes" do comparativo
  depois.jpg      # foto "depois" do comparativo
favicon.svg       # ícone do site
netlify.toml      # publica a raiz do projeto
```

Para trocar uma foto, basta substituir o arquivo em `assets/` mantendo o mesmo nome.

## Rodar localmente

```
netlify dev
```

(As imagens passam pelo `/.netlify/images`, que funciona no Netlify e no `netlify dev`.)

## Link com origem

Use `https://studio-joice-sousa.netlify.app/?origem=instagram` na bio do Instagram. As mensagens do WhatsApp chegam com "(via Instagram)". Funciona com qualquer nome (`?origem=google`, `?origem=tiktok`…).

## Próximos passos

Publicar depoimentos reais (a seção `#depoimentos` já existe, oculta), galeria com mais casos, domínio próprio e perfil no Google Meu Negócio.
