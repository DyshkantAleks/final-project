import React from 'react';
import { Link } from 'react-router-dom';

import { ContentContainer } from '../../styles/GeneralStyledComponents';
import { ROUTES } from '../Navigation/routes';
import {ContainerFor404, ContainerImage404, Image404, TextContainer404, Text404, Button404} from './StyledNotFoundPage';

export const NotFoundPage = () => {
  return (
    <>
      <ContainerFor404>
        <ContentContainer>
          <ContainerImage404>
            <Image404 src='https://res.cloudinary.com/dg-home/image/upload/v1604486670/General/404_f3bscz.gif' />
          </ContainerImage404>
          <TextContainer404>
            <Text404>Упс.... Кажется мы потеряли эту страницу :(</Text404>
            <Link to={ROUTES.HOMEPAGE}>
              <Button404>Вернуться на главную</Button404>
            </Link>
          </TextContainer404>
        </ContentContainer>
      </ContainerFor404>
    </>
  )
};