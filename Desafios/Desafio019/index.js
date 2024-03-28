const markAsReadBtn = document.getElementById("button");
const notificationIcons = document.querySelectorAll(".fa-solid.fa-circle.fa-sm"); // More specific selector
const notificationNumber = document.getElementById("notifications")
const newNotifications = document.querySelectorAll(".newNotification")

markAsReadBtn.addEventListener("click", () => {
    notificationIcons.forEach(icon => {
    icon.classList.add("hidden");
    });
    notificationNumber.style.display = "none"
    newNotifications.forEach(not => {
        not.classList.remove("newNotification")
        not.classList.add("oldNotification")
    })
});
