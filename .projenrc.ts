import {
    BASE_PROJECT_OPTIONS_NODE_20,
    enactBaseProjectConfig,
} from "dkershner6-projen";
import { TextFile, typescript } from "projen";
import { Nvmrc } from "projen-nvm";

const project = new typescript.TypeScriptProject({
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

    ...BASE_PROJECT_OPTIONS_NODE_20,
    release: true,
    releaseToNpm: true,
    github: true,
});

enactBaseProjectConfig(project);

new Nvmrc(project);

new TextFile(project, ".github/CODEOWNERS", { lines: ["* @dkershner6"] });

project.synth();
