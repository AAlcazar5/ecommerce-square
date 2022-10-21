import React, { useContext, useState, useEffect } from 'react'
import Paper from "@material-ui/core/Paper";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import { useParams, Link } from 'react-router-dom'
import { GlobalState } from '../../../GlobalState'
import ProductItem from '../utils/productItem/ProductItem'
import DetailProduct from './DetailProduct'

const ProductTabs = () => {
  const [value, setValue] = React.useState(2);
  
  return (
    <div>
      <h2>How to Create Tabs in ReactJS?</h2>
      <Paper square>
        <Tabs
          value={value}
          textColor="primary"
          indicatorColor="primary"
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <Tab label="Details">
            Deez
          </Tab>
          <Tab label="Ingredients">
            Nuts
          </Tab>
          <Tab label="Lab Report">
            Boi
          </Tab>
        </Tabs>
        <h3>TAB NO: {value} clicked!</h3>
      </Paper>
    </div>
  );
};
  
export default ProductTabs;