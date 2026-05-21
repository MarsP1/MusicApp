const playlists = [
    {
        id: 1,
        name: "Test",
        thumbnail: "https://i.ytimg.com/vi/z1e6AQQ4kkY/sddefault.jpg",
        songs: [
            {
                title: "Little Bit - Lykke Li",
                source: "Lykke Li - Little Bit.mp3",
                art: "https://i.scdn.co/image/ab67616d0000b2731395b8b9e9fb3f8d7039f77d"
                
            },
            {
                title: "Hey Lover - The Daughters of Eve",
                source: "The Daughters of Eve - Hey Lover.mp3",
                art: "https://i.scdn.co/image/ab67616d0000b273c148a2f0d30a396bc2cc359f"
            },
            {
                title: "Heart to Heart - Mac DeMarco",
                source: "Mac DeMarco - Heart To Heart.mp3",
                art: "https://i.scdn.co/image/ab67616d0000b273fa1323bb50728c7489980672"
            },
            {
                title: "Moonlight on the River - Mac DeMarco",
                source: "Mac DeMarco - Moonlight on the River.mp3",
                art: "https://i.scdn.co/image/ab67616d0000b2739f1b21f21b13ff2d3e891f6b"
            },
            {
                title: "K. - Cigarrettes After Sex",
                source: "Cigarrettes After Sex - K..mp3",
                art: "https://i.scdn.co/image/ab67616d0000b27312b69bf576f5e80291f75161"
            },
            {
                title: "My Kind of Woman - Mac DeMarco",
                source: "Mac DeMarco - My Kind of Woman.mp3",
                art: "https://i.scdn.co/image/ab67616d0000b2739d377496c6bc8724b521222d"
            },
            {
                title: "No Other Heart - Mac DeMarco",
                source: "Mac DeMarco - No Other Heart.mp3",
                art: "https://i.scdn.co/image/ab67616d0000b273b395acedffa5fa8e7696aea2"
            },
            {
                title: "Good Looking - Suki Waterhouse",
                source: "Suki Waterhouse - Good Looking.mp3",
                art: "https://i.scdn.co/image/ab67616d0000b27343bff43a592efe047d2ab9ff"
            },
            {
                title: "Apocalypse - Cigarettes After Sex",
                source: "Cigarettes After Sex - Apocalypse.mp3",
                art: "https://i.scdn.co/image/ab67616d0000b27312b69bf576f5e80291f75161"
            },
            {
                title: "Those Eyes - New West",
                source: "New West - Those Eyes.mp3",
                art: "https://i.scdn.co/image/ab67616d0000b273aacd27a096e6e59ff555b46c"
            },
            {
                title: "Always Forever - Cults",
                source: "Cults - Always Forever.mp3",
                art: "https://i.scdn.co/image/ab67616d0000b273b03096e45464122b278aef93"
            },
            {
                title: "For the First Time - Mac DeMarco",
                source: "Mac DeMarco - For the First Time.mp3",
                art: "https://i.scdn.co/image/ab67616d0000b2739f1b21f21b13ff2d3e891f6b"
            },
            {
                title: "Swing Lynn - Harmless",
                source: "Harmless - Swing Lynn.mp3",
                art: "https://i.scdn.co/image/ab67616d0000b273d0e14b42f8e0f01124759cf0"
            },
            {
                title: "Tek It - Cafuné",
                source: "Cafuné - Tek It.mp3",
                art: "https://i.scdn.co/image/ab67616d0000b273e1bcd643827606eae29cc9c4"
            },

            {
                title: "As the World Caves In - Matt Maltese",
                source: "Matt Maltese - As the World Caves In.mp3",
                art: "https://i.scdn.co/image/ab67616d0000b2730180c5f180f4d69298a02543"
            },
            {
                title: "I Love You So - The Walters",
                source: "The Walters - I Love You So.mp3",
                art: "https://i.scdn.co/image/ab67616d0000b2739214ff0109a0e062f8a6cf0f"
            },
            {
                title: "Out of My League - Fitz and The TanTrums",
                source: "Fitz and The TanTrums - Out of My League.mp3",
                art: "https://i.scdn.co/image/ab67616d0000b2735e145eb24e282b9554501a27"
            },
            {
                title: "20191009 I Like Her So - Mac DeMarco",
                source: "Mac DeMarco - 20191009 I Like Her.mp3",
                art: "https://i.scdn.co/image/ab67616d0000b27340461e96808378ae2787a7e4"
            },
            {
                title: "Last Night on Earth - Green Day",
                source: "Green Day - Last Night on Earth.mp3",
                art: "https://i.scdn.co/image/ab67616d0000b273c2ced39899b0d67cd5a724fa"
            },
            {
                title: "Die With A Smile - Lady Gaga, Bruno Mars",
                source: "Lady Gaga, Bruno Mars - Die With A Smile.mp3",
                art: "https://i.scdn.co/image/ab67616d0000b27382ea2e9e1858aa012c57cd45"
            },
            {
                title: "Telephones - Vacations",
                source: "Vacations - Telephones.mp3",
                art: "https://i.scdn.co/image/ab67616d0000b2732eb4d117b70ea7ac2c24e316"
            },
            {
                title: "Treehouse - Alex G, Emily Yacina",
                source: "Alex G, Emily Yacina - Treehouse.mp3",
                art: "https://i.scdn.co/image/ab67616d0000b273eab4a65481d9679fdab3b4a3"
            },
            {
                title: "Kiss Me - Sixpence None The Richer",
                source: "Sixpence None The Richer - Kiss Me.mp3",
                art: "https://i.scdn.co/image/ab67616d0000b273cfc5eea6cfd77e89ed3ac5a4"
            },
            {
                title: "I Only Have Eyes for You - The Flamingos",
                source: "The Flamingos - I Only Have Eyes for You.mp3",
                art: "https://i.scdn.co/image/ab67616d0000b2731ba2d22b62756c8c2d579c14"
            },
            {
                title: "Oh My Angel - Bertha Tillman",
                source: "Bertha Tillman - Oh My Angel.mp3",
                art: "https://i.scdn.co/image/ab67616d0000b273340c8532439d5413bd2484ec"
            },
            {
                title: "Come Back - The Five Stairsteps",
                source: "The Five Stairsteps - Buddha Remastered 2001 - Come Back.mp3",
                art: "https://i.scdn.co/image/ab67616d0000b273b4b2642b767f641a15c9fef1"
            },
            {
                title: "Iris - The Goo Goo Dolls",
                source: "The Goo Goo Dolls - Iris.mp3",
                art: "https://i.scdn.co/image/ab67616d0000b273eda9478c39a21e1cdc6609ca"
            },
            {
                title: "Forever - The Little Dippers",
                source: "The Little Dippers - Forever.mp3",
                art: "https://i.scdn.co/image/ab67616d0000b27305ce6b0edb09c52b3610c3fb"
            },
            {
                title: "You Should've Come Over - Jeff Buckley - Lover",
                source: "Jeff Buckley - Lover, You Should've Come Over.mp3",
                art: "https://i.scdn.co/image/ab67616d0000b273afc2d1d2c8703a10aeded0af"
            },
            {
                title: "Hopelessly Devoted To You - Olivia Newton-John",
                source: "Olivia Newton-John - Hopelessly Devoted To You.mp3",
                art: "https://i.scdn.co/image/ab67616d0000b27392ba13060de52ac305208aca"
            },
            {
                title: "The Boy Is Mine - Brandy, Monica",
                source: "Brandy, Monica - The Boy Is Mine.mp3",
                art: "https://i.scdn.co/image/ab67616d0000b2730e51dd1d3dc50fc541942c7c"
            },
        ]
    },    
    {
        id: 2,
        name: "Playlist 2",
        thumbnail: "https://i.pinimg.com/1200x/21/1c/35/211c354548a872dc63622437075c772b.jpg",
        songs: [
            {
                title: "Wind Of Change - Scorpions",
                source: "Scorpions - Wind Of Change.mp3",
                art: "https://i.scdn.co/image/ab67616d0000b273787674b6a114f98cad6f834b"
            },
            {
                title: "Per sempre sì - Sal Da Vinci",
                source: "Sal Da Vinci - Per sempre sì.mp3",
                art: "https://i.scdn.co/image/ab67616d00001e029fee241bfd5d68e758b4e4e5"
            },
            {
                title: "Swing, Swing - The All-American Rejects",
                source: "The All-American Rejects - Swing, Swing.mp3",
                art: "https://i.scdn.co/image/ab67616d0000b273eba2acd1d78fc80ed234af0b"
            },
            {
                title: "drop dead - Olivia Rodrigo",
                source: "Olivia Rodrigo - drop dead.mp3",
                art: "https://i.scdn.co/image/ab67616d00001e0217f8ce0b3c99965d9a4482e3"
            },
            {
                title: "Oh My My - Ricky Montgomery",
                source: "Ricky Montgomery - Oh My My.mp3",
                art: "https://i.scdn.co/image/ab67616d00001e023ccd8778c5a728ff65eb289f"
            },
            {
                title: "Scotty Doesn't Know - Lustra",
                source: "Lustra - Scotty Doesn't Know.mp3",
                art: "https://i.scdn.co/image/ab67616d0000b273ee515815329b81291adae0dd"
            },
            {
                title: "What a Fool Believes - The Doobie Brothers",
                source: "The Doobie Brothers - What a Fool Believes.mp3",
                art: "https://i.scdn.co/image/ab67616d0000b273ba6340ac3b1653b6ea0e5da5"
            },
            {
                title: "One of These Nights - Eagles",
                source: "Eagles - One of These Nights.mp3",
                art: "https://i.scdn.co/image/ab67616d0000b2735d0a8e54aba5181c79593b94"
            },
            {
                title: "Hemorrhage (In My Hands) - Fuel",
                source: "Fuel - Hemorrhage (In My Hands).mp3",
                art: "https://i.scdn.co/image/ab67616d0000b273e02669b28cb76940fc63bed1"
            },
                        {
                title: "Made In Japan - Buck Owens",
                source: "Buck Owens - Made In Japan.mp3",
                art: "https://i.scdn.co/image/ab67616d0000b2738e5f97a65d6b8baa73c4d58a"
            },
        ]
    },
    { 
        name: "Playlist 3",
        thumbnail: "https://i.pinimg.com/1200x/60/f7/81/60f781946aa41b1c22d755da984f3fa4.jpg",
        songs: [


        ]
    },
    {
       
        name: "Playlist 4",
        thumbnail: "https://i.pinimg.com/736x/81/db/76/81db76f4fed6412ffd5982e15fcad036.jpg",
        songs: [


        ]
    }
];

export default playlists;