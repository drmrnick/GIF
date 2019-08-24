
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