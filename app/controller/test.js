'use strict';

// app/controller/test.js
const Controller = require('egg').Controller;

class NewController extends Controller {

  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }
  
  async list() {
    const dataList = {
      list: [
        { id: 1, title: 'this is test 1', url: '/test/1' },
        { id: 2, title: 'this is test 2', url: '/test/2' },
      ],
    };
    await this.ctx.render('test/list.tpl', dataList);
  }

  async json() {
    // http://127.0.0.1:7001/public/data/home.json
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }

  async png() {
    // http://127.0.0.1:7001/public/image/p.png
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }
}

module.exports = NewController;
