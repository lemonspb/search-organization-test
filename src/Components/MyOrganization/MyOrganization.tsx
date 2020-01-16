import React, { useState, useEffect } from 'react';
import { FormSeach, Suggestions } from '../FormSearch/FormSeach'
import './MyOrganization.scss'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Add from '../../Images/add.png'
import CardOrganization from '../Cards/CardOrganization'
import CardSaveOrganization from '../Cards/CardSaveOrganization'
const MyOrganization = () => {

    const [infoOrganization, setInfoOrganization] = useState<any>()
    const [saveCounter, setSaveCounter] = useState(0)
    const [listSaveOrganization, setListSaveOrganization] = useState([])
    const [isSaved, setIsSaved ] = useState(false)
    
    const getInfoOrganization = (info: Suggestions) => {
      
      setInfoOrganization(info)
    }

    const checkedOrganization = (id:any) =>{
      const organization = JSON.parse(localStorage.getItem("storageOrganization")!) || ''
      Object.keys(organization).forEach((item)=> {
        if(item === id){
          setIsSaved(true)
        }
      else{
        setIsSaved(false)
      }
      })
    }

    const deleteOrganization = (id:string) =>{
      const organization = JSON.parse(localStorage.getItem("storageOrganization")!) || ''
      Object.keys(organization).forEach((item)=> {
        if(item === id){
          setIsSaved(false)
        }
      
      })
      delete organization[id];
    
       setListSaveOrganization(organization)   
       setSaveCounter(Object.values(organization).length)
      localStorage.setItem("storageOrganization", JSON.stringify(organization));
    }
  
useEffect(() => {
  const organization = JSON.parse(localStorage.getItem("storageOrganization")!) || '';
  setSaveCounter(Object.values(organization).length)
  setListSaveOrganization((organization))   
}, [saveCounter]);

  return (
    <main className="my-organization">
      <h1 className="my-organization__title">Мои организации</h1>

      <Tabs>
        <TabList>
          <Tab>Новая организация</Tab>
          <Tab>Сохраненные организации<span className='tab-counter'>{saveCounter?` (${saveCounter})`:''}</span></Tab>
        </TabList>
        <main className="my-organization__main">
          <TabPanel>

            <FormSeach getInfoOrganization={getInfoOrganization} />
            {infoOrganization ? <CardOrganization infoOrganization={infoOrganization}  setSaveCounter={setSaveCounter}  isSaved={isSaved} checkedOrganization={checkedOrganization}/> :
              <div className="my-organization__clear">
                <img src={Add} alt="" />
                <p>Для добавления новой организации<br /> введите ее название, ИНН или адрес.</p>
              </div>
            }
          </TabPanel>
          <TabPanel>
            {Object.values(listSaveOrganization).map((saveOrganization:any)=>{
              return(
                <CardSaveOrganization saveOrganization={saveOrganization} deleteOrganization={deleteOrganization}/>
              ) 
            })}

          </TabPanel>
        </main>
      </Tabs>

    </main>

  );
}

export default MyOrganization;
