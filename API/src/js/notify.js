function getNotifyPermission(){
    if( !("Notification" in window)) {
        console.log('Navegador não suporta notificações');
    } 
    else if ( Notification.permission === "granted") {
        const notify = new Notification('Olá, bem vindo(a) de volta!');
    } 
    else if ( Notification.permission !== "denied") {
        Notification.requestPermission( function(permission){
            if(permission === "granted"){
                const notify = new Notification('Agora você ficará por dentro de todas as nossas atualizações ;)');
            }
        })
    }
}

const notifyButton = document.querySelector('.infoBlock__notification');

notifyButton.addEventListener('click', (e) => {
    getNotifyPermission();
});