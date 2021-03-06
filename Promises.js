// Estudos sobre promises e suas utilidades no código;

// As promises são utilizadas para preencher trechos assíncronos do código JS

let myPromise = new Promise((resolve, reject) => {
    let result = 10 * 10;

    // alterar para outro resultado e ver a falha no console
    if (result === 100) {
        resolve('Sucesso');
    } else  {
        reject('Falha');
    }
});

// myPromise.then((mensagem) => {
//     console.log('Status da promessa: ' + mensagem);
// }).catch((mensagem) => {
//     console.log('Status da promessa:: ' + mensagem);
// });

const assistirTutorial = () => {
    let saiuDoVideo = false;
    let assistindoMemes = false;

    if(Math.random().toFixed(2) > 0.70) {
        saiuDoVideo = true
    } else if(Math.random().toFixed(2) > 0.50) {
        assistindoMemes = true
    } else {
        [saiuDoVideo, assistindoMemes] = [false, false];
    }
    console.log(saiuDoVideo, assistindoMemes);
    return new Promise((resolve, reject) => {
        if (saiuDoVideo) {
            reject({
                status: 'Usuario ausente',
                mensagem: 'Que pena :(',
            });
        } else if (assistindoMemes) {
            reject({
                status: 'Usuario vendo memes',
                mensagem: 'Pelo visto, memes são mais importantes que tutoriais :/'
            });
        } else if (saiuDoVideo && assistindoMemes) {
            reject({
                status: 'Usuario fora vendo memes',
                mensagem: 'Pior dos mundos'
            });
        } else {
            resolve('Aproveite o tutorial e aprenda muito!!!');
        }
    });
}

const resultadoPromise = assistirTutorial();

resultadoPromise.then((alerta) => {
    console.log(alerta);
}).catch((alerta) => {
    console.log(alerta.status + '\n' + alerta.mensagem);
})
