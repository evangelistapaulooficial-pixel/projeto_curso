function validarCamposLogin() {
    if (document.formLogin.email.value == "") {
        alert("prencher o campo E-MAIL!");
        document.formLogin.email.focus();
        return false;
    }
    if (document.formLogin.senha.value == "") {
        alert("preencher o campo SENHA!");
        document.formLogin.senha.focus();
        return false;
    }
}


function validarCamposCadastro() {
    if (document.formCadastro.nome.value == "") {
        alert("preencher o campo NOME!");
        document.formCadastro.nome.focus();
        return false;
    }
    if (document.formCadastro.email.value == "") {
        alert("preencher o campo E-MAIL!");
        document.formCadastro.email.focus();
        return false;
    }
    if (document.formCadastro.data.value == "") {
        alert("preencher o campo DATA DE NASCIMENTO!");
        document.formCadastro.data.focus();
        return false;

    }
    if (document.formCadastro.cpf.value == "") {
        alert("preencher o campo CPF!");
        document.formCadastro.cpf.focus();
        return false;
    }
    if (document.formCadastro.bairro.value == "") {
        alert("preencher o campo BAIRRO!");
        document.formCadastro.bairro.focus();
        return false;
    }
    if (document.formCadastro.rua.value == "") {
        alert("preencher o campo NOME DA RUA!")
        document.formCadastro.rua.focus();
        return false;
    }
    if (document.formCadastro.cep.value == "") {
        alert("preencher o campo CEP!");
        document.formCadastro.cep.focus();
        return false;
    }
    if (document.formCadastro.complemento.value == "") {
        alert("preencher o campo COMPLEMENTO!");
        document.formCadastro.complemento.focus();
        return false;
    }
    if (document.formCadastro.senha.value == "") {
        alert("prencher o campo SENHA!");
        document.formCadastro.senha.focus();
        return false;
    }
    if (document.formCadastro.repsenha.value == "") {
        alert("preencher o campo DIGITE NOVAMENTE SUA SENHA!");
        document.formCadastro.repsenha.focus();
        return false;
    }
}

