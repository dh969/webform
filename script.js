const todolist=[];
const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault(); 
  
});
function validation(){
    const name=document.querySelector("#name1").value;
    const email=document.querySelector('#email').value;
    const web=document.querySelector('#web').value;
    const imglink=document.querySelector('#imglink').value;
    const male=document.querySelector('#male').checked;
    const female=document.querySelector('#female').checked;
    const java=document.querySelector('#java').checked;
    const html=document.querySelector('#html').checked;
    const css=document.querySelector('#css').checked;
    if(name.trim()===""||email.trim()===""||web.trim()===""||imglink.trim()===""||(male===false&&female==false)||(!java&&!html&&!css)){
        document.getElementById('error').innerHTML='Please Enter all the details.';
        document.getElementById('error').style.display='block';
        setTimeout(function(){
            document.getElementById('error').style.display='none'
           },2000);
        return false;
    }
    else{
        document.getElementById('error').style.display='none';
        let regex=/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
        var expression =
        /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
            var regex1 = new RegExp(expression);
        if(!email.match(regex)){
            document.getElementById('error').innerHTML='Please Enter valid email.';
        document.getElementById('error').style.display='block';
        setTimeout(function(){
            document.getElementById('error').style.display='none'
           },2000);
        return false;
        }
        if(name.length<5){
            document.getElementById('error').innerHTML='Please Enter full name.';
            document.getElementById('error').style.display='block';
            setTimeout(function(){
                document.getElementById('error').style.display='none'
               },2000);
            return false;

        }
        if(!web.match(regex1)){
            document.getElementById('error').innerHTML='Please Enter valid website url.';
            document.getElementById('error').style.display='block';
            setTimeout(function(){
                document.getElementById('error').style.display='none'
               },2000);
            return false;
        }
    
  

        return true;
        
    }

}
function del(){
   if(todolist.length==0){
    document.getElementById('error').innerHTML='List is already empty.';
    document.getElementById('error').style.display='block';
    setTimeout(function(){
        document.getElementById('error').style.display='none'
       },2000);
   }
  
   todolist.splice(todolist.length-1,1);
   rendertodo(); 
}
function rendertodo()
{
let todohtml='';
todolist.forEach(function(val){
    const name=val.name;
    const email=val.email;
    const web=val.web;
    const imglink=val.imglink;
    const gender=val.gender;
    const skill=val.skill;
    const html=`
    <div class='innercard'>
    <div class ='information'>
    <p class='user-name'> ${name}</p>
    <p> ${gender}</p>
    <p> ${email}</p>
    <p> <a href="${web}" target="_blank">${web}</a></p>
    <p> ${skill}</p>
    </div>
    <div class='img1'><img class="image" src="${imglink}" ></div>
    </div>`;
    todohtml+=html;
});
document.querySelector('.cards').innerHTML=todohtml;
}
function addtodo(){
    const name=document.querySelector("#name1").value;
    const email=document.querySelector('#email').value;
    const web=document.querySelector('#web').value;
    const imglink=document.querySelector('#imglink').value;
    const male=document.querySelector('#male').checked;
    const female=document.querySelector('#female').checked;
    const java=document.querySelector('#java').checked;
    const html=document.querySelector('#html').checked;
    const css=document.querySelector('#css').checked;
    let gender;
    if(male){
        gender='Male';
    }
    else if(female){
        gender='Female';
    }
    let skill=[];
    if(java)
    skill.push('Java');
    if(html)
    skill.push('HTML');
    if(css)
    skill.push('CSS');
    todolist.push({name:name,email:email,web:web,
    imglink:imglink,gender:gender,skill:skill});
    console.log(todolist);
    let enrollform=document.getElementById("enroll-form");
    enrollform.reset();
    rendertodo();
   
}