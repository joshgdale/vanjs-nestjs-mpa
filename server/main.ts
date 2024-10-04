import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import * as hbs from 'hbs';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.useStaticAssets(join(__dirname, 'client'), {
    prefix: '/client',
  });
  app.setBaseViewsDir(join(__dirname, 'templates'));
  app.setViewEngine('hbs');

  await app.listen(3000);
}
bootstrap();

hbs.registerHelper('json', function (context) {
  return JSON.stringify(context);
});
