import React from 'react';

import Image from 'next/image'
import getConfig from 'next/config'

import usePizzas from 'hooks/usePizzas';
import useUser from "hooks/useUser";

const {publicRuntimeConfig} = getConfig()

const Pizzas: React.FC = () => {
  const {pizzas, status} = usePizzas();
  const { isLoggedIn } = useUser()

  interface Pizza {
    id: number;
    Name: string;
    Amount: number;
    Source: [{
      url: string,
      width: number,
      height: number
    }];
  }

  return (
    <>
      {(status === 'pending') && (
        <div>...Loading</div>
      )}

      {isLoggedIn && pizzas?.map((pizza: Pizza) => (
          <div key={pizza.id}>
            <h3>{pizza.Name}</h3>
            <p>{pizza.Amount}</p>
            <Image
              src={publicRuntimeConfig.API_URL + pizza.Source[0].url}
              width={pizza.Source[0].width}
              height={pizza.Source[0].height}
            />
          </div>
        ))
      }
    </>
  )
}

export default Pizzas
