const api = "https://dummyjson.com/products";

async function apiFunction() {
  const response = await fetch(api);
  const data = await response.json();
  console.log(data.products);

  const newDiv = document.getElementById("produtos");
  const botao = document.getElementById("botaoId");
  botao.addEventListener("click", () => {
    apiFunction();
  });

  const categorias = [...new Set(data.products.map((p) => p.category))];
  console.log(categorias);

  newDiv.innerHTML = "";
  data.products.map((produtos) => {
    if (produtos.category === "beauty") {
      const title = document.createElement("h2");
      title.innerText = produtos.title;

      const image = document.createElement("img");
      image.src = produtos.thumbnail;

      const preco = document.createElement("p");
      preco.innerText = `R$ ${produtos.price}`;

      const paragrafo = document.createElement("p");
      paragrafo.innerText = produtos.description;

      newDiv.appendChild(title);
      newDiv.appendChild(image);
      newDiv.appendChild(preco);
      newDiv.appendChild(paragrafo);
    }
  });
}

//Desafio: Exibir produtos de uma categoria específica em cards

//Objetivo: Consumir os dados da API https://dummyjson.com/products
// e exibir em tela apenas os produtos da
//categoria "smartphones" com os seguintes dados:

// Imagem (thumbnail)
// Título
// Preço formatado (R$)
// Classificação (rating) com estrelas (⭐)

// Regras:
// Usar DOM para criar os elementos.

// Adicionar um botão: "Listar Smartphones".

// Quando clicar, deve aparecer os produtos da categoria.

// Exibir pelo menos 4 produtos.

// (Opcional avançado): Usar .slice() para limitar os produtos.

// (Bonus): Criar um botão de "Limpar Produtos" que remove os cards da tela.
