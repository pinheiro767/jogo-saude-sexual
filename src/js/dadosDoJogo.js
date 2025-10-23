/**
 * =================================================================
 * Jogo da Saúde Sexual - Dados das Perguntas (dadosDoJogo.js)
 * Estrutura de Dados em JavaScript para as perguntas do Jogo 1.
 * As respostas corretas são 'V' (Verdadeiro) ou 'F' (Falso).
 * =================================================================
 */

// -----------------------------------------------------------------
// 1. Perguntas Informativas e Curiosidades (Casas Normais)
// -----------------------------------------------------------------
const perguntasInformativas = [
    {
        pergunta: "Mito ou Verdade: Não retirar o ar da ponta do preservativo antes de usar é o erro mais comum e pode fazê-lo estourar.",
        resposta_correta: "V",
        explicacao: "VERDADEIRO. O erro mais comum é não retirar o ar da ponta do preservativo. Isso cria uma bolha de ar que pode causar o rompimento. Basta apertar suavemente a ponta (reservatório) antes de o colocar."
    },
    {
        pergunta: "Mito ou Verdade: O calor e a fricção de guardar o preservativo na carteira ou porta-luvas não afetam a sua segurança.",
        resposta_correta: "F",
        explicacao: "FALSO. O calor e a fricção podem danificar o látex, tornando o preservativo ineficaz. Você deve guardá-lo num local fresco, seco e protegido (como um bolso da mochila)."
    },
    {
        pergunta: "Mito ou Verdade: O anel externo do preservativo feminino serve para manter o dispositivo no lugar fora da vagina/ânus, cobrindo a área externa.",
        resposta_correta: "V",
        explicacao: "VERDADEIRO. O anel externo serve para manter o preservativo feminino no lugar fora da vagina (ou ânus), cobrindo a vulva/área externa. É também usado para guiar a inserção e a remoção."
    },
    {
        pergunta: "Mito ou Verdade: O diafragma é considerado um método de barreira, assim como o preservativo masculino.",
        resposta_correta: "V",
        explicacao: "VERDADEIRO. O preservativo feminino e o diafragma (que precisa ser usado com espermicida) são exemplos de métodos de barreira."
    },
    {
        pergunta: "Mito ou Verdade: A 'pílula do dia seguinte' tem a mesma eficácia que a pílula diária e deve ser usada como método contraceptivo regular.",
        resposta_correta: "F",
        explicacao: "FALSO. É um contraceptivo de emergência que deve ser usado apenas em casos pontuais. Não deve ser usado como método contraceptivo regular, pois a sua eficácia é menor do que a pílula diária e a dose hormonal é muito elevada."
    },
    {
        pergunta: "Mito ou Verdade: Se a camisinha rasgar a embalagem com os dentes, não há problema, pois o microfuro é invisível.",
        resposta_correta: "F",
        explicacao: "FALSO. Rasgar a embalagem com os dentes ou as unhas é um erro comum. Um microfuro invisível anula a proteção. Use sempre os dedos para rasgar o sachê na borda serrilhada."
    },
    {
        pergunta: "Mito ou Verdade: O lado certo do preservativo masculino é aquele em que a borda está para fora, parecendo um pequeno chapéu.",
        resposta_correta: "V",
        explicacao: "VERDADEIRO. O lado certo é aquele em que a borda está para fora. Se começar a desenrolar do lado errado e tocar no pênis, jogue fora e pegue outra!"
    },
    {
        pergunta: "Mito ou Verdade: O duche vaginal após a relação sexual é um método seguro e eficaz para prevenir ISTs e gravidez.",
        resposta_correta: "F",
        explicacao: "FALSO. O duche pode na verdade empurrar bactérias e vírus para dentro do colo do útero e desequilibra a flora vaginal, aumentando o risco de infecções."
    },
    {
        pergunta: "Mito ou Verdade: O único método contraceptivo que oferece proteção contra a maioria das ISTs é o preservativo (masculino ou feminino).",
        resposta_correta: "V",
        explicacao: "VERDADEIRO. O preservativo (masculino ou feminino) é o único método que oferece dupla proteção: contra a gravidez e contra a maioria das IST."
    },
    {
        pergunta: "Mito ou Verdade: O consentimento é contínuo e pode ser retirado a qualquer momento durante a atividade sexual.",
        resposta_correta: "V",
        explicacao: "VERDADEIRO. O consentimento deve ser dado e confirmado em cada etapa da atividade sexual, podendo ser retirado a qualquer momento. O consentimento anterior não garante o atual."
    }
];

