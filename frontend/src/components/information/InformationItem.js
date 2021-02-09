import React, {useContext} from 'react';
import style from './InformationItem.module.css';


function InformationItem({information}) {
   

    const{name, email, phone, Address, Position, Salary, Skype} = information;



    return (
        <div>
        <div className={style.card}>
            <h3 className={style.text}>
                {name}
            </h3>
            <ul className={style.list}>
                {email && (<li style={{color: 'black', fontSize: '15px'}}>
                    <i style={{fontSize: '16px', paddingRight:'10px'}} className="fa fa-envelope"></i>{email}    
                </li>)}
                {phone && (<li style={{color: 'black', fontSize: '15px'}}>
                    <i  style={{fontSize: '16px', paddingRight:'10px'}} className="fa fa-phone"></i>{phone}    
                </li>)}
                {Address && (<li style={{color: 'black', fontSize: '15px'}}>
                    <i  style={{fontSize: '16px', paddingRight:'10px'}} className="fa fa-map-marker"></i>{Address}    
                </li>)}
                {Position && (<li style={{color: 'black', fontSize: '15px'}}>
                    <i  style={{fontSize: '16px', paddingRight:'10px'}} className="fa fa-user"></i>{Position}    
                </li>)}
                {Skype && (<li style={{color: 'black', fontSize: '15px'}}>
                    <i  style={{fontSize: '16px', paddingRight:'10px'}} className="fa fa-skype"></i>{Skype}    
                </li>)}
                {Salary && (<li style={{color: 'black', fontSize: '15px'}}>
                    <i  style={{fontSize: '16px', paddingRight:'10px'}} className="fa fa-money"></i>{Salary} Naira   
                </li>)}
            </ul>
        </div>
        <hr style={{borderTop: '2px solid black', width: '74%'}}/>
        </div>
    )
}

export default InformationItem
