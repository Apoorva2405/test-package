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

import BaseCommand from "./BaseCommand";

export default class UnloadPluginCommand extends BaseCommand {

    async execute() {
        const plugin = this.params.plugin;
        const client = this.clientMgr;
        const commandProm = client.unloadPlugin(plugin);
        return commandProm.then(() => {
            UxpAppLogger.verbose("Unloaded plugin successfully.");
            plugin.setServiceSession(null);
        }).catch((err) => {
            const msg = "Failed to unload plugin.";
            const error = this.createError(null, err, msg);
            throw error;
        });
    }
}
