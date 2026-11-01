# DESIGN.md — Gravura Art Studio

Status: **aplicado ao site** em 01/11/2026. As cores e fontes estão como tokens em `src/index.css` (`papel`, `tinta`, `grafite`, `moldura`, `azul`).
Decisões do Carlos: papel claro com faixa escura na galeria (aprovado) e azul de gravura no lugar do verde (aprovado).
Ainda aberto: confirmar com o dono se os clientes das fotos com rosto autorizaram o uso.

## Ideia central: "gabinete de gravuras"

O nome é Gravura. A parede do próprio estúdio é um conjunto de desenhos em preto e branco, emoldurados em preto.
O site vira essa parede: fundo de papel claro, texto em tinta, e cada trabalho aparece como uma **placa emoldurada**
com uma etiqueta de museu (técnica, parte do corpo). A única coisa ousada é a tipografia dos títulos; o resto fica quieto
para as tatuagens, que já são coloridas, serem a cor da página.

Por que sair do preto com verde: é o visual que todo site gerado por IA tem. O verde esmeralda também briga com as fotos
(olho verde, borboleta azul e rosa, parede vermelha ao fundo).

## Cores (com o papel de cada uma)

| Nome | Hex | Uso |
|---|---|---|
| Papel | `#F0F0EC` | Fundo da página |
| Tinta | `#191919` | Texto principal, títulos, faixa escura da galeria |
| Grafite | `#585858` | Texto secundário (contraste 6,2:1 sobre o papel) |
| Moldura | `#D6D6D0` | Linhas finas e divisões |
| Azul de gravura | `#2B3FD6` | **Única** cor de destaque: botão principal, links, foco do teclado |
| Papel sobre azul | `#FFFFFF` | Texto dentro do botão azul (contraste 7,5:1) |

Regras: nada de vermelho nem laranja (regra da marca do Carlos). O azul só aparece em ação (botão, link, foco), nunca como enfeite.
Faixa da galeria em Tinta (`#191919`) para as fotos "acenderem"; o resto da página em Papel.

## Tipografia (duas famílias, bem diferentes)

- **Títulos: Bodoni Moda** (500 e 700). Contraste forte entre traço grosso e fino, lembra gravura. Tamanho grande, sem caixa-alta.
- **Texto: Hanken Grotesk** (400, 500, 600). Limpa e legível no celular.
- Escala: 14 · 16 · 18 · 24 · 32 · 48 · 72 px. Texto corrido nunca abaixo de 16 px; mínimo absoluto 14 px.
- Linhas de texto com no máximo 65 caracteres; espaço entre linhas 1,6 no texto, 1,1 nos títulos grandes.
- Remover `Cinzel` e `Outfit` (hoje carregadas, e `Cinzel` nem é usada).

## Espaço e forma

- Base de espaçamento: 8 px. Seções com 96 px de respiro no computador e 64 px no celular.
- Fotos: **cantos retos**, moldura fina de 1 px em Tinta, como um quadro. Cada foto mantém a proporção real (sem cortar tudo em 4:5).
- Botões: raio de 6 px. Chips e campos: raio de 6 px. Nada de "tudo arredondado igual".
- Sem sombra difusa, sem brilho verde atrás da página, sem gradiente decorativo.

## Componentes

- **Placa**: foto + etiqueta embaixo (título em Bodoni, depois "Realismo colorido · antebraço" em Grafite). Substitui os cartões com texto por cima da foto.
- **Botão principal**: fundo Azul, texto branco, 48 px de altura, texto "Pedir orçamento no WhatsApp". Um por tela, no máximo.
- **Link de texto**: Azul com sublinhado fino.
- **Filtros da galeria**: texto com sublinhado no item ativo (não pílulas verdes).
- **Cabeçalho**: "Gravura" em Bodoni + "Art Studio" pequeno ao lado, sem caixa em volta; navegação em texto; botão azul à direita. No celular, um botão "Menu".
- **WhatsApp flutuante**: só no celular, mesmo azul, só o ícone com rótulo curto "Orçamento".
- **Foco de teclado**: contorno de 2 px em Azul com 2 px de afastamento, sempre visível.

## Princípios

1. As fotos são o conteúdo; a página não compete com elas.
2. Um botão de ação por tela, sempre o mesmo texto.
3. Cada coisa dita uma vez só (higiene, elevador, portaria aparecem em um lugar só).
4. Nada inventado: dado sem confirmação vira "[confirmar]" e não aparece no site público.
5. Tema escuro só na faixa da galeria; o resto claro.

## Decisões que ficam com o Carlos

1. **Claro (papel) ou continuar escuro?** Recomendo claro com faixa escura na galeria: foge do visual padrão e destaca as fotos coloridas.
2. **Azul de gravura ou manter o verde?** Recomendo o azul: combina com a borboleta e não briga com o olho verde.
3. **Fotos com rosto de cliente** (retrato, leão, ancião): confirmar com o dono que os clientes autorizaram.

## Comparação com sites reais

Não foi possível: dois sites de estúdios bloquearam a abertura no navegador e um estava com o domínio expirado.
As ferramentas UXKIN não estão conectadas (pedem autorização). A direção acima parte do **material do próprio estúdio**
(fotos e parede de desenhos), não de sites de terceiros.
