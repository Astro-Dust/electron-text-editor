const { ipcRenderer } = require('electron');

// ELEMENTOS
const title = document.getElementById('title');
const textarea = document.getElementById('textarea');

// SET FILE
ipcRenderer.on('set-file', function(event, data) {
    title.innerHTML = data.name + ' | Bloco de notas';
    textarea.value = data.content;
})