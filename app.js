const btn = document.querySelector(".talk");
const content = document.querySelector(".content");

function speak(sentence){
    const text_speak = new SpeechSynthesisUtterance(sentence);

    text_speak.rate = 1;
    text_speak.pitch = 2;

    window.speechSynthesis.speak(text_speak);
}

function wishMe() {
    var day = new Date();
    var hr = day.getHours();
    
    if(hr >= 0 && hr < 12) {
        speak("Good Morning Abdusamad");
    }

    else if(hr == 12) {
        speak("Good Afternoon Abdusamad");
    }

    else if(hr > 12 && hr <= 17) {
        speak("Good Afternoon Abdusamad");
    }

    else {
        speak("Good Evening Abdusamad");
    }
}

window.addEventListener('load', ()=>{
    speak("allow me to introduce myself,i am axel, your virtual artificial intelligence.");
    speak("i Am here to assist you with a variety of task since i can. 24 hours a day,7 days a week");
    speak("importing some prefrences from your home interface. system now fully online");
    wishMe();
})

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onresult = (event) =>{
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;
    content.textContent = transcript;
    speakThis(transcript.toLowerCase());
}

btn.addEventListener('click', ()=>{
    content.textContent = "Listening....";
    recognition.start();
})




function speakThis(message){
  const speech = new SpeechSynthesisUtterance();

  speech.text = "i did not understand"

    if(message.includes('hey ghost') || message.includes('hello')) {
        const finalTest ="Hello Boss how are you today.";
        speech.text = finalTest;
   }

   else if(message.includes('how are you')){
    const finalTest = "I am fine boss tell me how can i help you today";
    speech.text = finalTest;
   }

   else if(message.includes('name')){
    const finalTest = "my name is Ghost.tec";
    speech.text = finalTest;
   }

   else if(message.includes('time')) {
    const time = new Date().toLocaleString(undefined, {hour: "numeric", minute: "numeric"})
    const finalTest = time;
    speech.text = finalTest;
   }

   else if(message.includes('date')) {
    const date = new Date().toLocaleString(undefined, {month: "short", day: "numeric"})
    const finalTest = date;
    speech.text = finalTest;
   }

   if(message.includes('open vscode')) {
    window.open('msedge.exe');
    const finalTest = "opening vscode";
    speech.text = finalTest;
   }

   else if(message.includes('open instagram')) {
    window.open("https://www.instagram.com/mr_nobody19_03?igsh=eGN3b3NpYWI0eW1h");
    const finalTest = "Opening Instagram";
    speech.text = finalTest;
   }

   
   else if(message.includes('open google')) {
    window.open("https://google.com", "_blank");
    const finalTest = "Opening google";
    speech.text = finalTest;
   }

   else if(message.includes('what is') || message.includes('who is') || message.includes('what are')) {
    window.open('https://www.google.com/search?q={message.replace(" ","+")}', "_blank");
    const finalTest = "This is what i found regarding " + message;
    speech.text = finalTest;
   }

   else{
    window.open('https://www.google.com/search?q={message.replace(" ", "+")}',"_blank");
    const finalTest = "I found some information for" + message + "on google";
    speech.text = finalTest;
   }

   speech.volume = 1;
   speech.pitch = 1;
   speech.rate = 1;

   window.speechSynthesis.speak(speech);

}