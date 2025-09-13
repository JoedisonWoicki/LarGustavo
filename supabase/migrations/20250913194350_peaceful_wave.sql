/*
  # Criar tabela de newsletter

  1. Nova Tabela
    - `newsletter`
      - `id` (uuid, primary key)
      - `email` (text, unique)
      - `nome` (text, opcional)
      - `ativo` (boolean, default true)
      - `data_cadastro` (timestamp)
      - `created_at` (timestamp)

  2. Segurança
    - Enable RLS na tabela `newsletter`
    - Política para permitir inserções públicas
    - Política para visualização apenas por autenticados
*/

CREATE TABLE IF NOT EXISTS newsletter (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  nome text,
  ativo boolean DEFAULT true,
  data_cadastro date DEFAULT CURRENT_DATE,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE newsletter ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Qualquer um pode se cadastrar na newsletter"
  ON newsletter
  FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Apenas autenticados podem ver cadastros da newsletter"
  ON newsletter
  FOR SELECT
  TO authenticated
  USING (true);

-- Índices para performance
CREATE INDEX IF NOT EXISTS idx_newsletter_email ON newsletter USING btree (email);
CREATE INDEX IF NOT EXISTS idx_newsletter_ativo ON newsletter USING btree (ativo);
CREATE INDEX IF NOT EXISTS idx_newsletter_data ON newsletter USING btree (data_cadastro DESC);