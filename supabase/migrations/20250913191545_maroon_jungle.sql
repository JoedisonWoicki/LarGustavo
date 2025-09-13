/*
  # Estrutura do Banco de Dados - Lar Gustavo Nordlund

  1. Tabelas Principais
    - `residents` - Dados dos residentes do lar
    - `equipe` - Membros da equipe multidisciplinar
    - `noticias` - Notícias e atualizações do lar
    - `apoiadores` - Parceiros e apoiadores da instituição
    - `doacoes` - Registro de doações recebidas
    - `feedbacks` - Sugestões, reclamações e elogios
    - `documentos` - Documentos de transparência
    - `contatos` - Mensagens de contato
    - `vagas` - Candidaturas para trabalhar no lar

  2. Tabelas Auxiliares
    - `tipos_feedback` - Tipos de feedback (sugestão, reclamação, elogio)
    - `tipos_apoiador` - Tipos de apoiadores (institucional, parceiro, empresa)
    - `tipos_doacao` - Tipos de doação (financeira, material, serviço)
    - `tipos_documento` - Tipos de documentos (balanço, relatório, auditoria, certificado)
    - `cargos` - Cargos disponíveis para candidatura

  3. Segurança
    - RLS habilitado em todas as tabelas
    - Políticas de acesso apropriadas
*/

