import { IVersionManifest } from '../contracts/version-manifest.interface.contract';
import { InvalidVersionManifestFormatError } from '../errors';

export abstract class GetVersionManifestStrategy {
    /**
     * @throws {InvalidVersionManifestFormatError}
     */
    abstract get(): Promise<IVersionManifest>
}