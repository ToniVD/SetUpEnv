let userRole = "admin";
let accessLevel;

if (userRole === "admin") {
    accessLevel = "Full access granted";
} else if (userRole === "manager") {
    accessLevel = "Limited access granted";
} else {
    accessLevel = "No access granted";
}

console.log("Access Level:", accessLevel);

let isLoggedIn = true;
let userMessage;

if (isLoggedIn) {
    if (userRole === "admin") {
        userMessage = "Welcome, Admin!";
    } else {
        userMessage = "Welcome, User!";
    }
} else {
    userMessage = "Please log in to access the system.";
}

console.log("User Message:", userMessage);

let userType = "subscriber";
let userCategory;

switch (userType) {
    case "admin":
        userCategory = "Administrator";
        break; //exits the switch statement after the assignment.
    case "manager":
        userCategory = "Manager";
        break;
    case "subscriber":
        userCategory = "Subscriber";
        break;
    default:
        userCategory = "Unknown";
}

console.log("User Category:", userCategory);

let isAuthenticated = true;

let authenticationStatus = isAuthenticated ? "Authenticated" : "Not authenticated";

console.log("Authentication Status:", authenticationStatus);

let personRole = "enrolledMember";
let personAccess;

switch(personRole){
    case "employee":
        personAccess = "Dietary Services";
        break;
    case "enrolledMember":
        personAccess = "Dietary Services and One-on-One Interaction with a Dietician.";
        break;
    case "subscriber":
        personAccess = "Partial Access to Dietary Services";
        break;
    case "non-subscriber":
        personAccess = "Subscription Required";
        break;
}

console.log("User Access:", personAccess);