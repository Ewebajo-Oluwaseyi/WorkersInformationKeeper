import React, {useState, useContext, useEffect} from 'react';
import style from './InformationForm.module.css';
import InformationContext from '../../context/information/informationContext'

function InformationForm () {
    const informationContext = useContext(InformationContext);

    const {addInformation} = informationContext;


    const[information, setInformation] = useState({
        name: '',
        email: '',
        phone: '',
        Address: '',
        Position: '',
        Salary: '',
        Skype: ''
    });

    const {name, email, phone, Address, Position, Salary, Skype} = information;

    const onChange = e => setInformation({
        ...information, [e.target.name] : e.target.value
    });

    const onSubmit = e => {
        e.preventDefault();
        addInformation(information);

    }



    return(
        <form onSubmit={onSubmit}>
        <div className={style.form}>
          <h2 style={{fontSize: '30px', color: 'green'}}>ADD WORKERS INFORMATION</h2>
          <input className={style.input} type="text" placeholder="Add Name" name="name" value={name} onChange={onChange} required/>     
          <input className={style.input} type="email" placeholder="Add Email" name="email" value={email} onChange={onChange}/>   
          <input className={style.input} type="text" placeholder="Add Phone number" name="phone" value={phone} onChange={onChange}/>  
          <input className={style.input} type="text" placeholder="Add Address" name="Address" value={Address} onChange={onChange}/>  
          <input className={style.input} type="text" placeholder="Add Position" name="Position" value={Position} onChange={onChange}/>  
          <input className={style.input} type="text" placeholder="Add Salary" name="Salary" value={Salary} onChange={onChange}/>  
          <input className={style.input} type="text" placeholder="Add Skype_id" name="Skype" value={Skype} onChange={onChange}/>  
          <div>
              <input type="submit" value='Add Information' className={style.submit} />
          </div>
        </div>
        </form>
    )
}

export default InformationForm;
