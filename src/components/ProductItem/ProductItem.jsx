import React from 'react';

import './productItem.scss';

export const ProductItem = (props) => {
    const { id=1, price=15999, name='Стул обеденный', image="https://esteema.ua/upload/product/large/9001603-08-9001603-08%20(74)_1532595086.jpg", description = "Стул стиля Hollywood Loft - простой, лаконичный, с четкой геометрией рисунка; каркас и ноги стула выполнены из 100% массива; мягкая обивка сиденья и спинки обеспечивает комфорт и необычайно эргономична; сиденье и спинка стула обтянуты роскошной мерцающей тканью, заключенной в светлую рамку элементов конструкции; основной акцент обеденного стула - зеркальные вертикальные планки по обеим сторонам спинки." } = props;

    return (
        <>
            <li className='product-item' id={id}>
                <img className='product-item__img' alt='our product' src={image} />
                <div className='product-item__title'>
                    <span className='product-item__title-name'>{name}</span>
                    <span className='product-item__title-price'>{price}</span>
                </div>
            </li>
        </>
    )
}
