import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';


import { ProductItemDetails } from '.';
import { ContainerDetails, ContainerProduct, Price, Article, AvailabilityArticleWrap, Availability, DimensionsContainer, Description, Subtitle, ActionsContainer, Actions, SpecificationContainer, DescriptionKey, ShowMore, PriceContainer, CurrentPrice, PreviousPrice, SubtitleBox} from './StyledProductItemDetails';
import { Title } from '../Title/Title';
import { ProductSlider } from '../ProductSlider';
import { RegularIconFavorite } from '../ProductItem/IconsSvg/RegularIconFavorite';



const setUp = (props = {}) => {
    const component = shallow(<ProductItemDetails {...props} />);
    return component;
}
describe('ProductItemDetails component', () => {
    describe('render component with props', () => {
        let wrapper;
        beforeEach(() => {
            const props = {
                product: {
                    name: 'Test',
                    currentPrice: 123,
                    previousPrice: 234,
                    brand: 'testBrand',
                    quantity: 10,
                    itemNo: 'testNumber',
                    isSale: false,
                    isNewProduct: false,
                    isTopRated: false,
                    description: 'TestDesc',
                    sizes: {
                        width: 1,
                        height: 1,
                        length: 1
                    },
                    specifications: {
                        covering: 'test',
                        casing: 'test'
                    },
                    color: 'testColor',
                    _id: 'testId'
                },
                btnInCart: false,
                btnHeandler: jest.fn(),
                inFavorite: false,
                addToFav: jest.fn(),
                removeFromFav: jest.fn()
            };
            wrapper = setUp(props);
        });
        it('should render with wrapper', () => {
            expect(wrapper.length).toEqual(1);
        });
        it('snaphot of <ProductItemDetails />', () => {
            expect(wrapper.debug()).toMatchSnapshot();
        });
        it('should render with title', () => {
            const title = wrapper.find(Title);
            expect(title.length).toEqual(1);
        });
        
        it('should have a container with detailed product description', () => {
            const containerDetails = wrapper.find(ContainerDetails);
            expect(containerDetails.length).toEqual(1);
        });
        it('should render with slider', () => {
            const slider = wrapper.find(ContainerDetails).find(ProductSlider);
            expect(slider.length).toBe(1);
        });
        it('should render with price container', () => {
            const priceContainer = wrapper.find(ContainerDetails).find(PriceContainer);
            expect(priceContainer.length).toEqual(1);
            const price = priceContainer.find(Price);
            expect(price.text()).toBe('123')
        });
        it('should render with favotiteIcon', () => {
            const favoriteIcon = wrapper.find(ContainerDetails).find(RegularIconFavorite);
            expect(favoriteIcon.length).toEqual(1);
        });
        it('simulate onClick on favoriteIcon', () => {
            const removeFromFav = sinon.spy();
            wrapper.find(ContainerDetails).find(RegularIconFavorite).simulate('click');
            expect(removeFromFav).toHaveProperty('callCount', 0);
        });
        it('should be render with brand', () => {
            const brand = wrapper.find(ContainerDetails).find(Subtitle).first();
            expect(brand.text()).toEqual('Бренд: testBrand');
        });
        it('should be render with aviability container', () => {
            const avilabilityContainer = wrapper.find(ContainerDetails).find(AvailabilityArticleWrap);
            expect(avilabilityContainer.length).toEqual(1);
        });
        it('should be render ✔ aviability if quantity > 0',() => {
            expect(wrapper.find(ContainerDetails).find(AvailabilityArticleWrap).find(Availability).text()).toEqual('✔ в наличии');
        });
        it('should be render with article', () => {
            const article = wrapper.find(ContainerDetails).find(AvailabilityArticleWrap).find(Article);
            expect(article.text()).toEqual('Артикул: testNumber')
        })

    });
})