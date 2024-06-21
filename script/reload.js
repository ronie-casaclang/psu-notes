//Reload
window.addEventListener('beforeunload', (event) => {
    event.preventDefault();
    event.returnValue = '';
});
