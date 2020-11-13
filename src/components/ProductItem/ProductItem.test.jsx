// import React from 'react';
import {create} from 'react-test-renderer';
import {ProductItem} from '.';

describe('ProductItem component', () => {
    it('it show the expected name', () => {
        const component = create(<ProductItem name='someText'/>);
        const instance = component.getInstance();
        expect(instance.name).toBe('someText');
    })
})

// import React from 'react';
// import { render, unmountComponentAtNode } from 'react-dom';
// import { act } from 'react-dom/test-utils';

// import {ProductItem} from './index';

// describe('ProductItem is rendered correctly', () => {
//     let container = null;
//     beforeEach(() => {
//         container = document.createElement("div");
//         document.body.appendChild(container);
//     });
    
//     afterEach(() => {
//         unmountComponentAtNode(container);
//         container.remove();
//         container = null;
//     });

//     it('all props are working correctly', () => {
//         act(() => {
//             render(<ProductItem />, container);
//         });
//     })
// });