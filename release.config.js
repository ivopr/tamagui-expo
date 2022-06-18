module.exports = {
  branches: ["main"],
  plugins: [
    [
      "@semantic-release/commit-analyzer",
      {
        preset: "angular",
        releaseRules: [
          { type: "docs", release: false },
          { type: "feat", release: "minor" },
          { type: "fix", release: "patch" },
          { type: "chore", release: "patch" },
          { type: "refactor", release: "patch" },
          { type: "ci", release: false },
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
              type: "refactor",
              section: ":zap: Refactorings",
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
        message: "chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}",
      },
    ],
    "@semantic-release/github",
  ],
};