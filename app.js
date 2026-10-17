// ============================================================
// Dados dos itens (estrutura JSON usada na home-page e nos detalhes)
// ============================================================
const dados = [
  {
    "id": 1,
    "nome": "Smartphone Galaxy X",
    "descricao": "Tela AMOLED de 6,5 polegadas, 128 GB e câmera tripla.",
    "conteudo": "O Galaxy X combina uma tela AMOLED de 6,5 polegadas com taxa de atualização fluida, 128 GB de armazenamento e um conjunto de três câmeras que entrega fotos nítidas de dia e de noite. A bateria acompanha o dia inteiro de uso e o aparelho ainda conta com carregamento rápido.",
    "categoria": "Celulares",
    "marca": "Galaxy",
    "preco": 2499.9,
    "emEstoque": true,
    "imagem": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCvvIP5Tfdx_TJLOh29WRykl4SNnXXyc52w3aOJw07cw&s=10"
  },
  {
    "id": 2,
    "nome": "iPhone Pro Mini",
    "descricao": "Chip de última geração e câmera com estabilização óptica.",
    "conteudo": "Compacto e potente, o iPhone Pro Mini traz um chip de última geração, câmera principal com estabilização óptica e acabamento premium. Ideal para quem busca desempenho e qualidade de imagem sem abrir mão de um aparelho fácil de carregar no bolso.",
    "categoria": "Celulares",
    "marca": "iPhone",
    "preco": 5999.0,
    "emEstoque": false,
    "imagem": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYgzBF8qnwip336tkP7Y9xvdPSb6e_ZQHytrjSK50vgw&s=10"
  },
  {
    "id": 3,
    "nome": "Notebook UltraBook 14",
    "descricao": "Intel i7, 16 GB de RAM, SSD de 512 GB e tela Full HD.",
    "conteudo": "O UltraBook 14 é leve, fino e pensado para o trabalho e os estudos. Com processador Intel i7, 16 GB de memória RAM e SSD de 512 GB, abre programas rapidamente, e a tela Full HD de 14 polegadas garante boa visualização em reuniões, aulas e produção de conteúdo.",
    "categoria": "Notebooks",
    "marca": "UltraBook",
    "preco": 4299.5,
    "emEstoque": true,
    "imagem": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRMGRvVOEoqHiyBQS5afgzGureE28121NdQlCAxqY8D4cf03_fyqJOPCvc9mwW2-24ZJ3vMqfHJU3V_-Hkh2V6oyuybnmf9M1CF3YRdhq4MHeE8goOnVN1_-ehsejgmc_-OLV3-6g6Hbg&usqp=CAc"
  },
  {
    "id": 4,
    "nome": "Notebook Gamer Titan",
    "descricao": "RTX 4060, 32 GB de RAM e tela de 165 Hz.",
    "conteudo": "Feito para jogar sem travamentos, o Titan reúne placa de vídeo RTX 4060, 32 GB de RAM e uma tela de 165 Hz que deixa a movimentação suave nos jogos competitivos. O sistema de refrigeração reforçado mantém o desempenho estável em sessões longas.",
    "categoria": "Notebooks",
    "marca": "Titan",
    "preco": 7899.9,
    "emEstoque": true,
    "imagem": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlcSuTGj_I2RC3uj5aMksfmQwFmESC1xMhgqlwmEwJJA&s=10"
  },
  {
    "id": 5,
    "nome": "Fone Bluetooth Pro",
    "descricao": "Cancelamento de ruído ativo e 30 horas de bateria.",
    "conteudo": "O Fone Bluetooth Pro isola o barulho externo com cancelamento de ruído ativo e entrega até 30 horas de bateria com uma única carga. Os almofadões macios deixam o uso confortável por longos períodos, e o microfone embutido atende bem em chamadas e videoconferências.",
    "categoria": "Acessórios",
    "marca": "Pro Audio",
    "preco": 349.9,
    "emEstoque": true,
    "imagem": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGqJXdRV5xwOaLDUADkTfTxPsWR5og-JhIC_0rTMaQNw&s=10"
  },
  {
    "id": 6,
    "nome": "Mouse Sem Fio Ergo",
    "descricao": "Design ergonômico, 1600 DPI e bateria de longa duração.",
    "conteudo": "Com formato ergonômico que reduz o cansaço no pulso, o Mouse Sem Fio Ergo tem sensor de 1600 DPI e conexão sem fio estável. A bateria de longa duração dispensa trocas frequentes, o que o torna ótimo para o escritório e para uso diário em casa.",
    "categoria": "Acessórios",
    "marca": "Ergo",
    "preco": 129.0,
    "emEstoque": false,
    "imagem": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgrZv9BTkbgxACWMrToJVULt-H2q28Nc_l4YxEk5xrVg&s=10"
  },
  {
    "id": 7,
    "nome": "Console PlayStation 5",
    "descricao": "SSD ultrarrápido, 4K e controle DualSense.",
    "conteudo": "O PlayStation 5 oferece SSD ultrarrápido que praticamente elimina as telas de carregamento, gráficos em 4K e o controle DualSense, com vibração tátil e gatilhos adaptáveis que deixam a experiência de jogo mais imersiva.",
    "categoria": "Games",
    "marca": "PlayStation",
    "preco": 3799.0,
    "emEstoque": true,
    "imagem": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRySmOAlcS_q_vOUCCoDly0pukEylRfPw9Y3aPL-8gfvQ&s=10"
  },
  {
    "id": 8,
    "nome": "Controle Gamer Sem Fio",
    "descricao": "Compatível com PC e consoles, com vibração e bateria recarregável.",
    "conteudo": "O Controle Gamer Sem Fio funciona em PC e consoles, tem vibração, botões responsivos e bateria recarregável via cabo USB. A pegada confortável ajuda nas partidas longas, e a conexão sem fio tem baixa latência para não atrapalhar o jogo.",
    "categoria": "Games",
    "marca": "GamePad",
    "preco": 399.9,
    "emEstoque": true,
    "imagem": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5JWyzug29kaz4LKz8JS5taE7lKi2dAXCTVgHk8sbjHg&s=10"
  }
];

