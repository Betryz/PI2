<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

$(document).ready(function(){
    $('#calcularPreco').click(function(){
        var precoTotal = 30;
        $('input[type=checkbox]:checked').each(function(){
            precoTotal += parseInt($(this).val());
        });
        $('#precoTotal').text('Preço Total: $' + precoTotal);
    });
    window.location.href = 'pagina_valores.html?preco=' + precoTotal;
});

