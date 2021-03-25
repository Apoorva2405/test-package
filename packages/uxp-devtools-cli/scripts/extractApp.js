const path = require("path");
const { execSync } = require("child_process");
const fs = require("fs");

function extractDevtoolsInspectApp() {
  let uxpDevtoolAppDir =  require.resolve("@apoorva2405/udt-app/package.json");
  uxpDevtoolAppDir = path.dirname(uxpDevtoolAppDir);
  const baseZip = path.resolve(uxpDevtoolAppDir, "dist.zip");
  if (!fs.existsSync(path.resolve(uxpDevtoolAppDir,"dist"))) {
    extractZip(baseZip, uxpDevtoolAppDir);
  }
}

function extractZip(zipFile, targetDir) {
  console.log("extracting app contents..");
  execSync(`unzip -a ${zipFile} -d ${targetDir}`);
}

extractDevtoolsInspectApp();