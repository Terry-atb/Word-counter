var totalWords = document.getElementById('totalwords');
var input = document.getElementById('inputarea');
var wordCounted = document.getElementById('wordcounted');
var wordRemained = document.getElementById('wordremained');

function keyUp(){
    // total word displayer
    var totalWordsmatch = totalWords.value.match(/^\d+$/);
    if(totalWordsmatch){
        document.getElementById('tnw').innerHTML = totalWords.value;
        wordRemained.innerHTML =  document.getElementById('tnw').innerHTML;
        document.getElementById('notify').innerHTML = '';
    }
    else if(totalWords.value==''){
        document.getElementById('notify').innerHTML = '';
        document.getElementById('tnw').innerHTML = 0;
        wordRemained.innerHTML =  document.getElementById('tnw').innerHTML;
    }
    else{
        document.getElementById('notify').innerHTML = 'positive integers only';
        document.getElementById('tnw').innerHTML = 0;
    }

    // Word Counter
    var wordMatch = input.value.match(/\b[-?(\w+)?]+\b/gi)  
    if(wordMatch){
        wordCounted.innerHTML = wordMatch.length;    
    }
    else{
        wordCounted.innerHTML = 0;
    }

    // Remaining words Counter
    var diff = totalWords.value - wordMatch.length;
    if(diff>0){
       wordRemained.innerHTML = diff;
       document.getElementById('inputarea').style.backgroundColor = '';
    }
    else if(diff==-1){
        wordRemained.innerHTML = 0;
        document.getElementById('inputarea').style.backgroundColor = 'rgb(55,55,55)';
    }
    else if(totalWords.value==0){
        wordRemained.innerHTML = 0;
    }
    else{
        var c = Math.abs(diff);
        wordRemained.innerHTML = '+' +c+ ' extra words';                
    }
}