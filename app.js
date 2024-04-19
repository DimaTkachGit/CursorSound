(() => {
    const startBtn = document.getElementById('startBtn');
    const welcomeScreen = document.getElementById('welcomeScreen');
    const soundField = document.getElementById('soundField');
    const stopBtn = document.getElementById('stopBtn');

    startBtn.addEventListener('click', ()=> toggleWelcomeScreen(0));
    stopBtn.addEventListener('click', ()=> {
        stopSound();
        toggleWelcomeScreen(1);
    });
    
    const soundList = [
        { soundName: 'Gb1'},
        { soundName: 'Gb2'},
        { soundName: 'Gb3'},
        { soundName: 'Gb4'},
        { soundName: 'Gb5'},
        { soundName: 'Gb5'},
        { soundName: 'Gb7'},
        { soundName: 'Gb8'}
    ];

    const audioList = soundList.map((el)=> new Audio(`sounds/${el.soundName}.mp3`));

    const renderButtons = () => {
        const html = soundList.map((el, i) => {
            return `
            <div class="col-4 col-md-3" id="${i}">
                <div class="alert alert-info sound-key-btn"></div>
            </div>
        `
        }).join('');
        soundField.innerHTML = html;
    }
    renderButtons();

    let interval;
    const stopSound = () => clearInterval(interval);
    const playSound = (idx) => {
        clearInterval(interval);

        interval = setInterval(()=>{
            audioList[idx].currentTime = 0;
            audioList[idx].play();
        }, 200);
        
    }

    const toggleWelcomeScreen = (show)=>{
        welcomeScreen.style.display = show ? 'block' : 'none';
        soundField.style.pointerEvents = show ? 'none' : 'auto';
    }

    const htmlButtons = document.querySelectorAll('.sound-key-btn');
    htmlButtons.forEach((el, i)=>{
        el.addEventListener('mouseenter', ()=> playSound(i));
    })

})();

