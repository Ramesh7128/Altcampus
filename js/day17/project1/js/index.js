document.body.onload = function() {
    let newApp = new Trello('AltCampus');
    newApp.renderApp();
    document.getElementById('root').appendChild(newApp.node);
}