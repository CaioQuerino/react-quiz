import { memo } from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/Button'
import arrow_right from '../assets/Vector.svg'
import trofeu from '../assets/trofeu.svg'

export const FeedBacks = memo(() => {
    return (
        <div className='div-container-feedback'>
            <div className="div-container-feedback-card">
                <img className='trofeu' src={trofeu} alt="trófeu" />
                <h1>Quiz concluído!</h1>
                <h2>5/10</h2>
                <p>Bom trabalho! Você tem um conhecimento razoável sobre mulheres notáveis.</p>
                <div className="div-content-feedback">
                    <h2>Você sabia ?</h2>
                    <p>
                        Muitas das mulheres apresentadas neste quiz enfrentaram enormes
                        desafios e preconceitos em suas épocas, mas mesmo assim
                        conseguiram deixar um legado duradouro que inspirou gerações.
                    </p>
                </div>
                <Link to='/'>
                    <Button className='button-feedback' type='button' value='Iniciar quiz' img={arrow_right} />
                </Link>
            </div>
        </div>
    )
})