// -----------------------------------------------------------------
// 2. Perguntas de Risco: Verdadeiro ou Falso (Casas V/F)
// -----------------------------------------------------------------
const perguntasRisco = [
    {"pergunta": "Verdade ou Mito: Esquecer a pílula anticoncepcional num dia, mas tomá-la no dia seguinte, anula completamente o risco de gravidez.", "resposta_correta": "F", "explicacao": "FALSO. A eficácia da pílula depende da tomada correta e diária. Se você falhar um dia, a proteção pode ser reduzida, e métodos de proteção adicionais (como o preservativo) devem ser usados nos dias seguintes, conforme as indicações médicas."},
    {"pergunta": "É seguro usar dois preservativos ao mesmo tempo para maior proteção.", "resposta_correta": "F", "explicacao": "FALSO. Usar dois preservativos aumenta o atrito entre eles, fazendo com que ambos se rasguem mais facilmente. Use sempre apenas um preservativo de cada vez."},
    {"pergunta": "A pílula do dia seguinte pode ser usada como método contraceptivo regular.", "resposta_correta": "F", "explicacao": "FALSO. A pílula do dia seguinte é apenas para emergências. Usar regularmente pode causar desequilíbrios hormonais e é menos eficaz que métodos contraceptivos regulares."},
    {"pergunta": "É possível engravidar mesmo usando preservativo corretamente.", "resposta_correta": "V", "explicacao": "VERDADEIRO. Nenhum método contraceptivo é 100% eficaz. O preservativo tem cerca de 98% de eficácia quando usado corretamente, mas ainda existe uma pequena possibilidade de falha."},
    {"pergunta": "Toda IST apresenta sintomas visíveis.", "resposta_correta": "F", "explicacao": "FALSO. Muita IST (como Clamídia, HPV e HIV) pode ser assintomática por longos períodos. Por isso é importante fazer testes regulares e usar sempre preservativo."},
    {"pergunta": "O preservativo protege contra toda IST.", "resposta_correta": "F", "explicacao": "FALSO. O preservativo protege contra a maioria das IST, mas algumas como HPV e Herpes podem ser transmitidas pelo contato com áreas da pele não cobertas pelo preservativo."},
    {"pergunta": "Lubrificantes à base de óleo são seguros para usar com preservativos de látex.", "resposta_correta": "F", "explicacao": "FALSO. Lubrificantes à base de óleo (como vaselina ou óleos de massagem) podem danificar o látex do preservativo, tornando-o menos eficaz e mais propenso a rasgar. Use sempre lubrificantes à base de água ou silicone com preservativos de látex."},
    {"pergunta": "É possível engravidar tendo relação sexual durante a menstruação.", "resposta_correta": "V", "explicacao": "VERDADEIRO. Embora a probabilidade seja menor, espermatozoides podem sobreviver por vários dias no corpo feminino, e a ovulação pode ocorrer mais cedo em alguns ciclos, levando à gravidez. Sempre use proteção se não deseja engravidar."},
    {"pergunta": "IST é um problema de saúde apenas para pessoas sexualmente ativas com múltiplos parceiros.", "resposta_correta": "F", "explicacao": "FALSO. Qualquer pessoa sexualmente ativa pode contrair uma IST, independentemente do número de parceiros. O risco está na prática sexual desprotegida."},
    {"pergunta": "O sexo anal é uma prática de baixo risco para a transmissão de IST em comparação com o sexo vaginal.", "resposta_correta": "F", "explicacao": "FALSO. O sexo anal é, na verdade, uma prática de alto risco para a transmissão de IST (incluindo o HIV) devido à maior fragilidade do tecido anal, que pode sofrer microlesões mais facilmente. O uso correto do preservativo e lubrificante é essencial."}
];