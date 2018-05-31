//window.onload = () => {
//    let path = window.location.pathname;
//    let page = path.split("/").pop();
//    switch (page) {
//        case "bhIndex.html":
//            break;
//        case "bhPurchaseItems.html":
//            createBountyHunter();
//            break;
//        case "bhEquipGear.html":
//            loadWeapons();
//            break;
//        case "rodianYes1.html":
//            rehalRodian = new opponent("Rehal", "Madar", 10, 5, 10);

//            getBountyHunterData();

//            document.getElementById("firstName").innerHTML = rehalRodian["firstName"].toString();
//            document.getElementById("lastName").innerHTML = rehalRodian["lastName"].toString();
//            document.getElementById("combatOffense").innerHTML = rehalRodian["combatOffense"].toString();
//            document.getElementById("combatDefense").innerHTML = rehalRodian["combatDefense"].toString();
//            document.getElementById("health").innerHTML = rehalRodian["health"].toString();

//            break;
//        default:
//            break;
//    }
//};
let GoToHome = () => {
    window.location.href = "index.html";
}
let GoToAboutCampaign = () => {
    window.location.href = "aboutcampaign.html";
}
let GoToMission = () => {
    window.location.href = "mission.html";
}
let GoToVision = () => {
    window.location.href = "vision.html";
}
let GoToContact = () => {
    window.location.href = "contact.html";
}
let GoToHistory = () => {
    window.location.href = "history.html";
}
let GoToProof = () => {
    window.location.href = "proof.html";
}