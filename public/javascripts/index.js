fake = {};
fake.database= [];
fake.loadAssets = function(){
$.getJSON('https://jsonplaceholder.typicode.com/photos/', function(data){
            fake.database = data;
            fake.init();
        })


};

fake.init =function(){
    fake.generateMarkup();
}
fake.generateMarkup = function (){
    var template ='';
    $.each(fake.database, function (index){
        var db = fake.database;
        var id = db[index];
        console.log(id);

        template +='<div class="col">'

        template += '<div class="left">';

        template += '<img src= "'+ id.thumbnailUrl +'">';

        template += '</div>';

        template += '<div class = "right" >';

        template += '<h4>'+ id.id+ ' ' +id.title+'</h4>';
       

        template +=  '</div>';

        template +=  '</div>';
       
        


        

    });
    $(".content").append(template);

}
fake.loadAssets();