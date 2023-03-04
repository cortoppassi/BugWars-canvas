window.alert('Use as teclas direcionais para controlar o jogo!')
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
let fundo ;
let back ;
let front ;
let direita = ''
let esquerda = ''

function start(e) {  
    back = renderImage("/img/back.png",400,157,50,37.5);
    front = renderImage("/img/front.png",300,150,50,50);

    ctx.globalCompositeOperation = "destination-over";
    ctx.font = "bold 60px serif"
    const titulo = "BugWars"
    ctx.strokeStyle = 'black'
    ctx.strokeText(titulo,255,50)
    ctx.fillStyle = 'Yellow'
    ctx.fillText(titulo,255,50)

    ctx.fillStyle = 'black'
    ctx.font = "bold 30px serif"
    const ecolherClasse = "Escolha sua classe"
    ctx.fillText(ecolherClasse,255,120)

    ctx.fillStyle = 'black'
    ctx.font = "20px serif"
    const stackBack = "Front-End"
    ctx.fillText(stackBack,285,220)
    const stackFront = "Back-End"
    ctx.fillText(stackFront,385,220)
    renderImage("/img/config.png",10,340,40,40);
    renderImage("/img/img.png",0,0,800,400)
};
function renderImage(src,x,y,w,h) {
    const image = new Image();
    image.src = src;
    image.onload = function() {
        ctx.drawImage(image,x,y,w,h);
    }
    return image;
};
document.onkeydown = function(e) {
    switch (e.keyCode) {
        case 39:
            direita++
            classeBack()
            
        break;
        case 37:
            esquerda++
            classeFront()

        break;
    }
};

function classeBack() {
    ctx.clearRect(250,0,400,550)
    // renderImage("/img/img.png",0,0,800,400)
    ctx.fillStyle = 'black'
    ctx.font = "bold 30px serif"
    const escolherGenero = "Escolha seu genero"
    ctx.fillText(escolherGenero,255,120)
    
    back.src = "/img/masculino.png"
    front.src = "/img/feminino.png"

    ctx.fillStyle = 'black'
    ctx.font = "20px serif"
    const feminino = "Feminino"
    ctx.fillText(feminino,285,220)
    const masculino = "Masculino"
    ctx.fillText(masculino,385,220)
    renderImage("/img/config.png",10,340,40,40);
    menubase()
};
function classeFront() {
    ctx.clearRect(250,0,400,300)
    // renderImage("/img/img.png",0,0,800,400)
    ctx.fillStyle = 'black'
    ctx.font = "bold 30px serif"
    const escolherGenero = "Escolha seu genero"
    ctx.fillText(escolherGenero,255,120)
   
    back.src = "/img/masculino.png"
    front.src = "/img/feminino.png"

    ctx.fillStyle = 'black'
    ctx.font = "20px serif"
    const feminino = "Feminino"
    ctx.fillText(feminino,285,220)
    const masculino = "Masculino"
    ctx.fillText(masculino,385,220)
    renderImage("/img/config.png",10,340,40,40)
   menubase()
};
function menubase() {
    if(esquerda == 1 && direita == 1){
        console.log('Front-Masculino')
        const personagem = window.prompt('Qual nome do personagem?')
        ctx.fillStyle = 'black'
        ctx.font = "20px serif"
        
        renderImage("/img/front.png",15,17,40,35)
        renderImage("/img/masculino.png",70,35,25,20)

        ctx.clearRect(0,0,800,400)

        ctx.moveTo(51,60);
        ctx.lineTo(150,60);
        ctx.stroke()

        ctx.moveTo(51,10);
        ctx.lineTo(190,10);
        ctx.stroke()

        ctx.moveTo(65,30);
        ctx.lineTo(170,30);
        ctx.stroke()

        ctx.beginPath();
        ctx.moveTo(190,10);
        ctx.quadraticCurveTo(180, 35, 150, 60);
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(82, 45, 15, 0, 2 * Math.PI);
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(35, 35, 30, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.fillText(personagem,75,27)
        renderImage("/img/img.png",0,0,800,400)
    }
    else if(esquerda == 2){
        console.log('Front-Feminino')
        const personagem = window.prompt('Qual nome do personagem?')
        ctx.fillStyle = 'black'
        ctx.font = "20px serif"
        
        renderImage("/img/front.png",15,17,40,35)
        renderImage("/img/feminino.png",70,35,25,20)

        ctx.clearRect(0,0,800,400)

        ctx.moveTo(51,60);
        ctx.lineTo(150,60);
        ctx.stroke()

        ctx.moveTo(51,10);
        ctx.lineTo(190,10);
        ctx.stroke()

        ctx.moveTo(65,30);
        ctx.lineTo(170,30);
        ctx.stroke()

        ctx.beginPath();
        ctx.moveTo(190,10);
        ctx.quadraticCurveTo(180, 35, 150, 60);
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(82, 45, 15, 0, 2 * Math.PI);
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(35, 35, 30, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.fillText(personagem,75,27)
        renderImage("/img/img.png",0,0,800,400)
    }
    else if(direita == 1 && esquerda == 1){
        console.log('Back-Feminino')
        const personagem = window.prompt('Qual nome do personagem?')
        ctx.fillStyle = 'black'
        ctx.font = "20px serif"
        
        renderImage("/img/back.png",15,17,40,35);
        renderImage("/img/feminino.png",70,35,25,20)

        ctx.clearRect(0,0,800,400)

        ctx.moveTo(51,60);
        ctx.lineTo(150,60);
        ctx.stroke()

        ctx.moveTo(51,10);
        ctx.lineTo(190,10);
        ctx.stroke()

        ctx.moveTo(65,30);
        ctx.lineTo(170,30);
        ctx.stroke()

        ctx.beginPath();
        ctx.moveTo(190,10);
        ctx.quadraticCurveTo(180, 35, 150, 60);
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(82, 45, 15, 0, 2 * Math.PI);
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(35, 35, 30, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.fillText(personagem,75,27)
        renderImage("/img/img.png",0,0,800,400)
    }
    else if(direita == 2){
        console.log('Back-Masculino')
        const personagem = window.prompt('Qual nome do personagem?')
        ctx.fillStyle = 'black'
        ctx.font = "20px serif"
        
        renderImage("/img/back.png",15,17,40,35);
        renderImage("/img/masculino.png",70,35,25,20)

        ctx.clearRect(0,0,800,400)

        ctx.moveTo(51,60);
        ctx.lineTo(150,60);
        ctx.stroke()

        ctx.moveTo(51,10);
        ctx.lineTo(190,10);
        ctx.stroke()

        ctx.moveTo(65,30);
        ctx.lineTo(170,30);
        ctx.stroke()

        ctx.beginPath();
        ctx.moveTo(190,10);
        ctx.quadraticCurveTo(180, 35, 150, 60);
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(82, 45, 15, 0, 2 * Math.PI);
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(35, 35, 30, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.fillText(personagem,75,27)
        renderImage("/img/img.png",0,0,800,400)
    }
}
start();