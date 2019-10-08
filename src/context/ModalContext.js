import createDataContext from './createDataContext';

const modalReducer = (state, action) => {
  switch (action.type) {
    case 'OPEN_MODAL':
      return true;
    case 'CLOSE_MODAL':
      return false;
    default:
      return state;
  }
};

//actions
const openModal = dispatch => () => dispatch({ type: 'OPEN_MODAL' });
const closeModal = dispatch => () => dispatch({ type: 'CLOSE_MODAL' });

const { Context, Provider } = createDataContext(
  modalReducer,
  { openModal, closeModal },
  false
);

export { Context as ModalContext, Provider as ModalProvider };
