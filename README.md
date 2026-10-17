# Água Viva Natação e Hidroginástica — site institucional

Site de uma página (React 19 + TypeScript + Vite) com foco em levar o visitante ao WhatsApp.

## Como executar

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # confere os tipos e gera a pasta dist/
npm run preview   # testa o build localmente
```

Requer Node 18 ou superior.

## Como publicar

A pasta `dist/` é um site estático. Opções gratuitas:

- **Vercel / Netlify:** importe o repositório; comando de build `npm run build`, pasta de saída `dist`.
- **Qualquer hospedagem:** envie o conteúdo de `dist/` para a pasta pública (o site assume que fica na raiz do domínio; em subpasta, defina `base` em `vite.config.ts`).

Depois de definir o domínio, acrescente em `index.html`: `<link rel="canonical">`, `og:url` e `og:image`.

## Onde editar

Tudo que muda com frequência está em **`src/config/site.ts`**:

| O que | Onde no arquivo |
| --- | --- |
| Telefone, WhatsApp, endereço | `siteConfig.phone`, `siteConfig.address` |
| Mensagem do WhatsApp | `siteConfig.whatsapp` |
| Título e texto do topo | `heroContent` |
| Texto "Sobre nós" | `aboutContent` |
| Modalidades (adicionar/remover) | `modalities` |
| Fotos da galeria | `gallery` (coloque os arquivos em `public/images/`) |
| Horários de funcionamento | `openingHours` (atualiza site, rodapé e SEO) |
| Redes sociais | `siteConfig.socialLinks` |
| Logotipo | `siteConfig.logo` |

**Modo rascunho:** `siteConfig.draftMode = true` mostra os avisos amarelos de "texto provisório" e os espaços reservados de foto. Quando o conteúdo definitivo estiver pronto, mude para `false`.

Cores: variáveis no início de `src/index.css`.

## Estrutura

```
index.html                 título, descrição, Open Graph, fontes
vite.config.ts             configuração do Vite (somente o plugin do React)
public/                    favicon.svg e images/ (fotos otimizadas em WebP)
src/config/site.ts         dados editáveis
src/lib/                   links (WhatsApp, tel, mapa) e formatação
src/hooks/                 dia atual, seção ativa no menu, rolagem
src/components/            StructuredData (SEO local), Header, MobileMenu, HeroSection, AboutSection, ModalitiesSection,
                           BenefitsSection, GallerySection (+Lightbox), OpeningHoursSection,
                           ContactSection, FinalCTASection, Footer, WhatsAppButton
src/index.css              estilos (CSS próprio, sem dependências)
```

## Observações

- As fotos incluídas são **referências visuais** (duas pessoas na piscina e uma piscina coberta). Troque pelas fotos reais do estabelecimento.
- O mapa usa o embed do Google Maps por endereço (sem chave de API) e há o botão "Como chegar" com a rota.
- Nenhum formulário, avaliação ou preço foi criado; nada é enviado a servidores.
