let is_equal = false;

document.addEventListener('DOMContentLoaded', function(){
    document.querySelectorAll("button[class *='btn_']").forEach(element =>{
        element.addEventListener('click',function(element){
            if(is_equal)
            {
                document.querySelector('input').value = "";
                document.querySelector('.gray').textContent = "";
                is_equal = false;
            }
            if(isNaN(parseFloat(document.querySelector('input').value.slice(-1))) == true && document.querySelector('input').value.slice(-1) != '.')
            {
            document.querySelector('.gray').textContent = "";
            }
            document.querySelector('input').value+=element.target.textContent;
            document.querySelector('.gray').textContent+=element.target.textContent;
        })
    });
    

    document.querySelector('.dot').addEventListener('click', function(){
        lastPlus = document.querySelector('input').value.lastIndexOf("+");
        lastMinus = document.querySelector('input').value.lastIndexOf("-");
        lastDivision = document.querySelector('input').value.lastIndexOf("/");
        lastMultiplication = document.querySelector('input').value.lastIndexOf("*");
        lastOperation = Math.max(lastPlus, lastMinus, lastDivision, lastMultiplication);
        if(lastOperation==-1)
        {
            lastOperation=0;
        }
        if(document.querySelector('input').value.slice(lastOperation).includes(".") == false)
        {
            document.querySelector('input').value+= '.';
            document.querySelector('.gray').textContent+='.'
        }
    })


    document.querySelector('.delete').addEventListener('click',function(){
        document.querySelector('input').value = "";
        document.querySelector('.gray').textContent = "";
    })


    document.querySelector('.left').addEventListener('click', function(){
        document.querySelector('input').value = document.querySelector('input').value.slice(0,-1);
        document.querySelector('.gray').textContent=document.querySelector('.gray').textContent.slice(0,-1);
    })


    document.querySelectorAll('.operation').forEach(element =>{
        element.addEventListener('click', function(element){
            if (is_equal){is_equal = false;}
            if(document.querySelector('input').value.length!=0 ){
                if(isNaN(parseFloat(document.querySelector('input').value.slice(-1))) == 1)
                {
                    document.querySelector('input').value = document.querySelector('input').value.slice(0,-1);
                    document.querySelector('.gray').textContent =document.querySelector('.gray').textContent.slice(0,-1);
                }
                document.querySelector('.gray').textContent+=element.target.textContent;
                document.querySelector('input').value+=element.target.textContent;
            }
        });
    })
    

    document.querySelector('.equals').addEventListener('click',function(){
        if(isNaN(parseFloat(document.querySelector('input').value.slice(-1))) == 0)
        {
            document.querySelector('input').value = eval(document.querySelector('input').value);
            document.querySelector('.gray').textContent = document.querySelector('input').value;
            is_equal = true
        }
        
    })
})