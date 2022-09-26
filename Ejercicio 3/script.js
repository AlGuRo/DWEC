function validarHora(inputField) {
    var isValid = /^([0-1]?[0-9]|2[0-4]):([0-5][0-9])(:[0-5][0-9])?$/.test(inputField.value);

    if (isValid) {
        let time = inputField.value.split(':');
        let t = new Date();
        t.setHours(time[0], time[1], time[2], 0);
        console.log(t.getHours() + ' hours ' + t.getMinutes() + ' minutes ' + t.getSeconds() + ' seconds');
        t.setSeconds(t.getSeconds() + 1);
        document.getElementById("resultado").innerHTML = t.getHours() + ':' + t.getMinutes() + ':' + t.getSeconds();
        inputField.style.backgroundColor = '#bfa';
    } else {
        document.getElementById("resultado").innerHTML = "";
      inputField.style.backgroundColor = '#fba';
    }

    return isValid;
  }