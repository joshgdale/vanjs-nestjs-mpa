import { Controller, Get, Render, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { renderPage } from './utils';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  getHello(@Res() res: Response) {
    return renderPage({
      title: 'Dashboard',
      data: {
        name: 'Foo',
        age: 909,
      },
      components: ['dash-shell.js', 'dashboard/dashboard.js'],
      debugData: true,
    });
  }

  @Get('alt')
  @Render('index')
  getAlt(@Res() res: Response) {
    return renderPage({
      title: 'Alt',
      data: {
        chartData: [12, 19, 3, 5, 2, 18],
      },
      components: ['dash-shell.js', 'alt/alt.js'],
      debugData: true,
    });
  }
}
