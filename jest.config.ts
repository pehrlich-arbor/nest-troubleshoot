import { type JestConfigWithTsJest } from 'ts-jest';

const config: JestConfigWithTsJest = {
    moduleDirectories: [
        'node_modules',
        'src',
    ],
    testRegex: '.*\\.test\\.ts$',
    moduleFileExtensions: [
        'ts',
        'json',
        'js',
    ],
    rootDir: 'src',
    transform: {
        '^.+\\.ts$': 'ts-jest',
    },
    testEnvironment: 'node',
};

// eslint-disable-next-line import/no-default-export
export default config;
