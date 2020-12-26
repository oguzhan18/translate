$(function() {

// Bahasa Yang Didukung ):
var lang1 = [ "auto","hi","en", "it", "fr", "de","zh-cn", "ko", "es", "id", "pt", "ru", "ja","pl","tr"];
var lang1txt = [ "Auto Detect","Hindi","English", "Italy", "French", "Germany","Chinese", "Korean", "Espana", "Bahasa Indonesia", "Portugal", "Russian", "Japanese", "polish","Turkey"];
var lang2 = [ "en","hi","it", "fr", "de","zh-cn", "ko", "es", "id", "pt", "ru", "ja","pl"];
var lang2txt = [ "English","Hindi", "Italy", "France", "Germany","Chinese", "Korea", "Espana", "Bahasa Indonesia", "Portugal", "Russian", "Japanese","polish","Turkey"];

// element utama
var elm = { "lang1": $("#lang1"), "lang2": $("#lang2"), "user": $("#lang1"), "output": $("#lang2"), "userInput": $("#user"), "langOutput": $("#output") }
    
// Importing Options
for (let i in lang1) {  elm.lang1.append(  "<option value='" + lang1[i] + "'>" + lang1txt[i] + "</option>" ); }
for (let i in lang2) { elm.lang2.append( "<option value='" +  lang2[i] + "'>" + lang2txt[i] + "</option>"  );  }

// API penerjemah
function translate() {
    
// memformat text ke URL
var format = elm
 .userInput
 .val()
 .replace(/ /g , '%20');
    
// Menghubungi JSON
$.getJSON( "https://translate.googleapis.com/translate_a/single?client=gtx&sl=" + elm.user.val() + "&tl=" + elm.output.val() + "&dt=t&dt=t&q=" + format,
function(JSON) { var convert = JSON.toString(); var temp =  convert.split(","); elm.langOutput.val(temp[0]); }  );  }
    
// Makanan Element hah):
$("#translate").on("click", function() { translate(); });
$("#clear").on("click", function() {
        elm.userInput.val(null);
        elm.langOutput.val(null);
});
setInterval(function() {
$("#from").text(
$("#lang1").val() );
$("#to").text(
$("#lang2").val() );}, 10); });