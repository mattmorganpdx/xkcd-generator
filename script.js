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

// Function to get GET parameters from URL
function getParams(url) {
    var params = {};
    var parser = document.createElement('a');
    parser.href = url;
    var query = parser.search.substring(1);
    var vars = query.split('&');
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split('=');
        params[pair[0]] = decodeURIComponent(pair[1]);
    }
    return params;
}

// Get the current GET parameters
var params = getParams(window.location.href);

// If there are GET parameters, use them as default values
if (Object.keys(params).length == 7) {
    document.getElementById('title').value = params.title || '';
    document.getElementById('panel1-person1').value = params.panel1Person1 || '';
    document.getElementById('panel1-person2').value = params.panel1Person2 || '';
    document.getElementById('panel2-person1').value = params.panel2Person1 || '';
    document.getElementById('panel2-person2').value = params.panel2Person2 || '';
    document.getElementById('panel3-person1').value = params.panel3Person1 || '';
    document.getElementById('panel3-person2').value = params.panel3Person2 || '';

    // Do this for all your inputs
}

// Get the permalink button
var permalinkButton = document.getElementById('permalink');

// Add event listener to the permalink button
permalinkButton.addEventListener('click', function() {
    var title = document.getElementById('title').value;
    var panel1Person1 = document.getElementById('panel1-person1').value;
    var panel1Person2 = document.getElementById('panel1-person2').value;
    var panel2Person1 = document.getElementById('panel2-person1').value;
    var panel2Person2 = document.getElementById('panel2-person2').value;
    var panel3Person1 = document.getElementById('panel3-person1').value;
    var panel3Person2 = document.getElementById('panel3-person2').value;

    // Construct the URL with the input values as GET parameters
    var url = window.location.origin + window.location.pathname + '?title=' + encodeURIComponent(title) + '&panel1Person1=' + encodeURIComponent(panel1Person1);
    url += '&panel1Person2=' + encodeURIComponent(panel1Person2) + '&panel2Person1=' + encodeURIComponent(panel2Person1) + '&panel2Person2=' + encodeURIComponent(panel2Person2);
    url += '&panel3Person1=' + encodeURIComponent(panel3Person1) + '&panel3Person2=' + encodeURIComponent(panel3Person2);
    // Update the href attribute of the permalink button
    window.location.href = url;
});

// Trigger the 'input' event manually
var event = new Event('input');
form.dispatchEvent(event);