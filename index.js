function carregar() {
  var msg = window.document.getElementById('msg')
  var img = window.document.getElementById('imagem')
  var data = new Date()
  var hora = data.getHours()
  msg.innerHTML = `Agora são ${hora} horas.`
  if ( hora >= 0 && hora < 12) {
    img.src = 'https://user-images.githubusercontent.com/102330689/183496628-c96f8cfa-8642-48a9-a2a0-b7653841cb43.png'
    document.body.style.background = '#ddbf81'
  } else if (hora >= 12 && hora <= 18) {
    img.src = 'https://user-images.githubusercontent.com/102330689/183496933-b9724538-8c47-4f9f-bf7e-4552fb15b911.png'
    document.body.style.background = '#bc856b'
  } else {
    img.src = 'https://user-images.githubusercontent.com/102330689/183497108-98387d63-25bc-4384-a85f-4eabc08e37f8.png'
    document.body.style.background = '#3380a0'
  }
}