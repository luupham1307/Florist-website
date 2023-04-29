export function generateFilePath(fname) {
    const [name, ext] = fname.split(".");
    const fileName = name + "_" + crypto.randomUUID() + "." + ext;
    return fileName;
}