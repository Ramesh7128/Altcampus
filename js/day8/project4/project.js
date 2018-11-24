document.addEventListener('mousemove', function(event) {
    document.getElementById('displayCoordinates').innerHTML = `screenx: ${event.screenX}, screenY: ${event.screenY}`
});