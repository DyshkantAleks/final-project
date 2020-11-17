import React from 'react';
import {
  PersonalDataItem,
  PersonalDataValue,
  Label,
} from './StyledAccountInfo';

export const DataItem = (props) => {
  const { item } = props;

  return (
    <PersonalDataItem>
      <Label>{item.label}</Label>
      <PersonalDataValue>{item.value}</PersonalDataValue>
    </PersonalDataItem>
  );
};
