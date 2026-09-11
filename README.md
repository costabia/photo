# Photo & Love

Aplicação mobile-first para convidados enviarem fotos do casamento por QR Code. A aplicação usa Next.js App Router, TypeScript, Tailwind, Supabase e Vercel.

## Configuração rápida

1. Crie um projeto em [supabase.com](https://supabase.com) e abra **Project Settings → API**.
2. Copie **Project URL** e a chave **anon public** para `.env.local`:

```env
NEXT_PUBLIC_SUPABASE_URL=...
NEXT_PUBLIC_SUPABASE_ANON_KEY=...
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

3. No **SQL Editor**, execute todo o conteúdo de [`supabase/schema.sql`](supabase/schema.sql). Ele cria as tabelas, RLS e o bucket privado `wedding-photos`.
4. Em **Authentication → Users**, crie manualmente o usuário dos noivos com e-mail e senha.
5. Crie um evento na tabela `events`, por exemplo: `name = Maria & João`, `slug = maria-e-joao`, `event_date = 2026-12-12`. A página ficará em `/evento/maria-e-joao`.
6. Instale e rode: `npm install` e `npm run dev`.

## Deploy na Vercel

Suba o repositório para o GitHub, importe-o na Vercel e cadastre as três variáveis acima em **Project Settings → Environment Variables** (produção e preview). Faça o deploy. Depois, atualize `NEXT_PUBLIC_SITE_URL` com o domínio final e, se quiser, adicione um domínio personalizado em **Settings → Domains**.

## Decisões de segurança

O navegador usa apenas a anon key. A service role key nunca é necessária no cliente. Visitantes podem fazer upload e criar o registro da foto, mas apenas usuários autenticados conseguem listar/excluir fotos. O bucket é privado e o painel gera URLs assinadas temporárias. O limite de 10 MB e os tipos de imagem são validados no cliente; em produção, mantenha também o limite de tamanho do bucket configurado no Storage.

O download em lote não gera ZIP no servidor: cada original pode ser aberto/baixado individualmente. Isso evita estourar memória/tempo de uma Serverless Function da Vercel com centenas de fotos grandes.
