import React, {useContext} from 'react';
import AlertContext from '../../context/alert/alertContext'
import style from './Alert.module.css';

function Alert() {
    const alertContext = useContext(AlertContext)

    return (
        alertContext.alerts.map(
            alert=> (
                <div key={alert.id} className={style.alert}>
                    <i className="fas fa-info-cirle"></i> {alert.msg}
                </div>
            )
        )
    )
}

export default Alert
