import usePizzas from '../../hooks/usePizzas';
import Image from 'next/image'
import getConfig from 'next/config'

const Header: React.FC = () => {
    const { pizzas, status } = usePizzas();
    const { publicRuntimeConfig } = getConfig()

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
            <div>Status: {status}</div>
            {(status === 'pending') ? (
                <div>...Loading</div>
            ) : pizzas.map((pizza: Pizza) => (
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

export default Header