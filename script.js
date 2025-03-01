document.getElementById('discover').addEventListener("click", 
    function(){
        document.getElementById('back').style.display = 'flex';
        document.getElementById('task').style.display = 'none';
        document.getElementById('theme').style.display = 'none';
        document.getElementById('question').style.display = 'block';
        document.getElementById('main').style.display = 'none';
    })



document.getElementById('back').addEventListener("click", 
    function(){
        document.getElementById('back').style.display = 'none';
        document.getElementById('task').style.display = 'flex';
        document.getElementById('theme').style.display = 'flex';
        document.getElementById('question').style.display = 'none';
        document.getElementById('main').style.display = 'grid';
    })


function updateCurrentDate() {
    const weekdayElement = document.getElementById('day');
    const dateElement = document.getElementById('date');

    const now = new Date();
    const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };

    const formattedDate = now.toLocaleDateString('en-US', options);


    const [weekday, month, day, year] = formattedDate.split(' ');

    weekdayElement.innerText = `${weekday}`;
    dateElement.innerText = `${month} ${day} ${year}`;
}

updateCurrentDate();



function updateTime(){
    const now = new Date();
    let hours = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();
    let dayNight = '';

    if(hours < 12){
        dayNight = 'AM';
    }else{
        dayNight = 'PM';
    }

    if(hours === 0){
        hours = 12;
    }else if(hours > 12){
        hours -= 12;
    }

    hours = hours.toString().padStart(2, '0');
    minute = minute.toString().padStart(2, '0');
    second = second.toString().padStart(2, '0');


    const formattedTime = `${hours}:${minute}:${second} ${dayNight}`;
    return formattedTime;
}


document.getElementById('clear-history').addEventListener("click", 
    function(){
        let completedPara = document.getElementById('complete-para');
        completedPara.innerHTML = " ";
    }
)


document.getElementById('complete-1').addEventListener("click", 
    function(){
        let taskRemaining = parseInt(document.getElementById('task-remaining').innerText);
        taskRemaining -= 1;
        document.getElementById('task-remaining').innerText = taskRemaining;
        document.getElementById('complete-1').style.opacity = '0.2';

        let taskCompleted = parseInt(document.getElementById('task-completed').innerText);
        taskCompleted += 1;
        document.getElementById('task-completed').innerText = taskCompleted;

        const complete1 = document.getElementById('complete-1');
        complete1.disabled = !complete1.disabled;

        const task1 = document.getElementById('task-1').innerText;

        alert("Board updated successfully");

        const formattedTime = updateTime();

        let p = document.createElement('p');
        p.innerHTML = `
                    <p class="bg-[#F4F7FF] rounded-lg p-3 text-base font-normal">You have Complete The Task ${task1} at ${formattedTime}</p>
        `
        
        let completedPara = document.getElementById('complete-para');
        completedPara.appendChild(p);
    }
)





document.getElementById('complete-2').addEventListener("click", 
    function(){
        let taskRemaining = parseInt(document.getElementById('task-remaining').innerText);
        taskRemaining -= 1;
        document.getElementById('task-remaining').innerText = taskRemaining;
        document.getElementById('complete-2').style.opacity = '0.2';

        let taskCompleted = parseInt(document.getElementById('task-completed').innerText);
        taskCompleted += 1;
        document.getElementById('task-completed').innerText = taskCompleted;

        const complete2 = document.getElementById('complete-2');
        complete2.disabled = !complete2.disabled;

        const task2 = document.getElementById('task-2').innerText;

        alert("Board updated successfully");

        const formattedTime = updateTime();

        let p = document.createElement('p');
        p.innerHTML = `
                    <p class="bg-[#F4F7FF] rounded-lg p-3 text-base font-normal">You have Complete The Task ${task2} at ${formattedTime}</p>
        `
        
        let completedPara = document.getElementById('complete-para');
        completedPara.appendChild(p);
    }
)




