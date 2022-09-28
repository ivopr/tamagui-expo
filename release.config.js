module.exports = {
  branches: ["main"],
  plugins: [
    [
      "@semantic-release/commit-analyzer",
      {
        preset: "angular",
        releaseRules: [
          { type: "BREAKING", release: "major" },
          { type: "feat", release: "minor" },
          { type: "fix", release: "patch" },
          { type: "ref", release: "patch" },
          { type: "dep", release: "patch" },
          { type: "chore", release: false },
          { type: "ci", release: false },
          { type: "docs", release: false },
        ],
      },
    ],
    [
      "@semantic-release/release-notes-generator",
      {
        preset: "conventionalcommits",
        presetConfig: {
          types: [
            {
              type: "BREAKING",
              section: ":boom: BREAKING CHANGE",
              hidden: false,
            },
            {
              type: "feat",
              section: ":sparkles: Features",
              hidden: false,
            },
            {
              type: "fix",
              section: ":bug: Fixes",
              hidden: false,
            },
            {
              type: "docs",
              section: ":memo: Documentation",
              hidden: false,
            },
            {
              type: "ref",
              section: ":zap: Refactorings and Dependency Changes",
              hidden: false,
            },
            {
              type: "dep",
              section: ":zap: Refactorings and Dependency Changes",
              hidden: false,
            },
            {
              type: "ci",
              section: ":repeat: CI",
              hidden: false,
            },
            {
              type: "chore",
              section: ":broom: Chore",
              hidden: false,
            },
          ],
        },
      },
    ],
    [
      "@google/semantic-release-replace-plugin",
      {
        replacements: [
          {
            files: ["package.json"],
            from: "\"version\": \".*\"", // eslint-disable-line
            to: "\"version\": \"${nextRelease.version}\"", // eslint-disable-line
          },
          {
            files: ["app.config.ts"],
            from: "version: \".*\"", // eslint-disable-line
            to: "version: \"${nextRelease.version}\"", // eslint-disable-line
          },
          {
            files: ["app.config.ts"],
            from: "buildNumber: \".*\"", // eslint-disable-line
            to: "buildNumber: \"${nextRelease.version}\"", // eslint-disable-line
          },
          {
            files: ["app.config.ts"],
            from: `versionCode: [^,]*`, // eslint-disable-line
            to: (match) => `versionCode: ${parseInt(match.split(':')[1].trim()) + 1}`, // eslint-disable-line
          },
        ],
      },
    ],
    [
      "@semantic-release/git",
      {
        assets: ["app.config.ts", "package.json", "yarn.lock", "CHANGELOG.md"],
        message:
          "chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}",
      },
    ],
    "@semantic-release/npm",
    "@semantic-release/github",
  ],
};
