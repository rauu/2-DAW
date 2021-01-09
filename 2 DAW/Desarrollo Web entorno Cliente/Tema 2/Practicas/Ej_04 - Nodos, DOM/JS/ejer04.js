/* let color = "";
    for (let x = 0; x < check.length; x++) {
        if (check[x].checked) {
            color += check[x].value + " ";
        }
    }*/

function comprobar() {
    let checkbox = document.getElementsByName("movil");
    let count = 0;
    for (let x = 0; x < checkbox.length; x++) {
        if (checkbox[x].checked) {
            count++;
        }
    }
    console.log(count);
    if (count < 5) {
        alert("Resultado: En principio no tienes nada de que preocuparte. \n" +
            "Consejo: No tienes nada de que preocuparte.");
    } else if (count >= 5 && count <= 6) {
        alert("Resultado: Empiezas a tener signos de dependencia del móvil. \n" +
            "Consejo: Puedes utilizar técnicas como apagar el móvil cuando no lo necesitas, cuando duermes, etc.");
    } else if (count > 6 && count <= 8) {
        alert("Resultado: Tienes una gran dependencia del móvil. \n" +
            "Consejo: Deberías seguir un plan de desintoxicación del móvil como por ejemplo dejar el móvil en casa cuando vas a comprar, apagarlo durante la noche, apagarlo durante horas de clase o trabajo, etc.");
    } else if (count > 8) {
        alert("Resultado: Tus síntomas de dependencia son muy preocupantes. \n" +
            "Consejo: Además de todas las técnicas de los apartados anteriores deberías plantearte un plan de desintoxicación del móvil que consista en estar una o dos semanas sin utilizarlo. Si ves que no puedes hacerlo por ti mismo, pide ayuda a un profesional.");
    }
}