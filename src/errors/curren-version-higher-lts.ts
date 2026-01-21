export class CurrentVersionHigherLTSError extends Error {
    constructor(current: string, lts: string) {
        super(`CurrentVersionHigherLTSError: ${current} is higher than LTS version ${lts}`);
    }
}
