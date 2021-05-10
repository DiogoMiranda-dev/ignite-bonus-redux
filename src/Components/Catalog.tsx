import React, { useEffect, useState, useCallback } from 'react';
import { IProduct } from '../store/modules/cart/types';
import api from '../services/api';
import { useDispatch } from 'react-redux';
import { addProductToCart } from '../store/modules/cart/actions';

// import { Container } from './styles';

const Catalog: React.FC = () => {
  const dispatch = useDispatch();
  const [catalog, setCatalog] = useState<IProduct[]>([]);

  useEffect(() => {
    api.get('products').then((response) => {
      setCatalog(response.data);
    });
  }, []);

  const handleAddProductToCart = useCallback(
    (product: IProduct) => {
      dispatch(addProductToCart(product));
    },
    [dispatch]
  );

  return (
    <main>
      <h1>catalogo</h1>

      {catalog.map((product) => (
        <article key={product.id}>
          <strong>{product.title}</strong> {'  -  '}
          <span>{product.price}</span>{' '}
          <button type="button" onClick={() => handleAddProductToCart(product)}>
            Comprar
          </button>
        </article>
      ))}
    </main>
  );
};

export default Catalog;
