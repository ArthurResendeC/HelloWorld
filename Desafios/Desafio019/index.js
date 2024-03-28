const markAsReadBtn = document.getElementById("button");
const notificationIcons = document.querySelectorAll(".fa-solid.fa-circle.fa-sm"); // More specific selector
const notificationNumber = document.getElementById("notifications")
const newNotifications = document.querySelectorAll("newNotifications")

markAsReadBtn.addEventListener("click", () => {
    notificationIcons.forEach(icon => {
    icon.classList.add("hidden");
    });
    newNotifications.forEach( (notifications)=>{
        notifications.className.toggle = "oldNotification"
    });
    notificationNumber.style.display = "none"
});
