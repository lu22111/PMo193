import React, { useEffect, useState } from "react";

function ListaNombres() {
  const [nombres, setNombres] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/nombres")
      .then((res) => res.json())
      .then((data) => {
        setNombres(data);
        setLoading(false);
      })
      .catch(() => {
        setNombres([]);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Cargando datos...</p>;
  if (nombres.length === 0) return <p>Lista vacía</p>;

  return (
    <ul>
      {nombres.map((persona, index) => (
        <li key={index}>
          {persona.Nombre} {persona.Apellido}
        </li>
      ))}
    </ul>
  );
}

export default ListaNombres;
