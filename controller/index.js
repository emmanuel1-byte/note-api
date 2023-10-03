const authController = require('./auth.controller');
const noteController = require('./note.controller');

module.exports = {
    signup: authController.signup,
    main: authController.main,
    login: authController.login,
    logout: authController.logout,
    refreshAndVerifyToken: authController.refreshAndVerifyToken,
    forgotPassword : authController.forgotPassword,
    resetPassword : authController.resetPassword,
    listNotes: noteController.listNotes,
    createNote: noteController.createNote,
    deleteNote : noteController.deleteNote,
    updateNote : noteController.updateNote,
    noteSearch : noteController.NoteSearch,
    readNote : noteController.readNote,
    storage : noteController.storage

}