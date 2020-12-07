const Controller = require('egg').Controller;

class NewController extends Controller {
    async chat() {
        const { ctx, app } = this;
        const usocket = app.usocket.getState()
        let info = ctx.args[0]
        const message = ctx.args[1];
    }
    // 视频聊天请求
    async videoReq() {
        const { ctx, app } = this;
        const usocket = app.usocket.getState()
        let info = ctx.args[0]
    }

    async ping() {
        const { ctx, app } = this;
        const message = ctx.args[0];
        await ctx.socket.emit('res', `Hi! I've got your message: ${message}`);
    }
}
module.exports = NewController;