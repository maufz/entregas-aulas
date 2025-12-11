import path from "path";
import AdmZip from "adm-zip";
import fs from "fs/promises";
import chalk from "chalk";
import { esZip, getNombreEstudiante } from "./utils";

const descomprimirGrupo = async (grupo) => {
  if (grupo === "una_carpeta_por_grupo.txt") {
    await fs.rm("grupos/una_carpeta_por_grupo.txt");
    return;
  }

  const baseDir = path.join("grupos", grupo);
  const grupoStats = await fs.stat(baseDir);

  if (!grupoStats.isDirectory()) {
    console.warn(chalk.yellow(`[Omitido] Grupo ${grupo}: no es una carpeta`));
    return;
  }

  const zipFiles = await fs.readdir(path.join(baseDir));

  zipFiles.forEach(async (file, index) => {
    const filePath = path.join(baseDir, file);
    const archivoEsZip = await esZip(filePath);
    if (!archivoEsZip) {
      console.warn(chalk.yellow(`[Omitido] ${file}: No es un archivo zip`));
      return;
    }

    try {
      const newDirName = getNombreEstudiante(path.basename(filePath));
      const zip = new AdmZip(filePath);
      zip.extractAllTo(
        /*target path*/ path.join(baseDir, newDirName),
        /*overwrite*/ true,
      );
      await fs.rm(filePath);
      console.log(
        chalk.green(`[Listo] ${path.basename(filePath)} ~> ${newDirName}/`),
      );
    } catch {
      console.warn(`Error: ${filePath}`);
    }
  });
};

const main = async () => {
  const grupos = await fs.readdir("grupos");
  grupos.forEach(descomprimirGrupo);
};
await main();
