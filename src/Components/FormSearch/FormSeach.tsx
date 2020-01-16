import React, { useEffect, useState } from 'react';
import './FormSeach.scss';
import Serviсes from '../../Serviсes/fetch';
import { Suggestion } from '../../Types/Types';

interface Props {
    setInfoOrganization: Function
}

export function FormSeach(props: Props) {

    const [value, setValue] = useState('')
    const [listSuggestions, setListSuggestions] = useState<Suggestion[]>([])
    const [isSelect, setIsSelect] = useState(false)

    useEffect(() => {
        const serviсes = new Serviсes();
        serviсes.getSuggest(value, 'party').then((result) => {
            setListSuggestions(result.suggestions.splice(0, 3))
        })
    }, [value]);

    const changeInput = (e: React.FormEvent<EventTarget>): void => {
        let target = e.target as HTMLInputElement;
        setValue(target.value)
        setIsSelect(false)
    }

    const selectSuggestion = (suggestion: Suggestion) => {
        setValue(suggestion.value)
        setIsSelect(true)
        props.setInfoOrganization(suggestion)
    }

    return (
        <form className='form-search' >
            <label htmlFor="search" className='form-search__label'>Организация или ИП</label>
            <input id='search' className='form-search__input' placeholder='Введите название, ИНН или адрес организации'
                autoComplete="off" onChange={changeInput} value={value} />
            {!isSelect && listSuggestions.length !== 0
                ? <div className="form-search__suggestions" >
                    {listSuggestions.map((suggestion, i) => {
                        return (
                            <div className="form-search__suggestion suggestion-item" key={i} onClick={() => selectSuggestion(suggestion)}>
                                <div className='suggestion-item__name'>{suggestion.value}</div>
                                <div className='suggestion-item__inn'>{suggestion.data.inn}</div>
                                <div className='suggestion-item__city'>{suggestion.data.address.data.city_with_type}</div>
                            </div>
                        )
                    })}
                </div>
                : ''}
        </form>

    );
}

