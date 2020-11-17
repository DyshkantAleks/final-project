import { reducer, initialState } from './reducer';
import * as actions from './action-types';

describe('Customer reducer',() =>{
    it('SET_CUSTOMER', () => {
        const  initialState = {
            customer: {
              name: 'Пользователь'
            },
            isLogined: false
          };

        const action = {
            type: actions.SET_CUSTOMER,
            payload:{}
        };

    expect(reducer(initialState, action)).toEqual({
        ...initialState,
        customer: {...initialState.customer, ...action.payload},
        
        isLogined: true
    })
    });

    it('LOGOUT_CUSTOMER', () => {
        const stateBefore = {
            customer: {
                name: 'Пользователь'
              },
              isLogined: true
        }

        const action = {
            type:actions.LOGOUT_CUSTOMER
        }

        expect(reducer(stateBefore, action)).toEqual({
            ...stateBefore,
            isLogined: false
        })
    })
})