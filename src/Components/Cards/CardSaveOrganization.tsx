import React, { useEffect, useState } from 'react';
import './CardOrganization.scss'
import {Basket} from '../../Svg/index'
import './CardSaveOrganization.scss'





const CardSaveOrganization = (props: any) => {




    return (
        <div className="card-save-organization">
        <div className="card-save-organization__header">    
        <div className="card-save-organization__title">{props.saveOrganization.value}</div>
        <span onClick={()=> props.deleteOrganization(props.saveOrganization.id)} className="card-save-organization__delete"><Basket /></span>
        </div>

        </div>

    );
}

export default CardSaveOrganization;