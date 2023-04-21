//https://teachablemachine.withgoogle.com/models/-nGfIr_qj/
function Recognise(){
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/-nGfIr_qj/model.json', modelReady);
    start_prompt = new Audio("Default iPhone Notification Sound Apple Sound - Sound Effect for Editing.mp3");
    start_prompt.play();
}

function modelReady(){
    classifier.classify(gotResults);
}