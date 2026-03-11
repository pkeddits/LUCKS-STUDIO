# ✂️ Luck's Studio Barbearia — Site Oficial


**Site institucional e sistema de agendamento online para a Luck's Studio Barbearia, localizada em Osasco - SP.**

</div>

---

## 🎯 Visão Geral

### Objetivo

O **Site da Luck's Studio Barbearia** é uma plataforma web completa desenvolvida para digitalizar e profissionalizar a experiência de agendamento de uma barbearia premium localizada em Osasco - SP. O sistema permite que clientes visualizem os serviços disponíveis, conheçam a equipe e realizem agendamentos online de forma rápida e intuitiva, com verificação em tempo real de horários disponíveis.

### Para que foi criado

- Eliminar agendamentos por telefone e reduzir o trabalho operacional da barbearia
- Oferecer aos clientes autonomia para escolher datas, horários e formas de pagamento
- Aumentar a presença digital do negócio
- Integrar comunicação via WhatsApp diretamente ao fluxo de agendamento
- Persistir dados de agendamentos em nuvem com verificação de conflitos em tempo real

### Público-Alvo

- **Clientes da barbearia** que desejam agendar serviços online sem precisar ligar
- **Proprietários e gestores** que precisam de uma solução digital acessível e funcional
- Homens da região de Osasco - SP que buscam praticidade e serviços de qualidade

---

## 🛠️ Tecnologias Utilizadas

### Frontend

