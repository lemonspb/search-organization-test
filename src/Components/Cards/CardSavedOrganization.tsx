import React, { useState } from 'react';
import './CardOrganization.scss';
import {Basket,ArrowTop,ArrowLow } from '../../Svg/index';
import './CardSavedOrganization.scss';
import {SavedOrganization} from '../../Types/Types';

interface Props{
    deleteOrganization:Function,
    saveOrganization:SavedOrganization
}


const CardSaveOrganization = (props:Props) => {

const [isVisibleMore, setIsVisibleMore] =  useState(false)

const toggleMoreDetails = () =>{
    setIsVisibleMore(!isVisibleMore)
}

    return (
        <div className="card-save-organization">
        <div className="card-save-organization__header">    
        <div className="card-save-organization__title">{props.saveOrganization.value}</div>
        <span onClick={()=> props.deleteOrganization(props.saveOrganization.id)} 
        className="card-save-organization__delete"><Basket /></span>
        </div>
        <div className={`card-save-organization__more ${isVisibleMore?'card-save-organization__more--active': ''}`}>
        <div className="card-more-item">
            <div className="card-more-item__label">ИНН</div>
            <div className="card-more-item__text">{props.saveOrganization.inn}</div>
        </div>
        {props.saveOrganization.kpp && <div className="card-more-item">
            <div className="card-more-item__label">КПП</div>
            <div className="card-more-item__text">{props.saveOrganization.kpp}</div>
        </div>}
        <div className="card-more-item">
            <div className="card-more-item__label">ОГРН</div>
            <div className="card-more-item__text">{props.saveOrganization.ogrn}</div>
        </div>
        <div className="card-more-item">
            <div className="card-more-item__label">Юридический адрес</div>
            <div className="card-more-item__text">{props.saveOrganization.address}</div>
        </div>
        <div className="card-more-item">
            <div className="card-more-item__label">{props.saveOrganization.post}</div>
            <div className="card-more-item__text">{props.saveOrganization.name}</div>
        </div>
        <div className="card-more-item">
            <div className="card-more-item__label"></div>
            <div className="card-more-item__text"></div>
        </div>
        </div>
        <div className="card-save-organization__toggle-wrap">
        {!isVisibleMore && <div className="card-more-item">
            <div className="card-more-item__label">ИНН</div>
            <div className="card-more-item__text">{props.saveOrganization.inn}</div>
        </div> }
        <div className="card-save-organization__toggle" onClick={toggleMoreDetails}>{isVisibleMore
            ?<div><span>скрыть подробности</span><ArrowTop /></div>
            :<div><span>подробнее</span><ArrowLow /></div>}</div>
        </div>
        </div>

    );
}

export default CardSaveOrganization;