$(function(){
    console.log('DOM');
 
    var url = 'http://localhost:3000';
//     var ul = $('.cars_list');
    
//     //tworzenie funkcji która wstawi do html dane z jsona
//     function insertCars(cars) {
//         ul.empty(); //oczyszczenie wyniku aby sie nie dublowało
//         for(var i=0; i<cars.length; i++) {
 
//             var li = $('<li>');
//             var h3 = $('<h3>');
//             var span = $('<span>');
//             var remove = $('<button class="remove">remove</button>');
//             var modify = $('<button class="modify">modify</button>');
 
//             //nadanie id każdemu rekordowi, potrzebne do usuwania
//             li.attr('data-id', cars[i].id);
//             h3.text(cars[i].brand); //dodanie brandu jako h3
//             span.text(cars[i].name); //dodanie name jako span
           
//             li.append(h3);
//             li.append(span);
//             li.append(remove);//dodanie przycisku remove do kazdego li
//             li.append(modify);
//             ul.append(li); //dodanie całego li jako podpunktu do listy
//         }
//     }
//  //ładowanie danych z pliku json
//     function loadBikes() {
//         var $ajax = $.ajax({
//             url: url + '/cars',
//             method: 'GET', //metoda GET, czyli pobierz
//         });
 
//         $ajax.done(function(response){
//             console.log(response);//sprawdzam w konsoli zawartosc obiektu jsona
//             insertCars(response);
//         });
 
//         $ajax.fail(function(err){
//             console.log(err);
//         })
//     }
 
    function addBike() {
        var brand = $('.get_name');
        var desc = $('.get_descrition');
        var btn = $('#addBike');

        btn.on('click', function(event){
            event.preventDefault();
            //zbieram dane wpisane do inputów
            var nameVal = $('.get_name').val();
            var descVal = $('.get_description').val();
            
            //konstruuje obiekt do wysłania do jsona
            var bike = {
                name: nameVal,
                description: descVal
            }
            //wysyłam metodą ajax
            $.ajax({
                url: url+ '/items',
                method: 'POST', //metoda POST, czyli wyslij do JSONA
                dataType: 'json',
                data: bike, //nazwa tworzonego obiektu
            }).done(function(response) {
                console.log(response);
                loadCars(); //w każdej kolejnej metodzie ajax ładujemy aktualne samochody
            }).fail(function(err){
                console.log(err);
            })          
        })
    }
    
 
    // loadBikes();
    addBike();
   
    
    
})