-- Tabelas auxiliares para tipos
CREATE TABLE IF NOT EXISTS tipos_feedback (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  nome text UNIQUE NOT NULL,
  descricao text,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS tipos_apoiador (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  nome text UNIQUE NOT NULL,
  descricao text,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS tipos_doacao (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  nome text UNIQUE NOT NULL,
  descricao text,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS tipos_documento (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  nome text UNIQUE NOT NULL,
  descricao text,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS cargos (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  nome text UNIQUE NOT NULL,
  descricao text,
  ativo boolean DEFAULT true,
  created_at timestamptz DEFAULT now()
);

-- Tabela de residentes
CREATE TABLE IF NOT EXISTS residents (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  nome text NOT NULL,
  data_nascimento date,
  data_entrada date DEFAULT CURRENT_DATE,
  grau_dependencia text DEFAULT 'baixo',
  situacao_medica text,
  observacoes text,
  ativo boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Tabela da equipe
CREATE TABLE IF NOT EXISTS equipe (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  nome text NOT NULL,
  cargo text NOT NULL,
  especialidade text,
  email text UNIQUE,
  telefone text,
  bio text,
  foto_url text,
  ativo boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Tabela de notícias
CREATE TABLE IF NOT EXISTS noticias (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  titulo text NOT NULL,
  data date DEFAULT CURRENT_DATE,
  resumo text,
  conteudo text,
  imagem_url text,
  categoria text DEFAULT 'geral',
  publicado boolean DEFAULT false,
  autor_id uuid REFERENCES equipe(id),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Tabela de apoiadores
CREATE TABLE IF NOT EXISTS apoiadores (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  nome text NOT NULL,
  descricao text,
  tipo_id uuid REFERENCES tipos_apoiador(id),
  tipo text DEFAULT 'parceiro', -- fallback para compatibilidade
  link text,
  logo_url text,
  ativo boolean DEFAULT true,
  ordem_exibicao integer DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Tabela de doações
CREATE TABLE IF NOT EXISTS doacoes (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  tipo_id uuid REFERENCES tipos_doacao(id),
  tipo text DEFAULT 'financeira', -- fallback para compatibilidade
  valor decimal(10,2),
  data date DEFAULT CURRENT_DATE,
  descricao text,
  doador_nome text,
  doador_email text,
  doador_telefone text,
  anonimo boolean DEFAULT false,
  comprovante_url text,
  created_at timestamptz DEFAULT now()
);

-- Tabela de feedbacks
CREATE TABLE IF NOT EXISTS feedbacks (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  tipo_id uuid REFERENCES tipos_feedback(id),
  tipo text DEFAULT 'sugestao', -- fallback para compatibilidade
  mensagem text NOT NULL,
  nome text,
  email text,
  telefone text,
  estrelas integer CHECK (estrelas >= 1 AND estrelas <= 5),
  data date DEFAULT CURRENT_DATE,
  respondido boolean DEFAULT false,
  resposta text,
  data_resposta timestamptz,
  created_at timestamptz DEFAULT now()
);

-- Tabela de documentos
CREATE TABLE IF NOT EXISTS documentos (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  titulo text NOT NULL,
  tipo_id uuid REFERENCES tipos_documento(id),
  tipo text DEFAULT 'relatorio', -- fallback para compatibilidade
  url text,
  descricao text,
  data_publicacao date DEFAULT CURRENT_DATE,
  tamanho_arquivo bigint,
  formato_arquivo text,
  publico boolean DEFAULT true,
  downloads integer DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Tabela de contatos
CREATE TABLE IF NOT EXISTS contatos (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  nome text NOT NULL,
  email text NOT NULL,
  telefone text,
  mensagem text NOT NULL,
  assunto text,
  data_envio date DEFAULT CURRENT_DATE,
  respondido boolean DEFAULT false,
  resposta text,
  data_resposta timestamptz,
  created_at timestamptz DEFAULT now()
);

-- Tabela de vagas (trabalhe conosco)
CREATE TABLE IF NOT EXISTS vagas (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  nome text NOT NULL,
  email text NOT NULL,
  telefone text NOT NULL,
  cargo_interesse_id uuid REFERENCES cargos(id),
  cargo_interesse text, -- fallback para compatibilidade
  formacao text NOT NULL,
  experiencia text,
  disponibilidade text NOT NULL,
  motivo text NOT NULL,
  arquivo_cv_url text,
  data_candidatura date DEFAULT CURRENT_DATE,
  status text DEFAULT 'pendente',
  observacoes_rh text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Inserir dados iniciais nas tabelas auxiliares
INSERT INTO tipos_feedback (nome, descricao) VALUES
  ('sugestao', 'Sugestões para melhoria dos serviços'),
  ('reclamacao', 'Reclamações sobre problemas ou insatisfações'),
  ('elogio', 'Elogios e reconhecimentos positivos')
ON CONFLICT (nome) DO NOTHING;

INSERT INTO tipos_apoiador (nome, descricao) VALUES
  ('institucional', 'Instituições públicas e organizações'),
  ('parceiro', 'Parceiros estratégicos e colaboradores'),
  ('empresa', 'Empresas privadas e patrocinadores')
ON CONFLICT (nome) DO NOTHING;

INSERT INTO tipos_doacao (nome, descricao) VALUES
  ('financeira', 'Doações em dinheiro via PIX, transferência ou depósito'),
  ('material', 'Doações de produtos, equipamentos e materiais'),
  ('servico', 'Doações de serviços e trabalho voluntário')
ON CONFLICT (nome) DO NOTHING;

INSERT INTO tipos_documento (nome, descricao) VALUES
  ('balanco', 'Balanços financeiros anuais'),
  ('relatorio', 'Relatórios de atividades e prestação de contas'),
  ('auditoria', 'Relatórios de auditoria externa'),
  ('certificado', 'Certificações e licenças da instituição')
ON CONFLICT (nome) DO NOTHING;

INSERT INTO cargos (nome, descricao) VALUES
  ('Enfermeiro(a)', 'Profissional de enfermagem para cuidados diretos'),
  ('Técnico(a) de Enfermagem', 'Técnico em enfermagem para apoio aos cuidados'),
  ('Auxiliar de Enfermagem', 'Auxiliar de enfermagem para cuidados básicos'),
  ('Médico Geriatra', 'Médico especialista em geriatria'),
  ('Fisioterapeuta', 'Profissional de fisioterapia e reabilitação'),
  ('Psicólogo(a)', 'Psicólogo para apoio emocional e mental'),
  ('Terapeuta Ocupacional', 'Terapeuta ocupacional para atividades terapêuticas'),
  ('Nutricionista', 'Nutricionista para planejamento alimentar'),
  ('Assistente Social', 'Assistente social para apoio social e familiar'),
  ('Cuidador(a)', 'Cuidador para assistência diária aos residentes'),
  ('Auxiliar de Limpeza', 'Auxiliar de limpeza e higienização'),
  ('Cozinheiro(a)', 'Cozinheiro para preparo das refeições'),
  ('Auxiliar de Cozinha', 'Auxiliar de cozinha e preparo de alimentos'),
  ('Recepcionista', 'Recepcionista para atendimento ao público'),
  ('Auxiliar Administrativo', 'Auxiliar administrativo para apoio geral'),
  ('Outro', 'Outros cargos não listados')
ON CONFLICT (nome) DO NOTHING;

-- Habilitar RLS em todas as tabelas
ALTER TABLE tipos_feedback ENABLE ROW LEVEL SECURITY;
ALTER TABLE tipos_apoiador ENABLE ROW LEVEL SECURITY;
ALTER TABLE tipos_doacao ENABLE ROW LEVEL SECURITY;
ALTER TABLE tipos_documento ENABLE ROW LEVEL SECURITY;
ALTER TABLE cargos ENABLE ROW LEVEL SECURITY;
ALTER TABLE residents ENABLE ROW LEVEL SECURITY;
ALTER TABLE equipe ENABLE ROW LEVEL SECURITY;
ALTER TABLE noticias ENABLE ROW LEVEL SECURITY;
ALTER TABLE apoiadores ENABLE ROW LEVEL SECURITY;
ALTER TABLE doacoes ENABLE ROW LEVEL SECURITY;
ALTER TABLE feedbacks ENABLE ROW LEVEL SECURITY;
ALTER TABLE documentos ENABLE ROW LEVEL SECURITY;
ALTER TABLE contatos ENABLE ROW LEVEL SECURITY;
ALTER TABLE vagas ENABLE ROW LEVEL SECURITY;

-- Políticas de acesso público para leitura (dados não sensíveis)
CREATE POLICY "Tipos de feedback são públicos"
  ON tipos_feedback
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Tipos de apoiador são públicos"
  ON tipos_apoiador
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Tipos de doação são públicos"
  ON tipos_doacao
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Tipos de documento são públicos"
  ON tipos_documento
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Cargos são públicos"
  ON cargos
  FOR SELECT
  TO public
  USING (ativo = true);

-- Políticas para equipe (dados públicos)
CREATE POLICY "Equipe ativa é pública"
  ON equipe
  FOR SELECT
  TO public
  USING (ativo = true);

-- Políticas para notícias (dados públicos)
CREATE POLICY "Notícias publicadas são públicas"
  ON noticias
  FOR SELECT
  TO public
  USING (publicado = true);

-- Políticas para apoiadores (dados públicos)
CREATE POLICY "Apoiadores ativos são públicos"
  ON apoiadores
  FOR SELECT
  TO public
  USING (ativo = true);

-- Políticas para documentos públicos
CREATE POLICY "Documentos públicos são acessíveis"
  ON documentos
  FOR SELECT
  TO public
  USING (publico = true);

-- Políticas para inserção de dados pelos formulários (acesso público)
CREATE POLICY "Qualquer um pode enviar feedback"
  ON feedbacks
  FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Qualquer um pode enviar contato"
  ON contatos
  FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Qualquer um pode se candidatar"
  ON vagas
  FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Qualquer um pode registrar doação"
  ON doacoes
  FOR INSERT
  TO public
  WITH CHECK (true);

-- Políticas para leitura de dados sensíveis (apenas autenticados)
CREATE POLICY "Apenas autenticados podem ver residentes"
  ON residents
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Apenas autenticados podem ver feedbacks"
  ON feedbacks
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Apenas autenticados podem ver contatos"
  ON contatos
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Apenas autenticados podem ver candidaturas"
  ON vagas
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Apenas autenticados podem ver doações"
  ON doacoes
  FOR SELECT
  TO authenticated
  USING (true);

-- Índices para melhor performance
CREATE INDEX IF NOT EXISTS idx_residents_ativo ON residents(ativo);
CREATE INDEX IF NOT EXISTS idx_residents_data_entrada ON residents(data_entrada);
CREATE INDEX IF NOT EXISTS idx_equipe_ativo ON equipe(ativo);
CREATE INDEX IF NOT EXISTS idx_equipe_cargo ON equipe(cargo);
CREATE INDEX IF NOT EXISTS idx_noticias_publicado ON noticias(publicado);
CREATE INDEX IF NOT EXISTS idx_noticias_data ON noticias(data DESC);
CREATE INDEX IF NOT EXISTS idx_apoiadores_ativo ON apoiadores(ativo);
CREATE INDEX IF NOT EXISTS idx_apoiadores_ordem ON apoiadores(ordem_exibicao);
CREATE INDEX IF NOT EXISTS idx_doacoes_data ON doacoes(data DESC);
CREATE INDEX IF NOT EXISTS idx_doacoes_tipo ON doacoes(tipo);
CREATE INDEX IF NOT EXISTS idx_feedbacks_tipo ON feedbacks(tipo);
CREATE INDEX IF NOT EXISTS idx_feedbacks_data ON feedbacks(data DESC);
CREATE INDEX IF NOT EXISTS idx_documentos_publico ON documentos(publico);
CREATE INDEX IF NOT EXISTS idx_documentos_tipo ON documentos(tipo);
CREATE INDEX IF NOT EXISTS idx_contatos_data ON contatos(data_envio DESC);
CREATE INDEX IF NOT EXISTS idx_vagas_data ON vagas(data_candidatura DESC);
CREATE INDEX IF NOT EXISTS idx_vagas_status ON vagas(status);

-- Triggers para atualizar updated_at automaticamente
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_residents_updated_at BEFORE UPDATE ON residents
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_equipe_updated_at BEFORE UPDATE ON equipe
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_noticias_updated_at BEFORE UPDATE ON noticias
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_apoiadores_updated_at BEFORE UPDATE ON apoiadores
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_documentos_updated_at BEFORE UPDATE ON documentos
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_vagas_updated_at BEFORE UPDATE ON vagas
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();