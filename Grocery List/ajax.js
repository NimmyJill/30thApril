function ajax(){
    // Creating an XHR Object
    var xhttp= new XMLHttpRequest();
    // EventListener
    xhttp.onreadystatechange= function(){
        // condition
        if(this.readyState==4 && this.status==200)  {
           
            var response=JSON.parse(this.responseText);
            // console.log(response);
            var Jitems= response.items;
            //console.log(Jitems);
            var output="";
            for(var i = 0, len = Jitems.length; i < length; i++) {
                output += '<tr><td>' + Jitems[i].SlNo + '</td>';
                output += '<td>' + Jitems[i].name+ '</td>';
                output += '<td>' + Jitems[i].Quantity + '</td>';
                output +='<td>' + Jitems[i].Unit + '</td>';
                output +='<td>' + Jitems[i].Department+ '</td>';
                output += '<td>' + Jitems[i].Notes+ '</td></tr>';
                $('table tbody').append(output);
               
            }
            console.log(output);
            
    //         var output="";
    //         for(var i=0;i<Jitems.length;i++){
    //            output +="<li>"+ Jitems[i].name + "</li>";
    
    //         }
    document.getElementById("Grocery").innerHTML=output;
    
    
        }
    }
    xhttp.open("GET", "list.json", true);
    xhttp.send();
    }