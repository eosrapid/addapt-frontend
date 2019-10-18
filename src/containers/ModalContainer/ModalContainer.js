import React from 'react';
import { connect } from 'dva';
import {modalContainer} from './ModalContainer.module.scss';
import Modal from '@/components/Modal';

const ModalContainer = ({dispatch, modalOpen, modalId, modalData, modalLoading})=>{
  if(!modalOpen){
    return (<div style={{display:"none"}}></div>);
  };
  return(
    <div className={modalContainer}>
      <Modal title={modalId} onCancel={()=>dispatch({type: "modal/closeModal"})}>
        Test content
        blah
      </Modal>
    </div>
  );

};
export default connect(
  ({modal}) => ({
    modalOpen: modal.modalOpen,
    modalId: modal.modalId,
    modalData: modal.modalData,
    modalLoading: modal.modalLoading,
  })
)(ModalContainer);