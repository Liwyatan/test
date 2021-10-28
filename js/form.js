const $form = document.querySelector('#form')
const $buttonMailto = document.querySelector('#truco')

$form.addEventListener('submit', handleSubmit)

function handleSubmit(event){
    event.preventDefault()
    const form = new FormData(this)
    $buttonMailto.setAttribute('href', `mailto:vicen33@gmail.com?subject=CARRVA_CLIENTE &body=Nombre_Cliente: ${form.get('name')}%0D%0A%0D%0AMensaje: ${form.get('description')}%0D%0A%0D%0AEmail: ${form.get('email')}%0D%0A%0D%0ATelefono: +${form.get('phone')}%0D%0A%0D%0A`)
    $buttonMailto.click()
}