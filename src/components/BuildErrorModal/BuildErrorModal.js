import React from "react";
import classnames from "classnames";
import { buildErrorModal } from "./BuildErrorModal.module.scss";
import Modal from '@/components/Modal';
import IDEButton from '@/components/IDEButton';
import { connect } from 'dva';
import errorIcon from '@/assets/images/icons/error.svg'
const BuildErrorModal = ({ className, modalData, dispatch }) => {
  return (
    <Modal className={classnames(buildErrorModal, className)} title="Error!">
      <div className="modalTitleIconCon">
        <img src={errorIcon} height={60} className="modalTitleIcon modalTitleIconImg" alt="Error!" />
      </div>
      <div className="modalBody">
        <div className="errorMessage">{typeof modalData==='string'?modalData:"Unknown Error!"}</div>
      </div>
      <div className="modalControlsFooter">
        <IDEButton onClick={()=>{
          dispatch({type:"modal/closeModal"});
        }}>Close</IDEButton>
      </div>
    </Modal>
  );
};
export default connect(
  ({modal}) => ({
    modalId: modal.modalId,
    modalData: modal.modalData,
    modalLoading: modal.modalLoading,
  })
)(BuildErrorModal);