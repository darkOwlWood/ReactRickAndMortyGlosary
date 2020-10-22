import React from 'react';
import '../assets/style/components/PaginationBox.scss';
import PaginationButton from './PaginationButton';

const PaginationBox = () => {
    return (
        <div className="pagination-box">
            <PaginationButton name="next" className="pagination-button--prev"/>
            <PaginationButton name="prev" className="pagination-button--next"/>
        </div>
    );
}

export default PaginationBox;