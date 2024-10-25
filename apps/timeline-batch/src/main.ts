import { NestFactory } from '@nestjs/core';
import { TimelineBatchModule } from './timeline-batch.module';

async function bootstrap() {
  const app = await NestFactory.create(TimelineBatchModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
