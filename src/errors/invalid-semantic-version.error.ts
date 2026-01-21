export class InvalidSemanticVersionError extends Error {
    constructor(version: string) {
        super(`InvalidSemanticVersionError: ${version}`);
    }
}
