import React,{useEffect} from 'react';
import FormSeach from '../FormSearch/FormSeach'
import './MyOrganization.scss'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const MyOrganization: React.FC = () => {



 
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
   
                <FormSeach />
      <h2>Any content 1</h2>
     
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
