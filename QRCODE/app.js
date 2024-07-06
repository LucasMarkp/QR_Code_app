const container = document.querySelector(".container");
const qrCodeBtn = document.querySelector("#qr_form button");

const qrCodeInput = document.querySelector("#qr_form input");

const qrCodeImg = document.querySelector("#qr_code img")


//gerador de QRcode
function generateQrCode(){

    const qrCodeInputValue  = qrCodeInput.value;
    
        if(!qrCodeInputValue) return;

    qrCodeBtn.innerText = "Gerado Código...";
//Link da API que gera QRCODE
    qrCodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrCodeInputValue}`;
//Load para atualizar o QR code assim que muda oque foi escrito dentro dele 
    qrCodeImg.addEventListener("load",() => {
        container.classList.add("active");
        qrCodeBtn.innerText = "Pronto";
    });
}


//envents
//envento para acionar o click
qrCodeBtn.addEventListener("click", () => {
    generateQrCode();
});

//evento para o Enter do teclado
qrCodeBtn.addEventListener("keydown", (e) => {
    if(e.code === "Enter"){
        generateQrCode();
    }
});


//limpa area do QR Code 

qrCodeInput.addEventListener("keyup", () => {
    if (!qrCodeInput.value){
        container.classList.remove("active");
        qrCodeBtn.innerText = "Gerar QR Code";
    }
});