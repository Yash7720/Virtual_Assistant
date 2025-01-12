let btn = document.querySelector("#button")
let content = document.querySelector("#content")
let voice = document.querySelector("#voice")
function speak(text){
    let speak_text = new SpeechSynthesisUtterance(text)
    speak_text.rate=1
    speak_text.pitch=1
    speak_text.volume=1
    speak_text.lang = "hi-GB"
    window.speechSynthesis.speak(speak_text)
}

function wish(){
    let day = new Date()
   let hours = day.getHours()
   if (hours>=0 && hours<12) {
    speak("Good Morning Sir")
   }
   else if(hours>=12 && hours<16){
    speak("Good Afternoon Sir")
   }
   else if(hours>=16 && hours<20){
    speak("Good Evening Sir")

   }
   else{
    speak("Good Night Sir")
   }
}
//call the wish function when window is load
window.addEventListener('load',()=>{
    wish()
})

// Check for SpeechRecognition and SpeechSynthesis support
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const synth = window.speechSynthesis;

if (!SpeechRecognition || !synth) {
  console.error("Your browser does not support SpeechRecognition or SpeechSynthesis.");
} else {
  const recognition = new SpeechRecognition();
  recognition.continuous = false; // Stops listening after one phrase
  // recognition.lang = "hi-GB"; // Set the language to English

  // Speech synthesis function
  // function speakResponse(response) {
  //   const utterance = new SpeechSynthesisUtterance(response);
  //   synth.speak(utterance);
  // }

  // Event handlers for SpeechRecognition
  recognition.onstart = () => {
    console.log("Speech recognition started.");
  };

  recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript.toLowerCase(); // Normalize speech text
    console.log("Speech recognition result:", transcript);

    // Update button text with the recognized speech
    document.querySelector("#button").textContent = transcript;
     btn.style.display="flex"
    voice.style.display="none"

    // Check if the user said "Hello Siphra"
    if (transcript === "hello shipra"|| transcript === "hey shipra"|| transcript === "hello shifhra"||transcript === "hi sifhra") {
      speak("Hello sir, what can I help you?");
    } 
    else if(transcript === "who are you"){
      speak("i am Virtual Assistant, my name is Sifra, created by Yash Sir")
    }
    else if(transcript === "open youtube"){
      speak("Opening Youtube...")
      window.open("https://www.youtube.com/")
    }
    else if(transcript === "open google"){
      speak("Opening google...")
      window.open("https://www.google.co.in/")
    }
    else if(transcript === "open facebook"){
      speak("Opening facebook...")
      window.open("https://www.facebook.com/")
    }
    else if(transcript === "open spotify"){
      speak("opening spotify...")
      window.open("https://open.spotify.com/")
    }
    else if(transcript === "open instagram"){
      speak("Opening instagram...")
      window.open("https://www.instagram.com/")
    }
    else if(transcript === "play my favourite song"){
      speak("Playing your favourite song...")
      window.open("https://youtu.be/jTg15DrXhB0?feature=shared")
    }
    else if(transcript === "hi shipra"){
      speak("hello yash sir how are you")

    }

    else if(transcript === "bye shipra"){
      speak("by sir")

    }
  

    else if(transcript === "open calculator"){
      speak("Opening calculator...")
      window.open("calculator://")
    }

    else if(transcript.includes("time")){
      let time = new Date().toLocaleString(undefined,{hour:"numeric",minute:"numeric"})
      speak(time)
    }

    else if(transcript.includes("date")){
      let date = new Date().toLocaleString(undefined,{day:"numeric",month:"short",year:"numeric"})
      speak(date)
    }
    else {
     let final ="this is what i foound on internet regarding"+ transcript.replace("shipra","")||transcript.replace("shifra","")
      speak(final)
      window.open(`https://www.google.co.in/search?q=${transcript}`)
    }
  };

  recognition.onerror = (error) => {
    console.error("Speech recognition error:", error);
  };

  recognition.onend = () => {
    console.log("Speech recognition ended.");
  };

  // Attach event listener to the button
  document.querySelector("#button").addEventListener("click", () => {
    recognition.start();
    btn.style.display="none"
    voice.style.display="block"
    
  });
}




