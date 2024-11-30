import React, { useState } from 'react';
import { Select } from 'antd';
import MaterialRecommendedCard from './MaterialRecommendedCard';
import MaterialBestSellerCard from './MaterialBestSellerCard';
import MaterialsItemCard from './MaterialsItemCard';

const { Option } = Select;

const MaterialItemsFilter = (props) => {

  const [selectedValue, setSelectedValue] = useState('default');


  const handleChange = (value) => {
    setSelectedValue(value);
  };

  return (
    <div>
      <Select
        style={{ width: '10rem' }}
        defaultValue="default"
        onChange={handleChange}
      >
        <Option value="default">Select</Option>
        <Option value="recommend">Recommend</Option>
        <Option value="bestSeller">Best Seller</Option>
      </Select>

    
      {selectedValue === 'default' && <MaterialsItemCard invencartItem={props.invencartItem}/>}
      {selectedValue === 'recommend' && <MaterialRecommendedCard invencartItem={props.invencartItem}/>}
      {selectedValue === 'bestSeller' && <MaterialBestSellerCard invencartItem={props.invencartItem}/>}
    </div>
  );
};

export default MaterialItemsFilter;
