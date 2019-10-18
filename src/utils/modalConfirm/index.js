var currentCallback = null;
var isOpen = false;
var isLastLoading = false;
var HAS_INIT = false;

function clearModal(){
  document.getElementById("cmMessage").innerText = "";
  document.getElementById("cmInputMain").value = "";
  document.getElementById("confirmModalInputs").style.display="block";
  document.getElementById("confirmModalCtrls").style.display="block";
}
function setIsOpen(val){
  isOpen = val;
}
function getIsOpen(){
  return isOpen;
}
function closeModal(){
  var value = document.getElementById("cmInputMain").value;
  document.getElementById("cmContainer").style.display = "none";
  clearModal();
  setIsOpen(false);

  return value;
}
export function openLoading(message){
  if(getIsOpen()&&!isLastLoading){
    throw new Error("Error Opening modal!")
  }
  isLastLoading=true;
  setIsOpen(true);
  document.getElementById("cmMessage").innerText = message+"";
  document.getElementById("confirmModalInputs").style.display="none";
  document.getElementById("confirmModalCtrls").style.display="none";
  document.getElementById("cmContainer").style.display = "block";
  return true;
}
export function closeLoading(){
  if(getIsOpen()&&!isLastLoading){
    throw new Error("Error closing modal!")
  }
  document.getElementById("cmContainer").style.display = "none";
  clearModal();
  setIsOpen(false);

}

export function mConfirmCB(message, cb, options){
  if(getIsOpen()&&!isLastLoading){
    return cb("already_open");
  }
  isLastLoading=false;
  setIsOpen(true);
  options=options||{};
  currentCallback = cb || null;
  const placeholder = options.placeholder||"";
  const defaultValue = options.defaultValue || options.value || "";
  clearModal();
  document.getElementById("cmMessage").innerText = message+"";
  document.getElementById("cmInputMain").placeholder = placeholder;
  document.getElementById("cmInputMain").value = defaultValue;
  document.getElementById("cmContainer").style.display = "block";
  document.getElementById("cmInputMain").focus();
}
export function mConfirmPromise(message, options){
  return new Promise((resolve,reject)=>{
    mConfirmCB(message, (err, result)=>{
      if(err){
        reject(err);
      }else{
        resolve(result);
      }
    }, options);
  })
}
function onCancel(e){
  closeModal();
  if(currentCallback){
    currentCallback("cancel");
    currentCallback=null;
  }
}
function onConfirm(e){
  var value = closeModal();
  if(currentCallback){
    currentCallback(null, value);
    currentCallback=null;
  }
}
function setupInit(){
  if(HAS_INIT){
    return;
  }
  HAS_INIT=true;
  clearModal();
  document.getElementById("cmBtnConfirm").addEventListener("click", onConfirm, false);
  document.getElementById("cmBtnCancel").addEventListener("click", onCancel, false);
}
setupInit();