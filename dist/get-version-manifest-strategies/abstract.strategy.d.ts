import { IVersionManifest } from '../contracts/version-manifest.interface.contract';
export declare abstract class GetVersionManifestStrategy {
    /**
     * @throws {InvalidVersionManifestFormatError}
     */
    abstract get(): Promise<IVersionManifest>;
}
