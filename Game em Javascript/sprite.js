function Sprite(x, y, largura, altura) {
	this.x = x;
	this.y = y;
	this.largura = largura;
	this.altura = altura;
	
	this.desenha = function(xCanvas, yCanvas){
		ctx.drawImage(img, this.x, this.y, this.largura, this.altura, xCanvas, yCanvas, this.largura, this.altura);
	}	
}	

var 
bg1 = new Sprite(3719, 0, 600, 600),
bg2 = new Sprite(655, 0, 600, 600),
bg3 = new Sprite(1269, 0, 600, 600),
bg4 = new Sprite(0, 0, 600, 600),
bg5 = new Sprite(2494, 0, 600, 600),
bg6 = new Sprite(3109, 0, 600, 600),
bg7 = new Sprite(1878, 0, 600, 598),
bg8 = new Sprite(5437, 0, 600, 600),
spriteMarquinhos = new Sprite (685, 631, 48, 47),
estrada = new Sprite (0, 614, 600, 63),
qcomeco = new Sprite(4418,150,99,99),
gover = new Sprite(4418, 297, 454, 276),
venceu = new Sprite(4901, 0, 527, 378),
play = new Sprite (6076,0,341,274),
perdeu = new Sprite (6538,0,262,212)