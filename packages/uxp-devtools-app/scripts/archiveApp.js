/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

const path = require("path");
const { execSync } = require("child_process");
const process = require("process");
const fs = require("fs");

function archiveElectronApp() {
    let uxpDevtoolAppDir =  require.resolve("@apoorva2405/uxp-devtools-app/package.json");
    uxpDevtoolAppDir = path.dirname(uxpDevtoolAppDir);
    process.chdir(uxpDevtoolAppDir);

    execSync('zip dist.zip dist -r && rm -rf dist', {cwd: uxpDevtoolAppDir} ,{ stdio: 'ignore' }, {maxBuffer: 1024 * 1024 * 500} );

    // execSync("zip dist.zip dist -r && rm -rf dist", {
    //     cwd: uxpDevtoolAppDir,
    //     stdio: 'ignore',
    //     // stdio: [ "inherit", "inherit", "inherit" ],
    //     maxBuffer: 1024 * 1024 * 100
    // });

    // if (fs.existsSync(baseFolder)) {
    //     execSync("rm -rf dist", {
    //         cwd: uxpDevtoolAppDir,
    //         stdio: [ "inherit", "inherit", "inherit" ],
    //         maxBuffer: 50 * 1024 * 1024
    //     });
    // }
}

archiveElectronApp();
