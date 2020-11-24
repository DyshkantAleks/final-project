import styled from 'styled-components';

export const ScrollToTopContainer = styled.div`
position: fixed;
bottom: 10rem;
right: 1.6rem;
display: flex;
justify-content: center;
align-items: center;
border: .1rem solid #e6e9ef;
border-radius: .5rem;
box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.3);
width: 5rem;
height: 5rem;
cursor: pointer;
z-index: 1;
transition: all .3s linear;
    &:hover{
        background-color: #e6e9ef;
    };
`;

export const IconScroll = styled.span`
display: block;
width: 3rem;
height: 3rem;
fill: #7191A6;
animation: scrollTop .5s alternate ease infinite;
    @keyframes scrollTop {
        from {
            transform: translateY(2px);
        }
        to {
            transform: translateY(-1px)
        }
 };
`;