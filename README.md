# 🍔 Turco Hamburgueria

Site institucional e vitrine de cardápio da **Turco Hamburgueria**, hamburgueria artesanal de Goiânia – GO, casa do **Burak Burger**, eleito o 23º melhor hambúrguer do Brasil.

🔗 **Site no ar:** [turcoburguer.vercel.app](https://turcoburguer.vercel.app/)

---

## 📌 Sobre o projeto

Landing page de uma página só, pensada para uma coisa: **transformar visitantes em pedidos pelo WhatsApp**. Não há carrinho nem fila digital. O cliente escolhe o burger, clica e já cai na conversa com a mensagem pronta.

O visual segue a identidade da casa: industrial, rústico, com cara de letreiro de rua.

## ✨ Funcionalidades

- **Hero** com vídeo de fundo e chamada direta para pedir o Burak Burger
- **Destaques do cardápio** com foto, descrição e ingredientes dos principais burgers:
  - Burak Burger
  - Req. Moreno
  - Uai Hermanos
- **Experiência Turco**: complementos (palitos de queijo, torresmo no mel), vídeo do ambiente e promoção de chopp
- **Cardápio completo** em PDF, aberto direto pelo menu
- **Botões de pedido via WhatsApp**, cada um com mensagem pré-preenchida (ex.: "Gostaria de pedir um Burak Burger")
- **Seção de contato**, com endereço (link para o Google Maps), horário de funcionamento e redes sociais
- **Navegação por âncoras** (`#menu`, `#sobre`, `#localizacao`) e layout responsivo
- **SEO básico**: título, meta description e keywords voltados para busca local ("hambúrguer artesanal Goiânia")

## 🛠️ Tecnologias

- [Next.js](https://nextjs.org/): framework React, com otimização de imagens via `next/image`
- [Vercel](https://vercel.com/): hospedagem e deploy contínuo

> Ajuste esta seção conforme as demais dependências do projeto (TypeScript, Tailwind, etc.).

## 📁 Assets públicos

Arquivos servidos na raiz do site (pasta `public/`):

| Arquivo | Uso |
|---|---|
| `Burak.jpg`, `Req_Moreno.jpg`, `uai_hermanos.jpg` | Fotos dos burgers em destaque |
| `palitos_queijo.jpg`, `torresmo_mel.jpg` | Fotos dos complementos |
| `chop.jpg` | Foto do chopp Brahma |
| `aisha.mp4` | Vídeo do hero |
| `ambiente.mp4` | Vídeo do ambiente |
| `cardapio.pdf` | Cardápio completo para download |

## 🚀 Como rodar localmente

**Pré-requisitos:** [Node.js](https://nodejs.org/) 18 ou superior e npm (ou yarn/pnpm).

```bash
# 1. Clone o repositório
git clone https://github.com/SEU-USUARIO/NOME-DO-REPOSITORIO.git
cd NOME-DO-REPOSITORIO

# 2. Instale as dependências
npm install

# 3. Rode em modo de desenvolvimento
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador.

Para gerar a versão de produção:

```bash
npm run build
npm start
```

## ✏️ Como personalizar

**Número do WhatsApp e mensagens de pedido:** os links seguem o formato

```
https://wa.me/55DDDNUMERO?text=MENSAGEM_CODIFICADA
```

Para trocar o número ou o texto, procure por `wa.me` no código e atualize todos os botões de pedido.

**Cardápio:** substitua o arquivo `public/cardapio.pdf` mantendo o mesmo nome, e o link do menu continua funcionando.

**Fotos e vídeos:** troque os arquivos em `public/` mantendo os nomes, ou atualize as referências no código. Prefira imagens otimizadas, já que elas pesam bastante no carregamento da página.

## ☁️ Deploy

O deploy é feito na Vercel. Cada push na branch principal publica uma nova versão automaticamente.

1. Importe o repositório em [vercel.com/new](https://vercel.com/new)
2. Mantenha as configurações padrão do Next.js
3. Clique em **Deploy**

## 📍 Informações do estabelecimento

| | |
|---|---|
| **Endereço** | Rua SR 7, Qd 14, Lt 05, Parque Santa Rita, Goiânia – GO |
| **WhatsApp** | (62) 98463-6385 |
| **Horário** | Terça a domingo, das 18h às 23h30 (segunda fechado) |
| **Instagram** | [@turco.hamburgueria](https://instagram.com/turco.hamburgueria) |
| **Facebook** | [turcohamburgueria](https://facebook.com/turcohamburgueria) |

## 👨‍💻 Autor

Desenvolvido por **João França**.

## 📄 Licença

Projeto desenvolvido para a Turco Hamburgueria. Textos, imagens, vídeos e marca pertencem ao estabelecimento. Todos os direitos reservados.
