import React, {useContext, useEffect} from 'react';
import {Grid, Cell} from 'react-mdl';
import Information from '../information/Information';
import InformationForm from '../information/InformationForm';
import InformationFilter from '../information/InformationFilter';
import AuthContext from '../../context/auth/authContext'
import style from './Home.module.css'

function Home() {
    const authContext = useContext(AuthContext);

    useEffect(() => {
        authContext.loadUser();
    }, [])

    return (
        <Grid>
            <Cell col={8}>
                <InformationForm/>
            </Cell>
            <Cell col={4} className={style.cellRight}>
                <InformationFilter/>
                <Information/>
            </Cell>
        </Grid>
    )
}

export default Home
