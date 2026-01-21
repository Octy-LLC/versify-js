"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvalidSemanticVersionError = void 0;
class InvalidSemanticVersionError extends Error {
    constructor(version) {
        super(`InvalidSemanticVersionError: ${version}`);
    }
}
exports.InvalidSemanticVersionError = InvalidSemanticVersionError;
