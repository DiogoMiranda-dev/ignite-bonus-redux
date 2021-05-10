import React from 'react';
import { useSelector } from 'react-redux';

// import { Container } from './styles';

const Catalog: React.FC = () => {
  const catalog = useSelector((state) => state);
  console.log(catalog);
  return <h1>catalogo</h1>;
};

export default Catalog;
