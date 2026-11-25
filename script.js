const botaoEntrar = document.getElementById("botao-entrar");

if (botaoEntrar) {
    botaoEntrar.addEventListener("click", function () {
        window.location.href = "principal.html";
    });
}

// =================================
// DADOS DOS LUTADORES
// =================================

const lutadores = {

    sekhmet: {
        nome: "Sekhmet",
        titulo: "Leoa Indomável",

        habilidades: [
            "Velocidade",
            "Garras Quentes",
            "Velocidade de cortes"
        ],

        golpes: [
            {
                nome: "Hór Djeser: Anut Pet!",
                traducao: "Hórus Fervente: Garras dos Céus"
            },
            {
                nome: "Kara Sekher: Iri Bastet!",
                traducao: "Garra Felina Incandescente de Bastet!"
            },
            {
                nome: "Ba Neseret Anpu!",
                traducao: "A Alma Flamejante de Anúbis!"
            },
            {
                nome: "Kek-Neseret Apep!",
                traducao: "Trevas Flamejantes de Apep!"
            },
            {
                nome: "Sakhmet-Ra: Nekhet Aat!",
                traducao: "O Esquartejo Supremo da Leoa Solar!",
                tipo: "Golpe forte"
            },
            {
                nome: "Sekhmet - Shepes Neseret Heka Violeta!!!",
                traducao: "O Esquartejo Supremo da Chama Violeta!!!",
                tipo: "Golpe final"
            }
        ]
    },

    tupa: {
        nome: "Tupã",
        titulo: "Deus da Tempestade",

        habilidades: [
            "Velocidade Elétrica",
            "Movimentação com os pés",
            "Capoeirista",
        ],

            transformacoes: [
        {
            nome: "Oka’yara pu’ama tekoá",
            traducao: "Tribo Trovão do Corpo Divino"
        }
        ],

        golpes: [
            {
                nome: "Putyro Tupã.",
                traducao: "Soco Trovão"
            },
            {
                nome: "Jasy-Pindó Akuruk",
                traducao: "Curva da Meia-Lua de Relâmpago"
            },
            {
                nome: "Pindorama Kumã!",
                traducao: "Dança do Trovão"
            },
            {
                nome: "Pindorama Kumã-eté",
                traducao: "Dança perfeita do trovão"
            },
            {
                nome: "Ybyeapema Potyrã!!!",
                traducao: "Martelo do Grande Clarão!"
            },
            {
                nome: "Aparamap Ibá Tî Honhõga!!!",
                traducao: "Chapéu de Couro do Grande Trovão!",
                tipo: "Golpe forte"
            },
            {
                nome: "Tupã-Nhã Py Tupin!",
                traducao: "Chute do Trovão Tupi!",
                tipo: "Golpe final"
            }
        ]
    },
        kagutsuchi: {
        nome: "Kagutsuchi",
        titulo: "Oni das Chamas",

        habilidades: [
            "Regeneração",
            "Controle de Chamas",
            "Ferocidade",
            "Enshi no Gan (O Olho da Visão das Chamas)"
        ],

        golpes: [
            {
                nome: "Maen · Daiichi Dankai · Himatsuri no Mai!",
                traducao: "Primeiro Estágio: Dança do Festival do Fogo!"
            },
            {
                nome: "Maen · Daini Dankai · Ka-chū Kōho!",
                traducao: "Chamas Demoníacas · Segundo Estágio · Caminhada no Fogo!"
            },
            {
                nome: "Maen · Daisan Dankai · Onibi Bon Odori!",
                traducao: "Terceiro Estágio: Bon Odori do Fogo Fantasma!"
            },
            {
                nome: "Maen · Daiyon Dankai · En'ei Awa Odori!",
                traducao: "Quarto Estágio: Awa Odori das Sombras Flamejantes!!"
            },
            {
                nome: "Maen · Dai-Go Dankai · Secchū Taimatsu no Mai!",
                traducao: "Chamas Demoníacas: Quinto Estágio: Dança das Tochas na Neve."
            },
            {
                nome: "Maen · Dairoku Dankai · Karyū Ranbu",
                traducao: "Chamas Demoníacas — Sexto Estágio: Dança Ótica do Dragão de Fogo"
            },
            {
                nome: "Maen · Dainan Dankai: Jigokuen no Kyōbu!",
                traducao: "Chamas Demoníacas · Sétimo Estágio: Dança das Chamas Infernais!",
                tipo: "Golpe forte"
            },
            {
                nome: "Maen · Daihachi Dankai · Maen Kagura",
                traducao: "Chamas Demoníacas, Oitavo Estágio: Kagura das Chamas Demoníacas!",
                tipo: "Golpe forte"
            },
            {
                nome: "Maen · Daikyū Dankai · Metsuen!",
                traducao: "Chamas Demoníacas: Nono Estágio: Aniquilação Flamejante!",
                tipo: "Golpe final"
            }
        ]
    },
        honda: {
        nome: "Honda Tadakatsu",
        titulo: "Guerreiro Invencível",

        habilidades: [
            "Habilidades com a lança"
        ],

        golpes: [
            {
                nome: "Kōtetsu no Shitotsu",
                traducao: "Ferroada de Aço"
            },
            {
                nome: "Chōzetsu Funsai Inseki!",
                traducao: "Meteoro Esmagador Absoluto!"
            },
            {
                nome: "Kaminari no Shitotsu!",
                traducao: "Ferroada do Trovão!"
            },
            {
                nome: "Goku · Tonbo Zanran!",
                traducao: "Tempestade Cortante Suprema da Libélula!!"
            },
            {
                nome: "Tonbo Kasshōtsuki!",
                traducao: "Investida Rasante da Libélula!"
            },
            {
                nome: "Kaminari no Tsuki · Tadakatsu",
                traducao: "Estocada do Relâmpago: Tadakatsu!"
            },
            {
                nome: "Sengoku · Fukutsu Iwa!",
                traducao: "Rocha Implacável da Era Sengoku!"
            },
            {
                nome: "Tonbo Gokujin!",
                traducao: "Lâmina Suprema da Libélula!",
                tipo: "Golpe forte"
            },
            {
                nome: "Honda Tadakatsu · Muteki Tonbo Gokujin!",
                traducao: "Lâmina Suprema da Libélula Invencível de Tadakatsu Honda!",
                tipo: "Golpe final"
            }
        ]
    },
        sansao: {
        nome: "Sansão",
        titulo: "O Homem Mais Forte",

        habilidades: [
            "Extrema Força",
            "Percepção Sonora/Vibração",
            "Vapor Quente"
        ],

        golpes: [
            {
                nome: "Makat Shemesh",
                traducao: "Pancada Solar"
            },
            {
                nome: "Chomat Shemesh Beli-Chat",
                traducao: "Muralha do Sol Imparável"
            },
            {
                nome: "Makat Shemesh Ne'egeret",
                traducao: "Golpe de Sol Armazenado"
            },
            {
                nome: "Kad Or Shemesh",
                traducao: "Esfera de Luz Solar"
            },
            {
                nome: "Éven-Baraq Ha-Shemesh!!!",
                traducao: "Meteoro Solar!"
            },
            {
                nome: "Mishpát ha-Shémesh ha-Acharón",
                traducao: "O Veredito Solar Final",
                tipo: "Golpe forte"
            },
            {
                nome: "Din acharon mi-shemesh ha-tzedek!",
                traducao: "O Veredito Final vindo do Sol da Justiça!",
                tipo: "Golpe final"
            }
        ]
    },
        tomoe: {
        nome: "Tomoe Gozen",
        titulo: "A Maior Espadachim",

        habilidades: [
            "Respiração Concentrada",
            "Velocidade dos Ventos",
            "Transformação: Seijaku no Kyōchi: Sukitōru Seka (Estado da Serenidade: Mundo Transparente!)",
            "Mudança de Estilo: Nakahara-ryū Heihō… Fuji no Ranpū (Arte Marcial dos Nakahara: Tempestade Incessante do Monte Fuji)"
        ],

        golpes: [
            {
                nome: "Fūjūjizan!",
                traducao: "Corte Cruzado do Vento!"
            },
            {
                nome: "Dōfū!",
                traducao: "Vento Condutor!"
            },
            {
                nome: "Zanretsu no Bōfū — Saikuron!",
                traducao: "Vendaval Cortante: Ciclone!"
            },
            {
                nome: "Seifū Shingan",
                traducao: "Foco Sereno do Vento Calmo."
            },
            {
                nome: "Nakahara-ryū: Zampū Senran!",
                traducao: "Estilo dos Nakahara: Tempestade Giratória do Vento Cortante!"
            },
            {
                nome: "Nakahara-ryū: Enpū Ryakusen!",
                traducao: "Estilo dos Nakahara: Relâmpago Rasante do Vento Fumegante!"
            },
            {
                nome: "Nakahara-ryū: Fūjin Retsuran!",
                traducao: "Estilo dos Nakahara: Tempestade Violenta de Fūjin!",
                tipo: "Golpe forte"
            },
            {
                nome: "Fūjū Nakahara Ōgi: Seifū Shingan!",
                traducao: "Técnica Suprema dos Nakahara: Foco Sereno do Vento Calmo!",
                tipo: "Golpe final"
            }
        ]
    },

    cernunnos: {
        nome: "Cernunnos",
        titulo: "Sétima Besta",

        habilidades: [
            "Mudança de Forma",
            "Super Força",
            "Resistência"
        ],

        transformacoes: [
            {
                nome: "Ard-Fhoirm an Fhórnais: an Torc Moccus!!",
                traducao: "A Forma Elevada do Poder: o Javali Moccus!!"
            },
            {
                nome: "Ard-Fhoirm na Luaineasa: an Nathair Bhríde!",
                traducao: "A Forma Elevada da Agilidade: Serpente Brigid!"
            },
            {
                nome: "Ard-Fhoirm na Luais: an Capall Eponae!",
                traducao: "Força Elevada da Velocidade: Cavalo Eponae"
            },
            {
                nome: "Ard-Fhoirm na Dorchada: an Mac Tíre Arawain",
                traducao: "Forma Elevada da escuridão: Lobo Arawn"
            },
            {
                nome: "Ard-Fhoirm na hEitilte: an Fiach Mórrígna!",
                traducao: "A Forma Elevada do Voo: Corvo Morrígan."
            },
            {
                nome: "Ard-Neart na Mara Fíochmhaire: Bradán Mhanannáin mic Lir!",
                traducao: "Força Elevada do Mar Furioso: o Salmão de Manannán mac Lir!"
            },
            {
                nome: "Ard-Fhoirm na Beithígh Uachtaraí: an Fia Cernunna!",
                traducao: "Forma Elevada da Besta Suprema: o Cervo de Cernunnos!"
            }
        ],

        golpes: [
            {
                nome: "Athfhoirmiú páirteach: Airm, Nathair: Brigid!",
                traducao: "Transfiguração Parcial: Braços, Serpente – Brigid!"
            },
            {
                nome: "Ard-Fhionnachtain na Coise: an Capall Eponae!",
                traducao: "Transformação Parcial: Perna, Cavalo de Eponae!"
            },
            {
                nome: "Cluasa na Dorchada, Tiarnaíocht na Scáthanna.",
                traducao: "Garras da escuridão, domínio das sombras."
            },
            {
                nome: "Gearradh an Mhic Tíre Dhorcha Cheiltigh!",
                traducao: "Corte do Lobo Sombrio Celta!"
            },
            {
                nome: "Ard-Chumhacht na nGaoth Ceilteach: Sceird Fhiach Dubh!",
                traducao: "Poder Supremo dos Ventos Celtas: Rajada do Corvo Negro."
            },
            {
                nome: "Mór-Ghaoith na Mórrígna, Fiach an Áir!!",
                traducao: "O Furacão da Morrígan, Corvo do Massacre!!"
            },
            {
                nome: "Uthókaphai mahǎa-sǎan hæ̀ng plaa sǣl-mɔɔn เซลติก",
                traducao: "O Dilúvio Devastador do Salmão Celta"
            },
            {
                nome: "Kaan rúk baang-sùan hæ̀ng fǔung plaa sǣl-mɔɔn!!",
                traducao: "O avanço parcial do cardume de salmões!!!"
            },
            {
                nome: "Kaan rúk sàk-sìt hæ̀ng fǔung plaa sǣl-mɔɔn khɔ̌ɔng jàk-kra-phat nám seltik!",
                traducao: "A investida sagrada do cardume de salmões do imperador das águas celtas!",
                tipo: "Golpe forte"
            },
            {
                nome: "Neartú Deiridh an Fhia: Léirscrios na Láimhe Deise!",
                traducao: "Reforço Final do Cervo: Devastação da Mão Direita!",
                tipo: "Golpe forte"
            },
            {
                nome: "Gáir Chatha Uachtarach an Fhiaigh!",
                traducao: "Grito de Guerra Supremo do Corvo!",
                tipo: "Golpe forte"
            },
            {
                nome: "Breithiúnas Deiridh na mBeithíoch Ceilteach!",
                traducao: "O Julgamento Final das Bestas Celtas!",
                tipo: "Golpe final"
            }
        ]
    },

    nicolau: {
        nome: "Nicolau de Mira",
        titulo: "Patrono da Generosidade",

        habilidades: [
            "Furtividade",
            "Reação Rápida",
            "Criatividade",
            "Saco de Presentes"
        ],

        brinquedos: [
    {
        nome: "Xíphos Astrapiaíou Phōtòs Astrikoû",
        traducao: "O Sabre da Luz Estelar Fulminante"
    },
    {
        nome: "Hē Gantlōtìs toû Kosmikoû Apeírou",
        traducao: "Manopla do Infinito Cósmico"
    },
    {
        nome: "Espada do He-Man",
        traducao: "Espada do He-Man"
    },
    {
        nome: "Martelo do Thor da Marvel",
        traducao: "Martelo do Thor da Marvel"
    },
    {
        nome: "Theîon Élkēthron tou Hagíou Nikoláou!",
        traducao: "Trenó Divino de São Nicolau!"
    },
    {
        nome: "Theîon Déndron tôn Khristougénnon!",
        traducao: "A Árvore de Natal Divina!",
        tipo: "Brinquedo mais forte"
    }
],
        golpes: [
    {
        nome: "Égeire, paigníon!",
        traducao: "Desperte, brinquedo!"
    },
    {
        nome: "Myrathor Nhal’ten Dravos!",
        traducao: "Avanço do Trem de Natal!"
    },
    {
        nome: "Hierón Glýkasma tēs Christougenniátidos Metrós!",
        traducao: "Doce Sagrado da Mãe Natalina!"
    },
    {
        nome: "Kṓdōn Hypertéleios tou Christougénnou!!",
        traducao: "Sino Perfeitíssimo do Natal!"
    },
    {
        nome: "Tachýtēs Sénna Hypértātē!",
        traducao: "Velocidade Suprema de Senna!"
    },
    {
        nome: "Éphodos tês Kynoperipólou!",
        traducao: "O Avanço da Patrulha Canina!"
    },
    {
        nome: "Theía Bolḗ Hydátinē Phortisménē!",
        traducao: "Disparo Aquático Divinamente Carregado!"
    },
    {
        nome: "Khróne, paûsai nŷn!",
        traducao: "Tempo, cesse agora! (Para o tempo por 10 segundos)"
    },
    {
        nome: "Aktína Léizer tou Sidiroû Andrós!",
        traducao: "Disparo a Laser do Homem de Ferro!"
    },
    {
        nome: "Theía Grothià tês Apeírou Dynámeōs!",
        traducao: "O Soco Divino do Poder Infinito!",
        tipo: "Golpe forte"
    },
    {
        nome: "Theîon Kanónion tês Iskhýos tou Réintzer!",
        traducao: "Canhão Divino do Poder do Ranger!",
        tipo: "Golpe forte"
    },
    {
        nome: "Ho Theîos Astḗr tês Bēthleém!",
        traducao: "A Estrela Divina de Belém!",
        tipo: "Golpe final"
    }
],

        territorios: [
    {
        nome: "Hē Enthésmios Sphaîra tou Genéthliou Phōtós",
        traducao: "A Esfera Consagrada da Luz Natalina."
    },
    {
        nome: "Oîkos tôn Oneírōn tês Barbíēs!!",
        traducao: "A Casa dos Sonhos da Barbie!"
    },
    {
        nome: "Drómos tôn Harmátōn tês Píxar, Hypértachys!",
        traducao: "A Pista dos Carros da Pixar, Supremamente Veloz!"
    }
]
    },

perseu: {
    nome: "Perseu",
    titulo: "Herdeiro do Trovão",

    habilidades: [
        "Manipulação de Raios",
        "Velocidade Elétrica",
        "Reflexos rápidos",
        "Theîos Keraunós: Phére moi tàs Astrapàs tou Perséōs!!! (Trovão Divino: Traga-me os Raios de Perseus!!)"
    ],

    golpes: [
        {
            nome: "Eu sou o Herdeiro do Trovão",
            traducao: "Golpe assinatura",
            tipo: "Golpe assinatura"
        },
        {
            nome: "Tetrakeraunós!",
            traducao: "Trovoada Tetra!"
        },
        {
            nome: "Plêgma!",
            traducao: "Choque"
        },
        {
            nome: "Androméda: Keraunôn Brokhḗ!",
            traducao: "Andrômeda: Chuva de Trovões!"
        },
        {
            nome: "HÝPSISTOS KERAUNÓS!!",
            traducao: "Raio Supremo!!"
        },
        {
            nome: "Eústokhos Astrapḗ!",
            traducao: "Relampejo Certeiro!"
        },
        {
            nome: "Ēlektrikḕ Éktasis: Apéranton!!!",
            traducao: "Extensão Elétrica: Vastidão!!!"
        },
        {
            nome: "Ēlektrikòs Klonismòs!",
            traducao: "Choque Elétrico!"
        },
        {
            nome: "Eústokhos Astrapḗ!",
            traducao: "Relampejo Certeiro!"
        },
        {
            nome: "Eústokhos Diatrētikḕ Kataigís!",
            traducao: "Trovoada Certeira Perfurante!"
        },
        {
            nome: "Elthé, KÉRAUNE!",
            traducao: "Venha, TROVÃO!"
        },
        {
            nome: "Theîos Keraunòs Exolóthreusēs!",
            traducao: "Trovão Divino: Extermínio!",
            tipo: "Golpe forte"
        },
        {
            nome: "Klēronómos tou Keraunoû: Hýpsistos Keraunòs tou Perséōs!!!",
            traducao: "Herdeiro do Trovão: Supremo Raio de Perseu!",
            tipo: "Golpe final"
        }
    ]
},

jasao: {
    nome: "Jasão",
    titulo: "Campeão Grego",

    habilidades: [
        "Estrategista",
        "Força e Velocidade sobre humana",
        "Transfigurar Energia"
    ],

    golpes: [
        {
            nome: "Éphodos tou Kriou!",
            traducao: "Avanço do Carneiro!"
        },
        {
            nome: "Sphagḕ tou Erythroû Kriou!",
            traducao: "Massacre do Carneiro Rubro!"
        },
        {
            nome: "Diplê Dýnamis: Khrysoûs Kriòs Díkeras!",
            traducao: "Potência Dupla: Carneiro Dourado de Dois Chifres!"
        },
        {
            nome: "Erythrókhrysos Laktismós!",
            traducao: "Coice de Ouro Rubro!"
        },
        {
            nome: "Krioû Laktismòs Lepídos!",
            traducao: "Coice de Lâmina Carneiro!"
        },
        {
            nome: "Basanismòs tou Khrysoû Krioû!!!",
            traducao: "Tormento do Carneiro de Ouro!!!"
        },
        {
            nome: "Argonautikḕ Éphodos!!",
            traducao: "Avanço Argonauta!!"
        },
        {
            nome: "Khrysoûs Kriós: Argonautikḕ Katastrophḗ!!!",
            traducao: "Carneiro Dourado: Destruição Argonauta!",
            tipo: "Golpe final"
        }
    ]
},


};

