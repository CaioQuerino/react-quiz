import { memo } from 'react';

const Button = ({type, value, onClick, img, className}) => {
    return (

        <div className="div-container-button">
            <button className={className} type={type} onClick={onClick}>{value} <img src={img} alt={value} /></button>
        </div>

    );
};

export default memo(Button);
