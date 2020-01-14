import React,{useEffect,useState} from 'react';
import './FormSeach.scss';
import  Serviсes from    '../../Serviсes/fetch'

interface suggestions {
    value:string,
    data:{
        address:{
            data:{
                city_kladr_id:string
                city_with_type: string
            }
        }
    }
    
}

const FormSeach: React.FC = () => {

    const  [value, setValue] = useState('')
    const  [listSuggestions, setListSuggestions] = useState<any>([])
    useEffect(() => {
        const serviсes = new Serviсes();
        
        serviсes.getResource(value).then((result)=>{
            setListSuggestions(result.suggestions.splice(0,3))
            console.log(result.suggestions.splice(0,3))
        })
      
    }, [value]);

const changeInput = (e: React.FormEvent<EventTarget>): void =>{
    let target = e.target as HTMLInputElement;
    setValue(target.value)
}


  return (
  <form className='form-search'  >
      <label htmlFor="search" className='form-search__label'>Организация или ИП</label>
      <input id='search' className='form-search__input' placeholder='Введите название, ИНН или адрес организации' autoComplete="off" onChange={changeInput} />
      <div className="form-search__suggestions">
          {listSuggestions.length!==0 ?listSuggestions.map((suggestion:suggestions, i:number)=>{
              return (
                <div className="form-search__suggestion suggestion-item" key={i}><div className='suggestion-item__name' >{suggestion.value}</div>
                    <div className='suggestion-item__index'>{suggestion.data.address.data.city_kladr_id}</div>
                    <div className='suggestion-item__city'>{suggestion.data.address.data.city_with_type}</div>
                    </div>
              )
          }):''}

        
      </div>
  </form>
  
  );
}

export default FormSeach;