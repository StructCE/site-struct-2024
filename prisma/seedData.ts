export type dataSchema = {
    Partners: [string, string][],
    DirectorShips: string[],
    DirectorShipsRoles: string[],
    Projects: [string, string, string][],
    ProjectsRoles: string[],
    Members:[string, [string, string][], [string, string][]?][]
  }

export const data: dataSchema = {
    Partners:[
        [
            "UnB",
            "https://www.unb.br"
        ],
        [
            "Concentro",
            "https://www.instagram.com/concentrodf/"
        ],
        [
            "Brasil Júnior",
            "https://brasiljunior.org.br/conheca-o-mej"
        ],
        [
            "Eletrojun",
            "https://eletronjun.com.br/"
        ],
        [
            "Switch Dreams",
            "https://switchdreams.com.br/"
        ],
        [
        "Aisec",
        "https://aiesec.org.br/"
        ]
    ],
    DirectorShips: [ // [Diretoria1, Diretoria2, ...]
        "Projetos",
        "Gestão de Pessoas",
        "Administração e Finanças",
        "Comercial", 
        "Marketing",
        "Presidência",
        "Previdência",
    ],
    DirectorShipsRoles: [ // [Role1, Role2, ...]
        "Diretor",
        "Membro",
        "Presidente",
        "Assessor",
        "Piloto Aposentado"
    ],
    Projects: [ // [[NomeProjeto1, DescriçãoProjeto1, LinkProjeto1], [NomeProjeto2, DescriçãoProjeto2, LinkProjeto2], ...]
        ["Quimera", "Desenvolvimento de um website em RAils para a empresa júnior Quimera. A Quimera é uma empresa júnior do curso de Letras da Universidade de Brasília (UnB). Foi fundada em 2014 pelos alunos de Línguas Estrangeiras Aplicadas (LEA). Eles oferecem uma ampla gama de serviços de comunicação e ensino, incluindo recepção cerimonial, revisões, capacitações, traduções, transcrição de áudio, reforço escolar, capacitação empresarial e formatação.", "https://quimeraej.com"],
        ["Vai de férias", "Desenvolvimento de aplicativo e site em React para um clube de viagens, que conecta passageiros com hoteis para hospedagem. A Vai de Férias é uma emppresa líder em programas de férias e hospedagem, oferecendo 7 dias de estadia em alguns dos melhores destinos turísticos do Brasil. Com uma presença consolidada no mercado, ela ocupa a 3ª posição no ranking das maiores cadeias hoteleiras do país e oferece uma ampla variedade de opções de hospedagem para atender a todos os gostos e orçamentos.", "https://www.vaideferias.com.br"],
        ["Mark's Engenharia", "Desenvolvimento de um website em React para a empresa Marks Engenharia EIRELI. A Marks Engenharia foi fundada em 1994, com o objetivo de atender as empresas em geral nas áreas de Construção Civil, Terraplanagem, Drenagem, Obras de Artes Especiais, Supressão Vegetal e Mineração. A Marks dispõe de corpo técnico formado por profissionais capacitados a prestar serviços técnicos e operacionais, desde a fase de implantação, até a fase de operação de um empreendimento.", "https://www.marks.com.br"]
    ],
    ProjectsRoles: [ // [ProjectRole1, ProjectRole2, ...]
        "Project Owner",
        "Gerente",
        "Desenvolvedor"
    ],
    Members: [ // [[NomeMembro1, [[NomeDiretoria1, CargoDiretoria1], [NomeDiretoria2, CargoDiretoria2], ...], [NomeProjeto1, CargoProjeto1], [NomeProjeto2, CargoProjeto2], ...], outros membros...]
        ["Daniel José de Assumpção",[["Gestão de Pessoas", "Diretor"], ["Presidência", "Assessor"]] ],
        ["Luigi Paschoal Westphal", [["Gestão de Pessoas", "Membro"]],
        [["Vai de férias", "Desenvolvedor"]]],
        ["Bernardo Barros Blanco", [["Gestão de Pessoas", "Membro"]]],
        ["Bernardo Manciola Lobo", [["Gestão de Pessoas", "Membro"]]],
        ["Pedro Menezes de Macedo", [["Gestão de Pessoas", "Membro"]]],
        ["Rodrigo Reis dos Santos", [["Gestão de Pessoas", "Membro"]]],
        ["Weldo Gonçalves da Silva Júnior", [["Gestão de Pessoas", "Membro"]]],
        ["Guilherme Pereira Sampaio", [["Marketing", "Diretor"]]],
        ["Demétrius Mendes Miranda Rocha", [["Marketing", "Membro"]]],
        ["Sarah Fernandes Rodrigues", [["Marketing", "Membro"]]],
        ["Willyan Marques de Melo", [["Marketing", "Membro"]]],
        ["Paulo Fernando Vilarim", [["Projetos", "Diretor"]]],
        ["Eduardo Pereira Policarpo Ferreira", [["Projetos", "Membro"]]],
        ["João Pedro Fernandes Santos", [["Projetos", "Membro"]]],
        ["Matheus das Neves Fernandes", [["Projetos", "Membro"]]],
        ["Pedro Amorim de Gregori", [["Projetos", "Membro"]]],
        ["Kaleb Henrique Silva Pereira", [["Comercial", "Diretor"]]],
        ["Adriano Lopes de Sousa", [["Comercial", "Membro"]]],
        ["Davy Alves de Jesus", [["Comercial", "Membro"]]],
        ["Hércules Natan Dantas de Almeida Medeiros", [["Comercial", "Membro"]]],
        ["Luiz Henrique Figueiredo", [["Comercial", "Membro"]]],
        ["Mauro Ribeiro da Silva", [["Comercial", "Membro"]]],
        ["Pedro Eduardo Cunha Ximenes", [["Administração e Finanças", "Diretor"]]],
        ["Arthur de Sá Antero", [["Administração e Finanças", "Membro"]]],
        ["Leonardo Pereira Côrtes", [["Administração e Finanças", "Membro"]]],
        ["Maria Eduarda Araújo Carvalho", [["Administração e Finanças", "Membro"]]],
        ["Jéssica Leal de Melo", [["Presidência", "Presidente"]]],
        ["José Luiz Gomes Nogueira", [["Previdência", "Piloto Aposentado"]], [["Quimera", "Project Owner"]]],
        ["Arthur Mota Furtado", [["Previdência", "Piloto Aposentado"]], [["Quimera", "Gerente"], ["Vai de férias", "Gerente"]]],
        ["Pedro Augusto Ramalho Duarte", [["Previdência", "Piloto Aposentado"]], [["Quimera", "Gerente"]]],
        ["Matheus Braga Tourinho", [["Previdência", "Piloto Aposentado"]], [["Quimera", "Desenvolvedor"], ["Mark's Engenharia", "Desenvolvedor"]]],
        ["Otho Teixeira Komatsu", [["Previdência", "Piloto Aposentado"]], [["Quimera", "Desenvolvedor"]]],
        ["Miguel Carvalho de Medeiros", [["Previdência", "Piloto Aposentado"]], [["Quimera", "Desenvolvedor"]]],
        ["Gustavo Vieira de Araújo", [["Previdência", "Piloto Aposentado"]], [["Quimera", "Desenvolvedor"]]],
        ["Eduardo Castro Serra", [["Previdência", "Piloto Aposentado"]], [["Quimera", "Desenvolvedor"]]],
        ["Fernando Sobral Nóbrega", [["Previdência", "Piloto Aposentado"]], [["Vai de férias", "Gerente"]]],
        ["Guilherme Rodrigues Lodron Pires", [["Previdência", "Piloto Aposentado"]], [["Vai de férias", "Gerente"], ["Vai de férias", "Desenvolvedor"]]],
        ["Kayran Vieira de Oliveira", [["Previdência", "Piloto Aposentado"]], [["Vai de férias", "Desenvolvedor"]]],
        ["Gabriel Xavier Cardoso", [["Previdência", "Piloto Aposentado"]], [["Vai de férias", "Desenvolvedor"]]],
        ["Mateus Correia Rocha da Cruz", [["Previdência", "Piloto Aposentado"]], [["Vai de férias", "Desenvolvedor"]]],
        ["Keven Luan Santos Barbosa", [["Previdência", "Piloto Aposentado"]], [["Vai de férias", "Desenvolvedor"]]],
        ["David Gonçalves Mendes", [["Previdência", "Piloto Aposentado"]], [["Vai de férias", "Desenvolvedor"]]],
        ["Pedro Venzi Lima Monteiro D'Oliveira", [["Previdência", "Piloto Aposentado"]], [["Vai de férias", "Desenvolvedor"]]],
        ["Iago Carvalho Cavalcante", [["Previdência", "Piloto Aposentado"]], [["Vai de férias", "Desenvolvedor"]]],
        ["João Paulo Marcondes D'Oliveira", [["Previdência", "Piloto Aposentado"]], [["Vai de férias", "Desenvolvedor"]]],
        ["Arthur Padovesi Piratelli", [["Previdência", "Piloto Aposentado"]], [["Mark's Engenharia", "Gerente"]]],
        ["Leonardo Vargas Cabral", [["Previdência", "Piloto Aposentado"]], [["Mark's Engenharia", "Desenvolvedor"]]],
        ["Ronald Cesar Dias de Oliveira", [["Previdência", "Piloto Aposentado"]], [["Mark's Engenharia", "Desenvolvedor"]]],
        ["Arthur Rattes Lacava", [["Previdência", "Piloto Aposentado"]], [["Mark's Engenharia", "Desenvolvedor"]]],
        ["Adriano Figueiredo Campos", [["Previdência", "Piloto Aposentado"]], [["Mark's Engenharia", "Desenvolvedor"]]],
    ]
}
