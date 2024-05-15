

function getUsers(){
    let t=document.getElementById("table");
    let tr=document.createElement("tr");
    tr.innerHTML=`<th>Id</th>
    <th>Name</th>
    <th>Branch</th>
    <th>Action</th>`
    t.appendChild(tr);
    axios.get("http://localhost:3000/user").then((res)=>{
        let arr=res.data
        arr.forEach(d => {
            let tr=document.createElement("tr");
            tr.innerHTML=`<td>${d.id}</td>
            <td>${d.name}</td>
            <td>${d.branch}</td>
            <td><button onclick=deleteUser(${d.id})><i class="fa-solid fa-trash"></i></button>
                <button onclick=editUser(${d.id})><i class="fa-solid fa-pen-to-square"></i></button>
            `
            t.appendChild(tr);
        });
    })
}


function addUser(){
    
        let id=document.getElementById("id").value
        let name=document.getElementById("name").value
        let branch=document.getElementById("branch").value
        deleteUser(id);
        axios.post("http://localhost:3000/user",{id,name,branch}).then((res)=>{
        window.location.reload();
    })
    
        
}
function deleteUser(id){
    axios.delete(`http://localhost:3000/user/${id}`).then((res)=>{
        window.location.reload();
    })
}
function editUser(d){
    axios.get("http://localhost:3000/user").then((res)=>{
        let user=res.data;
        user.forEach((u)=>{
        if(u.id==d){
        let i=document.getElementById("id")
        let name=document.getElementById("name")
        let branch=document.getElementById("branch")
        i.value=u.id;
        name.value=u.name;
        branch.value=u.branch;
        
        }
     } )
})
}