export type dataSchema = {
  Partners: [string, string, string?][];
  Directorships: string[];
  DirectorshipsRoles: string[];
  Projects: [string, string, string, string?, boolean?][];
  ProjectsRoles: string[];
  Members: [string, [string, string][], string?, [string, string][]?][];
  Users: [string, string, boolean][];
};

export const data: dataSchema = {
  Partners: [
    // [[NomePartner1, LinkPartner1, LogoPartner1?], [NomePartner2, LinkPartner2, LogoPartner2?], ...]
    ["UnB", "https://www.unb.br", "logo parceiros/logo_unb_nobg"],
    [
      "Concentro",
      "https://www.instagram.com/concentrodf/",
      "logo parceiros/logo_concentro_nobg",
    ],
    [
      "Brasil Júnior",
      "https://brasiljunior.org.br/conheca-o-mej",
      "logo parceiros/logo_brasiljunior",
    ],
    [
      "Eletrojun",
      "https://eletronjun.com.br/",
      "logo parceiros/logo_eletrojun",
    ],
    [
      "Switch Dreams",
      "https://switchdreams.com.br/",
      "logo parceiros/logo_switchdreams_branco",
    ],
    ["Aisec", "https://aiesec.org.br/", "logo parceiros/logo_aiesec"],
  ],
  Directorships: [
    // [Diretoria1, Diretoria2, ...]
    "Projetos",
    "Gestão de Pessoas",
    "Administração e Finanças",
    "Comercial",
    "Marketing",
    "Presidência",
    "Previdência",
  ],
  DirectorshipsRoles: [
    // [Role1, Role2, ...]
    "Diretor",
    "Membro",
    "Presidente",
    "Assessor",
    "Piloto Aposentado",
  ],
  Projects: [
    // [[NomeProjeto1, DescriçãoProjeto1, LinkProjeto1, LogoProjeto1?, ShowProjeto1?], [NomeProjeto2, DescriçãoProjeto2, LinkProjeto2, LogoProject2?, ShowProjeto2?], ...]
    [
      "Quimera",
      "Desenvolvimento de um website em RAils para a empresa júnior Quimera. A Quimera é uma empresa júnior do curso de Letras da Universidade de Brasília (UnB). Foi fundada em 2014 pelos alunos de Línguas Estrangeiras Aplicadas (LEA). Eles oferecem uma ampla gama de serviços de comunicação e ensino, incluindo recepção cerimonial, revisões, capacitações, traduções, transcrição de áudio, reforço escolar, capacitação empresarial e formatação.",
      "https://quimeraej.com",
      "logo projetos/logo_quimera",
      true,
    ],
    [
      "Vai de férias",
      "Desenvolvimento de aplicativo e site em React para um clube de viagens, que conecta passageiros com hoteis para hospedagem. A Vai de Férias é uma emppresa líder em programas de férias e hospedagem, oferecendo 7 dias de estadia em alguns dos melhores destinos turísticos do Brasil. Com uma presença consolidada no mercado, ela ocupa a 3ª posição no ranking das maiores cadeias hoteleiras do país e oferece uma ampla variedade de opções de hospedagem para atender a todos os gostos e orçamentos.",
      "https://www.vaideferias.com.br",
      "logo projetos/logo_vaideferias",
      true,
    ],
    [
      "Mark's Engenharia",
      "Desenvolvimento de um website em React para a empresa Marks Engenharia EIRELI. A Marks Engenharia foi fundada em 1994, com o objetivo de atender as empresas em geral nas áreas de Construção Civil, Terraplanagem, Drenagem, Obras de Artes Especiais, Supressão Vegetal e Mineração. A Marks dispõe de corpo técnico formado por profissionais capacitados a prestar serviços técnicos e operacionais, desde a fase de implantação, até a fase de operação de um empreendimento.",
      "https://www.marks.com.br",
      "logo projetos/logo_marks",
      true,
    ],
    [
      "Café",
      "Site expositivo feito junto com a Domani para divulgação de cafés produzidos pela empresa",
      "link1",
    ],
    [
      "Café - Man e Hosp",
      "Contrato padrão de manutenção e hospedagem",
      "link2",
    ],
    [
      "CaronaPhone",
      "Desenvolvimento de aplicativo de carona, incluindo entrega de documentação, módulo de avaliação, gamificação e contendo interface baseada em layout feito pela Lamparina.",
      "link3",
    ],
    [
      "CRP",
      "Desenvolvimento de Website para o CRP-DF, incluindo documentação em nível de código, manuel de uso e instruções de manutenção",
      "link4",
    ],
    [
      "CRP (Modificações)",
      "Desenvolvimento de melhorias para o site da CRP, incluindo tela de oporunidades, galeria de imagens, calendario de eventos, captcha e demais alterações. Contrato fechado pelo João Pedro Assis e Lucca Huguet.",
      "link5",
    ],
    ["Double Parq", "-", "link6"],
    [
      "E-Commerce de Vinhos",
      "Site de ecommerce de uma adega, incluindo páginas para visualiazação dos produtos, caarrinho de compras e integração com API de pagamentos e dos correios. Contrato fechado pelo João Victor.",
      "link7",
    ],
    [
      "EngNet",
      "Consultoria de React Native para a EngNet, auxiliando na criação de aplicativos",
      "link8",
    ],
    [
      "EntreParq",
      "Site para divulgação de atratividades turísticas de parques.",
      "link9",
    ],
    [
      "Escola",
      "Desenvolvimento de sistema para uso escolar, permitindo automatização e gerenciamento das frequências e notas do aluno, possibilitando também envio de provas e realização de provas de múltipla escolha online.",
      "link10",
    ],
    [
      "Escola 2.0",
      "Modificações no projeto escola, incluinod maiores opções no gerenciamento de alunos, múltiplos gerentes de escola e supervisores de município, expansão da biblioteca, entre outras inserções.",
      "link11",
    ],
    [
      "Fullstore",
      "Site de compras que conecta empresas compradoras e fornecedoras, para venda e compra de produtos.",
      "link12",
    ],
    [
      "L2",
      "Desenvolvimento de site estático para a EJ. O pagamento foi feito por meio de treinamento na área de vendas em 2 dias, sendo 4 horas por dia.",
      "link14",
    ],
    ["L2 - Hospedagem", "Hospedagem do site da L2", "link15"],
    [
      "Máquinas Agrícolas (Trator)",
      "Desenvolvimento de site para exposição de produtos de uma empresa de maquinas agricolas, com blog incluso",
      "link16",
    ],
    [
      "Marina (Portifólio)",
      "SIte personalizado de portifólio com 5 seções de informações.",
      "link17",
    ],
    [
      "Marina (Portifólio) - Man e Hosp",
      "Manutenção e hospedagem para o projeto Marina",
      "link18",
    ],
    [
      "MentoringFS",
      "Plataforma web para mentorias, podendo gerenciar mentores e mentorandos, permitindo também a conexão entres esses.",
      "link19",
    ],
    ["MentoringFS - Agosto", "-", "link20"],
    ["MentoringFS - Blog", "Desenvolvimento de um blog no Mentoring", "link21"],
    [
      "MentoringFS - Modificações Gamificação",
      "Modificações no sistema de gamificação",
      "link22",
    ],
    [
      "MentoringFS - Novembro",
      "Sistema de notificação para o Café com prosa, adição de post-it no mural e encontros temáticos nos relatórios da reunião. Contrato fechado pelo Pedro Venzi.",
      "link23",
    ],
    [
      "MentoringFS - Relatórios de pares",
      "Ampliação dos campos do relatórios de pares",
      "link24",
    ],
    [
      "MentoringFS - Relatórios e gráficos de gameficação",
      "Geração de relatório em Excel e página web com gráficos, contendo dados da gamificação da plataforma",
      "link25",
    ],
    [
      "Mentoring - Videoconferência",
      "Integração do serviço de webconferência OpenVidu ao MentoringFS.",
      "link26",
    ],
    [
      "MentoringFS - Webinares",
      "Página para edição de permissão no webinar, além de outras modificações no sistema de webinares.",
      "link27",
    ],
    ["Mercanto", "-", "link28"],
    [
      "Oftalmed",
      "Contrato de serviços de manutenção e hospedagem, incluindo configurações de backup e restauração, equipe técnica disponível a demanda, atualização de componentes em uso no site, monitoramento, envio de relatorios mensais e correção de bugs, com pagamento realizado de acordo com uso do serviço (R$ 394,00 mensais, R$ 50,00 por hora de serviço de suporte, R$ 50,00 por ano para renovação de domínio e R$ 80,00 por ano para renovação de domínios internacionais)",
      "link29",
    ],
    [
      "Paz e Amor",
      "Criação de site para realização e divulgação de um evento, incluindo páginas de informação, páginas do festival, com as paletras a ser realizada e página de pagamento, com opção de valores a escolha do cliente. Contrato fechado pelo Lucca Huguet.",
      "link30",
    ],
    [
      "Pesquisa Cadeado",
      "Pesquisa envolvendo desenvolvimento de apps, comunicação em IoT e integração com hardware para um possível projeto em conjunto com a Mecajun",
      "link31",
    ],
    [
      "Precoce",
      "Contrato com a FT para hospedagem de site (código fonte fornecido pela contratante) e adaptação e manutenção de páginas.",
      "link32",
    ],
    [
      "Prospectare",
      "Desenvolvimento e hospedagem de sistema para cadastro de visitantes em um evento, gerência de expositores, controle de gerenciamento entre outras funcionalidades.",
      "link33",
    ],
    ["Publicae", "Website estático para a EJ", "link34"],
    [
      "Publicae - Man e Hosp",
      "Contrato básico de manutenção e hospedagem",
      "link35",
    ],
    [
      "Publicae - Man e Hosp 2",
      "Contrato básico de manutenção e hospedagem",
      "link36",
    ],
    [
      "Publicae - Modificações",
      "Mudanças no mailer, portifólio e na página de boas-vindas",
      "link37",
    ],
    [
      "QR Code",
      "Em parceria com a CJR e a Lamparina. Ficamos apenas com a parte do QR Code, integrando no site PWA. Contrato fechado pelo Joao Pedro Assis.",
      "link38",
    ],
    [
      "QR Code - Julho",
      "Adições no sistema de sorteio e configuração do mailer.",
      "link39",
    ],
    [
      "Quimera - Man e Hosp",
      "Contrato básico de manutenção e hospedagem",
      "link41",
    ],
    [
      "Quimera - Man e Hosp 2",
      "Contrato básico de manutenção e hospedagem",
      "link42",
    ],
    [
      "Quimera - Modificações",
      "Modificações em páginas do site da Quimera.",
      "link43",
    ],
    [
      "Semabio",
      "Site para divulgação da XVII SemaBio, com informações do evento e venda de pacotes para os minicursos",
      "link44",
    ],
    [
      "Semabio - Manutenção",
      "Manutenção e hospedagem do projeto SemaBio",
      "link45",
    ],
    [
      "Semabio 2019",
      "Site para divulgação da XVIII SemaBio, com informações do evento e venda de pacotes para os minicursos",
      "link46",
    ],
    [
      "Semabio 2019 - Manutenção",
      "Hospedagem do site e pequenas mudanças nos conteúdos. A Struct ofereceu um desconto em troca de ser colocada como uma patrocinadora do evento. ",
      "link47",
    ],
    [
      "Sinus",
      "Desenvolvimento de site estático responsivo para a Sinus 2020. Projeto fechado pelo membro José Luiz.",
      "link48",
    ],
    [
      "Sinus - Man e Hosp",
      "Contrato básico de manutenção e hospedagem",
      "link49",
    ],
    ["Site da Struct - Novo", "Repaginação total do site da empresa", "link50"],
    [
      "Testo",
      "App para Android contendo um catalogo de moda juntamente com uma plataforma Web para funções administrativas do aplicativo.",
      "link51",
    ],
    [
      "THInvest",
      "Website para a Thinvest, contendo informações de produtos e área de compras",
      "link52",
    ],
    [
      "THInvest - Manutenção",
      "Alterações de conteúdo, criação de novas páginas, altereação no layout e adição de outras funcionalidades simples.",
      "link53",
    ],
    [
      "Zelia",
      "Desenvolvimento e hospedagem de site para divulgação de escola de cursos para adultos",
      "link54",
    ],
  ],
  ProjectsRoles: [
    // [ProjectRole1, ProjectRole2, ...]
    "Project Owner",
    "Gerente",
    "Desenvolvedor",
  ],
  Members: [
    // [[NomeMembro1, [[NomeDiretoria1, CargoDiretoria1], [NomeDiretoria2, CargoDiretoria2], ...], LogoMembro1?, [[NomeProjeto1, CargoProjeto1], [NomeProjeto2, CargoProjeto2], ...]?], outros membros...]
    [
      "Jéssica Leal de Melo",
      [["Presidência", "Presidente"]],
      "fotos de perfil/jessica_leal.png",
    ],
    [
      "Daniel José de Assumpção",
      [
        ["Gestão de Pessoas", "Diretor"],
        ["Presidência", "Assessor"],
      ],
      "fotos de perfil/daniel_jose.png",
    ],
    [
      "Guilherme Pereira Sampaio",
      [["Marketing", "Diretor"]],
      "fotos de perfil/guilherme_pereira",
    ],
    [
      "Paulo Fernando Vilarim",
      [["Projetos", "Diretor"]],
      "fotos de perfil/paulo_fernando.png",
    ],
    [
      "Kaleb Henrique Silva Pereira",
      [["Comercial", "Diretor"]],
      "fotos de perfil/kaleb_henrique.png",
    ],
    [
      "Pedro Eduardo Cunha Ximenes",
      [["Administração e Finanças", "Diretor"]],
      "fotos de perfil/pedro_ximenes.png",
    ],
    [
      "José Luiz Gomes Nogueira",
      [["Previdência", "Piloto Aposentado"]],
      ,
      [["Quimera", "Project Owner"]],
    ],
    [
      "Arthur Mota Furtado",
      [["Previdência", "Piloto Aposentado"]],
      "fotos de perfil/arthur_mota.png",
      [
        ["Quimera", "Gerente"],
        ["Vai de férias", "Gerente"],
      ],
    ],
    [
      "Pedro Augusto Ramalho Duarte",
      [["Previdência", "Piloto Aposentado"]],
      ,
      [["Quimera", "Gerente"]],
    ],
    [
      "Fernando Sobral Nóbrega",
      [["Previdência", "Piloto Aposentado"]],
      ,
      [["Vai de férias", "Gerente"]],
    ],
    [
      "Guilherme Rodrigues Lodron Pires",
      [["Previdência", "Piloto Aposentado"]],
      ,
      [
        ["Vai de férias", "Gerente"],
        ["Vai de férias", "Desenvolvedor"],
      ],
    ],
    [
      "Arthur Padovesi Piratelli",
      [["Previdência", "Piloto Aposentado"]],
      "fotos de perfil/arthur_padovesi.png",
      [["Mark's Engenharia", "Gerente"]],
    ],
    [
      "Luigi Paschoal Westphal",
      [["Gestão de Pessoas", "Membro"]],
      ,
      [["Vai de férias", "Desenvolvedor"]],
    ],
    [
      "Bernardo Barros Blanco",
      [["Gestão de Pessoas", "Membro"]],
      "fotos de perfil/bernardo_barros",
    ],
    [
      "Bernardo Manciola Lobo",
      [["Gestão de Pessoas", "Membro"]],
      "fotos de perfil/bernardo_manciola.png",
    ],
    [
      "Pedro Menezes de Macedo",
      [["Gestão de Pessoas", "Membro"]],
      "fotos de perfil/pedro_menezes.jpg",
    ],
    [
      "Rodrigo Reis dos Santos",
      [["Gestão de Pessoas", "Membro"]],
      "fotos de perfil/rodrigo_reis.jpg",
    ],
    [
      "Weldo Gonçalves da Silva Júnior",
      [["Gestão de Pessoas", "Membro"]],
      "fotos de perfil/weldo_gonçalves",
    ],
    [
      "Demétrius Mendes Miranda Rocha",
      [["Marketing", "Membro"]],
      "fotos de perfil/demetrius_mendes.jpg",
    ],
    [
      "Sarah Fernandes Rodrigues",
      [["Marketing", "Membro"]],
      "fotos de perfil/sarah_fernandes.jpg",
    ],
    [
      "Willyan Marques de Melo",
      [["Marketing", "Membro"]],
      "fotos de perfil/willyan_marques.jpg",
    ],
    [
      "Eduardo Pereira Policarpo Ferreira",
      [["Projetos", "Membro"]],
      "fotos de perfil/eduardo_pereira",
    ],
    [
      "João Pedro Fernandes Santos",
      [["Projetos", "Membro"]],
      "fotos de perfil/joao_pedro",
    ],
    [
      "Matheus das Neves Fernandes",
      [["Projetos", "Membro"]],
      "fotos de perfil/matheus_das_neves",
    ],
    [
      "Pedro Amorim de Gregori",
      [["Projetos", "Membro"]],
      "fotos de perfil/pedro_amorim.jpg",
    ],
    [
      "Adriano Lopes de Sousa",
      [["Comercial", "Membro"]],
      "fotos de perfil/adriano_lopes.jpg",
    ],
    [
      "Davy Alves de Jesus",
      [["Comercial", "Membro"]],
      "fotos de perfil/davy_alves.jpg",
    ],
    [
      "Hércules Natan Dantas de Almeida Medeiros",
      [["Comercial", "Membro"]],
      "fotos de perfil/hercules_natan",
    ],
    [
      "Luiz Henrique Figueiredo",
      [["Comercial", "Membro"]],
      "fotos de perfil/luiz_henrique.png",
    ],
    [
      "Mauro Ribeiro da Silva",
      [["Comercial", "Membro"]],
      "fotos de perfil/mauro_ribeiro.jpg",
    ],
    [
      "Arthur de Sá Antero",
      [["Administração e Finanças", "Membro"]],
      "fotos de perfil/arthur_desa.png",
    ],
    [
      "Leonardo Pereira Côrtes",
      [["Administração e Finanças", "Membro"]],
      "fotos de perfil/leonardo_pereira",
    ],
    [
      "Maria Eduarda Araújo Carvalho",
      [["Administração e Finanças", "Membro"]],
      "fotos de perfil/maria_eduarda.jpg",
    ],
    [
      "Matheus Braga Tourinho",
      [["Previdência", "Piloto Aposentado"]],
      ,
      [
        ["Quimera", "Desenvolvedor"],
        ["Mark's Engenharia", "Desenvolvedor"],
      ],
    ],
    [
      "Otho Teixeira Komatsu",
      [["Previdência", "Piloto Aposentado"]],
      ,
      [["Quimera", "Desenvolvedor"]],
    ],
    [
      "Miguel Carvalho de Medeiros",
      [["Previdência", "Piloto Aposentado"]],
      ,
      [["Quimera", "Desenvolvedor"]],
    ],
    [
      "Gustavo Vieira de Araújo",
      [["Previdência", "Piloto Aposentado"]],
      ,
      [["Quimera", "Desenvolvedor"]],
    ],
    [
      "Eduardo Castro Serra",
      [["Previdência", "Piloto Aposentado"]],
      ,
      [["Quimera", "Desenvolvedor"]],
    ],
    [
      "Kayran Vieira de Oliveira",
      [["Previdência", "Piloto Aposentado"]],
      ,
      [["Vai de férias", "Desenvolvedor"]],
    ],
    [
      "Gabriel Xavier Cardoso",
      [["Previdência", "Piloto Aposentado"]],
      ,
      [["Vai de férias", "Desenvolvedor"]],
    ],
    [
      "Mateus Correia Rocha da Cruz",
      [["Previdência", "Piloto Aposentado"]],
      ,
      [["Vai de férias", "Desenvolvedor"]],
    ],
    [
      "Keven Luan Santos Barbosa",
      [["Previdência", "Piloto Aposentado"]],
      ,
      [["Vai de férias", "Desenvolvedor"]],
    ],
    [
      "David Gonçalves Mendes",
      [["Previdência", "Piloto Aposentado"]],
      "fotos de perfil/david_mendes.png",
      [["Vai de férias", "Desenvolvedor"]],
    ],
    [
      "Pedro Venzi Lima Monteiro D'Oliveira",
      [["Previdência", "Piloto Aposentado"]],
      ,
      [["Vai de férias", "Desenvolvedor"]],
    ],
    [
      "Iago Carvalho Cavalcante",
      [["Previdência", "Piloto Aposentado"]],
      ,
      [["Vai de férias", "Desenvolvedor"]],
    ],
    [
      "João Paulo Marcondes D'Oliveira",
      [["Previdência", "Piloto Aposentado"]],
      ,
      [["Vai de férias", "Desenvolvedor"]],
    ],

    [
      "Leonardo Vargas Cabral",
      [["Previdência", "Piloto Aposentado"]],
      ,
      [["Mark's Engenharia", "Desenvolvedor"]],
    ],
    [
      "Ronald Cesar Dias de Oliveira",
      [["Previdência", "Piloto Aposentado"]],
      ,
      [["Mark's Engenharia", "Desenvolvedor"]],
    ],
    [
      "Arthur Rattes Lacava",
      [["Previdência", "Piloto Aposentado"]],
      ,
      [["Mark's Engenharia", "Desenvolvedor"]],
    ],
    [
      "Adriano Figueiredo Campos",
      [["Previdência", "Piloto Aposentado"]],
      ,
      [["Mark's Engenharia", "Desenvolvedor"]],
    ],
    ["Alexandre Olinda Martins", [["Previdência", "Piloto Aposentado"]]],
    ["Alexandre Santana Sousa", [["Previdência", "Piloto Aposentado"]]],
    ["André Filipe Caldas Laranjeira", [["Previdência", "Piloto Aposentado"]]],
    ["André Filipe da Conceição", [["Previdência", "Piloto Aposentado"]]],
    ["André Macedo Prado Valle", [["Previdência", "Piloto Aposentado"]]],
    ["Beatriz Santos de Oliveira", [["Previdência", "Piloto Aposentado"]]],
    ["Christian Costa Werner", [["Previdência", "Piloto Aposentado"]]],
    ["Clara Senra Rabello", [["Previdência", "Piloto Aposentado"]]],
    ["Danilo José Bispo Galvão", [["Previdência", "Piloto Aposentado"]]],
    ["Eduardo Marques dos Reis", [["Previdência", "Piloto Aposentado"]]],
    ["Eduardo Said Calil Vilaça", [["Previdência", "Piloto Aposentado"]]],
    [
      "Eduardo Scartezini Correia Carvalho ",
      [["Previdência", "Piloto Aposentado"]],
    ],
    ["Emanuel Silva de Medeiros", [["Previdência", "Piloto Aposentado"]]],
    ["Emily Souza Rodrigues", [["Previdência", "Piloto Aposentado"]]],
    ["Estevan Alexander de Paula", [["Previdência", "Piloto Aposentado"]]],
    ["Felipe Lima Vaz", [["Previdência", "Piloto Aposentado"]]],
    ["Fernando Jorge Santos Melo", [["Previdência", "Piloto Aposentado"]]],
    ["Gabriel Carvalho Moretto", [["Previdência", "Piloto Aposentado"]]],
    [
      "Gabriel Cruz Vaz Santos",
      [["Previdência", "Piloto Aposentado"]],
      "fotos de perfil/gabriel_cruz.jpg",
    ],
    ["Gabriel de Sousa Vieira", [["Previdência", "Piloto Aposentado"]]],
    ["Gabriel Tomaz Lima", [["Previdência", "Piloto Aposentado"]]],
    ["Gustavo Pereira Chaves", [["Previdência", "Piloto Aposentado"]]],
    ["Hélio Santana da Silva Júnior", [["Previdência", "Piloto Aposentado"]]],
    ["Hugo Honda Ferreira", [["Previdência", "Piloto Aposentado"]]],
    ["Hugo Nascimento Fonseca", [["Previdência", "Piloto Aposentado"]]],
    ["Ivan Bastos Lancellotti", [["Previdência", "Piloto Aposentado"]]],
    ["João Anselmo Bandeira dos Reis", [["Previdência", "Piloto Aposentado"]]],
    ["João Pedro Assis dos Santos", [["Previdência", "Piloto Aposentado"]]],
    ["João Pedro Silva de Andrade", [["Previdência", "Piloto Aposentado"]]],
    ["João Victor Novais Magalhães", [["Previdência", "Piloto Aposentado"]]],
    ["Jonas de Souza Fagundes ", [["Previdência", "Piloto Aposentado"]]],
    ["Jônatas Rocha de Paiva", [["Previdência", "Piloto Aposentado"]]],
    ["Kallebe de Sousa Silva", [["Previdência", "Piloto Aposentado"]]],
    ["Lincoln Abreu Barbosa", [["Previdência", "Piloto Aposentado"]]],
    ["Lucas Azuma Pelicioni Ishiruji", [["Previdência", "Piloto Aposentado"]]],
    ["Lucas Nascimento Santos Souza", [["Previdência", "Piloto Aposentado"]]],
    ["Lucas Rezende de Macedo", [["Previdência", "Piloto Aposentado"]]],
    ["Lucca Beserra Huguet", [["Previdência", "Piloto Aposentado"]]],
    ["Matheus Siade Ferreira", [["Previdência", "Piloto Aposentado"]]],
    ["Matheus Vieira Fernandes", [["Previdência", "Piloto Aposentado"]]],
    [
      "Miguel Barreto Rezende Marques de Freitas",
      [["Previdência", "Piloto Aposentado"]],
    ],
    [
      "Nícolas Paulin Benatto",
      [["Previdência", "Piloto Aposentado"]],
      "fotos de perfil/nicolas_paulin.jpg",
    ],
    ["Pedro Henrique Antunes Rocha", [["Previdência", "Piloto Aposentado"]]],
    ["Pedro Henrique Pires Egler", [["Previdência", "Piloto Aposentado"]]],
    ["Pedro Henriques Nogueira", [["Previdência", "Piloto Aposentado"]]],
    ["Rafael Raupp Bocorny", [["Previdência", "Piloto Aposentado"]]],
    ["Ricardo Arôso Mendes Kury", [["Previdência", "Piloto Aposentado"]]],
    ["Rodrigo Demetrio Palma", [["Previdência", "Piloto Aposentado"]]],
    ["Thiago de Oliveira Albuquerque", [["Previdência", "Piloto Aposentado"]]],
    ["Victhor Alexis de Souza Paiva", [["Previdência", "Piloto Aposentado"]]],
    ["Victor André Gris Costa", [["Previdência", "Piloto Aposentado"]]],
    ["Waliff Cordeiro Bandeira", [["Previdência", "Piloto Aposentado"]]],
    ["Bernardo Braga Oliveira Viana", [["Previdência", "Piloto Aposentado"]]],
    [
      "Caetano Korilo Fleury de Amorim",
      [["Previdência", "Piloto Aposentado"]],
      "fotos de perfil/caetano_korilo.jpg",
    ],
    ["Gabriel Marques da Rocha", [["Previdência", "Piloto Aposentado"]]],
    [
      "Lucas Corrêa Boaventura",
      [["Previdência", "Piloto Aposentado"]],
      "fotos de perfil/lucas_correa.jpg",
    ],
  ],
  Users: [["Admin", "admin@struct.unb.br", true]],
};
