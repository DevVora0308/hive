async function displayCustomersTable() { //displayTable(type) {
    // console.log("Type: "+type);
    // var validType= false;
    // validType = await ['Customers' ,'Employees', 'History'].includes(type);
    // console.log("Status: "+validType);
    // if(validType)
    // {
    var searchId = document.getElementById("searchId").value;
    console.log("SearchID: " + searchId);
    searchId = searchId.toUpperCase();
    var person = []
    person = await getUserData(searchId, "Customers");
    console.log("In displayTable");
    console.log("person = " + person);
    if (person.length > 0) {
        var tableArea = document.getElementById('dataTable');
        console.log("FirstChild: " + tableArea.firstChild);
        // var tableArea = document.createElement('div');
        tableArea.setAttribute("class", "table");
        tableArea.firstChild != null ? tableArea.removeChild(tableArea.firstChild) : null;
        // tableArea.setAttribute("id", "dataTable");
        // tableArea.remove();
        var table = document.createElement('table');
        var th = document.createElement('tr');
        var thSrNo = document.createElement('th');
        var thCustomerId = document.createElement('th');
        var thName = document.createElement('th');
        var thEmailId = document.createElement('th');
        var thAge = document.createElement('th');
        var thGender = document.createElement('th');
        var thMobileNo = document.createElement('th');

        var srNoTh = document.createTextNode("Sr. No.");
        var customerIdTh = document.createTextNode("Customer Id.");
        var nameTh = document.createTextNode("Name");
        var emailIdTh = document.createTextNode("Email Id.");
        var ageTh = document.createTextNode("Age");
        var genderTh = document.createTextNode("Gender");
        var mobileNoTh = document.createTextNode("Mobile No.");

        thSrNo.appendChild(srNoTh);
        thCustomerId.appendChild(customerIdTh);
        thName.appendChild(nameTh);
        thEmailId.appendChild(emailIdTh);
        thAge.appendChild(ageTh);
        thGender.appendChild(genderTh);
        thMobileNo.appendChild(mobileNoTh);

        th.appendChild(thSrNo);
        th.appendChild(thCustomerId);
        th.appendChild(thName);
        th.appendChild(thEmailId);
        th.appendChild(thAge);
        th.appendChild(thGender);
        th.appendChild(thMobileNo);

        table.appendChild(th);
        for (var i = 0; i < person.length; i++) {
            var tr = document.createElement('tr');
            var tdSrNo = document.createElement('td');
            var tdCustomerId = document.createElement('td');
            var tdName = document.createElement('td');
            var tdEmailId = document.createElement('td');
            var tdAge = document.createElement('td');
            var tdGender = document.createElement('td');
            var tdMobileNo = document.createElement('td');
            // <th>Sr.No.</th>
            // <th>Customer Id.</th>
            // <th>Name/th>
            // <th>Email Id</th>
            // <th>Age</th>
            // <th>Gender</th>
            // <th>Mobile No.</th>
            // <th>Home Address</th>
            var srNo = document.createTextNode(i + 1);
            var customerId = document.createTextNode(person[i]["customerId"]);
            var name = document.createTextNode(person[i]["fullName"]);
            var emailId = document.createTextNode(person[i]["emailId"]);
            var age = document.createTextNode(person[i]["age"]);
            var gender = document.createTextNode(person[i]["gender"]);
            var mobileNo = document.createTextNode(person[i]["mobileNo"]);

            tdSrNo.appendChild(srNo);
            tdCustomerId.appendChild(customerId);
            tdName.appendChild(name);
            tdEmailId.appendChild(emailId);
            tdAge.appendChild(age);
            tdGender.appendChild(gender);
            tdMobileNo.appendChild(mobileNo);

            tr.appendChild(tdSrNo);
            tr.appendChild(tdCustomerId);
            tr.appendChild(tdName);
            tr.appendChild(tdEmailId);
            tr.appendChild(tdAge);
            tr.appendChild(tdGender);
            tr.appendChild(tdMobileNo);

            table.appendChild(tr);
        }
        tableArea.appendChild(table);
        console.log(tableArea);
    }
    else {
        console.log("In Display Else");
        document.getElementById("dataTable").innerHTML = "No Records";
        document.getElementById("dataTable").setAttribute("class", "error");
        document.getElementById("dataTable").style.display = "block";
    }

    document.getElementById("dataTable").style.display = "block";
    // document.getElementById("idForm").style.display = "none";
    console.log("Out displayTable");
    // }
    // else
    // {
    //     document.getElementById("dataTable").innerHTML = "Error: RELOAD PAGE";
    //     document.getElementById("dataTable").setAttribute("class", "error");
    //     document.getElementById("dataTable").style.display = "block";
    // }
}

