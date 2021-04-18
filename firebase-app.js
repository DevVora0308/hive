// await database.ref().child("Customers").child("").get().then(function (snapshot) {
//     if (snapshot.exists()) {
//         console.log(snapshot.val());
//         childData = snapshot.val();
//         getFirstName(childData["fullName"]);
//     }
//     else {
//         console.log("No data available");
//     }
// }).catch(function (error) {
//    console.error(error);
//    console.log("Error: "+error);
// });

async function closeFirebase() {
    console.log("Disconnecting Firebase");
    await firebase.database().goOffline()
    console.log("Firebase Disconnected");
}

async function initFirebase() {
    console.log("In initFirebase()");
    if (typeof firebase === 'undefined') throw new Error('hosting/init-error: Firebase SDK not detected.');
    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
        apiKey: "AIzaSyDSGsQ9U3-Gv0HKyIitoleMKtRRijKlH-w",
        authDomain: "hive-62246.firebaseapp.com",
        databaseURL: "https://hive-62246-default-rtdb.firebaseio.com",
        projectId: "hive-62246",
        storageBucket: "hive-62246.appspot.com",
        messagingSenderId: "216022499084",
        appId: "1:216022499084:web:1d74ac43315c6234935329",
        measurementId: "G-HYP2Y8EF82"
    };
    // Initialize Firebase

    if (!firebase.apps.length) {
        await firebase.initializeApp(firebaseConfig);
    } else {
        await firebase.app;// if already initialized, use that one
    }
    await firebase.analytics();

    // var database = firebase.database();
    // var listy = [];
    // // var childData;
    // await database.ref().once('value', function (snapshot) {
    //     snapshot.forEach(function (childSnapshot) {
    //         var childKey = childSnapshot.key;
    //         console.log("");
    //         console.log("\tModule: " + childKey);
    //         if (childKey == "Customers") {
    //             console.log("");
    //             childSnapshot.forEach(function (child2Snapshot) {
    //                 var child2Key = child2Snapshot.key;
    //                 console.log("\t\tUnique Id.: " + child2Key);
    //                 console.log("");
    //                 listy.push(child2Snapshot.val());
    //                 // displayTable(listy);
    //                 // return;
    //                 // child2Snapshot.forEach(function(child3Snapshot) {
    //                 //     var child3Key = child3Snapshot.key;
    //                 //     console.log("\t\t\t"+child3Key+": "+child3Snapshot.val());
    //                 // });
    //             });
    //         }
    //     });
    // });

    console.log("Out initFirebase()");

    // console.log("listy Length: "+listy.length);
    // for(i=0; i<listy.length; ++i)
    // {
    //     console.log(listy[i]["emailId"]);
    // }
}

function getFirstName(name) {
    // document.addEventListener('DOMContentLoaded', (event) => {
    // console.log(document.getElementById("pageName"));
    document.getElementById("firstName").innerHTML = name.split(" ")[0];
    // });
    console.log("Name Added!!");
}

