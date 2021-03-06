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

import { DevToolsError } from "@apoorva2405/uxp-devtools-core";

export default class BaseCommand {
    constructor(controller, params) {
        this.params = params;
        this._controller = controller;
    }
    execute() {

    }

    get clientMgr() {
        return this.appController.clientMgr;
    }

    get appController() {
        return this._controller;
    }

    reportSuccess({ message }) {
        UxpAppLogger.log(message);
    }

    reportError({ message }) {
        UxpAppLogger.error(message);
    }

    createError(errorCode, message, details) {
        return new DevToolsError(errorCode, message, details);
    }
}
