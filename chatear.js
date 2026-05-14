



// const divChatearCuadro = document.querySelector('.chatear-cuadro')
// console.log(divChatearCuadro)

const amigo = function ( parametro ) {
    if (document.body.querySelector('.div-chat-texto')){
        const a = document.querySelector('.div-chat-texto')
        a.append(parametro)
        console.log(true);
    } else {
        console.log(false);
    }
};

document.querySelectorAll('.li-personas').forEach(li => {
    li.addEventListener('click', async () => {
        const response = await fetch('chat.html');
        const html = await response.text();
        document.querySelector('.chatear-cuadro').innerHTML = html;
        amigo(li)
    });
});



