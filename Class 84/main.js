student_array=[];
function submit()
{
    var display_student_array = [];
    for(var j = 1; j <= 4; j++)
    { 

    
var name = document.getElementById("name_of_the_student_"+j).value;
console.log(name);

student_array.push(name);}


console.log(student_array);
var lenght=student_array.length;
console.log(lenght);
for(var k = 0; k <lenght; k++)
{
    display_student_array.push("<h4>NAME - "+ student_array[k] + "</h4>");
    console.log(display_student_array);
}
console.log(display_student_array);
document.getElementById("display_name_with_commas").innerHTML = display_student_array;
var remove_commas = display_student_array.join(" ");
document.getElementById("display_name_without_commas").innerHTML=remove_commas;
}
