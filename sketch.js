let m1;
let m2;

function preload() {
    // Carrega os arquivos de música
    m1 = loadSound('assets/music1.mp3');
    m2 = loadSound('assets/music2.mp3');
}

function setup() {
    createCanvas(400, 200);
    background(200);
    
    // Botões para tocar as músicas
    let playButton1 = createButton('Tocar Música 1');
    playButton1.position(10, 10);
    playButton1.mousePressed(() => {
        if (m1.isPlaying()) {
            m1.stop();
        } else {
            m1.play();
        }
    });

    let playButton2 = createButton('Tocar Música 2');
    playButton2.position(10, 40);
    playButton2.mousePressed(() => {
        if (m2.isPlaying()) {
            m2.stop();
        } else {
            m2.play();
        }
    });
}

function draw() {
    // Você pode adicionar visualizações de música aqui
}
function setup() {
    // Cria a tela e centraliza
    let canvas = createCanvas(640, 480);
    canvas.position((windowWidth - width) / 2, (windowHeight - height) / 2);

    // Acessa a webcam
    capture = createCapture(VIDEO);
    capture.size(640, 480);
    capture.hide(); // Oculta o componente extra criado pelo p5.js
}

function draw() {
    background(200);
    image(capture, 0, 0, width, height); // Exibe a imagem da webcam na tela
}