import { SemanticVersion } from './contracts';
export declare class SemanticVLib {
    static isValid(version: SemanticVersion): boolean;
    static compare(v1: SemanticVersion, v2: SemanticVersion): number;
}
