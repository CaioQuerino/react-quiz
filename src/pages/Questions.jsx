import { memo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ButtonsAlternativas } from '../components/ButtonsAlternativas';
import coroa from '../assets/coroa.svg';
import Button from '../components/Button';
import arrow_right from '../assets/Vector.svg'
import ButtonProximo from '../components/ButtonProximo';

export const Questions = memo(() => {
    const [respostaCorreta, setRespostaCorreta] = useState(null);
    const [respostaSelecionada, setRespostaSelecionada] = useState(null);

    const alternativas = [
        'Maria da Penha',
        'Grace Hopper',
        'Ada Lovelace',
        'Margaret Thatcher'
    ];

    const handleSubmit = (resposta) => {
        setRespostaSelecionada(resposta);
        setRespostaCorreta(resposta === 'Grace Hopper'); 
    };

    return (
        <section className='section-container-card'>
            <img className='coroa' src={coroa} alt="coroa" />

            <p className={respostaSelecionada ? 'enable' : 'disable'}>Pergunta 1 de 5</p>

            <h2>Qual alternativa descreve essa informação?</h2>
            <p>
                Pioneira da computação, foi uma das primeiras programadoras do 
                computador Harvard Mark I, desenvolveu o primeiro compilador 
                para linguagens de programação.
            </p>
            
            <div className="div-container-buttons">
                {alternativas.map((alternativa) => (
                    <ButtonsAlternativas
                        key={alternativa}
                        type='button'
                        value={alternativa}
                        onClick={() => handleSubmit(alternativa)}
                        className={
                            respostaSelecionada === alternativa
                                ? respostaCorreta
                                    ? 'resposta-certa'
                                    : 'resposta-errada'
                                : ''
                        }
                    />
                ))}
            </div>

                {respostaSelecionada && (
                <ButtonProximo 
                className={respostaCorreta ? 'resposta-certa correto' : 'resposta-errada incorreto'}
                value={respostaCorreta ? 'Correto!' : 'Incorreto!'}
                menssagem={!respostaCorreta ? 'Essa informação é referente a Grace Hopper' : ''}
                />
            )}

            <Link to='/feedbaks'>
                <Button
                    className={respostaSelecionada ? 'enable' : 'disable'}
                    type='button'
                    value='Próxima pergunta'
                    img={arrow_right}
                />
            </Link>
            
        </section>
    );
});
