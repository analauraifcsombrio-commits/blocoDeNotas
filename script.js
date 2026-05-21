// Espera o conteúdo da página carregar completamente antes de executar o script.
// É uma boa prática para evitar erros de JavaScript tentando acessar elementos
// que ainda não existem na página.
document.addEventListener('DOMContentLoaded', () => {

    // 1. SELECIONANDO O ELEMENTO
    // ----------------------------
    // Primeiro, precisamos de uma referência ao nosso elemento <textarea>.
    // Usamos 'document.getElementById' para pegar o elemento pelo 'id' que definimos no HTML.
    const blocoDeNotas = document.getElementById('blocoDeNotas');

    // 2. CARREGANDO DADOS DO LOCALSTORAGE
    // ------------------------------------
    // O 'localStorage' é um recurso do navegador que permite salvar informações
    // que persistem mesmo depois que o navegador é fechado.
    // Usamos 'localStorage.getItem()' para buscar um item salvo.
    // Aqui, estamos procurando por um item que salvamos com a chave 'minhaNota'.
    const notaSalva = localStorage.getItem('minhaNota');

    if (notaSalva) {
        blocoDeNotas.value = notaSalva;
    }

    const saveBtn = document.getElementById('saveBtn');
    const deleteBtn = document.getElementById('deleteBtn');

    // Salva a nota no localStorage quando o usuário clicar em 'Salvar'
    saveBtn.addEventListener('click', () => {
        localStorage.setItem('minhaNota', blocoDeNotas.value);
        // feedback simples ao usuário
        saveBtn.textContent = 'Salvo';
        setTimeout(() => { saveBtn.textContent = 'Salvar'; }, 1200);
    });

    // Limpa o conteúdo com confirmação quando o usuário clicar em 'Deletar'
    deleteBtn.addEventListener('click', () => {
        const confirmDelete = confirm('Tem certeza que deseja apagar o conteúdo?');
        if (confirmDelete) {
            blocoDeNotas.value = '';
            localStorage.removeItem('minhaNota');
        }
    });

});