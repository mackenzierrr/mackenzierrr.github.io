// Name: Mackenzie Langham

let music = [
    {
    name: 'Arcane League of Legends: Season 2 (Soundtrack from the Animated Series)',
    artist:'Arcane, League of Legends',
    image:'assets/ArcaneS2img.jpg',
    genre: 'Soundtrack',
    rating:'8/10',
},{
    name: 'Encore',
    artist:'Caden Cox',
    image:'assets/CadenCoxEncoreimg.jpg',
    genre: 'Punk',
    rating:'7/10',
},{
    name: 'Unreal Unearth: Unending',
    artist:'Hozier',
    image:'assets/hozierUnrealUnearthUnendingimg.jpg',
    genre: 'Alternative/Indie',
    rating:'9/10',
},{
    name: 'ULTRAKILL: Violence (Original Game Soundtrack)',
    artist:'Heaven Pierce Her',
    image:'assets/hakitaViolenceimg.png',
    genre: 'Soundtrack',
    rating:'10/10',
},{
    name: "Heaven's Sense EP",
    artist:'Voice Coils',
    image:'assets/voiceCoilsHeavensSenseimg.jpg',
    genre: 'Alternative/Indie',
    rating:'5/10',
},{
    name: 'Selam Söyle',
    artist:'Nilüfer',
    image:'assets/niluferSelamSoyleimg.jpg',
    genre: 'International Pop',
    rating:'9/10',
},{
    name: 'Symphony of Lungs - BBC Proms at the Royal Albert Hall',
    artist:'Florence & The Machine and Jules Buckley',
    image:'assets/florenceSymphonyOfLungsimg.jpg',
    genre: 'Alternative/Indie',
    rating:'8/10',
},{
    name: 'Audiotree Live',
    artist:'Mitski',
    image:'assets/mitskiAudiotreeLiveimg.jpg',
    genre: 'Alternative/Indie',
    rating:'10/10',
},{
    name: 'Mutter',
    artist:'Rammstein',
    image:'assets/rammsteinMutterimg.jpg',
    genre: 'Industrial Metal',
    rating:'10/10',
},{
    name: 'Symbols',
    artist:'KFMDM',
    image:'assets/kmfdmSymbolsimg.png',
    genre: 'Industrial Metal',
    rating:'6/10',
},{
    name: 'Inevitable',
    artist:'Omar Alejandro',
    image:'assets/omarAlejandroInevitableimg.jpg',
    genre: 'International Pop',
    rating:'6/10',
},{
    name: 'Konna Netlaka',
    artist:'Fairuz',
    image:'assets/fairuzKonnaNetlakaimg.jpg',
    genre: 'International Pop',
    rating:'10/10',
},{
    name: 'The Forever Story (Extended Version)',
    artist:'JID',
    image:'assets/jidTheForeverStoryimg.jpg',
    genre: 'Hip-Hop',
    rating:'9/10',
},{
    name: "Atrocity Exhibition",
    artist:'Danny Brown',
    image:'assets/dannyBrownAtrocityExhibitionimg.jpg',
    genre: 'Hip-Hop',
    rating:'8/10',
},{
    name: 'Scaring the Hoes',
    artist:'JPEGMafia',
    image:'assets/JpegmafiaDannyBrownScaringTheHoesimg.webp',
    genre: 'Hip-Hop',
    rating:'8/10',
},{
    name: 'LOOKATME',
    artist:'Jann',
    image:'assets/jannLookAtMeimg.jpg',
    genre: 'International Pop',
    rating:'5/10',
},{
    name: 'Heart Attack (츄)',
    artist:'LOONA',
    image:'assets/loonaHeartAttackimg.jpg',
    genre: 'International Pop',
    rating:'8/10',
},{
    name: 'Jutrznia Utrenja',
    artist:'Krzysztof Penderecki ',
    image:'assets/krzysztofPendereckiJutrzniaUtrenjaimg.jpg',
    genre: 'Classical',
    rating:'10/10',
},{
    name: 'TV Anime "Attack on Titan" Original Soundtrack',
    artist:'Sawano Hiroyuki',
    image:'assets/sawanoHiroyukiAOTimg.jpg',
    genre: 'Soundtrack',
    rating:'10/10',
},{
    name: 'DTP',
    artist:'Inner Peace',
    image:'assets/innerPeaceDTPimg.jpg',
    genre: 'Punk',
    rating:'6/10',
}]

let container = document.querySelector("#container");

music.forEach(function(music){
    let template = `
    <div class = album>
        <h3>${music.name}</h3>
        <p>${music.artist}</p>
        <p>${music.genre}</p>
        <p>${music.rating}</p>
        <img src="${music.image}"/>
    </div>`

    container.innerHTML += template
})

function filter(genre){
    container.innerHTML = ``
    let filteredArray = music.filter(music => music.genre == genre)
    filteredArray.forEach(item => {
        container.innerHTML += `
    <div class = album>
        <h3>${item.name}</h3>
        <p>${item.artist}</p>
        <p>${item.genre}</p>
        <p>${item.rating}</p>
        <img src="${item.image}"/>
    </div>`;
    });
}

function reset(){
    music.forEach(function(music){
        let template = `
            <div class="album">
                <h3>${music.name}</h3>
                <p>${music.artist}</p>
                <p>${music.genre}</p>
                <p>${music.rating}</p>
                <img src="${music.image}"/>
            </div>`
    container.innerHTML += template;
    })
}