import path from "path";

const parsedPath = path.parse("/docs/file.txt");
console.log(path.resolve("/docs", "files.txt"));
console.log(parsedPath);
