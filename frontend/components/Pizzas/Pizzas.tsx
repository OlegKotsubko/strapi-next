import React from 'react';

import Image from 'next/image'
import getConfig from 'next/config'
import Link from "next/link";

const {publicRuntimeConfig} = getConfig()

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

const Pizzas = ({pizzas} : any) => {
  return (
    <>
      {pizzas?.map((pizza: Pizza) => (
        <Link
          key={pizza.id}
          href={`/pizzas/${pizza.id}`}
        >
          <Image
            src={publicRuntimeConfig.API_URL + pizza.Source[0].url}
            width={pizza.Source[0].width}
            height={pizza.Source[0].height}
          />
        </Link>
        ))
      }
    </>
  )
}

export default Pizzas