async function displayEmployeesTable() { //displayTable(type) {
    // console.log("Type: "+type);
    // var validType= false;
    // validType = await ['Customers' ,'Employees', 'History'].includes(type);
    // console.log("Status: "+validType);
    // if(validType)
    // {
    var searchId = document.getElementById("searchId").value;
    console.log("SearchID: " + searchId);
    searchId = searchId.toUpperCase();
    var person = []
    person = await getUserData(searchId, "Employees");
    console.log("In displayTable");
    console.log("person = " + person);
    if (person.length > 0) {
        var tableArea = document.getElementById('dataTable');
        console.log("FirstChild: " + tableArea.firstChild);
        // var tableArea = document.createElement('div');
        tableArea.setAttribute("class", "table");
        tableArea.firstChild != null ? tableArea.removeChild(tableArea.firstChild) : null;
        // tableArea.setAttribute("id", "dataTable");
        // tableArea.remove();
        var table = document.createElement('table');
        var th = document.createElement('tr');

        var thSrNo = document.createElement('th');
        var thEmployeeId = document.createElement('th');
        var thName = document.createElement('th');
        var thEmailId = document.createElement('th');
        var thJobProfile = document.createElement('th');
        var thAge = document.createElement('th');
        var thGender = document.createElement('th');
        var thMobileNo = document.createElement('th');

        var srNoTh = document.createTextNode("Sr. No.");
        var employeeIdTh = document.createTextNode("Employee Id.");
        var nameTh = document.createTextNode("Name");
        var emailIdTh = document.createTextNode("Email Id.");
        var jobProfileTh = document.createTextNode("Job Profile");
        var ageTh = document.createTextNode("Age");
        var genderTh = document.createTextNode("Gender");
        var mobileNoTh = document.createTextNode("Mobile No.");

        thSrNo.appendChild(srNoTh);
        thEmployeeId.appendChild(employeeIdTh);
        thName.appendChild(nameTh);
        thEmailId.appendChild(emailIdTh);
        thJobProfile.appendChild(jobProfileTh);
        thAge.appendChild(ageTh);
        thGender.appendChild(genderTh);
        thMobileNo.appendChild(mobileNoTh);

        th.appendChild(thSrNo);
        th.appendChild(thEmployeeId);
        th.appendChild(thName);
        th.appendChild(thEmailId);
        th.appendChild(thJobProfile);
        th.appendChild(thAge);
        th.appendChild(thGender);
        th.appendChild(thMobileNo);

        table.appendChild(th);
        for (var i = 0; i < person.length; i++) {
            var tr = document.createElement('tr');
            var tdSrNo = document.createElement('td');
            var tdEmployeeId = document.createElement('td');
            var tdName = document.createElement('td');
            var tdEmailId = document.createElement('td');
            var tdJobProfile = document.createElement('td');
            var tdAge = document.createElement('td');
            var tdGender = document.createElement('td');
            var tdMobileNo = document.createElement('td');
            // <th>Sr.No.</th>
            // <th>Employee Id.</th>
            // <th>Name/th>
            // <th>Email Id</th>
            // <th>Age</th>
            // <th>Gender</th>
            // <th>Mobile No.</th>
            // <th>Home Address</th>
            var srNo = document.createTextNode(i + 1);
            var employeeId = document.createTextNode(person[i]["employeeId"]);
            var name = document.createTextNode(person[i]["fullName"]);
            var emailId = document.createTextNode(person[i]["emailId"]);
            var jobProfile = document.createTextNode(person[i]["jobProfile"]);
            var age = document.createTextNode(person[i]["age"]);
            var gender = document.createTextNode(person[i]["gender"]);
            var mobileNo = document.createTextNode(person[i]["mobileNo"]);

            tdSrNo.appendChild(srNo);
            tdEmployeeId.appendChild(employeeId);
            tdName.appendChild(name);
            tdEmailId.appendChild(emailId);
            tdJobProfile.appendChild(jobProfile);
            tdAge.appendChild(age);
            tdGender.appendChild(gender);
            tdMobileNo.appendChild(mobileNo);

            tr.appendChild(tdSrNo);
            tr.appendChild(tdEmployeeId);
            tr.appendChild(tdName);
            tr.appendChild(tdEmailId);
            tr.appendChild(tdJobProfile);
            tr.appendChild(tdAge);
            tr.appendChild(tdGender);
            tr.appendChild(tdMobileNo);

            table.appendChild(tr);
        }
        tableArea.appendChild(table);
        console.log(tableArea);
    }
    else {
        console.log("In Display Else");
        document.getElementById("dataTable").innerHTML = "No Records";
        document.getElementById("dataTable").setAttribute("class", "error");
        document.getElementById("dataTable").style.display = "block";
    }

    document.getElementById("dataTable").style.display = "block";
    // document.getElementById("idForm").style.display = "none";
    console.log("Out displayTable");
    // }
    // else
    // {
    //     document.getElementById("dataTable").innerHTML = "Error: RELOAD PAGE";
    //     document.getElementById("dataTable").setAttribute("class", "error");
    //     document.getElementById("dataTable").style.display = "block";
    // }
}


