# Assfarma — site institucional

Landing page da **Assfarma** construída em **Next.js 16 (App Router) + TypeScript + Tailwind CSS**.

> Todas as imagens, ícones, fontes e a marca estão **dentro do projeto**.
> O site não carrega nenhum recurso de servidor externo — funciona offline depois do build.

---

## Como rodar

```bash
npm install
npm run dev      # http://localhost:3000
```

Build de produção:

```bash
npm run build
npm start
```

## Deploy

O projeto é 100% estático e roda em qualquer host de Next.js.
Na **Vercel**: importe o repositório e clique em *Deploy* — nenhuma variável de ambiente é necessária.

---

## Onde editar o conteúdo

Praticamente tudo que muda com frequência está em **um único arquivo**:

### `src/lib/site.ts`

| Bloco | O que controla |
| --- | --- |
| `site` | Nome, domínio, e-mail, **WhatsApp**, CNPJ, endereço, diretor técnico |
| `navLinks` | Itens do menu |
| `heroHighlights` | Frases da faixa rolante abaixo do hero |
| `stats` | Números da seção "Quem somos" |
| `plans` | Nome, preço, resumo e benefícios de cada plano |
| `specialties` | Lista de especialidades |
| `network` | Cards da seção "Cobertura" |
| `testimonials` | Depoimentos |
| `faq` | Perguntas e respostas (também alimentam o rich snippet do Google) |

### ⚠️ Antes de publicar, troque:

1. `site.domain`, `site.url` e `site.email` — domínio e e-mail definitivos da Assfarma.
2. `site.legal.endereco` e `site.legal.diretorTecnico` — endereço do rodapé e responsável técnico com CRM.
   (Razão social e CNPJ já estão preenchidos: 61.523.679 NATALIA VALLESCA SANTOS — CNPJ 61.523.679/0001-98.)

Já configurados: `site.whatsapp` (71 99652-4646), `site.clinicUrl`
(`clinica.assfarma.com.br`, usado no botão "Consultório virtual") e os três
`plans[].checkoutUrl` (individual, casal e familiar) na conta da Assfarma.

Cada plano abre o `checkoutUrl` quando ele existe; sem `checkoutUrl`, o botão
cai automaticamente no WhatsApp com uma mensagem pronta.

---

## Estrutura

```
src/
├─ app/
│  ├─ layout.tsx              metadados, SEO, fontes locais
│  ├─ page.tsx                montagem das seções + JSON-LD
│  ├─ globals.css             design system (cores, botões, cards)
│  ├─ fonts/                  Plus Jakarta Sans + Saira (.woff2 locais)
│  ├─ icon.png                favicon
│  ├─ apple-icon.png          ícone iOS
│  └─ opengraph-image.png     prévia em redes sociais
├─ components/
│  ├─ LogoMark.tsx            símbolo da marca (PNG, versão colorida/branca)
│  ├─ Logo.tsx                marca + tipografia
│  ├─ Header / Hero / About / HowItWorks / Coverage /
│  │  Specialties / Plans / VisionHealth / Testimonials /
│  │  Faq / FinalCta / Footer / WhatsAppFab
│  ├─ Reveal.tsx              animação de entrada
│  ├─ CountUp.tsx             contador animado
│  └─ illustrations/          ilustrações SVG (celular, consulta, retrato)
└─ lib/site.ts                CONTEÚDO DO SITE
public/
├─ brand/                     logo em PNG (várias versões)
├─ images/mapa-brasil.svg     mapa da cobertura
└─ favicon.ico
```

## Identidade visual

| | |
| --- | --- |
| Ciano principal | `#0597AE` (`brand-500`) |
| Ciano claro | `#22BCD4` (`brand-400`) |
| Petróleo escuro | `#06222C` (`brand-950`) |
| Azul profundo | `#023672` (`navy-700`) |
| Título | Saira |
| Texto | Plus Jakarta Sans |

Arquivos da marca em `public/brand/` (PNG com fundo transparente):
`logo-full` (vertical, com assinatura), `logo-horizontal` (símbolo + JMX SAÚDE)
e `logo-mark` (só o símbolo) — cada um em versão colorida e em versão branca
(`-white`) para fundos escuros. Favicon, ícone iOS e imagens de compartilhamento
ficam em `src/app/` e `public/favicon.ico`.

---

## Acessibilidade e SEO

- HTML semântico, `lang="pt-BR"`, link "pular para o conteúdo".
- Contraste conferido, foco visível, `prefers-reduced-motion` respeitado.
- Metadados Open Graph/Twitter, `sitemap.xml`, `robots.txt`.
- JSON-LD de `MedicalBusiness`, `OfferCatalog` e `FAQPage`.

## Aviso legal

O rodapé e a seção de planos já trazem o texto obrigatório informando que o
serviço **não é plano de saúde** e não substitui atendimento de urgência
presencial, conforme a Resolução CFM nº 2.314/2022. Revise com o seu jurídico
antes de publicar.
