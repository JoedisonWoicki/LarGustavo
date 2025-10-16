# Guia para Upload de Imagens no Supabase Storage

## Passo 1: Acessar o Painel do Supabase

1. Acesse https://supabase.com e faça login
2. Selecione seu projeto
3. No menu lateral, clique em **Storage**

## Passo 2: Verificar o Bucket

1. Você deverá ver um bucket chamado `site-images`
2. Se não existir, a migration já o criou automaticamente
3. Clique no bucket `site-images`

## Passo 3: Fazer Upload das Imagens

As seguintes imagens precisam ser uploadadas da pasta `public/`:

### Imagens para Upload:

1. **01J2BW8W8WWSPYQPVF9YGZ6B8Z.jpg** - Logo de apoiador
2. **ael_sistemas_logo.jpeg** - Logo AEL Sistemas
3. **captura_tela_2025-07-16.png** - Imagem do Hero
4. **image.jpg** - Imagem de apoiador
5. **logo_frigelar_QERmNQ.png** - Logo Frigelar
6. **logotipo_lar.jpg** - Logotipo principal do Lar
7. **mada_doces.jpg** - Logo Mada Doces
8. **pestana_leiloes_logo.jpeg** - Logo Pestana Leilões
9. **https://drive.google.com/file/d/1MVNQle8M2opLzfsAI5NNE6jujgzpEFlj/view?usp=drive_link** - QR Code PIX para doações
10. **whatsapp_2025-06-18_10-01-57.jpg** - Imagem de apoiador
11. **whatsapp_2025-06-18_10-02-23.jpg** - Imagem de apoiador
12. **whatsapp_2025-06-18_10-42-15.jpg** - Imagem de apoiador
13. **whatsapp_2025-06-18_11-04-22.jpg** - Imagem de apoiador
14. **whatsapp_2025-06-18_11-04-40.jpg** - Imagem de apoiador

### Como fazer o upload:

1. Clique no botão **"Upload file"** dentro do bucket `site-images`
2. Selecione todos os arquivos da pasta `public/` listados acima
3. Clique em **"Upload"**
4. Aguarde até que todos os arquivos sejam carregados

## Passo 4: Copiar URLs Públicas (Opcional)

Após o upload, cada imagem terá uma URL pública no formato:
```
https://[SEU-PROJETO].supabase.co/storage/v1/object/public/site-images/[NOME-DO-ARQUIVO]
```

## Passo 5: Atualizar o Código

As URLs no código já estão configuradas para usar o Supabase Storage. Após fazer o upload das imagens, o site automaticamente começará a carregar as imagens do Supabase.

## Verificação

Para verificar se as imagens foram carregadas corretamente:

1. No Supabase Storage, clique em qualquer imagem
2. Clique em "Copy URL"
3. Cole a URL em uma nova aba do navegador
4. A imagem deve ser exibida corretamente

## Permissões

O bucket já está configurado com as seguintes permissões:
- **Leitura pública**: Qualquer pessoa pode visualizar as imagens
- **Upload público**: Qualquer pessoa pode fazer upload (útil para administração)
- **Atualização/Exclusão**: Apenas usuários autenticados

## Troubleshooting

Se as imagens não aparecerem no site após o upload:
1. Verifique se os nomes dos arquivos estão exatamente iguais aos listados acima
2. Confirme que o bucket se chama `site-images` (com hífen)
3. Verifique se as imagens estão na raiz do bucket (não em subpastas)
4. Limpe o cache do navegador (Ctrl+Shift+R ou Cmd+Shift+R)
