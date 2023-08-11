function updateProfileName(newName,newLocation) {
    const profileNameElement = document.getElementById("profile-name");
    const profileLocationElement = document.getElementById("profile-location");
    profileNameElement.textContent = newName;
    profileLocationElement.textContent = newLocation;
}

const profileForm = document.getElementById("profile-form");
profileForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const newName = document.getElementById("frist-name").value + " " + document.getElementById("last-name").value;
    const newLocation = document.getElementById("location").value
    updateProfileName(newName,newLocation);
});