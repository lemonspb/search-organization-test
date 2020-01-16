import React, { useEffect } from 'react';
import './CardOrganization.scss'
import {Checked} from '../../Svg/index'


const CardOrganization = (props: any) => {


    const saveCardOrganization = (item: any) => {

        const organization = JSON.parse(localStorage.getItem("storageOrganization")!) || {};
        organization[item.data.hid] = {
            id: item.data.hid,
            value: item.value,
            kpp:  item.data.kpp,
            inn: item.data.inn,
            ogrn: item.data.ogrn,
            post: item.data.management && (item.data.management.post || ''),
            name: item.data.management && (item.data.management.name || ''),
            address: item.data.address.value
        };
        localStorage.setItem("storageOrganization", JSON.stringify(organization));
        props.setSaveCounter(Object.getOwnPropertyNames(organization).length)
    }

    useEffect(() => {
        
        props.checkedOrganization(props.infoOrganization.data.hid)
    }, [props.isSaved,saveCardOrganization,props.checkedOrganization]);

    return (
        <div className="card-organization">
            <div className="card-organization__name">{props.infoOrganization.value}</div>
            <div className="card-organization__main">
                <div className="card-organization__left">
                    <div className="card-organization-info">
                        <div className="card-organization-info__label">Юридичекий адрес</div>
                        <div className="card-organization-info__text">{props.infoOrganization.data.address.value}</div>

                    </div>
                    <div className="card-organization-info">
                        <div className="card-organization-info__label">{props.infoOrganization.data.management && (props.infoOrganization.data.management.post || '')}</div>
                        <div className="card-organization-info__text">{props.infoOrganization.data.management && (props.infoOrganization.data.management.name || '')}</div>

                    </div>
                </div>
                <div className="card-organization__right">
                    {props.infoOrganization.data.inn && <div className="card-organization-info card-organization-info--row">
                        <div className="card-organization-info__label">ИНН</div>
                        <div className="card-organization-info__text">{props.infoOrganization.data.inn}</div>
                    </div> }
                    {props.infoOrganization.data.kpp && <div className="card-organization-info card-organization-info--row">
                        <div className="card-organization-info__label">КПП</div>
                        <div className="card-organization-info__text">{props.infoOrganization.data.kpp}</div>
                    </div>}
                    {props.infoOrganization.data.ogrn && <div className="card-organization-info card-organization-info--row">
                        <div className="card-organization-info__label">ОГРН</div>
                        <div className="card-organization-info__text">{props.infoOrganization.data.ogrn}</div>
                    </div>}
                </div>
            </div>

            {props.isSaved?<button className='card-organization__btn card-organization__btn--save'><Checked /><span>Сохранено</span></button>:<button className='card-organization__btn' onClick={() => saveCardOrganization(props.infoOrganization)}><span>Сохранить</span></button>}
            
        </div>

    );
}

export default CardOrganization;