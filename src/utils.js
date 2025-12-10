export const esZip = async (filePath) => {
  const stat = await fs.stat(filePath);
  if (!stat.isFile() || path.extname(filePath) != ".zip") {
    return false;
  }
  return true;
};

export const getNombreEstudiante = (fileName) => {
  const splitted = fileName.split(/_\d*?_assignsubmission/gm);
  if (splitted.length === 1) {
    return fileName.split(".zip")[0];
  }
  return splitted[0];
};
