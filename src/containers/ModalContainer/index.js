import React from 'react';
import { connect } from 'dva';
import BuildErrorModal from '@/components/BuildErrorModal';
import BuildSuccessModal from '@/components/BuildSuccessModal';
const MODAL_ID_MAP = {
  "build_error": BuildErrorModal,
  "build_success": BuildSuccessModal,
  
}
const ModalContainer = ({modalOpen, modalId, modalData, modalLoading, dispatch})=>{
  if(!modalOpen||!modalId) {
    return <div style={{display:"none"}}></div>
  }else if(!MODAL_ID_MAP.hasOwnProperty(modalId)){
    console.error("Unknown modal id "+modalId+"!")
    return <div style={{display:"none"}}></div>
  }
  const ModalElement = MODAL_ID_MAP[modalId];

  return <ModalElement />
}
export default connect(
  ({modal}) => ({
    modalOpen: modal.modalOpen,
    modalId: modal.modalId,
  })
)(ModalContainer);

