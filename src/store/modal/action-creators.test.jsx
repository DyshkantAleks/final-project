import {openModal, closeModal} from './actions-creators';
import * as actions from './action-types';

describe('Modal actions', () => {
    it('openModal(): should open modal', () => {
        const expectedAction = {
            type: actions.OPEN_MODAL,
            payload: { content: {}, title: '', actions: {} }
        };
        expect(openModal(expectedAction.payload)).toEqual(expectedAction)
    });

    it('closeModal(): should close modal', () => {
        const expectedAction = {
            type: actions.CLOSE_MODAL
        };
        expect(closeModal(expectedAction)).toEqual(expectedAction);
    })
})