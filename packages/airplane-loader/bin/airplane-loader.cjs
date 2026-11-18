#!/usr/bin/env node

const { spawnSync } = require("node:child_process");

if (process.argv[2] !== "init") {
  console.log("Usage: npx @airplane-loader/react init");
  process.exit(process.argv.length > 2 ? 1 : 0);
}

const agent = process.env.npm_config_user_agent || "";
const packageManager = agent.startsWith("pnpm") ? "pnpm" : "npm";
const args = packageManager === "pnpm"
  ? ["add", "@airplane-loader/react"]
  : ["install", "@airplane-loader/react"];
const result = spawnSync(packageManager, args, { stdio: "inherit" });
process.exit(result.status ?? 1);
