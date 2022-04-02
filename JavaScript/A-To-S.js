var speechRecognition = window.webkitSpeechRecognition

var recognition = new speechRecognition()

var textbox = $("#TxtArea")

var instruction = $("#instructions")

var content = ''

recognition.continuous = true

// recognition is started 

recognition.onstart = function () {
    instruction.text("Voice Recognition is ON !! SPEAK UP")
}
// recognition.onstop = function () {
//     instruction.text("Voice Recognition is OFF !! Press START button to continue")
// }
recognition.onspeechhend = function () {
    instruction.text("No Activity Found")
}
recognition.onerror = function () {
    instruction.text("Try Again")
}
recognition.onresult = function (event) {
    var current = event.resultIndex;
    var transcript = event.results[current][0].transcript
    content += transcript
    textbox.val(content)
}


$("#BtnSpeak").click(function (event) {
        recognition.start()
})
$("#BtnStop").click(function (event) {
    recognition.stop()
    instruction.text("Voice Recognition is OFF !! Press START button to continue")
})
$("#BtnClear").click(function (event) {
    document.getElementById('TxtArea').value = ''
    instruction.text("Successfully CLEARED !! Press START button to speak")
})


textbox.on('input', function () {
    content = $(this).val()
})
