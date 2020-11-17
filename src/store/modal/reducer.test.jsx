import { reducer, initialState } from './reducer';
import * as actions from './action-types';

describe('Modal reducer', () => {

    it('OPEN_MODAL', () => {
        const action = {
            type: actions.OPEN_MODAL,
            payload: { content: {}, title: '', actions: {} }
        }
        expect(reducer(initialState, action)).toEqual({
            ...initialState,
            isOpenModal: true,
            content: action.payload.content,
            title: action.payload.title,
            actions: action.payload.actions
        });
    });

    it('CLOSE_MODAL', () => {
        const stateBefore ={
            isOpenModal: true,
            content: {},
            title: '',
            actions: {}
        }
        const action = {
            type: actions.CLOSE_MODAL
        }
        expect(reducer(stateBefore, action)).toEqual({
            ...stateBefore,
            isOpenModal: false,
        })
    });


});