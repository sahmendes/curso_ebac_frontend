$(document).ready(function() {
    // Configurando o evento de submissão do formulário
    $('#task-form').on('submit', function(e) {
        e.preventDefault(); // Prevenir a submissão padrão do formulário

        // Obter o valor do campo de entrada com id 'tarefa'
        const input = $('#tarefa').val().trim();

        // Criar um novo item de lista que será escondido inicialmente
        const novoItem = $('<li>').hide();

        // Adicionar um parágrafo com o texto do input ao novo item
        $('<li>').text(input).appendTo(novoItem);

        // Adicionar o novo item ao fim da lista 'ul'
        novoItem.appendTo('#task-list');

        novoItem.on('click', function() {
            $(this).css('text-decoration', 'line-through');
        });

        // Mostrar o novo item com uma animação de fade
        novoItem.fadeIn(500);

        // Limpar o campo de entrada após adicionar o item
        $('#tarefa').val('').focus();
    });
});
