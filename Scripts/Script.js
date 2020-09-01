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
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, architecto iure. Quod at sint doloremque magnam explicabo ratione illo perspiciatis tempore vel dolor, nam ullam, veniam molestias impedit repellendus nisi."
},{
    title: "Clicky Crates",
    image: "Images/ClickyCrates.png",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, architecto iure. Quod at sint doloremque magnam explicabo ratione illo perspiciatis tempore vel dolor, nam ullam, veniam molestias impedit repellendus nisi."
},{
    title: "Rogue Like 2D",
    image: "Images/Rogue.jpg",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, architecto iure. Quod at sint doloremque magnam explicabo ratione illo perspiciatis tempore vel dolor, nam ullam, veniam molestias impedit repellendus nisi."
},{
    title: "Flappy Bird",
    image: "Images/Flappy.jpg",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, architecto iure. Quod at sint doloremque magnam explicabo ratione illo perspiciatis tempore vel dolor, nam ullam, veniam molestias impedit repellendus nisi."
},{
    title: "Dumb Runner",
    image: "Images/Dumb Runner.png",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, architecto iure. Quod at sint doloremque magnam explicabo ratione illo perspiciatis tempore vel dolor, nam ullam, veniam molestias impedit repellendus nisi."
},{
    title: "Rollin",
    image: "Images/Rollin.png",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, architecto iure. Quod at sint doloremque magnam explicabo ratione illo perspiciatis tempore vel dolor, nam ullam, veniam molestias impedit repellendus nisi."
},{
    title: "Tic Tac Toe",
    image: "Images/TicTacToe.png",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, architecto iure. Quod at sint doloremque magnam explicabo ratione illo perspiciatis tempore vel dolor, nam ullam, veniam molestias impedit repellendus nisi."
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
