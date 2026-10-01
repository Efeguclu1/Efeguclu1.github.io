import { execSync } from "node:child_process";

// Date of the commit being built. A push to main deploys within minutes, so
// this is when the live site last changed; re-running a deploy does not reset it.
function lastCommitDate() {
  try {
    const out = execSync("git log -1 --format=%cI", {
      encoding: "utf8",
      stdio: ["ignore", "pipe", "ignore"],
    });
    return new Date(out.trim()).toISOString();
  } catch {
    return new Date().toISOString();
  }
}

export const deployedAt = lastCommitDate();
