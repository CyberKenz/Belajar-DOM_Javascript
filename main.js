const player = document.querySelectorAll('div#player ul li img');
const result = document.getElementById('info');
const result2 = document.getElementById('info-2');
const imgComputer = document.querySelector('#img-computer')
const pScore = document.getElementById('scorePlayer')
const compScore = document.getElementById('scoreComputer')
const switchTheme = document.querySelector('div#themeToggle')
const pilihan = [
    {nama : 'Batu', url : 'https://cdn.pixabay.com/photo/2014/03/25/15/26/rock-paper-scissors-296854_640.png'},
    {nama : 'Gunting', url : 'https://cdn.pixabay.com/photo/2014/03/25/15/26/rock-paper-scissors-296853_960_720.png'},
    {nama : 'Kertas', url : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjFHEDokTTnMVZfePPYnEaE4VNKpxoIcDke9QWyn8_SOweMP0Tc7m-xttUiYGyPGJLB-A&usqp=CAU'}

];

function getHasil(computer, player){
    if(computer === player){
        return 'Hasil nya Seri';
    }else if(computer === 'Batu' && player === 'Kertas' || computer === 'Gunting' && player === 'Batu' || computer === 'Kertas' && player === 'Gunting'){
        return 'Anda Menang, dan Komputer Kalah';
    }else{
        return 'Anda Kalah, dan Komputer Menang';
    }
};

function getScore(computer, player){
    let playerScore = parseInt(pScore.textContent) || 0;
    let computerScore = parseInt(compScore.textContent) || 0;

    if (computer === player){
    }else if(computer === 'Batu' && player === 'Kertas' || computer === 'Gunting' && player === 'Batu' || computer === 'Kertas' && player === 'Gunting'){
        playerScore += 1;
    }else{
        computerScore += 1
    }
    pScore.textContent = playerScore
    compScore.textContent = computerScore
};

let imgInterval
function randomImg(){
    if(imgInterval) clearInterval(imgInterval);
    let i = 0;
    imgInterval = setInterval(() => {
    imgComputer.src = pilihan[i].url;
    imgComputer.alt = pilihan[i].nama;
    i++
    if(i >= pilihan.length){
        i = 0;
    }
    }, 100);
};

player.forEach((img, idx) => {
    img.addEventListener('click', () => {
        randomImg()
        setTimeout(() => {
            clearInterval(imgInterval)
        const computerChoice = Math.floor(Math.random() * 3);
        const computer = pilihan[computerChoice].nama;
        const playerChoice = pilihan[idx].nama;
        const player = playerChoice;
        imgComputer.setAttribute('src', `${pilihan[computerChoice].url}`)
        result2.innerHTML = `Dikarenakan anda memilih ${player}, dan komputer memilih ${computer}`
        result.innerHTML = getHasil(computer, player)
        getScore(computer, player)
        }, 1000);
    });
});

switchTheme.addEventListener('click', () => {
    const isDark = document.body.classList.toggle('dark-theme');

    if(isDark){
        document.body.classList.add('text-white')
    }else{
        document.body.classList.remove('text-white')
    }

});