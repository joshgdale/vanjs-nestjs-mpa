import { Controller, Get, Post, Redirect, Render, Res } from '@nestjs/common';
import { renderPage } from 'server/utils';

@Controller()
export class AuthController {
  @Get('login')
  @Render('index')
  getLogin(@Res() res: Response) {
    return renderPage({
      title: 'Log In',
      components: ['login.js'],
    });
  }

  @Post('login')
  @Redirect()
  postLogin() {
    console.log('hit Login!');
    return {
      url: '/',
    };
  }
}