async function getUserData(searchId, type) {
    var typeId;
    switch (type) {
        case "Customers": typeId = "customerId";
            break;
        case "Employees": typeId = "employeeId";
            break;
    }
    console.log("In viewCustomers()");
    if (searchId == "ALL" || searchId == "" || searchId == null) {
        await initFirebase();
        console.log("In if");
        var database = await firebase.database();
        var listy = [];
        await database.ref().once('value', function (snapshot) {
            console.log("snapshot: " + snapshot);
            snapshot.forEach(function (childSnapshot) {
                var childKey = childSnapshot.key;
                console.log("");
                console.log("\tModule: " + childKey);
                if (childKey == type) {
                    console.log("");
                    childSnapshot.forEach(function (child2Snapshot) {
                        var child2Key = child2Snapshot.key;
                        console.log("\t\tUnique Id.: " + child2Key);
                        console.log("");
                        listy.push(child2Snapshot.val());
                    });
                }
            });
        }).catch(function (error) {
            console.error(error);
            console.log("Error: " + error);
        });
        // closeFirebase();
        return listy;
    }
    else {
        await initFirebase();
        console.log("In else");
        var database = await firebase.database();
        var listy = [];
        await database.ref().once('value', function (snapshot) {
            snapshot.forEach(function (childSnapshot) {
                var childKey = childSnapshot.key;
                console.log("");
                console.log("\tModule: " + childKey);
                if (childKey == type) {
                    console.log("");
                    childSnapshot.forEach(function (child2Snapshot) {
                        var child2Key = child2Snapshot.key;
                        console.log("\t\tUnique Id.: " + child2Key);
                        console.log("");
                        child2Snapshot.forEach(function (child3Snapshot) {
                            if (child3Snapshot.key == typeId && child3Snapshot.val() == searchId) {
                                listy.push(child2Snapshot.val());
                                console.log("Got My Value");
                            }
                        });
                    });
                }
            });
        }).catch(function (error) {
            console.error(error);
            console.log("Error: " + error);
        });
        // closeFirebase();
        console.log("listy: " + listy);
        return listy;
    }
}

async function getData(searchId) {
    var typeId = "vin"
    var type = "Vehicles";
    console.log("In viewCustomers()");
    if (searchId == "ALL" || searchId == "" || searchId == null) {
        await initFirebase();
        console.log("In if");
        var database = await firebase.database();
        var listy = [];
        await database.ref().once('value', function (snapshot) {
            console.log("snapshot: " + snapshot);
            snapshot.forEach(function (childSnapshot) {
                var childKey = childSnapshot.key;
                console.log("");
                console.log("\tModule: " + childKey);
                if (childKey == type) {
                    console.log("");
                    childSnapshot.forEach(function (child2Snapshot) {
                        var child2Key = child2Snapshot.key;
                        console.log("\t\tUnique Id.: " + child2Key);
                        console.log("");
                        listy.push(child2Snapshot.val());
                    });
                }
            });
        }).catch(function (error) {
            console.error(error);
            console.log("Error: " + error);
        });
        // closeFirebase();
        return listy;
    }
    else {
        await initFirebase();
        console.log("In else");
        var database = await firebase.database();
        var listy = [];
        await database.ref().once('value', function (snapshot) {
            snapshot.forEach(function (childSnapshot) {
                var childKey = childSnapshot.key;
                console.log("");
                console.log("\tModule: " + childKey);
                if (childKey == type) {
                    console.log("");
                    childSnapshot.forEach(function (child2Snapshot) {
                        var child2Key = child2Snapshot.key;
                        console.log("\t\tUnique Id.: " + child2Key);
                        console.log("");
                        child2Snapshot.forEach(function (child3Snapshot) {
                            if (child3Snapshot.key == typeId && child3Snapshot.val() == searchId) {
                                listy.push(child2Snapshot.val());
                                console.log("Got My Value");
                            }
                        });
                    });
                }
            });
        }).catch(function (error) {
            console.error(error);
            console.log("Error: " + error);
        });
        // closeFirebase();
        console.log("listy: " + listy);
        return listy;
    }
}

