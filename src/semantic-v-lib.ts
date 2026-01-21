import { SemanticVersion } from './contracts';

export class SemanticVLib {
    static isValid(version: SemanticVersion): boolean {
        const semanticVersionPattern = /^\d+\.\d+\.\d+$/;
        return semanticVersionPattern.test(version);
    }

    static compare(v1: SemanticVersion, v2: SemanticVersion): number {
        const parts1 = v1.split('.').map(Number);
        const parts2 = v2.split('.').map(Number);

        for (let i = 0; i < 3; i++) {
            if (parts1[i] > parts2[i]) return 1;
            if (parts1[i] < parts2[i]) return -1;
        }

        return 0;
    }
}
