import { useState, useEffect } from 'react'

import { useNavigate } from "react-router-dom";

import { Container, Header, Item } from "./styles";
import { Button } from '../../components/Button';

import { api } from "../../services/api"

export function Product() {
  const navigate = useNavigate();

  const [products, setProducts] = useState([])

  useEffect(() => {
    // Função para buscar os produtos
    const fetchProducts = async () => {
      try{
        const response = await api.get('/products')
        setProducts(response.data)
      }catch(error){
        console.error('Error ao buscar os produtos: ', error)
      }
    }
    fetchProducts()
  }, [])

  return (
    <Container>
      <Header>
        <h1>Produtos</h1>

        <nav>
          <Button title="Cadastrar" onClick={() => navigate('/product-react')}/>
          <Button title="Voltar" onClick={() => navigate('/')} />
        </nav>
      </Header>

      {
        products.map(( product ) =>(
            <Item key={product.id}>
                <span>
                  {
                    product.name
                  }
                </span>
            </Item> 
        ))
      }
      
    </Container>

  )
}
