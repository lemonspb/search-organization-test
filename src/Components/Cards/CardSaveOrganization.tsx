import React, { useEffect, useState } from 'react';
import './CardOrganization.scss'
import {Basket} from '../../Svg/index'






const CardSaveOrganization = (props: any) => {




    return (
        <div className="card-save-organization">
        <div className="card-save-organization__title">{props.saveOrganization.value}</div>
        <span onClick={()=> props.deleteOrganization(props.saveOrganization.id)}><Basket /></span>
        </div>

    );
}

export default CardSaveOrganization;