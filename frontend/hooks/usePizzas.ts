import { useEffect } from 'react';
import {RootStateOrAny, useDispatch, useSelector} from "react-redux";
import {getPizzas} from '../reducers/pizzasSlice';

interface Pizzas {
  pizzas: {
    items: any,
    status: any
  }
}

const usePizzas = () => {
  const dispatch = useDispatch()
  const pizzas = useSelector((state: RootStateOrAny) => state.pizzas.items)
  const status = useSelector((state: RootStateOrAny) => state.pizzas.status)
  useEffect(()=>{
    dispatch(getPizzas())
  }, [dispatch]);

  return { pizzas, status }
}

export default usePizzas;