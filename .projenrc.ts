import { Node20TypeScriptProject } from "dkershner6-projen-typescript";
import { TextFile } from "projen";
import { Nvmrc } from "projen-nvm";

const PACKAGE_NAME = "await-wait";

const project = new Node20TypeScriptProject({
    majorVersion: 1,

    defaultReleaseBranch: "main",
    name: PACKAGE_NAME,
    keywords: ["wait", "promise", "await"],
    description:
        "Very simple wait function for async Javascript/TypeScript Promises. Surprisingly, nothing similar existed at time of writing.",
    homepage: `https://github.com/dkershner6/${PACKAGE_NAME}#readme`,
    bugsUrl: `https://github.com/dkershner6/${PACKAGE_NAME}/issues`,
    authorName: "Derek Kershner",
    authorUrl: "https://dkershner.com",
    repository: `git+https://github.com/dkershner6/${PACKAGE_NAME}.git`,
    projenrcTs: true,

    devDeps: ["dkershner6-projen-typescript", "projen-nvm"],

    release: true,
    releaseToNpm: true,
    github: true,

    docgen: true,
});

new Nvmrc(project);

new TextFile(project, ".github/CODEOWNERS", { lines: ["* @dkershner6"] });

project.synth();
