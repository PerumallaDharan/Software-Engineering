// script.js
document.getElementById('btn-build').addEventListener('click', function() {
    // Logic for building the code (if necessary)
    document.getElementById('output').innerText = 'Building...';
});

document.getElementById('btn-run').addEventListener('click', function() {
    // Logic for running the code
    var code = document.getElementById('code-editor').value;
    // Example: Display output in the output section
    document.getElementById('output').innerText = 'Running...\n' + code;
});
