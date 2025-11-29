let arr = [];
function addFleet() {
    let vehicle = document.getElementById("vehicle").value
    let driver = document.getElementById("driverName").value
    let available = document.getElementById("available").value;
    let select = document.getElementById("select").value;
    if (vehicle === "" || driver === "" || available === "isAvailable?" || select === "select")
        alert("Enter all details");
    else {
        let obj = {
            vehicle: vehicle,
            cat: select,
            name: driver,
            avail: available
        };
        arr.append(obj)
    }

}