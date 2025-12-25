
import { useEffect, useState } from "react";
import ProdutoCard from "../components/ProdutoCard";

function Home() {
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState({ nome: "", preco: "", descricao: "" });

  useEffect(() => {
    setTimeout(() => {
      setProdutos([
        { nome: "Notebook", preco: 3500, descricao: "Notebook para estudos" },
        { nome: "Mouse Gamer", preco: 150, descricao: "Mouse RGB" }
      ]);
      setLoading(false);
    }, 2000);
  }, []);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setProdutos([...produtos, form]);
    setForm({ nome: "", preco: "", descricao: "" });
  }

  return (
    <div>
      <h1>Catálogo de Produtos</h1>

      <form onSubmit={handleSubmit}>
        <input name="nome" placeholder="Nome" value={form.nome} onChange={handleChange} />
        <input name="preco" placeholder="Preço" value={form.preco} onChange={handleChange} />
        <textarea name="descricao" placeholder="Descrição" value={form.descricao} onChange={handleChange} />
        <button type="submit">Adicionar</button>
      </form>

      {loading ? <p>Carregando...</p> :
        produtos.map((p, i) => (
          <ProdutoCard key={i} nome={p.nome} preco={p.preco} descricao={p.descricao} />
        ))
      }
    </div>
  );
}

export default Home;
