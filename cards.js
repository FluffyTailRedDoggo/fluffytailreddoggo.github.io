arr = [
    {
        "title" : "My things",
        "url" : "https://raw.githubusercontent.com/FluffyTailRedDoggo/Art/main/My%20_art_works/nick.jpg" 
    },
    {
        "title" : "Urotori",
        "url" : "https://raw.githubusercontent.com/FluffyTailRedDoggo/Art/main/Nick/urotori%401%20%40urotori/Nick%20chibi.png" 
    }
]

cardInit = function(){
    $.each(arr, function(i) {
        var templateString = '<div class="card mb-2 box-shadow">    <img class="card-img-top" src="'+ arr[i].url +'" alt="Card image cap">      <div class="card-body">  <h5>' + arr[i].title + '</h5> </p></div> </div>';
        $('#card-container').append(templateString);
    })
}