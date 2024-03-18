/* eslint-disable react/prop-types */
const Search = ({search, setSearch}) => {
  // ({search, setSearch}) state de busca e mudar busca
  return (
    <div className="search">
      <h2>Pesquisar:</h2>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Digite para pesquisar..."
        //Busca em tempo real baseado no titulo das tarefas
      />
  </div>
  )
}

export default Search
