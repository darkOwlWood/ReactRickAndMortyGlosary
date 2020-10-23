import React from 'react';
import '../assets/style/components/PaginationButton.scss'; 

const PaginationButton = ({name, onClick, className}) => {
    return (
        <button className={`pagination-button ${className}`} onClick={onClick}>
            {name}
        </button>
    );
}

export default PaginationButton;