// =================================
// ELEMENTOS DA FICHA INTERATIVA
// =================================

const janelaPersonagem = document.getElementById("janela-personagem");

const nomePersonagem = document.getElementById("nome-personagem");

const tituloPersonagem = document.getElementById("titulo-personagem");

const listaHabilidades = document.getElementById("lista-habilidades");

const listaGolpes = document.getElementById("lista-golpes");

const botaoFechar = document.getElementById("fechar-ficha");

const listaTransformacoes = document.getElementById("lista-transformacoes");

const listaBrinquedos = document.getElementById("lista-brinquedos");

const listaTerritorios = document.getElementById("lista-territorios");

const secaoTransformacoes = document.getElementById("secao-transformacoes");
const secaoBrinquedos = document.getElementById("secao-brinquedos");
const secaoTerritorios = document.getElementById("secao-territorios");


function abrirFicha(personagem) {

    const dados = lutadores[personagem];

    if (!dados) {
        return;
    }

    nomePersonagem.textContent = dados.nome;
    tituloPersonagem.textContent = dados.titulo;

    // Limpar informações anteriores
    listaHabilidades.innerHTML = "";
    listaGolpes.innerHTML = "";
    listaTransformacoes.innerHTML = "";
    console.log("Brinquedos do Nicolau:", dados.brinquedos);
    console.log("Territórios do Nicolau:", dados.territorios);
    console.log("Itens de brinquedos na tela:", listaBrinquedos.children.length);
    console.log("Itens de territórios na tela:", listaTerritorios.children.length);

    // Mostrar ou esconder seções conforme o personagem
secaoTransformacoes.style.display =
    dados.transformacoes?.length ? "block" : "none";

secaoBrinquedos.style.display =
    dados.brinquedos?.length ? "block" : "none";

secaoTerritorios.style.display =
    dados.territorios?.length ? "block" : "none";

    // Adicionar habilidades
    dados.habilidades.forEach(function (habilidade) {

        const item = document.createElement("li");

        item.textContent = habilidade;

        listaHabilidades.appendChild(item);

    });

  // Adicionar transformações
if (dados.transformacoes) {
    dados.transformacoes.forEach(function (transformacao) {
        const item = document.createElement("li");

        item.classList.add("transformacao");

        // Cor exclusiva para Tupã
        if (personagem === "tupa") {
            item.classList.add("transformacao-tupa");
        }

        item.innerHTML = `
            <strong>${transformacao.nome}</strong><br>
            <span>${transformacao.traducao}</span>
        `;

        listaTransformacoes.appendChild(item);
    });
}

    // Adicionar brinquedos
if (dados.brinquedos) {
    dados.brinquedos.forEach(function (brinquedo) {
        const item = document.createElement("li");

        if (brinquedo.tipo === "Brinquedo mais forte") {
            item.classList.add("brinquedo-supremo");
        }

        item.innerHTML = `
            <strong>${brinquedo.nome}</strong><br>
            <span>${brinquedo.traducao}</span>
        `;

        listaBrinquedos.appendChild(item);
    });
}
// Adicionar territórios
if (dados.territorios) {
    dados.territorios.forEach(function (territorio) {
        const item = document.createElement("li");

        item.classList.add("territorio");

        item.innerHTML = `
            <strong>${territorio.nome}</strong><br>
            <span>${territorio.traducao}</span>
        `;

        listaTerritorios.appendChild(item);
    });
}

    // Adicionar golpes
    dados.golpes.forEach(function (golpe) {

        const item = document.createElement("li");

        // Identificar golpes especiais
        if (golpe.tipo === "Golpe forte") {
            item.classList.add("golpe-forte");
        }

        if (golpe.tipo === "Golpe final") {
            item.classList.add("golpe-final");
        }

        item.innerHTML = `
            ${golpe.tipo ? `<span class="tipo-golpe">${golpe.tipo}</span><br>` : ""}
            <strong>${golpe.nome}</strong><br>
            <span>${golpe.traducao}</span>
        `;

        listaGolpes.appendChild(item);

    });

    // Exibir a janela
    janelaPersonagem.style.display = "flex";
}


// =================================
// CLIQUE NOS CARTÕES DOS LUTADORES
// =================================

const cartoesLutadores = document.querySelectorAll("[data-personagem]");

cartoesLutadores.forEach(function (cartao) {

    cartao.addEventListener("click", function () {

        const personagem = cartao.dataset.personagem;

        abrirFicha(personagem);

    });

});

// =================================
// FECHAR FICHA DO PERSONAGEM
// =================================

// Fechar pelo botão X
botaoFechar.addEventListener("click", function () {

    janelaPersonagem.style.display = "none";

});

// Fechar ao clicar fora da ficha
janelaPersonagem.addEventListener("click", function (evento) {

    if (evento.target === janelaPersonagem) {

        janelaPersonagem.style.display = "none";

    }

});

// Fechar pressionando ESC
document.addEventListener("keydown", function (evento) {

    if (evento.key === "Escape") {

        janelaPersonagem.style.display = "none";

    }

});
