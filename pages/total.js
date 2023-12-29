import Layout from "../layout/Layout"
import { useEffect, useCallback } from "react"
import useQuiosco from "../hooks/useQuiosco"
import {fomatearDinero} from '../helpers'

export default function Total() {

    const { pedido,nombre,setNombre, colocarOrden,total} = useQuiosco()
console.log('total: ',total)
    const comprobarPedido = useCallback(() => {
        return pedido.length === 0  || nombre === '' || nombre.length <3
    }, [pedido,nombre])

    useEffect(() => {
        comprobarPedido()

    }, [pedido, comprobarPedido])


    return (
        <Layout pagina='Total y Confirmar Pedido'>
            <h1 className="text-4xl font-black">Total y Confirmar Pedido</h1>
            <p className="text-2xl my-10">Confirma tu pedido a Continuación</p>

            <form
                onSubmit={colocarOrden}
            >
                <div>
                    <label htmlFor="nombre" className="block uppercase text-slate-800 font-bold text-xl">Nombre</label>
                    <input
                    value={nombre}
                    onChange={(e)=> setNombre(e.target.value)}
                        id="nombre"
                        type="text"
                        className="bg-gray-200 w-full  lg:w-1/3 mt-3  p-2 rounde-md"
                    ></input>
                </div>
                <div
                    className="mt-10"
                >
                    <p className="text-2xl">Total a pagar: {''} <span className="font-bold">{fomatearDinero(total)}</span></p>
                </div>

                <div className="mt-5">
                    <input
                        type="submit"
                        className={`${comprobarPedido() ? 'bg-indigo-100' :
                                'bg-indigo-600'
                            } w-full  lg:w-auto px-5 py- rounded uppercase font-bold text-white`}
                        value='Confirmar Pedido'
                        disabled={comprobarPedido()}
                    ></input>
                </div>

            </form>

        </Layout>

    )

}