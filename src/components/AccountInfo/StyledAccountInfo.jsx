import styled from 'styled-components';
import {device} from '../../styles/breakpoints/breakpoints';

export const PersonalSectionHeader = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
margin-bottom: 1rem;
`;

export const ActiveContainer = styled.div`
text-align: center;
@media ${device.tabletS}{
  text-align: end;
}
`;

export const PersonalSectionFooter = styled.div`
display: grid; 
grid-template-rows: repeat(3, 1fr);
gap: 1rem;
    @media ${device.tabletS}{
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;
    };
`;

export const PersonalSectionHeading = styled.h3`
display: flex;
font-size: 2rem;
align-items: center;
margin: 0;
`;

export const Icon = styled.span`
width: 3rem;
height: 3rem;
margin-right: 2.5rem;
align-items: center;
display: flex;
`;

export const PersonalSection = styled.section`
margin-bottom: 2rem;
padding: 1.5rem;
border: .1rem solid #e6e9ef;
border-radius: .5rem;
box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.3);
`;

export const PersonalDataContainer = styled.div`
padding-left: 1.5rem;
  @media ${device.tabletS}{
  padding-left: 5.5rem;
};
`;

export const PersonalDataList = styled.ul`
display: flex;
flex-direction: column;
list-style: none;
padding: 0;
margin: 0;
    @media ${device.tabletS}{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;  
    };
`;

export const PersonalDataItem = styled.li`
    @media ${device.tabletS}{
        width: 50%;
        margin-bottom: 1rem;
        padding-right: 1rem;
    };
    @media ${device.tabletM}{
        width: 33.33%;
        margin-bottom: 2.5rem;
        padding-right: 2.5rem;
    };
`;

export const Label = styled.label`
margin-bottom: .8rem;
font-size: 1.2rem;
color: #797878;
`;

export const PersonalDataValue = styled.p`
font-size: 1.4rem;
`;