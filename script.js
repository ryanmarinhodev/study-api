const api = "https://dummyjson.com/products";

async function getApi() {
  try {
    const fetchAPI = await fetch(api);
    const response = await fetchAPI.json();
    console.log(response);

    if (fetchAPI.status === 200) {
      console.log("Api Rodando com sucesso");
    }

    const produtosDiv = document.getElementById("produtos");

    response.products.slice(0, 29).map((item) => {
      const card = document.createElement("div");

      const titulo = document.createElement("h2");
      titulo.innerText = item.title;

      const imagem = document.createElement("img");
      imagem.src = item.thumbnail;
      imagem.width = 100;

      const descricao = document.createElement("p");
      descricao.innerText = item.description;

      card.appendChild(titulo);
      card.appendChild(imagem);
      card.appendChild(descricao);

      produtosDiv.appendChild(card);
    });

    // console.log(response);
  } catch (error) {
    console.log(error);
  }
}

getApi();
