var form=document.getElementById("main-form")
var itemList=document.getElementById('AddedDetails')
form.addEventListener('submit',storeDetails)
itemList.addEventListener('click',removeItem)
itemList.addEventListener('click',editDetails)


function storeDetails(e){
    e.preventDefault();
    //var userid=document.getElementById('userid').value
    
    
    var amount=document.getElementById('amount').value
    var description=document.getElementById('description').value
    var category=document.getElementById('category').value
     
    var li=document.createElement('li')
    li.className="list-group-item";
    //var uchild=document.createTextNode(userid)

    var achild=document.createTextNode(amount)
    var dchild=document.createTextNode("  "+description)
    var cchild=document.createTextNode("   "+category)
  //  li.appendChild(uchild)    
    li.appendChild(achild)
    li.appendChild(dchild)
    li.appendChild(cchild)
    var btnDel=document.createElement('button')
    var btnEdit=document.createElement('button')
    btnDel.className="btn btn-dark btn-sm  float-right delete"
    btnEdit.className="btn btn-primary btn-sm float-right edit"
    var delChild=document.createTextNode('Delete')
    var editChild=document.createTextNode('Edit Details')
    btnDel.appendChild(delChild)
    btnEdit.appendChild(editChild)
    li.appendChild(btnEdit)
    li.appendChild(btnDel)
    itemList.appendChild(li)
    //var userDetails= JSON.parse(localStorage.getItem(userid))
    // if(userDetails==undefined){
    //     itemList.appendChild(li)
    // } 
    // else{
    //     localStorage.removeItem(userid)
    //     itemList.appendChild(li)
    // }
  
   let storage_obj={
   
    amount:amount,
    description:description,
    category:category
   }
   let storageObj_serialized=JSON.stringify(storage_obj)
   
     localStorage.setItem(category,storageObj_serialized)  
   
  


}
function removeItem(e){
    var category=document.getElementById('category').value
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure?')){
            var li=e.target.parentElement;
            itemList.removeChild(li)
        }
        localStorage.removeItem(category)

    }
}
function editDetails(e){
    var category=document.getElementById('category').value;
    if(e.target.classList.contains('edit')){
          var userDetails= JSON.parse(localStorage.getItem(category))
          //POPULATE THE INPUT BOXES        
          //document.getElementById('userid').value=userDetails.userid; 
          document.getElementById('amount').value=userDetails.amount
           document.getElementById('description').value=userDetails.description
            document.getElementById('category').value=userDetails.category                
             var li=e.target.parentElement;
              itemList.removeChild(li)
             localStorage.removeItem(category)
          
      }


  }