import { NestFactory } from '@nestjs/core';
import { TimelineBatchModule } from './timeline-batch.module';

async function bootstrap() {
  const app = await NestFactory.create(TimelineBatchModule);
  await app.listen(process.env.PORT_BATCH ?? 3000);
}
bootstrap();