async function getHistory(searchId, type) {
    var typeId;
    switch (type) {
        case "trip": typeId = "tripId";
            break;
        case "vehicle": typeId = "vin";
            break;
        case "customer": typeId = "customerId";
            break;
    }
    console.log("In viewCustomers()");
    if (searchId == "ALL" || searchId == "" || searchId == null) {
        await initFirebase();
        console.log("In if");
        var database = await firebase.database();
        var listy = [];
        await database.ref().once('value', function (snapshot) {
            console.log("snapshot: " + snapshot);
            snapshot.forEach(function (childSnapshot) {
                var childKey = childSnapshot.key;
                console.log("");
                console.log("\tModule: " + childKey);
                if (childKey == "History") {
                    console.log("");
                    childSnapshot.forEach(function (child2Snapshot) {
                        var child2Key = child2Snapshot.key;
                        console.log("\t\tUnique Id.: " + child2Key);
                        console.log("");
                        listy.push(child2Snapshot.val());
                    });
                }
            });
        }).catch(function (error) {
            console.error(error);
            console.log("Error: " + error);
        });
        // closeFirebase();
        return listy;
    }
    else {
        await initFirebase();
        console.log("In else");
        var database = await firebase.database();
        var listy = [];
        await database.ref().once('value', function (snapshot) {
            snapshot.forEach(function (childSnapshot) {
                var childKey = childSnapshot.key;
                console.log("");
                console.log("\tModule: " + childKey);
                if (childKey == "History") {
                    console.log("");
                    childSnapshot.forEach(function (child2Snapshot) {
                        var child2Key = child2Snapshot.key;
                        console.log("\t\tUnique Id.: " + child2Key);
                        console.log("");
                        child2Snapshot.forEach(function (child3Snapshot) {
                            if (child3Snapshot.key == typeId && child3Snapshot.val() == searchId) {
                                listy.push(child2Snapshot.val());
                                console.log("Got My Value");
                            }
                        });
                    });
                }
            });
        }).catch(function (error) {
            console.error(error);
            console.log("Error: " + error);
        });
        // closeFirebase();
        console.log("listy: " + listy);
        return listy;
    }
}

async function addEmployee(fName, lName, gender, dob, email, mobileNo, jobProfile, address) {
    await initFirebase();
    console.log("In addEmployee");
    var newDob = new Date(dob);
    var randomNumber = Math.floor(Math.random() * 100) + Math.floor(Math.random() * 10) * 100;
    lName = " " + lName;
    var fullName = fName + lName;
    var name = fullName.trim().toUpperCase().split("");
    var employeeId = 'EID' + randomNumber.toString() + name[Math.floor(Math.random() * name.length)] + name[Math.floor(Math.random() * name.length)];
    var today = new Date();
    console.log("Todays Date: " + today);
    console.log("Dob: " + dob);
    var age = today.getFullYear() - newDob.getFullYear();
    console.log("today.getfull: " + today.getFullYear());
    console.log("dob.getfull: " + newDob.getFullYear());
    var password = "HiVe@"+(Math.floor(Math.random() * 100)+1000);
    await firebase.database().ref().child("Employees").child(employeeId).set({
        "employeeId": employeeId,
        "fullName": fullName,
        "emailId": email,
        "gender": gender,
        "jobProfile": jobProfile,
        "dob": dob,
        "age": age,
        "address": address,
        "mobileNo": mobileNo,
        "password": password,
    });
    console.log("Employee Added");
    console.clear();
    var subject = "Urgent: HiVe User Credentials";
    var body = "Your HiVe Employee account is ready!! Your username is "+email+". And Password is "+password+". Make sure to change Password as soon as possible!!!";
    window.open('mailto:'+email+'?subject='+subject+'&body='+body);
    alert("Employee " + fullName + " Added Successfully!!");
}

async function addVehicle(categoryName, vehicleName, vehicleModel, vehiclePlateNo) {
    await initFirebase();
    console.log("In addVehicle");
    var randomNumber = Math.floor(Math.random() * 100) + Math.floor(Math.random() * 10) * 100;
    var fullName = categoryName + vehicleName;
    var name = fullName.trim().toUpperCase().split("");
    var vin = 'VIN' + randomNumber.toString() + name[Math.floor(Math.random() * name.length)] + name[Math.floor(Math.random() * name.length)];
    var categoryId;
    switch (categoryName) {
        case "Bicycle": categoryId = "CTIDBIC";
            break;
        case "Motor-Cycle": categoryId = "CTIDMTC";
            break;
        case "Auto-Rickshaw": categoryId = "CTIDARS";
            break;
        case "Taxi": categoryId = "CTIDTAX";
            break;
        case "Car": categoryId = "CTIDCAR";
            break;
    }
    if (vehiclePlateNo == "" || vehiclePlateNo == null || vehiclePlateNo == undefined) {
        vehiclePlateNo = "-";
    }
    await firebase.database().ref().child("Vehicles").child(vin).set({
        "vin": vin,
        "categoryId": categoryId,
        "categoryName": categoryName,
        "vehicleName": vehicleName,
        "vehicleModel": vehicleModel,
        "vehiclePlateNo": vehiclePlateNo,
    });
    console.log("Vehicle Added");
    console.clear();
    alert("Vehicle " + vehicleName + " Added Successfully!!");
}


