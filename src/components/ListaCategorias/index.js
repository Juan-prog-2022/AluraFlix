import React from 'react';

const ListaCategorias = ({ categorias, selectedCategoria, handleChange }) => {
  if (!categorias) {
    return null;
  }

  return (
    <div>
      <label htmlFor="categoria">Categoría:</label>
      <select
        id="categoria"
        value={selectedCategoria}
        onChange={handleChange}
      >
        {categorias.map(categoria => (
          <option key={categoria.id} value={categoria.id}>
            {categoria.nombre}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ListaCategorias;
