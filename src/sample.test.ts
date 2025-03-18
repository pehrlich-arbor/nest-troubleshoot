import { Test } from '@nestjs/testing';
import { AppModule } from 'app.module';
import { beforeEach, describe, fit } from '@jest/globals';

beforeEach(async () => {
    const testingModuleBuilder = Test.createTestingModule({
        imports: [AppModule],
    }) as any;

    await testingModuleBuilder.compile();
});

describe('POST /ecl/parse', () => {
    fit('should process a valid ECL file notification', async () => {});
});
