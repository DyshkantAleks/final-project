import React from 'react';
import {
  PersonalSection,
  PersonalSectionHeader,
  PersonalSectionHeading,
  Icon,
  PersonalSectionActive,
} from './StyledAccountInfo';
import useWindowDimensions from '../../utils/useWindowDimensions';
import { Button } from '../../components/Button';

export const PersonalDataSection = (props) => {
  const { title, icon, data, changeData } = props;
  const { screenWidth } = useWindowDimensions();
  
  return (
    <PersonalSection>
      <PersonalSectionHeader>
        <PersonalSectionHeading>
          <Icon>{icon}</Icon>
          {title}
        </PersonalSectionHeading>
        {screenWidth >= 481 ? (
          <Button
            text={'Редактировать'}
            onClick={changeData}
          />
        ) : null}
      </PersonalSectionHeader>
      {screenWidth < 481 ? (
        <PersonalSectionActive>
          <Button
            text={'Редактировать'}
            onClick={changeData}/>
        </PersonalSectionActive>
      ) : null}
      {data}
    </PersonalSection>
  );
};
