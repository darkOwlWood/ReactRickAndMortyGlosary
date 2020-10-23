import React from 'react';
import '../assets/style/components/PaginationBox.scss';
import PaginationButton from './PaginationButton';

const PaginationBox = ({previousPage, nextPage}) => {
    return (
        <div className="pagination-box">
            <PaginationButton 
                name="Prev"
                onClick={previousPage} 
                className="pagination-button--prev"
            />
            <PaginationButton 
                name="Next"
                onClick={nextPage}
                className="pagination-button--next"
            />
        </div>
    );
}

export default PaginationBox;