document.getElementById('complete-3').addEventListener("click", 
    function(){
        let taskRemaining = parseInt(document.getElementById('task-remaining').innerText);
        taskRemaining -= 1;
        document.getElementById('task-remaining').innerText = taskRemaining;
        document.getElementById('complete-3').style.opacity = '0.2';

        let taskCompleted = parseInt(document.getElementById('task-completed').innerText);
        taskCompleted += 1;
        document.getElementById('task-completed').innerText = taskCompleted;

        const complete3 = document.getElementById('complete-3');
        complete3.disabled = !complete3.disabled;

        const task3 = document.getElementById('task-3').innerText;

        alert("Board updated successfully");

        const formattedTime = updateTime();


        let p = document.createElement('p');
        p.innerHTML = `
                    <p class="bg-[#F4F7FF] rounded-lg p-3 text-base font-normal">You have Complete The Task ${task3} at ${formattedTime}</p>
        `
        
        let completedPara = document.getElementById('complete-para');
        completedPara.append(p);
    }
)




document.getElementById('complete-4').addEventListener("click", 
    function(){
        let taskRemaining = parseInt(document.getElementById('task-remaining').innerText);
        taskRemaining -= 1;
        document.getElementById('task-remaining').innerText = taskRemaining;
        document.getElementById('complete-4').style.opacity = '0.2';

        let taskCompleted = parseInt(document.getElementById('task-completed').innerText);
        taskCompleted += 1;
        document.getElementById('task-completed').innerText = taskCompleted;

        const complete4 = document.getElementById('complete-4');
        complete4.disabled = !complete4.disabled;

        const task4 = document.getElementById('task-4').innerText;

        alert("Board updated successfully");

        const formattedTime = updateTime();



        let p = document.createElement('p');
        p.innerHTML = `
                    <p class="bg-[#F4F7FF] rounded-lg p-3 text-base font-normal">You have Complete The Task ${task4} at ${formattedTime}</p>
        `
        
        let completedPara = document.getElementById('complete-para');
        completedPara.append(p);
    }
)




document.getElementById('complete-5').addEventListener("click", 
    function(){
        let taskRemaining = parseInt(document.getElementById('task-remaining').innerText);
        taskRemaining -= 1;
        document.getElementById('task-remaining').innerText = taskRemaining;
        document.getElementById('complete-5').style.opacity = '0.2';

        let taskCompleted = parseInt(document.getElementById('task-completed').innerText);
        taskCompleted += 1;
        document.getElementById('task-completed').innerText = taskCompleted;

        const complete5 = document.getElementById('complete-5');
        complete5.disabled = !complete5.disabled;

        const task5 = document.getElementById('task-5').innerText;

        alert("Board updated successfully");

        const formattedTime = updateTime();


        let p = document.createElement('p');
        p.innerHTML = `
                    <p class="bg-[#F4F7FF] rounded-lg p-3 text-base font-normal">You have Complete The Task ${task5} at ${formattedTime}</p>
        `
        
        let completedPara = document.getElementById('complete-para');
        completedPara.append(p);
    }
)




document.getElementById('complete-6').addEventListener("click", 
    function(){
        let taskRemaining = parseInt(document.getElementById('task-remaining').innerText);
        taskRemaining -= 1;
        document.getElementById('task-remaining').innerText = taskRemaining;
        document.getElementById('complete-6').style.opacity = '0.2';

        let taskCompleted = parseInt(document.getElementById('task-completed').innerText);
        taskCompleted += 1;
        document.getElementById('task-completed').innerText = taskCompleted;

        const complete6 = document.getElementById('complete-6');
        complete6.disabled = !complete6.disabled;

        const task6 = document.getElementById('task-6').innerText;

        alert("Board updated successfully");

        const formattedTime = updateTime();


        let p = document.createElement('p');
        p.innerHTML = `
                    <p class="bg-[#F4F7FF] rounded-lg p-3 text-base font-normal">You have Complete The Task ${task6} at ${formattedTime}</p>
        `
        
        let completedPara = document.getElementById('complete-para');
        completedPara.append(p);
    }
)








