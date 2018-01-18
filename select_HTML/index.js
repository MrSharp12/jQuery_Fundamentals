$(function(){
    $('*').css('font-size', '25px');//selects all css elements, changes font size to 40px

    //$('p').css('text-align','center');//changes all p elements to text align center
    //$('div > p').css('text-align','center');// selects the direct children of the divs
    //$('div ~ p').css('text-align','center');//selects the siblings of the paragraph
    $('div  p').css('text-align','center');//selecting all paragraphs desecendents of divs 

    $('#great').css('background-color', 'orange');//select elements by ID
    $('.orange').css('background-color', 'orange');//select elements by class

    $('div.bluebox').css('font-family', 'san-serif');//changes div font family

    $('p:first-child, p:last-child').css('text-decoration', 'underline');//select first and last child of each p element
    //$('p:last-child').css('text-decoration', 'underline');//selects last child of each p element

    $('[href]').css('color', 'red');//selects href element, changes it to red
    $('li:first-child').css('background-color', 'purple');//selects first child of each li
    $('tr:even').css('background-color', 'grey');//selects even rows in table
    $('tr:odd').css('background-color', 'red');//selects odd rows in table

    $(':input').css('background-color', 'yellow');//selects input element
    $(':Submit').css('background-color', 'lightblue');//selects submit button

    $('div:has(table)').css('background-color', 'brown');//selects any element with a table in it
});