async function displayVehiclesTable() { //displayTable(type) {
    // console.log("Type: "+type);
    // var validType= false;
    // validType = await ['Customers' ,'Employees', 'History'].includes(type);
    // console.log("Status: "+validType);
    // if(validType)
    // {
    var searchId = document.getElementById("searchId").value;
    console.log("SearchID: " + searchId);
    searchId = searchId.toUpperCase();
    var vehicle = [];
    vehicle = await getData(searchId);
    console.log("In displayTable");
    console.log("vehicle Length: " + vehicle.length);
    for (i = 0; i < vehicle.length; ++i) {
        console.log("vin: " + vehicle[i]["vin"]);
        console.log("CategoryId: " + vehicle[i]["categoryId"]);
        console.log("CategoryName: " + vehicle[i]["categoryName"]);
        console.log("VehicleName: " + vehicle[i]["vehicleName"]);
        console.log("VehicleModel: " + vehicle[i]["vehicleModel"]);
        console.log("VehiclePlateNo: " + vehicle[i]["vehiclePlateNo"]);
    }
    if (vehicle.length > 0) {
        var tableArea = document.getElementById('dataTable');
        console.log("FirstChild: " + tableArea.firstChild);
        // var tableArea = document.createElement('div');
        tableArea.setAttribute("class", "table");
        tableArea.firstChild != null ? tableArea.removeChild(tableArea.firstChild) : null;
        // tableArea.setAttribute("id", "dataTable");
        // tableArea.remove();
        var table = document.createElement('table');
        var th = document.createElement('tr');

        var thSrNo = document.createElement('th');
        var thVin = document.createElement('th');
        var thCategoryId = document.createElement('th');
        var thCategoryName = document.createElement('th');
        var thVehicleModel = document.createElement('th');
        var thVehicleName = document.createElement('th');
        var thVehiclePlateNo = document.createElement('th');



        var srNoTh = document.createTextNode("Sr. No.");
        var vinTh = document.createTextNode("VIN");
        var categoryIdTh = document.createTextNode("Category Id.");
        var categoryNameTh = document.createTextNode("Category Name.");
        var vehicleModelTh = document.createTextNode("Vehicle Model");
        var vehicleNameTh = document.createTextNode("Vehicle Name");
        var vehiclePlateNoTh = document.createTextNode("Vehicle Plate No.");

        thSrNo.appendChild(srNoTh);
        thVin.appendChild(vinTh);
        thCategoryId.appendChild(categoryIdTh);
        thCategoryName.appendChild(categoryNameTh);
        thVehicleModel.appendChild(vehicleModelTh);
        thVehicleName.appendChild(vehicleNameTh);
        thVehiclePlateNo.appendChild(vehiclePlateNoTh);

        th.appendChild(thSrNo);
        th.appendChild(thVin);
        th.appendChild(thCategoryId);
        th.appendChild(thCategoryName);
        th.appendChild(thVehicleModel);
        th.appendChild(thVehicleName);
        th.appendChild(thVehiclePlateNo);

        table.appendChild(th);
        for (var i = 0; i < vehicle.length; i++) {
            var tr = document.createElement('tr');

            var tdSrNo = document.createElement('td');
            var tdVin = document.createElement('td');
            var tdCategoryId = document.createElement('td');
            var tdCategoryName = document.createElement('td');
            var tdVehicleModel = document.createElement('td');
            var tdVehicleName = document.createElement('td');
            var tdVehiclePlateNo = document.createElement('td');

            var srNoTd = document.createTextNode(i + 1);
            var vinTd = document.createTextNode(vehicle[i]["vin"]);
            var categoryIdTd = document.createTextNode(vehicle[i]["categoryId"]);
            var categoryNameTd = document.createTextNode(vehicle[i]["categoryName"]);
            var vehicleModelTd = document.createTextNode(vehicle[i]["vehicleModel"]);
            var vehicleNameTd = document.createTextNode(vehicle[i]["vehicleName"]);
            var vehiclePlateNoTd = document.createTextNode(vehicle[i]["vehiclePlateNo"]);

            tdSrNo.appendChild(srNoTd);
            tdVin.appendChild(vinTd);
            tdCategoryId.appendChild(categoryIdTd);
            tdCategoryName.appendChild(categoryNameTd);
            tdVehicleModel.appendChild(vehicleModelTd);
            tdVehicleName.appendChild(vehicleNameTd);
            tdVehiclePlateNo.appendChild(vehiclePlateNoTd);

            tr.appendChild(tdSrNo);
            tr.appendChild(tdVin);
            tr.appendChild(tdCategoryId);
            tr.appendChild(tdCategoryName);
            tr.appendChild(tdVehicleModel);
            tr.appendChild(tdVehicleName);
            tr.appendChild(tdVehiclePlateNo);

            table.appendChild(tr);
        }
        tableArea.appendChild(table);
        console.log(tableArea);
    }
    else {
        console.log("In Display Else");
        document.getElementById("dataTable").innerHTML = "No Records";
        document.getElementById("dataTable").setAttribute("class", "error");
        document.getElementById("dataTable").style.display = "block";
    }

    document.getElementById("dataTable").style.display = "block";
    // document.getElementById("idForm").style.display = "none";
    console.log("Out displayTable");
    // }
    // else
    // {
    //     document.getElementById("dataTable").innerHTML = "Error: RELOAD PAGE";
    //     document.getElementById("dataTable").setAttribute("class", "error");
    //     document.getElementById("dataTable").style.display = "block";
    // }
}

