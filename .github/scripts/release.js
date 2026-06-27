// Release tagging logic, invoked by .github/workflows/release.yml via
// actions/github-script. Reads the version from package.json and, if no
// matching tag exists yet, creates a `v<version>` git tag and a GitHub Release
// with auto-generated notes. Idempotent: a no-op when the tag already exists.
//
// Exposed as a github-script module: receives the injected { github, context,
// core } and is awaited by the workflow step.
module.exports = async ({ github, context, core }) => {
  const { version } = require(`${process.env.GITHUB_WORKSPACE}/package.json`);
  const tag = `v${version}`;
  const { owner, repo } = context.repo;

  // Idempotent: skip if this version was already released.
  try {
    await github.rest.git.getRef({ owner, repo, ref: `tags/${tag}` });
    core.notice(`Tag ${tag} already exists — nothing to release.`);
    return;
  } catch (err) {
    if (err.status !== 404) throw err;
  }

  // createRelease creates both the git tag (at this commit) and the Release.
  await github.rest.repos.createRelease({
    owner,
    repo,
    tag_name: tag,
    name: tag,
    target_commitish: context.sha,
    generate_release_notes: true,
  });
  core.notice(`Created release ${tag}.`);
};
