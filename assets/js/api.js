document.querySelector('#btn').addEventListener('click',function(){
const fetched=fetch('https://64747a697de100807b1b0545.mockapi.io/product',{
    method: "POST", // *GET, POST, PUT, DELETE, etc.
   
   
    headers: {
      "Content-Type": "application/json",
     
    },
   
    body: JSON.stringify({
        img:document.querySelector('#img').value ,
        tittle:document.querySelector('#tittle').value ,
        calendar:document.querySelector('#calendar').value ,
        hour:document.querySelector('#hour').value ,
        tittle1:document.querySelector('#tittle1').value ,
        word:document.querySelector('#word').value ,


        

    }), 
  })
fetched.then(res=>{
    (res.ok==true)
    {
document.querySelector('#img').value ='',
document.querySelector('#tittle').value ='',
document.querySelector('#calendar').value ='',
document.querySelector('#hour').value ='',
document.querySelector('#tittle1').value ='',
document.querySelector('#word').value =''
    }

}).catch(err=>console.log(err))
})