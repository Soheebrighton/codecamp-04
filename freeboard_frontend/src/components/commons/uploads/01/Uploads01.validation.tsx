export function checkValidationImage(file: File | undefined) {
  if (!file?.size) {
    alert("파일이 없습니다.");
    return false;
  }

  if (file.size > 5 * 1024 * 1024) {
    return false;
  }

  if (!file?.type.includes("png") && !file.type.includes("jpeg")) {
    alert("파일 확장자가 올바르지 않습니다. (png, jpeg만 가능)");
    return false;
  }

  return file;
}
