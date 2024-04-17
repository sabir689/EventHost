import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Music from './Music';

const Events = () => {
    return (
        <div className='text-black'>
            <h1 className='font-inter text-center mt-10 text-black font-medium text-6xl text-left'>Events</h1>
            <Tabs defaultIndex={1} onSelect={(index) => console.log(index)}>
                <TabList className={"text-center mt-10 mb-10"}>
                    <Tab >All</Tab>
                    <Tab>For You</Tab>
                    <Tab>This Day</Tab>
                    <Tab>This Week</Tab>
                    <Tab>Music</Tab>
                    <Tab>Union</Tab>

                </TabList>
                <TabPanel ></TabPanel>
                <TabPanel></TabPanel>
                <TabPanel></TabPanel>
                <TabPanel></TabPanel>
                <TabPanel><Music></Music></TabPanel>
                <TabPanel></TabPanel>
            </Tabs>

        </div>
    );
};

export default Events;