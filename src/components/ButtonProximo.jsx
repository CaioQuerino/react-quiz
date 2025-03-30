import { memo } from 'react';

const ButtonProximo = ({ type, value, onClick, className, mensagem }) => {
    return (
        <div className="div-container-button-proximo">
            <button className={className} type={type} onClick={onClick}>
                <strong>{value}</strong>
                {className.includes('incorreto') && <span>{mensagem}</span>}
            </button>
        </div>
    );
};

export default memo(ButtonProximo);
