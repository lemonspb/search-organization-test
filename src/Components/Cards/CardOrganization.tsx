import React,{useEffect,useState} from 'react';
import './CardOrganization.scss'






const CardOrganization = (props:any) => {

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
                      <div className="card-organization-info__label">{props.infoOrganization.data.management && props.infoOrganization.data.management.post || ''}</div>
                      <div className="card-organization-info__text">{props.infoOrganization.data.management && props.infoOrganization.data.management.name|| ''}</div>
                      
                  </div>
                </div>
                <div className="card-organization__right">
                <div className="card-organization-info card-organization-info--row">
                      <div className="card-organization-info__label">ИНН</div>
                      <div className="card-organization-info__text">{props.infoOrganization.data.inn}</div>
                  </div>
                  <div className="card-organization-info card-organization-info--row">
                      <div className="card-organization-info__label">КПП</div>
                      <div className="card-organization-info__text">{props.infoOrganization.data.kpp}</div>
                  </div>
                  <div className="card-organization-info card-organization-info--row">
                      <div className="card-organization-info__label">ОГРН</div>
                      <div className="card-organization-info__text">{props.infoOrganization.data.ogrn}</div>
                  </div>
                </div>
            </div>
            <button className='card-organization__btn'>Сохранить</button>
    </div>
  
  );
}

export default CardOrganization;