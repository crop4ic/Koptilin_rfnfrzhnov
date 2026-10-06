const supportForm = document.querySelector(".supportForm")
const userName = document.querySelector(".supportName")
const adressName = document.querySelector(".supportAdress")
const errorsType = document.querySelector(".supportSubject")
const supportEr = document.querySelector(".supportError")
const conatainer = document.querySelector(".containerSupport")

let supportVvod = []

supportForm.addEventListener("submit", (e) => {
    e.preventDefault()

    const newSupport = {
        nameSupport: userName.value.trim(),
        adressSupport: adressName.value.trim(),
        errorText: errorsType.value,
        textError: supportEr.value.trim()
    }

     supportVvod.push(newSupport)
 
    showAlert()
    renderSupportBlock()
     
     supportForm.reset()

})

function renderSupportBlock() {
    conatainer.innerHTML = ""
    supportVvod.forEach(itemSupport => {
        const htmlSupport = `
        <div class="supportBackgroundError">
        <h3 class="complant">Обращение</h3><br>
          <p class="posichens">Имя аккаунта: ${itemSupport.nameSupport}</p><br><p class="posichens">Категория ошибки: ${itemSupport.errorText}</p><br><p class="posichens">Почта: ${itemSupport.adressSupport}</p><br><p class="posichens">Проблема: ${itemSupport.textError}</p>
        </div>
        `
        conatainer.insertAdjacentHTML("beforeend", htmlSupport)

    })
}

const myAllert = document.getElementById("customerAlert")
function showAlert() {
    myAllert.showModal()
}

function closeAlert() {
    myAllert.close()
}