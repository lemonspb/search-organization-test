import React,{useState,useEffect} from 'react';
import {FormSeach,Suggestions} from '../FormSearch/FormSeach'
import './MyOrganization.scss'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Add from '../../Images/add.png'
import CardOrganization from '../Cards/CardOrganization'

const MyOrganization = () => {
const [infoOrganization, setInfoOrganization] = useState<any>()


const getInfoOrganization = (info:Suggestions) =>{
  setInfoOrganization(info)
}
  return (
  
  
    <main className="my-organization">
        <h1 className="my-organization__title">Мои организации</h1>
            
                <Tabs>
    <TabList>
      <Tab>Новая организация</Tab>
      <Tab>Сохраненные организации </Tab>
    </TabList>
    <main className="my-organization__main">
    <TabPanel>
   
     <FormSeach getInfoOrganization={getInfoOrganization} />
     {infoOrganization?<CardOrganization infoOrganization = {infoOrganization} />:
       <div className="my-organization__clear">
         <img src={Add} alt=""/>
         <p>Для добавления новой организации<br/> введите ее название, ИНН или адрес.</p>
       </div>
     }
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
     
    </TabPanel>
    </main>
  </Tabs>
            
    </main>
  
  );
}

export default MyOrganization;
