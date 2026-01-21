"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SemanticVLib = void 0;
class SemanticVLib {
    static isValid(version) {
        const semanticVersionPattern = /^\d+\.\d+\.\d+$/;
        return semanticVersionPattern.test(version);
    }
    static compare(v1, v2) {
        const parts1 = v1.split('.').map(Number);
        const parts2 = v2.split('.').map(Number);
        for (let i = 0; i < 3; i++) {
            if (parts1[i] > parts2[i])
                return 1;
            if (parts1[i] < parts2[i])
                return -1;
        }
        return 0;
    }
}
exports.SemanticVLib = SemanticVLib;
