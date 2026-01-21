# GetByUrlStrategy

`GetByUrlStrategy` is a strategy class for fetching and validating a version manifest from a remote URL. It works in environments where `fetch` is available (browsers, React Native, Node.js 18+).

## Installation

```bash
npm install @octy/versify-js
```

## Usage

### Check Version

```typescript
import { GetByUrlStrategy, Versify } from '@octy/versify-js';

const strategy = new GetByUrlStrategy('<your-url-to-manifest>');
const versify = new Versify(strategy);

versify.check('1.0.0');
```

### Get Version Manifest Directly

```typescript
import { GetByUrlStrategy, Versify } from '@octy/versify-js';

const strategy = new GetByUrlStrategy('<your-url-to-manifest>');
const versify = new Versify(strategy);

versify.getVersionManifest();
```

## Manifest Format

The remote JSON must have the following structure:

```json
{
  "min": "1.0.0",
  "lts": "1.0.1"
}
```

- `min`: Minimum supported version (number)
- `lts`: Latest LTS version (number)

## Requirements

- Node.js 18+ (or polyfilled fetch)
- React Native (fetch is available globally)
- Web browsers

---

> **Note:** Additional manifest get strategies will be added soon.