async function removeVehicleFB(vin, reason) {
    await initFirebase();
    console.log("In removeVehicleFB");
    var database = await firebase.database();
    await database.ref().child("Vehicles").child(vin).remove().catch(function (error) {
        console.error(error);
        console.log("Error: " + error);
    });
    console.clear();
    alert("Vehicle with VIN: " + vin + " is successfully removed from database!!!");
}


async function removeCustomerFB(customerId, reason) {
    await initFirebase();
    console.log("In removeCustomerFB");
    var uid = "";
    var database = await firebase.database();
    await database.ref().once('value', function (snapshot) {
        snapshot.forEach(function (childSnapshot) {
            var childKey = childSnapshot.key;
            if (childKey == "Customers") {
                childSnapshot.forEach(function (child2Snapshot) {
                    var child2Key = child2Snapshot.key;
                    console.log("");
                    console.log("child2Key: " + child2Key);
                    console.log("customerId: " + customerId);
                    child2Snapshot.forEach(function (child3Snapshot) {
                        console.log("\t child3Key: " + child3Snapshot.key);
                        console.log("\t\t child3KeyValue: " + child3Snapshot.val());
                        if (child3Snapshot.key == "customerId" && child3Snapshot.val() == customerId) {
                            uid = child2Key;
                            console.log("Got CustomerId");
                            console.log("uid: " + uid);
                            // child2Snapshot.remove();
                        }
                    });
                });
            }
        });
    }).catch(function (error) {
        console.error(error);
        console.log("Error: " + error);
    });
    console.log("uid: " + uid);
    if (uid != "") {
        console.log("uid: " + uid);
        await database.ref().child("Customers").child(uid).remove().catch(function (error) {
            console.error(error);
            console.log("Error: " + error);
        });
        console.clear();
        alert("Customer with Customer Id.: " + customerId + " is successfully removed from database!!!");
    }
}


async function removeEmployeeFB(employeeId, reason) {
    await initFirebase();
    console.log("In removeCustomerFB");
    var database = await firebase.database();
    await database.ref().child("Employees").child(employeeId).remove().catch(function (error) {
        console.error(error);
        console.log("Error: " + error);
    });
    console.clear();
    alert("Customer with Employee Id.: " + employeeId + " is successfully removed from database!!!");
}

async function logInFB(userName, password) {
    var valid1 = false, valid2 = false;
    await initFirebase();
    var database = await firebase.database();
    await database.ref().once('value', function (snapshot) {
        snapshot.forEach(function (childSnapshot) {
            var childKey = childSnapshot.key;
            if (childKey == "Employees") {
                childSnapshot.forEach(function (child2Snapshot) {
                    var child2Key = child2Snapshot.key;
                    console.log("\t\tUnique Id.: " + child2Key);
                        child2Snapshot.forEach(function (child3Snapshot) {
                            if(child3Snapshot.key=="emailId" && child3Snapshot.val() == userName)
                            {
                                valid1 = true;
                            }
                            if (child3Snapshot.key == "password" && child3Snapshot.val() == password) {
                                valid2 = true;
                            }
                        });
                });
            }
        });
    }).catch(function (error) {
        console.error(error);
        console.log("Error: " + error);
    });
    if(valid1 && valid2)
    {
        console.clear();
        var tID = setTimeout(function () {
        window.location.href = "dashboard.html";
        window.clearTimeout(tID);		// clear time out.
    }, 1000);
        // window.location.replace("");
    }
    else{
        alert("Please fill Valid Credentials!!");
    }
}

