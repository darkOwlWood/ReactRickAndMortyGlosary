import React, {useEffect, useState} from 'react';
import '../assets/style/components/MainSection.scss';
import PaginationBox from './PaginationBox';
import Glossary from './Glossary';

const MainSection = () => {
    return (
        <div className="main-section">
            <div className="main-section__container">
                <PaginationBox />
                <Glossary />
                <PaginationBox />
            </div>
        </div>
    );
}

export default MainSection;