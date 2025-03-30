import { memo } from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/Button'
import arrow_right from '../assets/Vector.svg'
import coroa from '../assets/coroa.svg'

export const Home = memo(() => {
    return (
        <div className='div-container-home'>
            <div className="div-container-home-card">
                <img className='coroa' src={coroa} alt="Coroa" />
                <h1>Quiz: Mulheres notáveis</h1>
                <p>Teste seus conhecimentos sobre mulheres que fizeram história</p>
                <Link to='/questions'>
                    <Button type='button' value='Iniciar quiz' img={arrow_right} />
                </Link>
            </div>
        </div>
    )
})
