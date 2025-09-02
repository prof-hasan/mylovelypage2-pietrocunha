document.getElementById('calcular').addEventListener('click', function() {
    const peso = parseFloat(document.getElementById('peso').value);
    const reps = parseInt(document.getElementById('reps').value);
    
    const rm = peso * (1 + 0.0333 * reps);
    
    document.getElementById('rm-valor').textContent = Math.round(rm) + ' kg';
});





