const playlists = [
    {
        id: 1,
        name: "her love",
        thumbnail: "https://tse1.explicit.bing.net/th/id/OIP.WQV7RGWLNJ9XxSMxvB9BsAHaNJ?cb=thfc1falcon&rs=1&pid=ImgDetMain&o=7&rm=3",
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
        name: "my heart",
        thumbnail: "https://i.pinimg.com/videos/thumbnails/originals/12/f2/08/12f208c4a8175123ad3983704210f7f0.0000000.jpg",
        songs: [
            {
                title: "(I Can't) Forget About You - R5",
                source: "R5 - (I Can't) Forget About You.mp3",
                art: "https://i.scdn.co/image/ab67616d0000b2733b1243ecf2404bdcb4b20ba7"
            },
            {
                title: "Cicada - Good Kid",
                source: "Good Kid - Cicada.mp3",
                art: "https://i.scdn.co/image/ab67616d00001e02efec6510405368ab9d84bba3"
            },
            {
                title: "Just the Way You Are - Bruno Mars",
                source: "Bruno Mars - Just the Way You Are.mp3",
                art: "https://i.scdn.co/image/ab67616d0000b273f6b55ca93bd33211227b502b"
            },
            {
                title: "Summer on You - PRETTYMUCH",
                source: "PRETTYMUCH - Summer on You.mp3",
                art: "https://i.scdn.co/image/ab67616d0000b273bb6b581c8b24164a395df12d"
            },
            {
                title: "Burning For You - Jeremiah Miller",
                source: "Jeremiah Miller - Burning For You.mp3",
                art: "https://i.scdn.co/image/ab67616d0000b273b9f3e667d8c5f9795cc0277a"
            },
            {
                title: "Sugar - Maroon 5",
                source: "Maroon 5 - Sugar.mp3",
                art: "https://i.scdn.co/image/ab67616d0000b273442b53773d50e1b5369bb16c"
            },
            {
                title: "boy for the weekend - marc indigo",
                source: "marc indigo - boy for the weekend.mp3",
                art: "https://i.scdn.co/image/ab67616d0000b2733ca247ffed7e3d0621802983"
            },
            {
                title: "Payphone - Maroon 5, Wiz Khalifa",
                source: "Maroon 5, Wiz Khalifa - Payphone.mp3",
                art: "https://i.scdn.co/image/ab67616d0000b2733119f490f02fcee6514e8604"
            },
            {
                title: "Faster Car - Loving Caliber",
                source: "Loving Caliber - Faster Car.mp3",
                art: "https://i.scdn.co/image/ab67616d0000b273fb31e82b5f6ff9e5ed448dd4"
            },
            {
                title: "Sunday Morning - Maroon 5",
                source: "Maroon 5 - Sunday Morning.mp3",
                art: "https://i.scdn.co/image/ab67616d0000b27392f2d790c6a97b195f66d51e"
            },
            {
                title: "Count On You - Jeremiah Miller",
                source: "Jeremiah Miller - Count On You.mp3",
                art: "https://i.scdn.co/image/ab67616d00001e02627ad93dec42652f131eae71"
            },
            {
                title: "Atlas - Good Kid",
                source: "Good Kid - Atlas.mp3",
                art: "https://i.scdn.co/image/ab67616d00001e02bc352a0a71db080e1f27a482"
            },
            {
                title: "SNAKE EYES - Aries",
                source: "Aries - SNAKE EYES.mp3",
                art: "https://i.scdn.co/image/ab67616d0000b273594e1e0cd39414e9659acd24"
            },
            {
                title: "Summer Uptown - jasontheween",
                source: "jasontheween - Summer Uptown.mp3",
                art: "https://i.scdn.co/image/ab67616d0000b2738737befd2e98d1ecad3abddb"
            },
            {
                title: "Fresh Eyes - Andy Grammer",
                source: "Andy Grammer - Fresh Eyes.mp3",
                art: "https://i.scdn.co/image/ab67616d0000b273d3ef562e372ed65d6f37e991"
            },
            {
                title: "Sex and Lemonade - Nicky Youre, LAIKI",
                source: "Nicky Youre, LAIKI - Sex and Lemonade.mp3",
                art: "https://i.scdn.co/image/ab67616d0000b273ecd970d1d2623b6c7fc6080c"
            },
            {
                title: "First Time - ILLENIUM, iann dior",
                source: "ILLENIUM, iann dior - First Time.mp3",
                art: "https://i.scdn.co/image/ab67616d0000b27383cd2bbbface6537f1bb1083"
            },
            {
                title: "Summertime - NEFFEX",
                source: "NEFFEX - Summertime.mp3",
                art: "https://i.scdn.co/image/ab67616d00001e02419fb15e0576d909f3ce593b"
            },
            {
                title: "Dance Class - Good",
                source: "Good  - Dance Class.mp3",
                art: "https://i.scdn.co/image/ab67616d0000b273e6988b763326740b2bb46650"
            },
            {
                title: "Sunkissed - khai dreams",
                source: "khai dreams - Sunkissed.mp3",
                art: "https://i.scdn.co/image/ab67616d00001e02beb9f908999e5b2e3dbe2ca6"
            },
            {
                title: "Like No One Does - Jake Scott",
                source: "Jake Scott - Like No One Does.mp3",
                art: "https://i.scdn.co/image/ab67616d00001e02beffb622c26cd321ec6131a2"
            },
            {
                title: "Pass Me By - R5",
                source: "R5 - Pass Me By.mp3",
                art: "https://i.scdn.co/image/ab67616d0000b2733b1243ecf2404bdcb4b20ba7"
            },
            {
                title: "Give Me a Kiss - Crash Adams",
                source: "Crash Adams - Give Me a Kiss.mp3",
                art: "https://i.scdn.co/image/ab67616d0000b273b3fad5cb6fdb92f495096475"
            },
            {
                title: "When It Flows - NEFFEX",
                source: "NEFFEX - When It Flows.mp3",
                art: "https://i.scdn.co/image/ab67616d00001e02c386b942dc0d3a7601891696"
            },
            {
                title: "Joyride - Stellar",
                source: "Stellar - Joyride.mp3",
                art: "https://i.scdn.co/image/ab67616d0000b273a88bca0dd47151a8253a2349"
            },
            {
                title: "Never Go Wrong - Nicky Youre, david hugo",
                source: "Nicky Youre, david hugo - Never Go Wrong.mp3",
                art: "https://i.scdn.co/image/ab67616d0000b273ecd970d1d2623b6c7fc6080c"
            },
            {
                title: "Like I Do - J.Tajor",
                source: "J.Tajor - Like I Do.mp3",
                art: "https://i.scdn.co/image/ab67616d0000b273e649cde12610c45e05a10d44"
            },
            {
                title: "Delusional - Fash",
                source: "Fash - Delusional.mp3",
                art: "https://t2.genius.com/unsafe/258x258/https%3A%2F%2Fimages.genius.com%2F4b1942fec427a98caabe4733dfbb802f.680x680x1.jpg"
            },
            {
                title: "New Beginnings - NEFFEX",
                source: "NEFFEX - New Beginnings.mp3",
                art: "https://i.scdn.co/image/ab67616d0000b273b225f6865a01785855f2b183"
            },
            {
                title: "Perfect - Ed Sheeran",
                source: "Ed Sheeran - Perfect.mp3",
                art: "https://i.scdn.co/image/ab67616d0000b273ba5db46f4b838ef6027e6f96"
            },
            {
                title: "Shut Up and Dance - WALK THE MOON",
                source: "WALK THE MOON - Shut Up and Dance.mp3",
                art: "https://i.scdn.co/image/ab67616d0000b273fc39eb9eb3f3824a58f338dc"
            },
        ]
    },
    
];

export default playlists;