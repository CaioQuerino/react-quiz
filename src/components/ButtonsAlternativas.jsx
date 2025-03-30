import { memo } from 'react';

export const ButtonsAlternativas = memo(({type, value, onClick, className}) => {
    return (
        <button className={className} type={type} onClick={onClick} >{value}</button>
    );
});
