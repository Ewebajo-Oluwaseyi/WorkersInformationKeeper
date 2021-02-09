import React, {useContext, useEffect} from 'react';
import InformationContext from '../../context/information/informationContext'
import InformationItem from './InformationItem';
import Spinner from '../spinner/Spinner'

function Information() {
    const informationContext = useContext(InformationContext);

    const {informations, filter, getInformation, loading} = informationContext;

    useEffect(() => {
        getInformation();
        //eslint-disable-next-line
    }, [])

    if(informations !==null && informations.lenght === 0 && !loading){
        return <h4>Please add a Information</h4>
    }
    return (
        <div>
            {informations !== null && !loading ? (
                <div>
                {filter !== null ? filter.map(information => 
                    (<InformationItem key={information._id} information={information}/>)) : 
                    informations.map(information => 
                       ( <InformationItem key={information._id} information={information}/>)
                    )} </div>
            ) : <Spinner/>}
            
        </div>
    )
}

export default Information
