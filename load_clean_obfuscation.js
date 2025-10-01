om.common.modelInfo().exportObfuscationState().setPath('state.zip').export();

const fileId = om.filesystems.local().makeGlobalFile('state', 'zip', 'state.zip');
om.common.resultInfo().addFileHash(fileId);
