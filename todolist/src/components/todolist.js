import React,{useState,useEffect} from 'react'
// get the local storage data back 
const getlocaldata=()=>{
const list=localStorage.getItem("mytodolist")

if(list){
  return JSON.parse(list);
}
else{
  return [];
}
};
export const Todolist = () => {
  const [inputdata,setinputdata]=useState("");
  const [items,setitems]=useState(getlocaldata());
  const[isedit,setisedite]=useState();
  const[togglebutton,settogglebutton]=useState(false);
    // to add the items in the list 
const addItems=()=>{
if(!inputdata){
  alert("plz enter valid input ");
}
else if(inputdata&&togglebutton){
 setitems(
  items.map((currelem)=>{
    if(currelem.id===isedit){
      return{...currelem,name:inputdata}
    }
    return currelem;
  })
 )
 setisedite("");
  setinputdata([]);
  settogglebutton(false);
}
else{
  const myNewInput={
    id:new Date().getTime().toString(),
    name:inputdata,
  };
  setitems([...items,myNewInput])
  setinputdata("")
}
};
// to delete the item from the list 
const deleteItems=(index)=>{
const updated=items.filter((currelem)=>{
return currelem.id !== index;
});
setitems(updated);
}
// to remove all the items from the list 
const remove=()=>{
  setitems([]);
}
//to store the data in the local storage 
 useEffect(()=>{
  localStorage.setItem("mytodolist",JSON.stringify(items))
 },[items]);

 const edititems=(index)=>{
  const item_todo_edited=items.find((currelem)=>{
    return currelem.id===index;
  })
  setisedite(index);
  setinputdata(item_todo_edited.name);
  settogglebutton(true);
 }
 

  return (
    <>
   
    <div className="main-div">
        <div className="child-div">
            <figure>
                <img src="./image/todo.svg" alt="todologo" />
                <figcaption>Add your list here</figcaption>
            </figure>
            <div className="addItems">
              <input type="text" placeholder="✍️ add Items" className="form-control" value={inputdata} onChange={(event)=>(setinputdata(event.target.value))}/>
              {togglebutton?
              (<i className="far fa-edit add-btn " onClick={addItems}></i>):
              (<i className="fa fa-plus add-btn " onClick={addItems}></i>)
              }
            </div>
            {/* show our Items  */}
        
            <div className="showItems">
              {items.map((currelem)=>{
                return(
                  <div className="eachItem" key={currelem.id}>
               <h3>{currelem.name}</h3>
               <div className="todo-btn">
               <i className="far fa-edit add-btn" onClick={()=>edititems(currelem.id)}></i>
               <i className="far fa-trash-alt add-btn" onClick={() => deleteItems(currelem.id)}></i>
               </div>
             </div>
              )}
                )}
               
              
            </div>

          <div className='showItems'>
            <button className='btn effect04' data-sm-link-text="Remove All" onClick={()=>{remove()}}><span>CHECK LIST</span></button>
            </div>
            </div>
        </div>
    
     
    </>
  )
}
