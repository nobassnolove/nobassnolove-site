# No Bass No Love — Electronic Press Kit

Site institucional (EPK) construído em HTML5, CSS3 e JavaScript puro, sem frameworks.

## Estrutura

```
/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
└── assets/
    ├── images/      → todas as imagens do site (ver abaixo)
    └── icons/
        └── favicon.svg
```

## Como substituir imagens

Todas as imagens estão em `assets/images/` com nomes intuitivos. Para trocar
qualquer uma, basta **substituir o arquivo mantendo o mesmo nome** — não é
necessário mexer no código.

| Arquivo | Uso |
|---|---|
| `hero.jpg` | Foto de fundo do topo (hero) |
| `banda.jpg` | Retrato da dupla na seção "Sobre" |
| `album01-reativo.jpg` ... `album05-bruxinhamagrela.jpg` | Capas da discografia |
| `video01-livesession.jpg` ... `video03-bruxinhamagrela.jpg` | Thumbnails dos vídeos |
| `imprensa-jornalOliberal.jpg` | Recorte de jornal |
| `depoimento01-sylvia.jpg`, `depoimento02-chuck.jpg` | Avatares dos depoimentos |
| `show01.jpg` ... `show04.jpg` | Galeria de fotos promocionais |
| `logo.png` | Logotipo oficial (branco, fundo transparente) — usado na navbar e no rodapé |
| `merch01-camiseta-reativo.jpg` | Foto principal do produto na seção Loja |
| `merch02-lifestyle01.jpg`, `merch03-lifestyle02.jpg` | Fotos secundárias (miniaturas) da seção Loja |

**Nota de qualidade:** as imagens atuais foram extraídas do PDF do EPK
(portanto em resolução moderada, suficiente para thumbnails, mas não para
impressão). Substitua por arquivos em maior resolução quando possível,
mantendo o mesmo nome de arquivo e, se possível, proporção semelhante.

## Loja / vendas por WhatsApp

A seção "Loja" (`#loja`) vende a camiseta oficial via WhatsApp — o botão
"Comprar pelo WhatsApp" abre uma conversa já com uma mensagem pronta para o
número **(19) 98121-0841**. Para trocar o número, edite o link `https://wa.me/...`
no `index.html` (procure por `wa.me`) — o formato é `55` + DDD + número, sem
espaços ou traços. Preço, tamanhos e material também estão direto no HTML,
fáceis de editar caso mudem.

## Pendências (marcadas com `<!-- TODO -->` no `index.html`)

1. **Link da matéria "Leia aqui"** (Jornal O Liberal, Fev/2026) — ainda
   aponta para `#`.
2. **Mapa de Palco** — ainda sem link (Drive não informado).
3. **Agenda de shows** — sem datas confirmadas no EPK; a seção está com uma
   chamada genérica direcionando para o booking. Assim que houver datas,
   posso transformar isso numa lista/timeline real.

O logotipo oficial (`logo.png`) já está aplicado na navbar e no rodapé. O
favicon continua sendo a marca de equalizador (barras), já que o logotipo
pincelado perde legibilidade em tamanhos muito pequenos (16–32px).

## Tipografia

Google Fonts: **Big Shoulders Display** (títulos), **Manrope** (corpo),
**IBM Plex Mono** (rótulos/eyebrows). Carregadas via `<link>` no `index.html`
— exigem conexão com a internet para exibir corretamente (há fallback para
`sans-serif`/`monospace`).

## Cor de destaque

`#ff4465`, definida como variável CSS `--accent` em `css/style.css` — para
trocar a cor em todo o site, basta editar essa variável.
