
$(function(){
    onbuttonclick('new animal','#buttonarea');
})


var animalarray = ['dog', 'Lizard', 'dragons'];

function addanimalstolist(animalarray,classtoadd,newanimals){
    $(newanimals).empty();
    for(var i=0;i<animalarray.length;i++){
        var a = $('<button>');
        a.addclass(classtoadd);
        a.attr('data-type',animalarray);
        a.text(animalarray[i]);
        $(newanimals).append(a);

    }
}

$(Document).on('click','searchButton',function(){
    var type = $(this).data('type');
    GiphyUISDK.configure(apiKey: "s24XBCMj8DNq5COlFa7Kossj8ZzC7U1D");
    $.ajax({url:queryURL,method:"Get"})
    .done(function(response){
        for(var i=0;i<response.data.length;i++){
            var searchButton = $('<div class="search-item">');
            var rating = response.data[i].rating;
            var s = $('<p>').text('Rating', +rating);
            var animated = response.data[i].images.fixed_height.utl;
            var still = response.data[i].images.fixed_height_still.url;
            searchDiv.append(p);
            searchDiv.append(image);
            $('searches').append(search)

        }
    })
})
