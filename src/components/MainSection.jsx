import React, {useLayoutEffect, useEffect, useState} from 'react';
import '../assets/style/components/MainSection.scss';
import Glossary from './Glossary';
import PaginationBox from './PaginationBox';

const CHARACTERS_BY_PAGE = 12;

const MainSection = () => {

    const [lastId, setLastId] = useState(Infinity);
    const [charactersInfo,setCharactersInfo] = useState('');
    const [characterPage, setcharacterPage] = useState(
        Array(CHARACTERS_BY_PAGE)
        .fill(1)
        .map( (val,ndx) => val+ndx )
    )
    
    useLayoutEffect(  () => {
        let resp = {};
        (async () => {            
            resp = await fetch(`https://rickandmortyapi.com/api/character/${characterPage}`);
            resp = await resp.json();
            setCharactersInfo(resp);
        })();
    },[characterPage]);

    useEffect( () => {
        let resp;
        (async () => {
            resp = await fetch('https://rickandmortyapi.com/api/character/');
            resp = await resp.json();
            setLastId(resp.info.count);
        })();
    },[]);

    const previousPage = () => {
        if(!characterPage.some( val => val === 1 )){
            setcharacterPage( characterPage.map( val => val-CHARACTERS_BY_PAGE ) );
        }
    }

    const nextPage = () => {
        if(!characterPage.some( val => val === lastId )){
            setcharacterPage( characterPage.map( val => val+CHARACTERS_BY_PAGE ) );
        }
    }

    return (
        <div className="main-section">
            <div className="main-section__container">
                <PaginationBox previousPage={previousPage} nextPage={nextPage}/>
                <Glossary charactersInfo={charactersInfo} />
                <PaginationBox previousPage={previousPage} nextPage={nextPage}/>
            </div>
        </div>
    );
}

export default MainSection;