async function validateDetails() {
    console.log("1");
    var error = true;
    var fName = document.getElementById("fName").value;
    console.log("2");
    if (!checkData(fName)) {
        console.log("3");
        document.getElementById("errorFname").setAttribute("class", "error");
        document.getElementById("errorFname").innerHTML = "Error: Enter Valid First Name!";
        error = false;
    }
    var lName = document.getElementById("lName").value;
    console.log("4");
    if (!checkData(lName)) {
        console.log("5");
        document.getElementById("errorLname").setAttribute("class", "error");
        document.getElementById("errorLname").innerHTML = "Error: Enter Valid Last Name!";
        error = false;
    }
    // var gender = document.getElementById("gender").value;
    var gender = checkGender();
    console.log("6");
    if (gender == "Male" || gender == "Female" || gender == "Others") {
        console.log("7");
    }
    else{
        document.getElementById("errorGender").setAttribute("class", "error");
        document.getElementById("errorGender").innerHTML = gender;
        error = false;
    }
    var dob = document.getElementById("dob").value;
    console.log("DDD  Dob: "+dob);
    console.log("8");
    var email = document.getElementById("email").value;
    console.log("9");
    if (!validateEmail(email)) {
        console.log("10");
        document.getElementById("errorEmail").setAttribute("class", "error");
        document.getElementById("errorEmail").innerHTML = "Error: Enter Valid Email Id.!";
        error = false;
    }
    var mobileNo = document.getElementById("mobileNo").value;
    console.log("11");
    if (!checkData(mobileNo)) {
        console.log("12");
        document.getElementById("errorMobileNo").setAttribute("class", "error");
        document.getElementById("errorMobileNo").innerHTML = "Error: Enter Valid Mobile No.!";
        error = false;
    }
    var jobProfile = document.getElementById("jobProfile").value;
    console.log("13");
    if (!checkData(jobProfile)) {
        console.log("14");
        document.getElementById("errorJobProfile").setAttribute("class", "error");
        document.getElementById("errorJobProfile").innerHTML = "Error: Enter Valid Job Profile!";
        error = false;
    }
    var address = document.getElementById("address").value;
    console.log("15");
    if (!checkData(address)) {
        console.log("16");
        document.getElementById("errorAddress").setAttribute("class", "error");
        document.getElementById("errorAddress").innerHTML = "Error: Enter Valid Address!";
        error = false;
    }
    if(error)
    {
        console.log("going to add employee");
        console.log("DDD  Dob: "+dob);
        addEmployee(fName,lName,gender,dob,email,mobileNo,jobProfile,address);
    }
    else{
        alert("Please fill Valid Details!!");
    }
}

