$(function() {

    $('#search-button').on('click', function () {
        var search = $('#search-input').val();
        if (search == '') {
            showMessage("Please enter a channel name", 'danger');
            return;
        }
        const url = "http://192.168.1.5:8080/?name=" + search.toLocaleLowerCase();
        $('#search-result').html('');

        showSpinner();
        $.ajax({
            url: url,
            type: 'GET',
            contentType: 'application/json',
        }).done(function (data) {
            showMessage("Search results for <b>" + search + "</b>", 'success');
            hideSpinner();
            $('#search-input').val('');
            showSearchResult(data);
        }).fail(function (res) {
            const responseBody = JSON.parse(res.responseText);
            showMessage(responseBody.message, 'danger');
            hideSpinner();
        });
    });
    
    function showSearchResult(response) {
        for (let i = 0; i < response.length; i++) {
            if (response[i].quality == 'audio_only') { 
                $('#search-result').append(`
                    <a href=${response[i].url} id="search-result-button" class="button btn btn-primary btn-lg btn-block">
                        <div class="d-flex flex-column p-3"><p class="mb-1 font-weight-bold">${response[i].quality}</p>
                        </div>
                    </a>
                `)
            } else {
                $('#search-result').append(`
                    <a href=${response[i].url} id="search-result-button" class="button btn btn-primary btn-lg btn-block">
                        <div class="d-flex flex-column p-3"><p class="mb-1 font-weight-bold">${response[i].quality}</p> <small class="font-weight-light">${response[i].resolution}</small>
                        </div>
                    </a>
                `)
            }
        }
    }

    function showMessage(message, type) {
        $('#search-result').collapse();
        $('#search-result').html('');
        $('#search-result').append(`
            <div class="alert alert-${type}" role="alert">
                ${message}
            </div>
        `);
    }

    function showSpinner() {
        $("#spinner").css("display", "flex");
    }

    function hideSpinner() {
        $("#spinner").css("display", "none");
    }
});