# Changelog

## 1.2.0 (2025-08-19)

Full Changelog: [v1.1.0...v1.2.0](https://github.com/DayMoonDevelopment/post-for-me-typescript/compare/v1.1.0...v1.2.0)

### Features

* **api:** api update ([0626dc3](https://github.com/DayMoonDevelopment/post-for-me-typescript/commit/0626dc3391c2a5814df4713b1f1e798ea4aff948))
* **mcp:** parse query string as mcp client options in mcp server ([e61b572](https://github.com/DayMoonDevelopment/post-for-me-typescript/commit/e61b5724fed199ac3b5d852d2ce5644e080c4176))


### Bug Fixes

* **mcp:** generate additionalProperties=true for map schemas to avoid validation issues ([b334997](https://github.com/DayMoonDevelopment/post-for-me-typescript/commit/b334997b63bd2085851a8b918a44e08dcd90043c))


### Chores

* **deps:** update dependency @types/node to v20.17.58 ([9f1fcad](https://github.com/DayMoonDevelopment/post-for-me-typescript/commit/9f1fcadbd23881f1b6ca11c6a75539f960cfb71c))
* **internal:** formatting change ([cf98882](https://github.com/DayMoonDevelopment/post-for-me-typescript/commit/cf9888273b9c5feff1630de44cdd7c81a5ba2183))
* **internal:** refactor array check ([b21b225](https://github.com/DayMoonDevelopment/post-for-me-typescript/commit/b21b225bc9d212ccd6631ff99bc20d844d2e8dfa))
* **mcp:** document remote server in README.md ([4d61875](https://github.com/DayMoonDevelopment/post-for-me-typescript/commit/4d61875571b2d3dd50302521a1f7997664aa2490))
* **mcp:** update README ([dba0c29](https://github.com/DayMoonDevelopment/post-for-me-typescript/commit/dba0c2971111c4e292e87b662e5ce2f57db5b8e9))

## 1.1.0 (2025-08-14)

Full Changelog: [v1.0.1...v1.1.0](https://github.com/DayMoonDevelopment/post-for-me-typescript/compare/v1.0.1...v1.1.0)

### Features

* **api:** update via SDK Studio ([9a6ac75](https://github.com/DayMoonDevelopment/post-for-me-typescript/commit/9a6ac7530afc2854f80a78717cd1dc5f899ce191))

## 1.0.1 (2025-08-14)

Full Changelog: [v1.0.0...v1.0.1](https://github.com/DayMoonDevelopment/post-for-me-typescript/compare/v1.0.0...v1.0.1)

### Chores

* **mcp:** minor cleanup of types and package.json ([d96116f](https://github.com/DayMoonDevelopment/post-for-me-typescript/commit/d96116fdd741d9832eb7ec37c88572dc09e18bd2))

## 1.0.0 (2025-08-13)

Full Changelog: [v0.1.0-alpha.1...v1.0.0](https://github.com/DayMoonDevelopment/post-for-me-typescript/compare/v0.1.0-alpha.1...v1.0.0)

### Chores

* update SDK settings ([5ef669c](https://github.com/DayMoonDevelopment/post-for-me-typescript/commit/5ef669c401b7fb29aae87e0fb944cdf13bccf7b3))

## 0.1.0-alpha.1 (2025-08-13)

Full Changelog: [v0.0.1-alpha.0...v0.1.0-alpha.1](https://github.com/DayMoonDevelopment/post-for-me-typescript/compare/v0.0.1-alpha.0...v0.1.0-alpha.1)

### Features

* **mcp:** add logging when environment variable is set ([fa3729c](https://github.com/DayMoonDevelopment/post-for-me-typescript/commit/fa3729cc7dc412da64ab91400c650fde2029ff77))
* **mcp:** add unix socket option for remote MCP ([ad469be](https://github.com/DayMoonDevelopment/post-for-me-typescript/commit/ad469bed8e16928a828eb71ba7a4f25f85a25964))
* **mcp:** remote server with passthru auth ([4a1e7fa](https://github.com/DayMoonDevelopment/post-for-me-typescript/commit/4a1e7fa1254405fb350e3cc5643d7cad6bf7025c))


### Bug Fixes

* **mcp:** avoid sending `jq_filter` to base API ([2ccea1a](https://github.com/DayMoonDevelopment/post-for-me-typescript/commit/2ccea1a536b05eff112d3c497706b7b5b6f2c5f9))
* **mcp:** fix bug in header handling ([f141333](https://github.com/DayMoonDevelopment/post-for-me-typescript/commit/f14133320050d375f57364c0b5bb6cfacd6bed06))
* **mcp:** fix tool description of jq_filter ([f485355](https://github.com/DayMoonDevelopment/post-for-me-typescript/commit/f4853557d14c308bbaa601eb41be0b9958b39db3))
* **mcp:** reverse validJson capability option and limit scope ([4a94629](https://github.com/DayMoonDevelopment/post-for-me-typescript/commit/4a946292e376954b1ffa7e49ebac76bd1377de11))


### Chores

* configure new SDK language ([31eba50](https://github.com/DayMoonDevelopment/post-for-me-typescript/commit/31eba503379b0175413bfc7508ef48cef614026b))
* **internal:** codegen related update ([42995ab](https://github.com/DayMoonDevelopment/post-for-me-typescript/commit/42995ab9247b644c924a7bb50f1b5c4f85b588e4))
* **internal:** move publish config ([146d645](https://github.com/DayMoonDevelopment/post-for-me-typescript/commit/146d645cfd3ef265d1adcc63486896da68196c3f))
* **internal:** update comment in script ([b70ff74](https://github.com/DayMoonDevelopment/post-for-me-typescript/commit/b70ff74f4651a5c71a2cf74bf9623c0a93aefb39))
* **mcp:** refactor streamable http transport ([a9f6624](https://github.com/DayMoonDevelopment/post-for-me-typescript/commit/a9f662465981111532a99a7bc0054c93b1d543e4))
* remove custom code ([cd30e25](https://github.com/DayMoonDevelopment/post-for-me-typescript/commit/cd30e25f215c93b72f29c2ab053535efed879051))
* update @stainless-api/prism-cli to v5.15.0 ([32be444](https://github.com/DayMoonDevelopment/post-for-me-typescript/commit/32be44479fb81de291c4a2dbc62fc35c64f82bc7))
* update SDK settings ([4d24233](https://github.com/DayMoonDevelopment/post-for-me-typescript/commit/4d242338ca727cb1c7ca888aa2cafc7ee52c65bd))
