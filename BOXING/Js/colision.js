var Player = class {
    constructor(){
        this.canvas = document.createElement("canvas");
        document.body.appendChild(this.canvas);

    }  

    inicio(){      
        this.x = window.screen.width/2 - 500;
        this.y = 0;
        console.log(this.x)

        this.canvas.width = 1000;
        this.canvas.height = 664;

        this.canvas.style.position = "absolute";
        this.canvas.style.top = this.y + "px";
        this.canvas.style.left = this.x + "px";

        this.ctx = this.canvas.getContext("2d");

        return this;
    }

    drawPlayer(){
        var ctx1 = this.ctx;
        console.log(ctx1)
        var jugador = [];

        jugador.push({
            x:350,y:300,
            width:50, height:50,
            color: '#0f0' //verde
        });
        
        jugador.push({
            x:600,y:300,
            width:50, height:50,
            color: '#f00' //rojo
        });

        function actualizar(){
        
            ctx1.clearRect(0, 0, 750, 582);
            var ringDimensions = 500;
            var poleDistance = 60;
            var ringX = 1000/2 - ringDimensions/2;
            var ringY = 664/2 - ringDimensions/2;
            console.log(ringX)
            console.log(ringY)

            ctx1.fillStyle = "#2029a5";
            ctx1.fillRect(ringX, ringY, ringDimensions, ringDimensions);
            ctx1.beginPath();
            ctx1.moveTo(ringX, ringY);
            ctx1.lineTo(ringX-poleDistance, 20);
            ctx1.moveTo(ringX + ringDimensions, ringY); //derecha del ring
            ctx1.lineTo(ringX + ringDimensions + poleDistance, 20);
            ctx1.moveTo(ringX, ringY + ringDimensions);
            ctx1.lineTo(ringX - poleDistance, 664 - 20);
            ctx1.moveTo(ringX + ringDimensions, ringY + ringDimensions);
            ctx1.lineTo(ringX + ringDimensions + poleDistance, 664 - 20);
            ctx1.closePath();


            for(var i=0;i<jugador.length;i++){

                if(jugador[i].y < 82){ //colision arriba
                    jugador[i].y = 82;
                }
                else if(jugador[i].x < 250){  //colision izquierda
                    jugador[i].x = 250;
                }
                else if(jugador[i].y + jugador[i].height > 582){ //colision abajo
                    jugador[i].y = 582 - jugador[i].height;
                }
                else if(jugador[i].x + jugador[i].width > 750){   //colision derecha
                    jugador[i].x = 750 - jugador[i].width;
                }

                if(jugador[0].x + jugador[0].width > jugador[1].x && 
                    jugador[0].x < jugador[1].x + jugador[1].width &&
                    jugador[0].y < jugador[1].y + jugador[1].height&&
                    jugador[0].y + jugador[0].height > jugador[1].y
                ){
                    alert("colision");
                }

                ctx1.fillStyle = jugador[i].color;
                ctx1.fillRect(jugador[i].x, jugador[i].y, jugador[i].width,
                    jugador[i].height);
            }
        }

        actualizar();

        var velocidad = 50;

        //Movimiento jugador 1

        document.addEventListener("keydown", function(e1){
            if (e1.keyCode == "68"){
                moverderecha1();
            }

            if (e1.keyCode == "65"){
                moverizquierda1();
            }

            if(e1.keyCode == "87"){
                moverarriba1();
            }

            if(e1.keyCode == "83"){
                moverabajo1();
            }
        })

        function moverderecha1(){
            jugador[0].x += velocidad;
            actualizar();
        }

        function moverizquierda1(){
            jugador[0].x -= velocidad;
            actualizar();
        }

        function moverarriba1(){
            jugador[0].y -= velocidad;
            actualizar();
        }

        function moverabajo1(){
            jugador[0].y += velocidad;
            actualizar();
        }

        //Movimiento jugador 2

        document.addEventListener("keydown", function(e2){
            if (e2.keyCode == "39"){
                moverderecha2();
            }

            if (e2.keyCode == "37"){
                moverizquierda2();
            }

            if(e2.keyCode == "38"){
                moverarriba2();
            }

            if(e2.keyCode == "40"){
                moverabajo2();
            }
        })

        function moverderecha2(){
            jugador[1].x += velocidad;
            actualizar();
        }

        function moverizquierda2(){
            jugador[1].x -= velocidad;
            actualizar();
        }

        function moverarriba2(){
            jugador[1].y -= velocidad;
            actualizar();
        }

        function moverabajo2(){
            jugador[1].y += velocidad;
            actualizar();
        }
    }
}

var col = new Player();