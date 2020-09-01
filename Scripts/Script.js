const elements = {
    buttonLeft: document.querySelector('.unityProjects__left'),
    buttonRight: document.querySelector('.unityProjects__right'),
    unityProjects: document.querySelector('.unityProjects')
};

const buildFirstElement = (item) =>{
    markup = `
    <div class="unityProjects__card unityProjects__card---1">
        <img class="unityProjects__image" src="${item.image}" alt="${item.title} Screen Shot">
        <h2 class="unityProjects__heading heading__secondary"> ${item.title} </h2>
        <p class="unityProjects__description">${item.description}</p>
        <a href="#" class="cta__link unityProjects__link">Download Game</a>
    </div>
    `;
    elements.unityProjects.insertAdjacentHTML("afterbegin",markup);
};

const buildLastElement = (item) =>{
    markup = `
    <div class="unityProjects__card unityProjects__card--5">
        <img class="unityProjects__image" src="${item.image}" alt="${item.title} Screen Shot">
        <h2 class="unityProjects__heading heading__secondary"> ${item.title} </h2>
        <p class="unityProjects__description">${item.description}</p>
        <a href="#" class="cta__link unityProjects__link">Download Game</a>
    </div>
    `;
    elements.unityProjects.insertAdjacentHTML("beforeend",markup);
};

state = {};
state.dataArray = [{
    title: "Tetris",
    image: "Images/Tetris.png",
    description: "Created my first game with unity. Tetris its nothing new but like a old versions the blocks falling down.You will arange them as you score score will update a good music and the lines which are fulled will be vanished."
},{
    title: "Clicky Crates",
    image: "Images/ClickyCrates.png",
    description: "Clicky Crates is game with crates bouncing off the ground with some bad thing stoo i.e skulls and bombs watch out not to click them and score as more as possible. Also you can select the difficulty level as per you want."
},{
    title: "Rogue Like 2D",
    image: "Images/Rogue.jpg",
    description: "Rogue Like 2D game made with the help of Unity Tutorials.This game you many of intermidiate features level loading, Intelligent Enemies and you have to survive with tha given food for as many days as you can Rogue like 2D."
},{
    title: "Flappy Bird",
    image: "Images/Flappy.jpg",
    description: "Flappy Bird is created by me own thanks too the Unity for the assests i was able to made this game Falppy bird is just like any normal Falppy bird game as you Falps around the pillars Avoid them to increase your score."
},{
    title: "Dumb Runner",
    image: "Images/Dumb Runner.png",
    description: "Dumb runner tooks a lot and was only made by me and me though i used the unitya assests again. You have Both the mode i.e 3D and 2D you can toggle between them and it's all about jump crouch and avoid obstacles."
},{
    title: "Rollin",
    image: "Images/Rollin.png",
    description: "Rollin was created with the idea of unity a ball roll with a spawning powerups and the enemies around watch them out they will try to push you downwards avoid them use powerups as bonus for upper hand against them."
},{
    title: "Tic Tac Toe",
    image: "Images/TicTacToe.png",
    description: "My second project in unity Tic Tac Toe thanks unity to guide me throungh out the project and understand the major Basic Concepts of the Unity i.e rendering re-redering setStates and other and toggle betweens buttons."
},{
    title: "Ballon Bumper",
    image: 'Images/BalloonBumper.png',
    description: "Ballon Bumper Simple game nothing much and ballong float like just flappy bird and gathering coins to increase the score though i haven't updated any U.I there but this still a cool game to play and enjoy."
},{
    title: "Car Simulator",
    image: "Images/Car Simulator.png",
    description: "Simple Simulator made by me nothing much and drive car through out the roads and card ajustment with the help of cinemachine and love to dice futher into it But as per i mentioned unity is my hobby not career."
},{
    title: "Hungry Dog Chase",
    image: "Images/HungryDogChase.png",
    description: "Hungry Dog Chase is a good version of switching your 2D 3D view that is togglinh between them and avoid dogs to pass thru your yard the dogs are pretty diffrent and varies in their speed watch out them."
},{
    title: "Stone Paper Scissor",
    image: "Images/StonePaperScissor.png",
    description: "A Simple Stone Paper Scissor game made with the help of unity and some awkward animations because i cannot get the perfect that time i love this game to play i want to make it online between two player."
},{
    title: "Whack A Food",
    image: "Images/WhackAFood.png",
    description: "Whach A food was contructed under the unity as project part and here some food items apears which vanisesh tap them before they vanish to earn more time and score a lot lot more than your last score."
},{
    title: "Soccer",
    image: "Images/Soccer.png",
    description: "Soccer is simple goal defending game just like rolling the powerups spawns and only you can use it against you enemies as a upper hand they continously going towards your goal stop them before they reach there."
}];
state.starts = 6;
state.ends=5;