function checkData(name) {
    if (name != null || name!="" || name!=" ") {
        console.log("Name "+name+" is not Null");
        return true;
    }
    else {
        console.log("Name is Null");
        return false;
    }
}

function checkGender() {
    var getSelectedValue = document.querySelector('input[name="gender"]:checked');
    if (getSelectedValue != null) {
        return getSelectedValue.value;
    }
    else {
        return "Error: You have not selected any Gender";
    }
}

function validateEmail(email) {
    var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!email.match(mailformat)) {
        return false;
    }
    else
    {
        return true;
    }
}


function checkCategoryName() {
    var getSelectedValue = document.querySelector('input[name="categoryName"]:checked');
    if (getSelectedValue != null) {
        return getSelectedValue.value;
    }
    else {
        return "Error: You have not selected any Vehicle Category";
    }
}

async function validateVehicle() {
    console.log("1");
    var error = true;
    // var vin = document.getElementById("vin").value;
    // console.log("2");
    // if (!checkData(vin)) {
    //     console.log("3");
    //     document.getElementById("errorVIN").setAttribute("class", "error");
    //     document.getElementById("errorVIN").innerHTML = "Error: Enter Valid Vehicle Identification No.!";
    //     error = false;
    // }
    // var gender = document.getElementById("gender").value;
    var categoryName = checkCategoryName();
    console.log("6");
    if (categoryName == "Bicycle" || categoryName == "Motor-Cycle" || categoryName == "Auto-Rickshaw" || categoryName == "Taxi" || categoryName == "Car") {
        console.log("7");
    }
    else{
        document.getElementById("errorCategoryName").setAttribute("class", "error");
        document.getElementById("errorCategoryName").innerHTML = categoryName;
        error = false;
    }
    var vehicleName = document.getElementById("vehicleName").value;
    console.log("4");
    if (!checkData(vehicleName)) {
        console.log("5");
        document.getElementById("errorVehicleName").setAttribute("class", "error");
        document.getElementById("errorVehicleName").innerHTML = "Error: Enter Valid Vehicle Name!";
        error = false;
    }
    var vehicleModel = document.getElementById("vehicleModel").value;
    console.log("8");
    if (!checkData(vehicleModel)) {
        console.log("12");
        document.getElementById("errorVehicleModel").setAttribute("class", "error");
        document.getElementById("errorVehicleModel").innerHTML = "Error: Enter Valid Vehicle Model!";
        error = false;
    }
    var vehiclePlateNo = document.getElementById("vehiclePlateNo").value;
    console.log("13");
    if (!checkData(vehiclePlateNo)) {
        console.log("14");
        document.getElementById("errorVehiclePlateNo").setAttribute("class", "error");
        document.getElementById("errorVehiclePlateNo").innerHTML = "Error: Enter Valid Vehicle Plate No.!";
        error = false;
    }
    if(error)
    {
        console.log("going to add Vehicle");
        addVehicle(categoryName,vehicleName,vehicleModel,vehiclePlateNo);
    }
    else{
        alert("Please fill Valid Details!!");
    }
}


function checkCategoryName() {
    var getSelectedValue = document.querySelector('input[name="categoryName"]:checked');
    if (getSelectedValue != null) {
        return getSelectedValue.value;
    }
    else {
        return "Error: You have not selected any Vehicle Category";
    }
}

