import { IVersionManifest } from '../contracts/version-manifest.interface.contract';
import { InvalidVersionManifestFormatError } from '../errors';
import { SemanticVLib } from '../semantic-v-lib';
import { GetVersionManifestStrategy } from './abstract.strategy';

export class GetByUrlStrategy extends GetVersionManifestStrategy {
    url: string;
    SemanticVLib = SemanticVLib;

    constructor(url: string) {
        super();
        this.url = url;
    }

    async get(): Promise<IVersionManifest> {
        const response = await fetch(this.url);
        const manifest: any = await response.json()
            .catch(() => {
                throw new InvalidVersionManifestFormatError;
            });

        if (
            typeof manifest.min !== 'string' || !this.SemanticVLib.isValid(manifest.min)
            || typeof manifest.lts !== 'string' || !this.SemanticVLib.isValid(manifest.lts)
        ) {
            throw new InvalidVersionManifestFormatError;
        }

        return { min: manifest.min, lts: manifest.lts };
    }
}
