"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrentVersionHigherLTSError = void 0;
class CurrentVersionHigherLTSError extends Error {
    constructor(current, lts) {
        super(`CurrentVersionHigherLTSError: ${current} is higher than LTS version ${lts}`);
    }
}
exports.CurrentVersionHigherLTSError = CurrentVersionHigherLTSError;
