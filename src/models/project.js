import {
  getProject,
  getFile, 
  saveFile, 
  deleteProjectFile,
  renameProjectFile,
  getGState,
  addProjectFile,
  addProject,
  renameProject
} from '@/utils/dataStore/project';
import {downloadText} from '@/utils/download'
import {openLoading, closeLoading, mConfirmPromise} from '@/utils/modalConfirm';
import {compileProject} from '@/utils/api/compile';

import {getServerPasscode} from '@/utils/api/serverPasscode';
export default {
  namespace: 'project',

  state: {
    currentProjectId: null,
    currentProjectTitle: null,
    currentProjectFiles: [],
    openTabs: [],
    editingFileId: null,
    loading: false,
    loadingMessage: '',
    projects: [],
    projectsLoaded: false,
  },

  subscriptions: {
    setup({ history, dispatch }) {
      return history.listen(({ pathname }) => {
        dispatch({type: 'loadIfMissing'});
      });
    },
  },

  effects: {
    *loadIfMissing(_, { select, put }) {
      const pLoaded = yield select(({ project }) => project.projectsLoaded);
      if(!pLoaded){
        if(getGState().projects.length===0){
          addProject("example_project", 1);
        }
        yield put({
          type: 'loadProjects',
        });
        if(true==true){
          
          yield put({
            type: 'openProject',
            payload: getGState().projects[0].id
          });

        }
      }
    },
    *addFileToProject({payload}, { select, call, put }) {
      const currentProjectId = yield select(({ project }) => project.currentProjectId);

      if(currentProjectId){
        try{
          addProjectFile(currentProjectId, payload, "");
          yield put({
            type: 'openProject',
            payload: currentProjectId,
          })
        }catch(e){}
      }
    },
    *removeFileById({payload}, { select, call, put }) {
      const currentProjectId = yield select(({ project }) => project.currentProjectId);

      if(currentProjectId){
        try{
          deleteProjectFile(currentProjectId, payload);
          yield put({
            type: 'openProject',
            payload: currentProjectId,
          })
        }catch(e){}
      }
    },
    *compileProject({payload}, { select, call, put }) {
      const currentProjectId = yield select(({ project }) => project.currentProjectId);
      const targetPid = payload || currentProjectId;
      console.log("test")

      try {
        const proj = getProject(targetPid)
        const passCode = yield call(getServerPasscode);
        openLoading("Please wait while your contract is compiled...");
        const compileResult = yield call(compileProject, passCode, proj);
        console.log("GOTRES: ",compileResult);
        downloadText(proj.title+".abi.json", compileResult.abi);
        downloadText(proj.title+".wasm", compileResult.wasm);
        closeLoading();
      }catch(e){
        console.error(e);
        try{
          closeLoading();
        }catch(e){}
      }
    },
    *renameFileById({payload: {id, name}}, { select, call, put }) {
      const currentProjectId = yield select(({ project }) => project.currentProjectId);

      if(currentProjectId){
        try{
          renameProjectFile(currentProjectId, id, name);
          yield put({
            type: 'openProject',
            payload: currentProjectId,
          })
        }catch(e){}
      }
    },
    *loadProjects(_, { call, put }) {
      yield put({
        type: 'setProjects',
        payload: getGState().projects,
      });
    },
    *uiCreateNewProject(_, {call, put}){
      try{
        const newName = yield call(mConfirmPromise, "Enter new project's name below:");
        if(newName.trim().length){
          const pid = addProject(newName, 1);
          yield put({
            type: 'loadProjects',
          });
          yield put({
            type: 'openProject',
            payload: pid
          });
        }
      }catch(e){
        
      }
    },
    *openProject({payload}, { call, put }) {
      const project = getProject(payload);
      yield put({
        type: 'setCurrentProject',
        payload: project,
      });
    },
    *openProjectGoToFiles({payload}, { call, put }) {
      const project = getProject(payload);
      yield put({
        type: 'setCurrentProject',
        payload: project,
      });
      yield put({
        type:'page/setEditorPage',
        payload: 'project'
      });

    },
  },

  reducers: {
    setLoadingState(state, { payload }) {
      return {
        ...state,
        loading: payload ? true : false,
        loadingMessage: typeof payload === 'string' ? payload : null,
      };
    },
    setCurrentProject(state, { payload }) {
      if(state.currentProjectId!==payload.id||!state.openTabs.length){
        return {
          ...state,
          currentProjectId: payload.id,
          currentProjectTitle: payload.title,
          currentProjectFiles: payload.files,
          openTabs: [],
          editingFileId: null,
        };
      }
      const newFileIds = payload.files.map(x=>x.id);


      return {
        ...state,
        currentProjectId: payload.id,
        currentProjectTitle: payload.title,
        currentProjectFiles: payload.files,
        openTabs: state.openTabs.filter(id=>newFileIds.indexOf(id)!==-1),
        editingFileId: null,
      };
    },
    closeProject(state, { payload }) {
      return {
        ...state,
        currentProjectId: null,
        currentProjectTitle: null,
        currentProjectFiles: [],
        openTabs: [],
        editingFileId: null,
      };
    },
    openFile(state, { payload }) {
      console.log("openFile/"+payload)
      return {
        ...state,
        editingFileId: payload,
        openTabs: state.openTabs.indexOf(payload)===-1?state.openTabs.concat([payload]):state.openTabs
      };
    },
    closeFile(state, { payload }) {
      const newOpenTabs = state.openTabs.filter(x=>x!==payload);
      return {
        ...state,
        openTabs: newOpenTabs,
        editingFileId: newOpenTabs[0]||null,
      };
    },
    setProjects(state, { payload }) {
      return {
        ...state,
        projects: payload,
        projectsLoaded: true,
      };
    },
  },
};