async function removeVehicle() {
    console.log("1");
    var error = true;
    var vin = document.getElementById("vin").value;
    console.log("4");
    if (!checkData(vin)) {
        console.log("5");
        document.getElementById("errorVIN").setAttribute("class", "error");
        document.getElementById("errorVIN").innerHTML = "Error: Enter Valid Vehicle Identification No.!";
        error = false;
    }
    var reason = document.getElementById("reason").value;
    console.log("8");
    if (!checkData(reason)) {
        console.log("12");
        document.getElementById("errorReason").setAttribute("class", "error");
        document.getElementById("errorReason").innerHTML = "Error: Enter Valid Reason!";
        error = false;
    }
    if(error)
    {
        console.log("going to remove Vehicle");
        removeVehicleFB(vin,reason);
    }
    else{
        alert("Please fill Valid Details!!");
    }
}

async function removeEmployee() {
    console.log("1");
    var error = true;
    var employeeId = document.getElementById("employeeId").value;
    console.log("4");
    if (!checkData(employeeId)) {
        console.log("5");
        document.getElementById("errorEmployeeId").setAttribute("class", "error");
        document.getElementById("errorEmployeeId").innerHTML = "Error: Enter Valid Employee Id.!";
        error = false;
    }
    var reason = document.getElementById("reason").value;
    console.log("8");
    if (!checkData(reason)) {
        console.log("12");
        document.getElementById("errorReason").setAttribute("class", "error");
        document.getElementById("errorReason").innerHTML = "Error: Enter Valid Reason!";
        error = false;
    }
    if(error)
    {
        console.log("going to remove employee");
        removeEmployeeFB(employeeId,reason);
    }
    else{
        alert("Please fill Valid Details!!");
    }
}

async function removeCustomer() {
    console.log("1");
    var error = true;
    var customerId = document.getElementById("customerId").value;
    console.log("4");
    if (!checkData(customerId)) {
        console.log("5");
        document.getElementById("errorCustomerId").setAttribute("class", "error");
        document.getElementById("errorCustomerId").innerHTML = "Error: Enter Valid Employee Id.!";
        error = false;
    }
    var reason = document.getElementById("reason").value;
    console.log("8");
    if (!checkData(reason)) {
        console.log("12");
        document.getElementById("errorReason").setAttribute("class", "error");
        document.getElementById("errorReason").innerHTML = "Error: Enter Valid Reason!";
        error = false;
    }
    if(error)
    {
        console.log("going to remove employee");
        console.log("customerId: "+customerId);
        removeCustomerFB(customerId,reason);
    }
    else{
        alert("Please fill Valid Details!!");
    }
}


