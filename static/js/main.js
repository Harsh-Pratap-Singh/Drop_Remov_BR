let dropZone = document.getElementById("dropZone");
let fileInput = document.getElementById("fileInput");
let uploadForm = document.getElementById("uploadForm");

dropZone.addEventListener("click", function () {
  fileInput.click();
});

fileInput.addEventListener("change", function () {
  if (fileInput.files.length > 0) {
    uploadForm.submit();
  }
});

dropZone.addEventListener("dragover", function (e) {
  this.classList.add("dragover");
});

dropZone.addEventListener("dragleave", function (e) {
  this.classList.remove("dragover");
});

dropZone.addEventListener("drop", function (e) {
  e.preventDefault();
  e.stopPropagation();
  this.classList.remove("dragover");

  let file = e.dataTransfer.files[0];
  fileInput.files = e.dataTransfer.files;
  uploadForm.submit();
});

document.getElementById('fileInput').addEventListener('change', function (event) {
  const preview = document.getElementById('preview');
  preview.innerHTML = '';
  const file = event.target.files[0];
  
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      const img = document.createElement('img');
      img.src = e.target.result;
      preview.appendChild(img);
    };
    reader.readAsDataURL(file);
  }
});
