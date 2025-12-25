
function ProdutoCard({ nome, preco, descricao }) {
  return (
    <div className="produto-card">
      <h3>{nome}</h3>
      <p>{descricao}</p>
      <strong>R$ {preco}</strong>
    </div>
  );
}

export default ProdutoCard;
