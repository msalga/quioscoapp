import React from 'react'
import Image from 'next/image'
import { fomatearDinero, formatearDinero } from '../helpers'
import useQuiosco from '../hooks/useQuiosco'


const Producto = ({ producto }) => {
    const { nombre, imagen, precio } = producto
    const { handleSetProducto, handleChangeModal } = useQuiosco()

    return (
        <div className='border p-3'>
            <Image
                src={`/assets/img/${imagen}.jpg`}
                alt={`imagen platillo ${nombre}`}
                width={400}
                height={500}
            />
            <div className='p-5'>
                <h3 className='text-2xl font-bold'>{nombre}</h3>
                <p className='mt-5 font-black  text-4xl text-amber-500'>
                    {fomatearDinero(precio)}
                </p>

                <button
                    type='button'
                    className='bg-indigo-500 hover:bg-indigo-800 text-white w-full mt-5
                p-3  uppercase font-bold'
                    onClick={() => {
                        handleChangeModal();
                        handleSetProducto(producto);
                    }


                    }
                >
                    Agregar
                </button>
            </div>
        </div>
    )
}

export default Producto