// ============================================================
// Funções utilitárias
// ============================================================
function formatPrice(preco) {
  return preco.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

// ============================================================
// HOME-PAGE (index.html): cards montados dinamicamente
// ============================================================
function createProductCard(produto) {
  const card = document.createElement("div");
  card.classList.add("card");
  card.setAttribute("data-id", produto.id);

  const img = document.createElement("img");
  img.src = produto.imagem;
  img.alt = produto.nome;

  const title = document.createElement("h3");
  title.classList.add("card-title");
  title.textContent = produto.nome;

  const desc = document.createElement("p");
  desc.classList.add("card-desc");
  desc.textContent = produto.descricao;

  const price = document.createElement("span");
  price.classList.add("card-price");
  price.textContent = formatPrice(produto.preco);

  const category = document.createElement("span");
  category.classList.add("card-category");
  category.textContent = produto.categoria;

  // Link dinâmico para a página de detalhes, passando o id na query string
  const link = document.createElement("a");
  link.classList.add("btn");
  link.href = "detalhes.html?id=" + produto.id;
  link.textContent = "Ver detalhes";

  card.append(img, title, desc, price, category, link);
  return card;
}

function renderProducts(produtos) {
  const lista = document.getElementById("product-list");
  lista.innerHTML = "";

  if (produtos.length === 0) {
    lista.innerHTML = "<p>Nenhum produto encontrado.</p>";
    return;
  }
  produtos.forEach((p) => lista.appendChild(createProductCard(p)));
}

function renderCategories() {
  const select = document.getElementById("category");
  const categorias = [...new Set(dados.map((p) => p.categoria))];
  categorias.forEach((cat) => {
    const option = document.createElement("option");
    option.value = cat;
    option.textContent = cat;
    select.appendChild(option);
  });
}

function filterProducts() {
  const texto = document.getElementById("search").value.trim().toLowerCase();
  const categoria = document.getElementById("category").value;
  return dados.filter(
    (p) =>
      p.nome.toLowerCase().includes(texto) &&
      (categoria === "Todas" || p.categoria === categoria)
  );
}

function initHome() {
  renderCategories();
  renderProducts(dados);

  document.getElementById("search").addEventListener("input", () => renderProducts(filterProducts()));
  document.getElementById("category").addEventListener("change", () => renderProducts(filterProducts()));
}

// ============================================================
// PÁGINA DE DETALHES (detalhes.html): item escolhido via ?id=
// ============================================================
function initDetalhes() {
  const container = document.getElementById("product-details");
  const params = new URLSearchParams(window.location.search);
  const id = Number(params.get("id"));
  const produto = dados.find((p) => p.id === id);

  if (!produto) {
    container.innerHTML = "<p>Produto não encontrado.</p>";
    return;
  }

  document.title = produto.nome + " - Mini Ecommerce";

  container.innerHTML = `
    <img src="${produto.imagem}" alt="${produto.nome}">
    <div class="detalhes-info">
      <h2>${produto.nome}</h2>
      <p class="card-price">${formatPrice(produto.preco)}</p>
      <p><strong>Categoria:</strong> ${produto.categoria}</p>
      <p><strong>Marca:</strong> ${produto.marca}</p>
      <p><strong>Estoque:</strong>
        <span class="${produto.emEstoque ? "stock-yes" : "stock-no"}">
          ${produto.emEstoque ? "Em estoque" : "Indisponível"}
        </span>
      </p>
      <p>${produto.conteudo}</p>
    </div>
  `;
}

// ============================================================
// Inicialização: roda o código da página que está aberta
// ============================================================
if (document.getElementById("product-list")) {
  initHome();
} else if (document.getElementById("product-details")) {
  initDetalhes();
}