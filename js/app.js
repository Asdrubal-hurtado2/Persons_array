const persons = ['']
persons.push('Asdrubal')
persons.push('Cachete')
persons.push('Miguel')
persons.push('Sebastian')

function save(){
    var name = document.getElementById('input').value
    persons.push(name)
}

function showList(){
    document.getElementById('list').innerHTML = "";
    for(var i = 0; i < persons.length; i++){
        document.getElementById('list').innerHTML += "<h5>" + persons[i] + "<h5>"
    }
}
