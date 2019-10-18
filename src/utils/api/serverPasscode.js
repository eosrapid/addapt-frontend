import {mConfirmPromise} from '@/utils/modalConfirm'
var SERVER_PASSCODE = null;
export async function getServerPasscode(forceNew){
  if(SERVER_PASSCODE&&!forceNew){
    return SERVER_PASSCODE;
  }
  const nServerPass = await mConfirmPromise(
    "Please enter the server passcode",
    {
      placeholder:"Server Passcode...",
      value:""
    }
  );
  SERVER_PASSCODE = nServerPass;
  return nServerPass;
}