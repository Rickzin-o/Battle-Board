function adicionarCriatura(footerIndex) {
    let footer = document.getElementById(`footer${footerIndex}`)
    let nomeCriatura = prompt("Insira nome da criatura.")
    let vidaCriatura = prompt("Insira HP da criatura.")
    let armaduraCriatura = prompt("Insira CA da criatura.")

    footer.innerHTML += `<div class="creature-info"><label>${nomeCriatura}</label><input value="${vidaCriatura}" placeholder="HP" type="number"><label>CA ${armaduraCriatura}</label></div>`
}