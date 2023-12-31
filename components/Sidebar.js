import Image from 'next/image'
import useQuiosco from '../hooks/useQuiosco'
import Categoria from '../components/Categoria'
const Sidebar = () => {

    const { categorias } = useQuiosco()

    return (
        <>
            <Image
                width={300}
                height={100}
                src="/assets/img/logo.svg"
                alt='imagen del logo'
            />

            <nav className='mt-10'>
                {categorias.map(categoria => (
                    <Categoria
                        key={categoria.id}
                        categoria={categoria} >

                    </Categoria>

                ))}
            </nav>
        </>
    )
}

export default Sidebar