| Tecnologia | Versão | Descrição |
|---|---|---|
| [React](https://react.dev/) | 18.3.1 | Biblioteca principal para construção da interface |
| [TypeScript](https://www.typescriptlang.org/) | 5.6.3 | Tipagem estática para maior segurança e produtividade |
| [Tailwind CSS](https://tailwindcss.com/) | 3.4.x | Framework CSS utilitário para estilização rápida |
| [Lucide React](https://lucide.dev/) | 0.344.0 | Biblioteca de ícones SVG modernos |
| [Vite](https://vitejs.dev/) | 5.4.x | Bundler e servidor de desenvolvimento ultrarrápido |

### Backend / Infraestrutura

| Tecnologia | Versão | Descrição |
|---|---|---|
| [Supabase](https://supabase.com/) | 2.57.4 | Backend-as-a-Service com banco PostgreSQL e autenticação |
| [Firebase](https://firebase.google.com/) | 12.3.0 | Plataforma Google (instalada como dependência adicional) |

### Ferramentas de Desenvolvimento

| Ferramenta | Versão | Descrição |
|---|---|---|
| ESLint | 9.12.0 | Linter para garantir qualidade de código |
| PostCSS | 8.4.x | Processador CSS (usado junto ao Tailwind) |
| Autoprefixer | 10.4.x | Adiciona prefixos CSS automaticamente |

### Integrações Externas

- **WhatsApp API** — Envio de confirmações de agendamento via link `wa.me`
- **Pexels** — Imagem de fundo da seção Hero via CDN público

---

## 📁 Estrutura do Projeto

```
lucks-studio-barbearia/
│
├── public/                         # Arquivos públicos estáticos
│   └── vite.svg                    # Ícone padrão do Vite
│
├── src/                            # Código-fonte principal da aplicação
│   ├── components/                 # Componentes React reutilizáveis
│   │   ├── Header.tsx              # Cabeçalho com menu de navegação responsivo
│   │   ├── Hero.tsx                # Seção principal com imagem de fundo e CTA
│   │   ├── About.tsx               # Seção "Sobre a Barbearia" com diferenciais
│   │   ├── Services.tsx            # Grade de serviços com preços e duração
│   │   ├── Testimonials.tsx        # Depoimentos de clientes
│   │   ├── Booking.tsx             # Sistema completo de agendamento online
│   │   ├── Contact.tsx             # Informações de contato, endereço e Instagram
│   │   ├── Footer.tsx              # Rodapé com links e informações gerais
│   │   └── WhatsAppButton.tsx      # Botão flutuante de contato via WhatsApp
│   │
│   ├── lib/
│   │   └── supabase.ts             # Configuração e instância do cliente Supabase
│   │
│   ├── App.tsx                     # Componente raiz que organiza todas as seções
│   ├── main.tsx                    # Ponto de entrada da aplicação React
│   ├── index.css                   # Estilos globais e importações do Tailwind
│   └── vite-env.d.ts               # Declarações de tipos para variáveis do Vite
│
├── supabase/
│   └── migrations/
│       └── 20251002201019_create_bookings_table.sql  # Migration SQL do banco de dados
│
├── index.html                      # Template HTML principal
├── vite.config.ts                  # Configuração do Vite
├── tailwind.config.js              # Configuração do Tailwind CSS
├── postcss.config.js               # Configuração do PostCSS
├── tsconfig.json                   # Configuração base do TypeScript
├── tsconfig.app.json               # Configuração TypeScript para o app
├── tsconfig.node.json              # Configuração TypeScript para Node (Vite)
├── eslint.config.js                # Configuração do ESLint
├── package.json                    # Dependências e scripts do projeto
└── package-lock.json               # Lockfile de dependências exatas
```

### Descrição dos Componentes Principais

| Componente | Responsabilidade |
|---|---|
| `Header.tsx` | Navegação fixa com scroll suave entre seções; menu hamburger para mobile |
| `Hero.tsx` | Banner de destaque com CTA para agendamento e imagem de fundo |
| `About.tsx` | Apresenta os 4 diferenciais da barbearia com ícones |
| `Services.tsx` | Exibe os 6 serviços disponíveis com preço e tempo estimado |
| `Testimonials.tsx` | Carrossel estático com depoimentos de clientes reais |
| `Booking.tsx` | Formulário de agendamento com validação, seleção de horários, pagamento PIX e integração Supabase |
| `Contact.tsx` | Informações de localização, horário de funcionamento e link do Instagram |
| `Footer.tsx` | Links de navegação rápida, contato e copyright |
| `WhatsAppButton.tsx` | Botão flutuante fixo para iniciar conversa no WhatsApp |

---

## ⚙️ Funcionalidades

### 🗓️ Sistema de Agendamento Online
- Seleção de serviço, data, horário, nome e telefone
- **Verificação de conflitos em tempo real** — horários já ocupados aparecem como indisponíveis
- Polling automático a cada 5 segundos para atualizar disponibilidade
- Proteção contra agendamento em datas passadas
- Janela de agendamento de até 30 dias à frente

### 💳 Métodos de Pagamento
- **PIX** — com 5% de desconto automático; exibe chave PIX para cópia com um clique
- **Pagar na Loja** — agendamento confirmado sem pagamento antecipado
- **Apenas Agendar** — para registro simples sem compromisso de pagamento

### 📱 Integração com WhatsApp
- Após confirmação, redireciona automaticamente para o WhatsApp da barbearia com mensagem pré-formatada contendo todos os detalhes do agendamento
- Botão flutuante disponível em todas as páginas para contato direto

### 🎨 Interface e Navegação
- Design responsivo (mobile-first) com Tailwind CSS
- Tema escuro com paleta preto e dourado (#f59e0b)
- Menu de navegação com scroll suave entre seções
- Header transparente que ganha background sólido ao rolar a página
- Animações de hover e transições suaves em cards e botões

### ☁️ Persistência de Dados
- Agendamentos salvos no banco PostgreSQL via Supabase
- Política de Row Level Security (RLS) configurada
- Leitura pública de agendamentos para verificação de disponibilidade
- Inserção pública sem necessidade de autenticação

---

## 🚀 Como Executar o Projeto

### Pré-requisitos

- [Node.js](https://nodejs.org/) versão 18 ou superior
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)
- Conta no [Supabase](https://supabase.com/) (gratuita)

### 1. Clone o Repositório

```bash
git clone https://github.com/seu-usuario/lucks-studio-barbearia.git
cd lucks-studio-barbearia
```

### 2. Instale as Dependências

```bash
npm install
```

### 3. Configure as Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto (veja a seção abaixo):

```bash
cp .env.example .env
```

### 4. Configure o Banco de Dados

Execute a migration no painel do Supabase (SQL Editor) ou via CLI:

```bash
# Via Supabase CLI (opcional)
supabase db push
```

Ou execute manualmente o conteúdo de `supabase/migrations/20251002201019_create_bookings_table.sql` no SQL Editor do seu projeto Supabase.

### 5. Inicie o Servidor de Desenvolvimento

```bash
npm run dev
```

O site estará disponível em `http://localhost:5173`

### 6. Build para Produção

```bash
npm run build
```

Os arquivos otimizados serão gerados na pasta `/dist`.

### Scripts Disponíveis

```bash
npm run dev       # Inicia servidor de desenvolvimento com hot reload
npm run build     # Gera build otimizado para produção
npm run preview   # Visualiza o build de produção localmente
npm run lint      # Executa o ESLint para verificar o código
```

---

## 🔐 Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:

```env
# Supabase
VITE_SUPABASE_URL=https://seu-projeto.supabase.co
VITE_SUPABASE_ANON_KEY=sua-chave-anonima-publica
```

> **Como obter as credenciais do Supabase:**
> 1. Acesse [app.supabase.com](https://app.supabase.com)
> 2. Selecione seu projeto
> 3. Vá em **Settings > API**
> 4. Copie a **Project URL** e a **anon/public key**

> ⚠️ **Nunca** commite o arquivo `.env` no repositório. Adicione-o ao `.gitignore`.

---

## 🗄️ Banco de Dados

### Tabela: `bookings`

| Coluna | Tipo | Descrição |
|---|---|---|
| `id` | text (PK) | Identificador único gerado via `Date.now()` |
| `service` | text | Nome do serviço agendado |
| `date` | text | Data no formato `YYYY-MM-DD` |
| `time` | text | Horário no formato `HH:MM` |
| `name` | text | Nome completo do cliente |
| `phone` | text | Telefone/WhatsApp do cliente |
| `paymentmethod` | text | Método de pagamento selecionado |
| `status` | text | Status do agendamento (padrão: `confirmed`) |
| `price` | numeric | Valor do serviço em reais |
| `createdat` | timestamptz | Timestamp de criação |

### Políticas de Segurança (RLS)

```sql
-- Leitura pública (para verificar disponibilidade de horários)
CREATE POLICY "Anyone can view bookings"
  ON bookings FOR SELECT USING (true);

-- Inserção pública (para criar novos agendamentos)
CREATE POLICY "Anyone can create bookings"
  ON bookings FOR INSERT WITH CHECK (true);
```

---

## 🔮 Melhorias Futuras

### Alta Prioridade

- [ ] **Painel Administrativo** — Dashboard para o barbeiro visualizar, confirmar e cancelar agendamentos
- [ ] **Autenticação de clientes** — Login via WhatsApp/SMS para histórico de agendamentos
- [ ] **Cancelamento de agendamentos** — Permitir que clientes cancelem com antecedência
- [ ] **Notificações automáticas** — Lembretes via WhatsApp 24h antes do agendamento
- [ ] **Integração com Google Calendar** — Sincronizar agenda da barbearia

### Melhorias de Produto

- [ ] **Seleção de barbeiro** — Permitir escolher com qual profissional ser atendido
- [ ] **Galeria de fotos** — Portfólio de cortes realizados com integração ao Instagram
- [ ] **Avaliações pós-atendimento** — Coleta de feedback após cada serviço
- [ ] **Sistema de fidelidade** — Pontos por agendamentos com recompensas
- [ ] **Múltiplos serviços por agendamento** — Combinar serviços em um único horário

### Melhorias Técnicas

- [ ] **Geração de ID mais robusta** — Substituir `Date.now()` por UUID (ex: `crypto.randomUUID()`)
- [ ] **Testes automatizados** — Implementar testes unitários e de integração com Vitest
- [ ] **PWA (Progressive Web App)** — Permitir instalação do site como app
- [ ] **SEO avançado** — Meta tags Open Graph, sitemap e dados estruturados
- [ ] **Analytics** — Integração com Google Analytics ou Plausible
- [ ] **Rate limiting** — Proteção contra spam de agendamentos
- [ ] **Remover debug info** — Retirar o bloco de debug visível na seção de agendamento

---

## 🤝 Contribuição

Contribuições são bem-vindas! Para contribuir:

1. **Fork** este repositório
2. Crie uma **branch** para sua feature: `git checkout -b feature/nova-funcionalidade`
3. **Commit** suas alterações: `git commit -m 'feat: adiciona nova funcionalidade'`
4. **Push** para a branch: `git push origin feature/nova-funcionalidade`
5. Abra um **Pull Request**

### Padrão de Commits

Este projeto segue o [Conventional Commits](https://www.conventionalcommits.org/):

```
feat:     nova funcionalidade
fix:      correção de bug
docs:     alteração em documentação
style:    formatação, sem mudança de lógica
refactor: refatoração de código
chore:    tarefas de manutenção
```

---

## 📄 Licença

Este projeto é de uso privado e pertence à **Luck's Studio Barbearia**. Todos os direitos reservados.

---

## 📞 Contato

**Luck's Studio Barbearia**

- 📍 Av. Diogo Antônio Feijó, 974 — Osasco, SP
- 📱 WhatsApp: [(11) 95077-4538](https://wa.me/5511950774538)
- 📸 Instagram: [@lucksstudio](https://www.instagram.com/lucksstudio)
- 🕐 Terça a Sexta: 9h–19h | Sábado: 8h–18h

---

<div align="center">

Desenvolvido com 💛 para a **Luck's Studio Barbearia**

</div>
