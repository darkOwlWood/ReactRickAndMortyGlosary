import React, {useLayoutEffect, useEffect, useState} from 'react';
import '../assets/style/components/MainSection.scss';
import Glossary from './Glossary';
import PaginationBox from './PaginationBox';

const CHARACTERS_BY_PAGE = 12;

const verifyCharactersByPage = (characterPage) => {
    let characterPage__copy= [];
    characterPage__copy.push(...characterPage);

    if(characterPage__copy.length < CHARACTERS_BY_PAGE){
        const body = {name:'None', image:'?', status:'None', species:'None'};
        const fill = Array(CHARACTERS_BY_PAGE-characterPage__copy.length).fill(body);
        characterPage__copy.push(...fill);
    }

    return characterPage__copy;
}

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
            setCharactersInfo(verifyCharactersByPage(resp));
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