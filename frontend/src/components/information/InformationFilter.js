import React, {useContext, useEffect, useRef} from 'react';
import InformationContext from '../../context/information/informationContext';
import style from './InformationFilter.module.css'

function InformationFilter() {
    const informationContext = useContext(InformationContext);

    const {filterInformation, clearFilter, filter} = informationContext

    const text = useRef('')

    useEffect(() => {
        if(filter === null){
            text.current.value = '';
        }
    },);

    const onChange = e => {
        if(text.current.value !== ''){
            filterInformation(e.target.value)
        } else{
            clearFilter();
        }
    }


    return (
        <form>
            <input type="text" ref={text} placeholder="Filter Information" onChange={onChange} className={style.filter}/>
        </form>
    )
}

export default InformationFilter