const deleteExtras = () => {
    const extraLeft = document.querySelector('.unityProjects__card---2');
    const extraRight = document.querySelector('.unityProjects__card--6');
    if(extraLeft){
        extraLeft.parentElement.removeChild(extraLeft);
        buildLastElement(state.dataArray[state.starts]);
    }
    if(extraRight){
        extraRight.parentElement.removeChild(extraRight);
        buildFirstElement(state.dataArray[state.ends]);
    }
};


elements.buttonLeft.addEventListener('click',e=>{
    const first = document.querySelector('.unityProjects__card---1');
    const second = document.querySelector('.unityProjects__card--0');
    const third = document.querySelector('.unityProjects__card--1');
    const fourth = document.querySelector('.unityProjects__card--2');
    const fifth = document.querySelector('.unityProjects__card--3');
    const sixth = document.querySelector('.unityProjects__card--4');
    const seventh = document.querySelector('.unityProjects__card--5');
    first.classList.remove('unityProjects__card---1');
    first.classList.add('unityProjects__card---2');
    second.classList.remove('unityProjects__card--0');
    second.classList.add('unityProjects__card---1');
    third.classList.remove('unityProjects__card--1');
    third.classList.add('unityProjects__card--0');
    fourth.classList.remove('unityProjects__card--2');
    fourth.classList.add('unityProjects__card--1');
    fifth.classList.remove('unityProjects__card--3');
    fifth.classList.add('unityProjects__card--2');
    sixth.classList.remove('unityProjects__card--4');
    sixth.classList.add('unityProjects__card--3');
    seventh.classList.remove('unityProjects__card--5');
    seventh.classList.add('unityProjects__card--4');
    state.starts = (state.starts+1)%state.dataArray.length;
    state.ends = (state.ends+1)%state.dataArray.length;
    setTimeout(deleteExtras,0);

    console.log(state.starts,state.ends);
});

elements.buttonRight.addEventListener('click',e=>{
    const first = document.querySelector('.unityProjects__card---1');
    const second = document.querySelector('.unityProjects__card--0');
    const third = document.querySelector('.unityProjects__card--1');
    const fourth = document.querySelector('.unityProjects__card--2');
    const fifth = document.querySelector('.unityProjects__card--3');
    const sixth = document.querySelector('.unityProjects__card--4');
    const seventh = document.querySelector('.unityProjects__card--5');
    first.classList.remove('unityProjects__card---1');
    first.classList.add('unityProjects__card--0');
    second.classList.remove('unityProjects__card--0');
    second.classList.add('unityProjects__card--1');
    third.classList.remove('unityProjects__card--1');
    third.classList.add('unityProjects__card--2');
    fourth.classList.remove('unityProjects__card--2');
    fourth.classList.add('unityProjects__card--3');
    fifth.classList.remove('unityProjects__card--3');
    fifth.classList.add('unityProjects__card--4');
    sixth.classList.remove('unityProjects__card--4');
    sixth.classList.add('unityProjects__card--5');
    seventh.classList.remove('unityProjects__card---5');
    seventh.classList.add('unityProjects__card--6');
    
    state.starts = state.starts==0?state.dataArray.length-1:state.starts-1;
    state.ends = state.ends==0?state.dataArray.length-1:state.ends-1;
    setTimeout(deleteExtras,0);
    console.log(state.starts,state.ends);
});