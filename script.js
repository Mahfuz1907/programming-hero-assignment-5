document.getElementById('discover').addEventListener("click", 
    function(event){
        event.preventDefault();
        document.getElementById('back').style.display = 'flex';
        document.getElementById('task').style.display = 'none';
        document.getElementById('theme').style.display = 'none';
        document.getElementById('question').style.display = 'block';
        document.getElementById('main').style.display = 'none';
    })



document.getElementById('back').addEventListener("click", 
    function(event){
        event.preventDefault();
        document.getElementById('back').style.display = 'none';
        document.getElementById('task').style.display = 'flex';
        document.getElementById('theme').style.display = 'flex';
        document.getElementById('question').style.display = 'none';
        document.getElementById('main').style.display = 'grid';
    })

