import { Node20TypeScriptProject } from "dkershner6-projen";
import { TextFile } from "projen";
import { Nvmrc } from "projen-nvm";

const project = new Node20TypeScriptProject({
    majorVersion: 1,

    defaultReleaseBranch: "main",
    name: "await-wait",
    projenrcTs: true,

    // deps: [],                /* Runtime dependencies of this module. */
    // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
    devDeps: [
        "dkershner6-projen",
        "projen-nvm",
    ] /* Build dependencies for this module. */,
    // packageName: undefined,  /* The "name" in package.json. */

    release: true,
    releaseToNpm: true,
    github: true,
});

new Nvmrc(project);

new TextFile(project, ".github/CODEOWNERS", { lines: ["* @dkershner6"] });

project.synth();
