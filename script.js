// =============================
// CARTA 3D
// =============================

const carta = document.querySelector(".letter");

if(carta){
    carta.addEventListener("click",()=>{
        carta.classList.toggle("aberta");
    });
}

// =============================
// MODAL SURPRESA
// =============================

const modal = document.getElementById("modal");

function mostrarSurpresa(){
    modal.style.display="flex";
}

function fecharModal(){
    modal.style.display="none";
}

window.addEventListener("click",(e)=>{
    if(e.target===modal){
        fecharModal();
    }
});

// =============================
// CONTADOR
// =============================

// ALTERE A DATA AQUI
const dataInicio = new Date("2025-01-01 00:00:00");

function atualizarContador(){

    const agora = new Date();

    let diferenca = agora - dataInicio;

    let segundos = Math.floor(diferenca/1000);

    let minutos = Math.floor(segundos/60);

    let horas = Math.floor(minutos/60);

    let dias = Math.floor(horas/24);

    let anos = Math.floor(dias/365);

    dias %= 365;
    horas %= 24;
    minutos %= 60;
    segundos %= 60;

    document.getElementById("tempo").innerHTML=
    `
    ❤️ ${anos} anos<br>
    📅 ${dias} dias<br>
    ⏰ ${horas} horas<br>
    ⌛ ${minutos} minutos<br>
    💖 ${segundos} segundos
    `;
}

setInterval(atualizarContador,1000);

atualizarContador();

// =============================
// MÚSICA
// =============================

const musica = document.getElementById("musica");
const botao = document.getElementById("musicButton");

let tocando=false;

botao.onclick=()=>{

    if(tocando){

        musica.pause();

        tocando=false;

        botao.innerHTML='<i class="fa-solid fa-music"></i>';

    }else{

        musica.play();

        tocando=true;

        botao.innerHTML='<i class="fa-solid fa-pause"></i>';

    }
// =============================
// CHUVA DE CORAÇÕES
// =============================

function criarCoracao(){

    const heart=document.createElement("div");

    heart.className="heart";

    const emojis=["❤️","💖","💕","💗","💘"];

    heart.innerHTML=emojis[Math.floor(Math.random()*emojis.length)];

    heart.style.left=Math.random()*100+"vw";

    heart.style.fontSize=(18+Math.random()*30)+"px";

    heart.style.animationDuration=(4+Math.random()*5)+"s";

    document.body.appendChild(heart);

    setTimeout(()=>{
        heart.remove();
    },9000);

}

setInterval(criarCoracao,250);

// =============================
// ESTRELAS BRILHANDO
// =============================

function criarBrilho(){

    const brilho=document.createElement("div");

    brilho.className="sparkle";

    brilho.style.left=Math.random()*100+"vw";

    brilho.style.top=Math.random()*100+"vh";

    brilho.style.animationDuration=(1+Math.random()*3)+"s";

    document.body.appendChild(brilho);

}

for(let i=0;i<80;i++){

    criarBrilho();

}

// =============================
// FLORES DECORATIVAS
// =============================

const flores=["🌻","🌼","🌸","🌹"];

for(let i=0;i<12;i++){

    const flor=document.createElement("div");

    flor.className="flower";

    flor.innerHTML=flores[Math.floor(Math.random()*flores.length)];

    flor.style.left=Math.random()*100+"vw";

    flor.style.top=Math.random()*100+"vh";

    flor.style.animationDelay=(Math.random()*8)+"s";

    document.body.appendChild(flor);

}

// =============================
// EFEITO AO PASSAR O MOUSE
// =============================

document.querySelectorAll("button").forEach(botao=>{

    botao.addEventListener("mousemove",(e)=>{

        const x=e.offsetX;
        const y=e.offsetY;

        botao.style.background=
        `radial-gradient(circle at ${x}px ${y}px,#ff90b0,#ff4d6d)`;

    });

    botao.addEventListener("mouseleave",()=>{

        botao.style.background="#ff4d6d";

    });

});

// =============================
// ANIMAÇÃO DAS IMAGENS
// =============================

const imagens=document.querySelectorAll(".gallery img");

const observer=new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity="1";
            entry.target.style.transform="translateY(0px)";

        }

    });

});

imagens.forEach(img=>{

    img.style.opacity="0";
    img.style.transform="translateY(40px)";
    img.style.transition="1s";

    observer.observe(img);
// =============================
// TELA DE CARREGAMENTO
// =============================

window.addEventListener("load",()=>{

    const tela=document.createElement("div");

    tela.id="loading";

    tela.innerHTML=`
        <h1>❤️ Bem-vinda ❤️</h1>
    `;

    tela.style.position="fixed";
    tela.style.top="0";
    tela.style.left="0";
    tela.style.width="100%";
    tela.style.height="100%";
    tela.style.background="#4d0000";
    tela.style.display="flex";
    tela.style.justifyContent="center";
    tela.style.alignItems="center";
    tela.style.flexDirection="column";
    tela.style.color="white";
    tela.style.fontSize="40px";
    tela.style.zIndex="999999";
    tela.style.transition="1s";

    document.body.appendChild(tela);

    setTimeout(()=>{

        tela.style.opacity="0";

        setTimeout(()=>{

            tela.remove();

        },1000);

    },2200);

});

// =============================
// TEXTO APARECENDO
// =============================

const elementos=document.querySelectorAll("section,.glass");

const aparecer=new IntersectionObserver((itens)=>{

    itens.forEach(item=>{

        if(item.isIntersecting){

            item.target.style.opacity="1";
            item.target.style.transform="translateY(0px)";

        }

    });

});

elementos.forEach(el=>{

    el.style.opacity="0";
    el.style.transform="translateY(60px)";
    el.style.transition="1s";

    aparecer.observe(el);

});

// =============================
// CLIQUE NAS FOTOS
// =============================

document.querySelectorAll(".gallery img").forEach(img=>{

    img.addEventListener("click",()=>{

        const fundo=document.createElement("div");

        fundo.style.position="fixed";
        fundo.style.left="0";
        fundo.style.top="0";
        fundo.style.width="100%";
        fundo.style.height="100%";
        fundo.style.background="rgba(0,0,0,.9)";
        fundo.style.display="flex";
        fundo.style.justifyContent="center";
        fundo.style.alignItems="center";
        fundo.style.zIndex="99999";

        const foto=document.createElement("img");

        foto.src=img.src;
        foto.style.maxWidth="90%";
        foto.style.maxHeight="90%";
        foto.style.borderRadius="20px";

        fundo.appendChild(foto);

        document.body.appendChild(fundo);

        fundo.onclick=()=>{

            fundo.remove();

        };

    });

});

// =============================
// TÍTULO PISCANDO
// =============================

setInterval(()=>{

    document.title =
    document.title=="❤️ Para Meu Amor ❤️"
    ? "💖 Eu Te Amo 💖"
    : "❤️ Para Meu Amor ❤️";

},2000);

// =============================
// MENSAGEM NO CONSOLE
// =============================

console.log("❤️ Feito com muito carinho ❤️");
});
};