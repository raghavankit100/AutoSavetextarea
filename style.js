const storedUserInfo = localStorage.getItem("userInformation");

if (storedUserInfo) {
    const userInfo = JSON.parse(storedUserInfo);
    document.getElementById("notes-input").value = userInfo.notes;
}

document.querySelectorAll("input, textarea").forEach((input) => {
    input.addEventListener("input", storeUserInfo);
});

function storeUserInfo() {
    const notes = document.getElementById("notes-input").value;

    const userInfo = {notes};

    localStorage.setItem("userInformation", JSON.stringify(userInfo));
}