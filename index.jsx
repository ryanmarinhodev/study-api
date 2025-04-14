import React, { useEffect, useState } from "react";

function Produtos() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();

      const produtosFiltrados = data.products.filter(
        (produto) => produto.price >= 50
      );
      setProdutos(produtosFiltrados);
    };

    fetchAPI();
  }, []);

  return (
    <div>
      <h1>Produtos acima de R$ 50</h1>
      {produtos.map((produto) => (
        <div key={produto.id}>
          <h2>{produto.title}</h2>
          <img src={produto.thumbnail} alt={produto.title} width="100" />
          <p>R$ {produto.price}</p>
          <p>{produto.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Produtos;
