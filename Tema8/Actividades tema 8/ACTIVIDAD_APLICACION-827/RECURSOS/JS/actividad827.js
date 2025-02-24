async function openFile() {
  try {
    const [fileHandle] = await window.showOpenFilePicker();

    const file = await fileHandle.getFile();
    const content = await file.text();

    document.getElementById("output").textContent = content;
  } catch (error) {
    console.error("Error al abrir el archivo:", error);
  }
}

document.getElementById("openFile").addEventListener("click", openFile);
