
module.exports = app => {
    const { io } = app;
    io.of('/').route('CHAT_SEND', io.controller.default.chat)
    io.of('/').route('CHATVIDEO_REQ', io.controller.default.videoReq)
    io.of('/').route('chat', io.controller.chat)
}