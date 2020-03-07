import React, {useState} from "react";
import classnames from "classnames";
import { buildSuccessModal } from "./BuildSuccessModal.module.scss";
import Modal from '@/components/Modal';
import BuildFinishedOption from '@/components/BuildFinishedOption';
import IDEInput from '@/components/IDEInput';
import LabelInput from '@/components/LabelInput';
import IDEButton from '@/components/IDEButton';
import { connect } from 'dva';
import successIcon from '@/assets/images/icons/success.svg'
const MAINNET_NET_URLS=["https://api.eosrapid.com","https://api.eoslaomao.com","https://api.eosn.io","https://api.eossweden.org","https://mainnet.eoscannon.io","https://eosbp.atticlab.net"];
const JUNGLE_TEST_NET_URLS=["https://api.jungle.alohaeos.com","https://jungle2.cryptolions.io","https://jungle.eossweden.org"];
function getRandomFromArray(arr){
  return arr[Math.floor(arr.length*Math.random())]
}
const BuildSuccessModal = ({ className, modalId, modalData, modalLoading, dispatch }) => {
  const [apiURL, setAPIURL] = useState("https://api.eosrapid.com");
  return (
    <Modal className={classnames(buildSuccessModal, className)} title="Build Complete!">
      <div className="modalTitleIconCon">
        <img src={successIcon} height={60} className="modalTitleIcon modalTitleIconImg" alt="Success!" />
      </div>
      <div className="modalBody">
        <div className="modalDescription">To deploy your contract, please first choose an EOS API to deploy to by selecting from one of our presets, or enter your own custom API URL in the text box below. After that, click the "Deploy Contract" button, and prepare for lift off!</div>
        <div className="apiURLPresetItemsTitle">Deployment Presets:</div>
        <div className="apiURLPresetItems">
          <BuildFinishedOption
            label="EOS Mainnet"
            onClick={()=>setAPIURL(getRandomFromArray(MAINNET_NET_URLS))}
          />
          <BuildFinishedOption
            label="Jungle Testnet"
            onClick={()=>setAPIURL(getRandomFromArray(JUNGLE_TEST_NET_URLS))}
          />
        </div>
        <div className="networkConfigForm">
          <LabelInput label="EOS API URL">
            <IDEInput
              type="text"
              value={apiURL}
              onChange={e=>setAPIURL(e.target.value)}
              className="eosAPIURLInput"
              placeholder="http://example.com:8888..."
            />
          </LabelInput>
        </div>
      </div>
      <div className="modalControlsFooter">
        <IDEButton onClick={()=>{
          dispatch({type:"project/downloadProject"});
        }}>Download Binary</IDEButton>
        <IDEButton onClick={()=>{
          dispatch({type:"modal/closeModal"});
        }}>Close</IDEButton>
        <IDEButton onClick={()=>{
          dispatch({type:"project/publishProject", payload:{networkURL:apiURL}});
        }}>Deploy Contract</IDEButton>
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
)(BuildSuccessModal);