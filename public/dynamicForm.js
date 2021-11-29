function add_field()
{ 
  var total_text=document.getElementsByClassName("key");
  total_text=total_text.length+1;

  // p 
  let p = document.createElement("p")
  p.setAttribute("id","input_text"+total_text+"_wrapper")
  
  document.getElementById("field_div").appendChild(p)

  // label
  let l = document.createElement("label")
  l.setAttribute("id","label"+total_text)
  l.innerHTML = "City To Travel To  "

  // key input box
  let keybox = document.createElement("input")
  keybox.setAttribute("class","key")
  keybox.setAttribute("id","key" +total_text)
  keybox.setAttribute("placeholder","City Name")
  keybox.setAttribute("name", "key")
  keybox.required = true

  // value input box
  let longbox = document.createElement("input")
  longbox.setAttribute("type","text")
  longbox.setAttribute("class","longitude")
  longbox.setAttribute("id","longitude" +total_text)
  longbox.setAttribute("placeholder","Longitude")
  longbox.setAttribute("name", "longitude" )
  longbox.required = true

  let latbox = document.createElement("input")
  latbox.setAttribute("type","text")
  latbox.setAttribute("class","latitude")
  latbox.setAttribute("id","latitude" +total_text)
  latbox.setAttribute("placeholder","Latitude")
  latbox.setAttribute("name", "latitude" )
  latbox.required = true

//   let eye = document.createElement("i")
//   eye.setAttribute("class","bi bi-eye-slash")
//   eye.addEventListener('click', function(e){

//     const type = document.getElementById("value"+total_text).getAttribute('type') === 'password' ? 'text' : 'password';
    
//     document.getElementById("value"+total_text).setAttribute('type', type)
//     // toggle the eye / eye slash icon
//     this.classList.toggle('bi-eye')
//   });
  
  // button
  let btn = document.createElement('button')
  btn.setAttribute("input", "button")
  btn.setAttribute("class","removeBtn")
  btn.innerHTML ="Remove"
  btn.setAttribute("onclick","remove_field('input_text"+total_text+"')")

  document.getElementById("input_text"+total_text+"_wrapper").appendChild(l)
  document.getElementById("label"+total_text).appendChild(keybox)
  document.getElementById("label"+total_text).appendChild(longbox)
  document.getElementById("label"+total_text).appendChild(latbox)
  

  document.getElementById("label"+total_text).appendChild(btn)

}

function remove_field(id)
{
  document.getElementById(id+"_wrapper").innerHTML="";
}
