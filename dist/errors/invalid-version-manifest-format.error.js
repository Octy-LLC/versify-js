"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvalidVersionManifestFormatError = void 0;
class InvalidVersionManifestFormatError extends Error {
    constructor() {
        super('Invalid version manifest format');
    }
}
exports.InvalidVersionManifestFormatError = InvalidVersionManifestFormatError;
