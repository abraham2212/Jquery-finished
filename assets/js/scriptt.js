$(function() {

    let users=[];
    if(localStorage.getItem("users")!=null){

        products=JSON.parse(localStorage.getItem("users"))
    }



    



    $( "button" ).click(function() {

        let userName=$(".name").val()


        let userSurName=$(".surname").val()

        users.push({
            id:userName+new Date().getMilliseconds(),
            name:userName,
            surname:userSurName



        })


         localStorage.setItem("users",JSON.stringify(users))

         for (const item of users){
            $("ul").append('<li class ="list-groups-item">${item.name+item.surname}</li>')


         }
        










      })
        
        
        
        
        
        
        
        
        
        












})