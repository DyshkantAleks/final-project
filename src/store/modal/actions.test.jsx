import { openModal, closeModal } from './actions';
import * as actions from './types';

describe('Modal actions', () => {
  it('openModal(): should open modal', () => {
    const expectedAction = {
      type: actions.OPEN_MODAL,
      payload: { content: {}, title: '', actions: {} },
    };
    expect(openModal(expectedAction.payload)).toEqual(expectedAction);
  });

  it('closeModal(): should close modal', () => {
    const expectedAction = {
      type: actions.CLOSE_MODAL,
    };
    expect(closeModal(expectedAction)).toEqual(expectedAction);
  });
});
