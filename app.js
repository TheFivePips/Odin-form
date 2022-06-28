const userPSW = document.getElementById('user-password')
const userConfirmationPSW = document.getElementById('confirm-password')

if(userPSW.value !== userConfirmationPSW.value) {
    alert("The passwords dont match")
}
