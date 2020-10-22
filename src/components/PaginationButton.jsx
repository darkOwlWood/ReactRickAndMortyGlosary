import React from 'react';
import '../assets/style/components/PaginationButton.scss';

const PaginationButton = ({name,className}) => {
    return (
        <button className={`pagination-button ${className}`}>
            {name}
        </button>
    );
}

export default PaginationButton;