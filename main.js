prediction_1 = ""
prediction_2 = ""
 webcam.set({
     width:350,
     height:300,
     image_format:'png',
     png_quality:80
 })
 camera = document.getElementById("camera");
 webcam.attach('#camera');
 function take_snapshot(){
     webcam.snap(function(data_uri));
     document.getElementById("result").innerHTML = '<img id= "captured_image"  src = "'+ data_uri +'"/>';
    
 }
 console.log('ml5 version', ml5.version);
 classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/BOb_Xg4SF/model.json',modelLoaded);
 function modelLoaded(){
     console.log('modelLoaded');
 }
 function speak(){
     var synth = window.speechSynthisyis;
     speak_data_1 = "The First Prediction is" + prediction_1;
     speak_data_2 = "The Second Prediction is" + prediction_2;
     var utterThis = new SpeechSynthisyisUtterance(speak_data_1 + speak_data_2);
     synth.speak(utterThis);
 }
 function check(){
     img = document.getElementById("capture_image");
     classifier.classify(img, gotResult);
 }
 function gotResult(error, results){
  if (error){
      console.error(error);
  }
  else (){
      console.log(results);
      document.getElementById("result_emotion_name").innerHTML = results[0].label;
      document.getElementById("result_emotion_name2").innerHTML = results[0].label;
      prediction_1 = results[0].label;
      prediction_2 = results[1].label;
      speak();
      if (results[0].label == "happy"){
         document.getElementById("update_emoji").innerHTML = "&#128522;";
      }
    if(results[0].label == "sad"){
        document.getElementById("update_emoji").innerHTML = "&#128532;";
    }
    if (results[0].label == "angry"){
        document.getElementById("update_emoji").innerHTML = "&#128548;";
    }
    if (results[1].label == "happy"){
        document.getElementById("update_emoji2").innerHTML = "&#128522;";
    }
    if(results[1].label == "sad"){
        document.getElementById("update_emoji2").innerHTML = "&#128532;";
    }
    if (results[1].label == "angry"){
        document.getElementById("update_emoji2").innerHYML = "&#128548;";
    }
 }
 }