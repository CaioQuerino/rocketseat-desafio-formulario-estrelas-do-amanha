const formatarTelefone = (input) => {
    let tel = input.value.replace(/\D/g, '');

    if (tel.length > 14) tel = tel.slice(0, 14);

    tel = tel.replace(/(\d{2})(\d{5})(\d{4})/, '($1)$2-$3');
    input.value = tel;
}

const validarEmail = (input) => {
    const dominio = '@rocketseat.com.br';
    let valor = input.value;

    valor = valor.replace(/[^a-zA-Z0-9._-]/g, '').trim();

    const emailPattern = /^[a-zA-Z0-9._-]+$/;

    if (emailPattern.test(valor)) {
        input.value = valor + dominio;
    } else {
        input.value = valor;
    }
}

const validateEmail = (input) => {
    const errorContainer = input.nextElementSibling;
    
    if (input.checkValidity()) {
        errorContainer.style.display = 'none';
    } else {
        errorContainer.style.display = 'flex';
    }
}
