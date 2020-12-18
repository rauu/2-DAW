var form = document.getElementById("registro");

function onClick(event) {
    event.preventDefault();
    grecaptcha.ready(function() {
        grecaptcha.execute('6Lex8-QZAAAAANoXW0SUtrOCV_F_ZVdg1goTQyYV', { action: 'registro' }).then(function(token) {
            // Add your logic to submit to your backend server here.
            var input = document.createElement("input");
            input.type = "hidden";
            input.value = token;
            input.name = "token";
            console.log("Input: " + input);
            form.appendChild(input);

            var input_action = document.createElement("input");
            input_action.type = "hidden";
            input_action.value = "registro";
            input_action.name = "action";
            console.log("Input Action : " + input_action);
            form.appendChild(input_action);

            form.submit();



        });
    });
}