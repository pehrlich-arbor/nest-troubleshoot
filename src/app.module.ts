import { forwardRef, Inject, Injectable, Module } from '@nestjs/common';
import { Resolver } from '@nestjs/graphql';
class SampleEntity {}
@Injectable()
class SampleService1 {}

@Injectable()
class SampleService2 {
    constructor(
        @Inject(forwardRef(() => SampleService1))
        private readonly usersService: SampleService1,
    ) {
        console.log('SampleService2', this.usersService);
    }
}

@Resolver(() => SampleEntity)
class SampleResolver {
    constructor(private readonly occupancyService: SampleService2) {
        console.log('SampleResolver', this.occupancyService);
    }
}

@Module({
    imports: [],
    providers: [
        SampleService2,
        SampleResolver,
    ],
})
export class AppModule {}