async function historyTable(type) { //displayTable(type) {
    var searchId = document.getElementById("searchId").value;
    console.log("SearchID: " + searchId);
    searchId = searchId.toUpperCase();
    var history = [];
    history = await getHistory(searchId, type);
    console.log("In displayTable");
    console.log("history Length: " + history.length);
    // for (i = 0; i < history.length; ++i) {
    //     console.log("vin: " + history[i]["vin"]);
    //     console.log("TripId: " + history[i]["tripId"]);
    //     console.log("CustomerId: " + history[i]["customerId"]);
    //     console.log("PickUpPoint: " + history[i]["pickUpPoint"]);
    //     console.log("TripDate: " + history[i]["tripDate"]);
    //     console.log("DestinationPoint: " + history[i]["destinationPoint"]);
    // }
    if (history.length > 0) {
        var tableArea = document.getElementById('dataTable');
        console.log("FirstChild: " + tableArea.firstChild);
        tableArea.setAttribute("class", "table");
        tableArea.firstChild != null ? tableArea.removeChild(tableArea.firstChild) : null;
        var table = document.createElement('table');
        var th = document.createElement('tr');

        var thSrNo = document.createElement('th');
        var thTripId = document.createElement('th');
        var thVin = document.createElement('th');
        var thCustomerId = document.createElement('th');
        var thTripId = document.createElement('th');
        var thTripDate = document.createElement('th');
        var thPickUpPoint = document.createElement('th');
        var thDestinationPoint = document.createElement('th');
        var thCost = document.createElement('th');

        var srNoTh = document.createTextNode("Sr. No.");
        var vinTh = document.createTextNode("VIN");
        var tripIdTh = document.createTextNode("Trip Id.");
        var customerIdTh = document.createTextNode("Customer Id.");
        var tripDateTh = document.createTextNode("Trip Date");
        var pickUpPointTh = document.createTextNode("Pick Up Point");
        var destinationPointTh = document.createTextNode("Destination Point");
        var costTh = document.createTextNode("Cost");

        thSrNo.appendChild(srNoTh);
        thVin.appendChild(vinTh);
        thTripId.appendChild(tripIdTh);
        thCustomerId.appendChild(customerIdTh);
        thTripDate.appendChild(tripDateTh);
        thPickUpPoint.appendChild(pickUpPointTh);
        thDestinationPoint.appendChild(destinationPointTh);
        thCost.appendChild(costTh);

        th.appendChild(thSrNo);
        th.appendChild(thVin);
        th.appendChild(thTripId);
        th.appendChild(thCustomerId);
        th.appendChild(thTripDate);
        th.appendChild(thPickUpPoint);
        th.appendChild(thDestinationPoint);
        th.appendChild(thCost);

        table.appendChild(th);
        for (var i = 0; i < history.length; i++) {
            var tr = document.createElement('tr');

            var tdSrNo = document.createElement('td');
            var tdVin = document.createElement('td');
            var tdTripId = document.createElement('td');
            var tdCustomerId = document.createElement('td');
            var tdTripDate = document.createElement('td');
            var tdPickUpPoint = document.createElement('td');
            var tdDestinationPoint = document.createElement('td');
            var tdCost = document.createElement('td');

            var srNoTd = document.createTextNode(i + 1);
            var vinTd = document.createTextNode(history[i]["vin"]);
            var tripIdTd = document.createTextNode(history[i]["tripId"]);
            var customerIdTd = document.createTextNode(history[i]["customerId"]);
            var tripDateTd = document.createTextNode(history[i]["tripDate"]);
            var pickUpPointTd = document.createTextNode(history[i]["pickUpPoint"]);
            var destinationPointTd = document.createTextNode(history[i]["destinationPoint"]);
            var costTd = document.createTextNode(history[i]["cost"]);
            
            var spanCost = document.createElement('span');
            spanCost.setAttribute("class", "rupee");

            tdSrNo.appendChild(srNoTd);
            tdVin.appendChild(vinTd);
            tdTripId.appendChild(tripIdTd);
            tdCustomerId.appendChild(customerIdTd);
            tdTripDate.appendChild(tripDateTd);
            tdPickUpPoint.appendChild(pickUpPointTd);
            tdDestinationPoint.appendChild(destinationPointTd);

            spanCost.appendChild(costTd);
            tdCost.appendChild(spanCost);

            tr.appendChild(tdSrNo);
            tr.appendChild(tdVin);
            tr.appendChild(tdTripId);
            tr.appendChild(tdCustomerId);
            tr.appendChild(tdTripDate);
            tr.appendChild(tdPickUpPoint);
            tr.appendChild(tdDestinationPoint);
            tr.appendChild(tdCost);

            table.appendChild(tr);
            // document.getElementsByClassName("rupee").innerHTML = "&#8377; "+document.getElementsByClassName("rupee").value+" /-";
        }
        tableArea.appendChild(table);
        console.log(tableArea);
    }
    else {
        console.log("In Display Else");
        document.getElementById("dataTable").innerHTML = "No Records";
        document.getElementById("dataTable").setAttribute("class", "error");
        document.getElementById("dataTable").style.display = "block";
    }
    document.getElementById("dataTable").style.display = "block";
    console.log("Out displayTable");
}

function tripHistory()
{
    historyTable("trip");
}

function vehicleHistory()
{
    historyTable("vehicle");
}

function customerHistory()
{
    historyTable("customer");
}

function login()
{
    console.log("1");
    var error = true;
    var userName = document.getElementById("mail").value;
    console.log("2");
    if (!checkData(userName)) {
        console.log("3");
        document.getElementById("errorCredentials").setAttribute("class", "error");
        document.getElementById("errorCredentials").innerHTML = "Error: Invalid Credentials!";
        error = false;
    }
    var password = document.getElementById("password").value;
    console.log("2");
    if (!checkData(userName)) {
        console.log("3");
        document.getElementById("errorCredentials").setAttribute("class", "error");
        document.getElementById("errorCredentials").innerHTML = "Error: Invalid Credentials!";
        error = false;
    }
    if(error)
    {
        console.log("userName: "+userName);
        logInFB(userName, password);
    }
    else{
        alert("Please fill Valid Credentials!!");
    }
}