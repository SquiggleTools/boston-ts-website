import type { KnipConfig } from "knip";

export default {
	ignoreDependencies: ["isbot"],
	ignoreExportsUsedInFile: { interface: true, type: true },
	project: ["app/**/*.ts!", "app/**/*.tsx!"],
	treatConfigHintsAsErrors: true,
} satisfies KnipConfig;
