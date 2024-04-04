// Get the form element
var form = document.getElementById('inputs');

// Set up the event listener
form.addEventListener('input', function() {
    var title = document.getElementById('title').value;
    var panel1Person1 = document.getElementById('panel1-person1').value;
    var panel1Person2 = document.getElementById('panel1-person2').value;
    var panel2Person1 = document.getElementById('panel2-person1').value;
    var panel2Person2 = document.getElementById('panel2-person2').value;
    var panel3Person1 = document.getElementById('panel3-person1').value;
    var panel3Person2 = document.getElementById('panel3-person2').value;


    document.getElementById('text1').innerText = title;
    document.getElementById('text2').innerText = panel1Person1;
    document.getElementById('text3').innerText = panel1Person2;
    document.getElementById('text4').innerText = panel2Person1;
    document.getElementById('text5').innerText = panel2Person2;
    document.getElementById('text6').innerText = panel3Person1;
    document.getElementById('text7').innerText = panel3Person2;
});

// Trigger the 'input' event manually
var event = new Event('input');
form.dispatchEvent(event);