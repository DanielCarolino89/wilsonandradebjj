function updateBeltImage() {
    const belt = document.getElementById("belt").value;
    const beltImage = document.getElementById("beltImage");

    // Mapeia o valor da faixa para o caminho da imagem correspondente
    const beltImages = {
        branca: "img/branca.png",
        branca_1º_Grau: "img/branca1.png",
        branca_2º_Grau: "img/branca2.png",
        branca_3º_Grau: "img/branca3.png",
        branca_4º_Grau: "img/branca4.png",

        cinza_branca:"img/cinza-branca.png",
        cinza_preta:"img/cinza-preta.png",
        cinza: "img/cinza.png",
        cinza_1º_Grau: "img/cinza1.png",
        cinza_2º_Grau: "img/cinza2.png",
        cinza_3º_Grau: "img/cinza3.png",
        cinza_4º_Grau: "img/cinza4.png",

        amarela_branca:"img/amarela-branca.png",
        amarela_preta:"img/amarela-preta.png",
        amarela: "img/amarelo.png",
        amarela_1º_Grau: "img/amarelo.png",
        amarela_2º_Grau: "img/amarelo2.png",
        amarela_3º_Grau: "img/amarelo3.png",
        amarela_4º_Grau: "img/amarelo4.png",

        laranja_branca:"img/laranja-branca.png",
        laranja_preta:"img/laranja-preta.png",
        laranja: "img/laranja.png",
        laranja_1º_Grau: "img/laranja1.png",
        laranja_2º_Grau: "img/laranja2.png",
        laranja_3º_Grau: "img/laranja3.png",
        laranja_4º_Grau: "img/laranja4.png",

        verde_branca:"img/verde-branca.png",
        verde_preta:"img/verde-preta.png",
        verde: "img/verde.png",
        verde_1º_Grau: "img/verde1.png",
        verde_2º_Grau: "img/verde2.png",
        verde_3º_Grau: "img/verde3.png",
        verde_4º_Grau: "img/verde4.png",

        azul: "img/azul.png",
        azul_1º_Grau: "img/azul1.png",
        azul_2º_Grau: "img/azul2.png",
        azul_3º_Grau: "img/azul3.png",
        azul_4º_Grau: "img/azul4.png",

        roxa: "img/roxa.png",
        roxa_1º_Grau: "img/roxa1.png",
        roxa_2º_Grau: "img/roxa2.png",
        roxa_3º_Grau: "img/roxa3.png",
        roxa_4º_Grau: "img/roxa4.png",

        marrom: "img/marrom.png",
        marrom_1º_Grau: "img/marrom1.png",
        marrom_2º_Grau: "img/marrom2.png",
        marrom_3º_Grau: "img/marrom3.png",
        marrom_4º_Grau: "img/marrom4.png",

        preta: "img/preta.png",
        preta_1º_Grau: "img/preta1.png",
        preta_2º_Grau: "img/preta2.png",
        preta_3º_Grau: "img/preta3.png",
        preta_4º_Grau: "img/preta4.png"
    };

    // Atualiza o src da imagem da faixa de acordo com a seleção
    beltImage.src = beltImages[belt];
}

function updateName() {
    // Obtém o nome do formulário
    const name = document.getElementById("name").value;

    // Atualiza o certificado com o nome
    document.getElementById("studentName").innerText = name;
}

function generateDate() {
    // Obtém o dia, mês e ano dos campos do formulário
    const dia = document.getElementById("dia").value;
    const mes = document.getElementById("mes").value;
    const ano = document.getElementById("ano").value;

    // Formata a data no texto desejado
    const texto = `Rio Claro, ${dia} de ${mes} de ${ano}`;

    // Atualiza o texto de data no certificado
    document.getElementById("dateText").innerText = texto;
}

function generateCertificate() {

    // Atualiza o nome, faixa e data no certificado
    updateName();
    updateBeltImage();
    generateDate();

    // Captura a área do certificado
    html2canvas(document.querySelector("#certificate")).then(canvas => {
        const imgData = canvas.toDataURL("image/png");

        // Defina as dimensões do PDF para A4
        const pdf = new jspdf.jsPDF("landscape", "mm", "a4"); // Tamanho A4 em mm

        // Define as dimensões da imagem para caber na página A4
        const pageWidth = pdf.internal.pageSize.getWidth();
        const pageHeight = pdf.internal.pageSize.getHeight();
        const imgWidth = canvas.width;
        const imgHeight = canvas.height;
        
        // Calcular a escala para ajustar a imagem ao tamanho da página
        const ratio = Math.min(pageWidth / imgWidth, pageHeight / imgHeight);
        const imgScaledWidth = imgWidth * ratio;
        const imgScaledHeight = imgHeight * ratio;

        // Adiciona a imagem ao PDF centralizada
        pdf.addImage(imgData, "PNG", (pageWidth - imgScaledWidth) / 2, (pageHeight - imgScaledHeight) / 2, imgScaledWidth, imgScaledHeight);

        // Salva o PDF com o nome do aluno
        pdf.save(`certificado_${name}.pdf`);
    });
}

// Atualiza a imagem da faixa quando a cor é alterada
document.getElementById("belt").addEventListener("change", updateBeltImage);

// Menu Hamburguer
        const toggle = document.getElementById('menu-toggle');
        const menu = document.getElementById('menu');
        const fechar = document.getElementById('menu-fechar');
        
        toggle.addEventListener('click', () => {
            menu.classList.add('menu-aberto');
        });
        
        fechar.addEventListener('click', () => {
            menu.classList.remove('menu-aberto');
        });
