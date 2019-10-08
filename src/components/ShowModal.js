import React, { useContext } from 'react';
import Modal from 'react-native-modal';

import { ModalContext } from '../context/ModalContext';

const ShowModal = ({ isVisible, children }) => {
  const { closeModal } = useContext(ModalContext);

  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={closeModal}
      onBackButtonPress={closeModal}
    >
      {children}
    </Modal>
  );
};

const MemoShowModal = React.memo(ShowModal, (prev, next) => {
  return prev.isVisible === next.isVisible;
});

export default MemoShowModal;
