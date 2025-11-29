let arr = [];
function addFleet() {
    let vehicle = document.getElementById("vehicle").value
    let driver = document.getElementById("driverName").value
    let available = document.getElementById("available").value;
    let select = document.getElementById("select").value;
    if (vehicle === "" || driver === "" || available === "isAvailable?" || select === "select")
        alert("Enter all details");
    else {
        // alert("added successfully")
        let obj = {
            vehicle: vehicle,
            cat: select,
            name: driver,
            avail: available
        };
        arr.push(obj)
        add();
    }
}
function add(){
    let box = document.getElementById("main");
    box.innerHTML="";
    for(let i = 0; i < arr.length; i++){
        let card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `<img src = "https://coding-platform.s3.amazonaws.com/dev/lms/tickets/5e80fcb6-3f8e-480c-945b-30a5359eb40e/JNmYjkVr3WOjsrbu.png"/>
        <p>Reg No.of Vehicle: ${arr[i].vehicle}</p>
        <p>Category: ${arr[i].cat}</p>
        <p>Driver Name: ${arr[i].name}
        <p>Is Available: ${arr[i].avail}
        </br>
        <button onclick="updateDriver()">Update Driver</button>
        </br>
        <button onclick="updateAvail(${arr[i].avail}, ${arr[i].name})">update Availability</button>
        </br>
        <button onclick="updateVehicle(${arr[i].name})">Delete Vehicle</button>
        `;
        box.appendChild(card);
    }
    function updateDriver(){
        let newName = prompt("Enetr new Driver Name");
        for(let i = 0; i < arr.length; i++){
            if(arr[i].name === name) arr[i].name = newName
        }
        add();
    }
    function updateAvail(avail, name){
        let avai = "Available";
        if(avail === "Available") avai = "UnAvailable";
        for(let i = 0; i < arr.length; i++){
            if(arr[i].name === name){
                arr[i].avail = avai;
                break;
            }
        }
    }
}