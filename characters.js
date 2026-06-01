const CHARACTERS_DATA = [
    {
        "name":  "Ai Hoshino",
        "anime":  "Oshi no Ko",
        "age":  16,
        "gender":  "Female",
        "height":  151,
        "image":  "assets/images/aihoshino.png",
        "haircolor":  "Purple",
        "animegenre":  "Drama / Mystery"
    },
    {
        "name":  "Akane Ousaki",
        "anime":  "Akane Banashi",
        "age":  18,
        "gender":  "Female",
        "height":  158,
        "image":  "assets/images/akaneousaki.png",
        "haircolor":  "Black / Pink",
        "animegenre":  "Comedy / Shonen / Drama"
    },
    {
        "name":  "Aki Adagaki",
        "anime":  "Masamune-kun's Revenge",
        "age":  16,
        "gender":  "Female",
        "height":  161,
        "image":  "assets/images/akiadagaki.png",
        "haircolor":  "Blue",
        "animegenre":  "Romance / Comedy / School"
    },
    {
        "name":  "Albedo",
        "anime":  "Overlord",
        "age":  25,
        "gender":  "Female",
        "height":  165,
        "image":  "assets/images/albedo.png",
        "haircolor":  "Black",
        "animegenre":  "Action / Fantasy / Isekai"
    },
    {
        "name":  "Alpha",
        "anime":  "The Eminence in Shadow",
        "age":  21,
        "gender":  "Female",
        "height":  165,
        "image":  "assets/images/alpha.png",
        "haircolor":  "Blonde",
        "animegenre":  "Action / Fantasy / Isekai"
    },
    {
        "name":  "Alya Kujou",
        "anime":  "Alya Sometimes Hides Her Feelings in Russian",
        "age":  16,
        "gender":  "Female",
        "height":  163,
        "image":  "assets/images/alyakujou.png",
        "haircolor":  "Silver",
        "animegenre":  "Romance / Comedy / School"
    },
    {
        "name":  "Astolfo",
        "anime":  "Fate/Apocrypha",
        "age":  17,
        "gender":  "Male",
        "height":  164,
        "image":  "assets/images/astolfo.png",
        "haircolor":  "Pink",
        "animegenre":  "Action / Fantasy"
    },
    {
        "name":  "Asuka Langley Soryu",
        "anime":  "Neon Genesis Evangelion",
        "age":  14,
        "gender":  "Female",
        "height":  157,
        "image":  "assets/images/Asuka_Langley_Soryu.PNG",
        "haircolor":  "Red",
        "animegenre":  "Action / Mecha / Sci-Fi / Psychological"
    },
    {
        "name":  "Asuna Yuuki",
        "anime":  "Sword Art Online",
        "age":  17,
        "gender":  "Female",
        "height":  168,
        "image":  "assets/images/asunayuuki.png",
        "haircolor":  "Brown",
        "animegenre":  "Action / Fantasy / Isekai / Romance"
    },
    {
        "name":  "Ayame Moriya",
        "anime":  "Blue Box",
        "age":  17,
        "gender":  "Female",
        "height":  160,
        "image":  "assets/images/Ayame.png",
        "haircolor":  "Purple",
        "animegenre":  "Romance / Sports / School"
    },
    {
        "name":  "Ayano Kimishima",
        "anime":  "Alya Sometimes Hides Her Feelings in Russian",
        "age":  15,
        "gender":  "Female",
        "height":  155,
        "image":  "assets/images/ayano.png",
        "haircolor":  "Black",
        "animegenre":  "Romance / Comedy / School"
    },
    {
        "name":  "Beatrice",
        "anime":  "Re:Zero",
        "age":  400,
        "gender":  "Female",
        "height":  140,
        "image":  "assets/images/beatrice.png",
        "haircolor":  "Blonde",
        "animegenre":  "Action / Fantasy / Isekai / Drama"
    },
    {
        "name":  "Beatrix Amerhauser",
        "anime":  "Zom100",
        "age":  21,
        "gender":  "Female",
        "height":  172,
        "image":  "assets/images/beatrix.jpg",
        "haircolor":  "Blonde",
        "animegenre":  "Action / Comedy / Horror"
    },
    {
        "name":  "Big Mom",
        "anime":  "One Piece",
        "age":  68,
        "gender":  "Female",
        "height":  880,
        "image":  "assets/images/bigmom.png",
        "haircolor":  "Pink",
        "animegenre":  "Action / Adventure / Comedy"
    },
    {
        "name":  "Biggie Cheese",
        "anime":  "Barnyard",
        "age":  3,
        "gender":  "Male",
        "height":  45,
        "image":  "assets/images/biggiecheese.png",
        "haircolor":  "Grey",
        "animegenre":  "Comedy"
    },
    {
        "name":  "Blake Belladonna",
        "anime":  "RWBY",
        "age":  17,
        "gender":  "Female",
        "height":  169,
        "image":  "assets/images/blakeBelladonna.jpg",
        "haircolor":  "Black",
        "animegenre":  "Action / Adventure / Fantasy"
    },
    {
        "name":  "Bridget",
        "anime":  "Guilty Gear",
        "age":  17,
        "gender":  "Female",
        "height":  157,
        "image":  "assets/images/bridget.png",
        "haircolor":  "Blonde",
        "animegenre":  "Action"
    },
    {
        "name":  "Burnice",
        "anime":  "Zenless Zone Zero",
        "age":  26,
        "gender":  "Female",
        "height":  163,
        "image":  "assets/images/burnice.png",
        "haircolor":  "Blonde",
        "animegenre":  "Action / Sci-Fi"
    },
    {
        "name":  "C.C.",
        "anime":  "Code Geass",
        "age":  17,
        "gender":  "Female",
        "height":  167,
        "image":  "assets/images/cc.png",
        "haircolor":  "Green",
        "animegenre":  "Action / Mecha / Sci-Fi / Drama"
    },
    {
        "name":  "Canari",
        "anime":  "Pokemon",
        "age":  19,
        "gender":  "Female",
        "height":  168,
        "image":  "assets/images/canari.png",
        "haircolor":  "Yellow / Blue",
        "animegenre":  "Adventure / Fantasy / Comedy"
    },
    {
        "name":  "Ceasar King",
        "anime":  "Zenless Zone Zero",
        "age":  25,
        "gender":  "Female",
        "height":  176,
        "image":  "assets/images/ceasarzzz.png",
        "haircolor":  "Silber",
        "animegenre":  "Action / Sci-Fi"
    },
    {
        "name":  "Chelsea",
        "anime":  "Akame ga Kill",
        "age":  17,
        "gender":  "Female",
        "height":  165,
        "image":  "assets/images/chelsea.png",
        "haircolor":  "Red",
        "animegenre":  "Action / Fantasy / Drama"
    },
    {
        "name":  "Chika Fujiwara",
        "anime":  "Kaguya-sama: Love is War",
        "age":  16,
        "gender":  "Female",
        "height":  154,
        "image":  "assets/images/chika.png",
        "haircolor":  "Pink",
        "animegenre":  "Romance / Comedy / School"
    },
    {
        "name":  "Chinatsu Kano",
        "anime":  "Blue Box",
        "age":  18,
        "gender":  "Female",
        "height":  162,
        "image":  "assets/images/chinatsu.png",
        "haircolor":  "Blonde",
        "animegenre":  "Romance / Sports / School"
    },
    {
        "name":  "Chitose Amane",
        "anime":  "My Dress-Up Darling",
        "age":  18,
        "gender":  "Male",
        "height":  172,
        "image":  "assets/images/chitoseamane.png",
        "haircolor":  "Black",
        "animegenre":  "Romance / Comedy / School / Slice of Life"
    },
    {
        "name":  "Cynthia",
        "anime":  "Pokemon",
        "age":  33,
        "gender":  "Female",
        "height":  168,
        "image":  "assets/images/cynthia.png",
        "haircolor":  "Blonde",
        "animegenre":  "Adventure / Fantasy / Comedy"
    },
    {
        "name":  "Darkness",
        "anime":  "KonoSuba",
        "age":  18,
        "gender":  "Female",
        "height":  165,
        "image":  "assets/images/darkness.png",
        "haircolor":  "Blonde",
        "animegenre":  "Comedy / Fantasy / Isekai"
    },
    {
        "name":  "Delta",
        "anime":  "The Eminence in Shadow",
        "age":  15,
        "gender":  "Female",
        "height":  170,
        "image":  "assets/images/delta.png",
        "haircolor":  "Black",
        "animegenre":  "Action / Fantasy / Isekai"
    },
    {
        "name":  "Elfaria Albis Serfort",
        "anime":  "Wistoria: Wand and Sword",
        "age":  16,
        "gender":  "Female",
        "height":  163,
        "image":  "assets/images/elfariaalbisserfort.png",
        "haircolor":  "Blue",
        "animegenre":  " Action / Fantasy"
    },
    {
        "name":  "Emilia",
        "anime":  "Re:Zero",
        "age":  115,
        "gender":  "Female",
        "height":  164,
        "image":  "assets/images/emilia.png",
        "haircolor":  "Silver",
        "animegenre":  "Action / Fantasy / Isekai / Drama"
    },
    {
        "name":  "Enigmara",
        "anime":  "Pokemon",
        "age":  20,
        "gender":  "Female",
        "height":  150,
        "image":  "assets/images/enigmara.png",
        "haircolor":  "Pink / Silver",
        "animegenre":  "Adventure / Fantasy / Comedy"
    },
    {
        "name":  "Epsilon",
        "anime":  "The Eminence in Shadow",
        "age":  17,
        "gender":  "Female",
        "height":  163,
        "image":  "assets/images/epsilon.png",
        "haircolor":  "Blue",
        "animegenre":  "Action / Fantasy / Isekai"
    },
    {
        "name":  "Erina Nakiri",
        "anime":  "Food Wars!: Shokugeki no Soma",
        "age":  18,
        "gender":  "Female",
        "height":  162,
        "image":  "assets/images/erinanakiri.png",
        "haircolor":  "Orange",
        "animegenre":  "Gourmet / Ecchi"
    },
    {
        "name":  "Erza Scarlet",
        "anime":  "Fairy Tail",
        "age":  19,
        "gender":  "Female",
        "height":  171,
        "image":  "assets/images/erzascarlet.png",
        "haircolor":  "Red",
        "animegenre":  "Action / Adventure / Fantasy"
    },
    {
        "name":  "Felix Argyle",
        "anime":  "Re:Zero",
        "age":  19,
        "gender":  "Male",
        "height":  164,
        "image":  "assets/images/felix.png",
        "haircolor":  "Blonde",
        "animegenre":  "Action / Fantasy / Isekai / Drama"
    },
    {
        "name":  "Fern",
        "anime":  "Frieren: Beyond Journey's End",
        "age":  16,
        "gender":  "Female",
        "height":  159,
        "image":  "assets/images/fern.png",
        "haircolor":  "Purple",
        "animegenre":  "Adventure / Fantasy / Drama"
    },
    {
        "name":  "Flamme",
        "anime":  "Frieren: Beyond Journey's End",
        "age":  30,
        "gender":  "Female",
        "height":  170,
        "image":  "assets/images/flamme.png",
        "haircolor":  "Orange",
        "animegenre":  "Adventure / Fantasy / Drama"
    },
    {
        "name":  "Frieren",
        "anime":  "Frieren: Beyond Journey's End",
        "age":  1000,
        "gender":  "Female",
        "height":  158,
        "image":  "assets/images/frieren.png",
        "haircolor":  "Silver",
        "animegenre":  "Adventure / Fantasy / Drama"
    },
    {
        "name":  "Fubuki",
        "anime":  "One Punch Man",
        "age":  23,
        "gender":  "Female",
        "height":  167,
        "image":  "assets/images/fubuki.png",
        "haircolor":  "Black / Green",
        "animegenre":  "Action / Comedy / Supernatural"
    },
    {
        "name":  "Gardevoir",
        "anime":  "Pokemon",
        "age":  0,
        "gender":  "Anders",
        "height":  160,
        "image":  "assets/images/guardevoir.png",
        "haircolor":  "Green",
        "animegenre":  "Adventure / Fantasy / Comedy"
    },
    {
        "name":  "Haku",
        "anime":  "Naruto",
        "age":  16,
        "gender":  "Male",
        "height":  165,
        "image":  "assets/images/haku.png",
        "haircolor":  "Black",
        "animegenre":  "Action / Adventure / Fantasy"
    },
    {
        "name":  "Haru Aomi",
        "anime":  "Chitose in the Ramune Bottle",
        "age":  17,
        "gender":  "Female",
        "height":  142,
        "image":  "assets/images/haru.png",
        "haircolor":  "Blonde",
        "animegenre":  "Romance / Drama / School"
    },
    {
        "name":  "Hatsune Miku",
        "anime":  "Vocaloid",
        "age":  16,
        "gender":  "Female",
        "height":  158,
        "image":  "assets/images/hatsunemiku.png",
        "haircolor":  "Blue",
        "animegenre":  "Music"
    },
    {
        "name":  "Hideyoshi Kinoshita",
        "anime":  "Baka and Test",
        "age":  16,
        "gender":  "Male",
        "height":  171,
        "image":  "assets/images/hideyoshi.png",
        "haircolor":  "Brown",
        "animegenre":  "Comedy / School"
    },
    {
        "name":  "Hikari Hoshimiya",
        "anime":  "Haibaras Teenage New Game+",
        "age":  16,
        "gender":  "Female",
        "height":  157,
        "image":  "assets/images/hikarihoshimiya.png",
        "haircolor":  "Blonde",
        "animegenre":  "Comedy / Romance"
    },
    {
        "name":  "Himari",
        "anime":  "Can a Boy-Girl-Friendship survive?",
        "age":  16,
        "gender":  "Female",
        "height":  160,
        "image":  "assets/images/himari.png",
        "haircolor":  "Blue",
        "animegenre":  "Romance / Comedy / School"
    },
    {
        "name":  "Hina Chono",
        "anime":  "Blue Box",
        "age":  16,
        "gender":  "Female",
        "height":  162,
        "image":  "assets/images/hinachono.png",
        "haircolor":  "Pink",
        "animegenre":  "Romance / Sports / School"
    },
    {
        "name":  "Hinata Hyuga",
        "anime":  "Naruto",
        "age":  16,
        "gender":  "Female",
        "height":  163,
        "image":  "assets/images/hinatahyuga.png",
        "haircolor":  "Black",
        "animegenre":  "Action / Adventure / Fantasy"
    },
    {
        "name":  "Historia Reiss",
        "anime":  "Attack on Titan",
        "age":  15,
        "gender":  "Female",
        "height":  154,
        "image":  "assets/images/historia.png",
        "haircolor":  "Blonde",
        "animegenre":  "Action / Drama / Thriller / Fantasy"
    },
    {
        "name":  "Holo",
        "anime":  "Spice and Wolf",
        "age":  600,
        "gender":  "Female",
        "height":  165,
        "image":  "assets/images/holo.png",
        "haircolor":  "Brown",
        "animegenre":  "Adventure / Fantasy / Romance"
    },
    {
        "name":  "Horikita Suzune",
        "anime":  "Classroom of the Elite",
        "age":  16,
        "gender":  "Female",
        "height":  163,
        "image":  "assets/images/horikitasuzune.png",
        "haircolor":  "Black",
        "animegenre":  "Drama / School / Mystery"
    },
    {
        "name":  "Ichika Nakano",
        "anime":  "The Quintessential Quintuplets",
        "age":  17,
        "gender":  "Female",
        "height":  164,
        "image":  "assets/images/ichika.jpg",
        "haircolor":  "Pink",
        "animegenre":  "Romance / Comedy / School"
    },
    {
        "name":  "Ino Yamanaka",
        "anime":  "Naruto",
        "age":  16,
        "gender":  "Female",
        "height":  163,
        "image":  "assets/images/ino.png",
        "haircolor":  "Blonde",
        "animegenre":  "Action / Adventure / Fantasy"
    },
    {
        "name":  "Iris",
        "anime":  "Fire Force",
        "age":  16,
        "gender":  "Female",
        "height":  158,
        "image":  "assets/images/iris.jpg",
        "haircolor":  "Blonde",
        "animegenre":  "Action / Fantasy / Supernatural"
    },
    {
        "name":  "Iroha Isshiki",
        "anime":  "My Teen Romantic Comedy SNAFU",
        "age":  16,
        "gender":  "Female",
        "height":  158,
        "image":  "assets/images/irohaisshiki.png",
        "haircolor":  "Blonde",
        "animegenre":  "Romance / Comedy / Drama / School"
    },
    {
        "name":  "Iroha Sakayori",
        "anime":  "Cosmic Princess Kaguya",
        "age":  16,
        "gender":  "Female",
        "height":  156,
        "image":  "assets/images/cpkIroha.png",
        "haircolor":  "Purple",
        "animegenre":  "Action / Sci-Fi / Supernatural"
    },
    {
        "name":  "Itsuki Nakano",
        "anime":  "The Quintessential Quintuplets",
        "age":  17,
        "gender":  "Female",
        "height":  164,
        "image":  "assets/images/itsuki.jpg",
        "haircolor":  "Pink",
        "animegenre":  "Romance / Comedy / School"
    },
    {
        "name":  "Kaguya Shinomiya",
        "anime":  "Kaguya-sama: Love is War",
        "age":  17,
        "gender":  "Female",
        "height":  158,
        "image":  "assets/images/Kaguya.png",
        "haircolor":  "Black",
        "animegenre":  "Romance / Comedy / School"
    },
    {
        "name":  "Kaguya-Hime",
        "anime":  "Cosmic Princess Kaguya",
        "age":  2000,
        "gender":  "Female",
        "height":  156,
        "image":  "assets/images/cpkKaguya.png",
        "haircolor":  "Blonde",
        "animegenre":  "Action / Sci-Fi / Supernatural"
    },
    {
        "name":  "Kana Arima",
        "anime":  "Oshi no Ko",
        "age":  18,
        "gender":  "Female",
        "height":  151,
        "image":  "assets/images/Kana.png",
        "haircolor":  "Red",
        "animegenre":  "Drama / Mystery"
    },
    {
        "name":  "Kanne Lawine",
        "anime":  "Frieren: Beyond Journey's End",
        "age":  16,
        "gender":  "Female",
        "height":  165,
        "image":  "assets/images/les.png",
        "haircolor":  "Orange / Silver",
        "animegenre":  "Adventure / Fantasy / Drama"
    },
    {
        "name":  "Kaoruko Waguri",
        "anime":  "The Fragrant Flower Blooms Within You",
        "age":  16,
        "gender":  "Female",
        "height":  144,
        "image":  "assets/images/waguri.png",
        "haircolor":  "Black",
        "animegenre":  "Romance / School / Slice of Life"
    },
    {
        "name":  "Karane Inda",
        "anime":  "100 Girlfriends Who Really, Really, Really, Really, Really Love You",
        "age":  17,
        "gender":  "Female",
        "height":  160,
        "image":  "assets/images/karaneinda.png",
        "haircolor":  "Orange",
        "animegenre":  "Romance / Comedy / School"
    },
    {
        "name":  "Kasane Teto",
        "anime":  "UTAU",
        "age":  31,
        "gender":  "Female",
        "height":  155,
        "image":  "assets/images/kasaneTeto.png",
        "haircolor":  "Red",
        "animegenre":  "Music"
    },
    {
        "name":  "Kasumi Miwa",
        "anime":  "Jujutsu Kaisen",
        "age":  16,
        "gender":  "Female",
        "height":  160,
        "image":  "assets/images/kasumi.png",
        "haircolor":  "Blue",
        "animegenre":  "Action / Supernatural / School"
    },
    {
        "name":  "Kei Karuizawa",
        "anime":  "Classroom of the Elite",
        "age":  16,
        "gender":  "Female",
        "height":  156,
        "image":  "assets/images/keikaruizawa.png",
        "haircolor":  "Blonde",
        "animegenre":  "Drama / School / Mystery"
    },
    {
        "name":  "Kirara Hoshi",
        "anime":  "Jujutsu Kaisen",
        "age":  18,
        "gender":  "Male",
        "height":  158,
        "image":  "assets/images/kirara.png",
        "haircolor":  "Black",
        "animegenre":  "Action / Supernatural / School"
    },
    {
        "name":  "Kobeni Higashiyama",
        "anime":  "Chainsaw Man",
        "age":  20,
        "gender":  "Female",
        "height":  166,
        "image":  "assets/images/kobeni.png",
        "haircolor":  "Brown",
        "animegenre":  "Action / Horror / Supernatural"
    },
    {
        "name":  "Kohaku",
        "anime":  "Dr. Stone",
        "age":  16,
        "gender":  "Female",
        "height":  167,
        "image":  "assets/images/kohakuStone.png",
        "haircolor":  "Blonde",
        "animegenre":  "Action / Adventure / Sci-Fi"
    },
    {
        "name":  "Kojuro Shuri",
        "anime":  "Masamune-kun's Revenge",
        "age":  16,
        "gender":  "Male",
        "height":  168,
        "image":  "assets/images/shuri.png",
        "haircolor":  "Blonde",
        "animegenre":  "Romance / Comedy / School"
    },
    {
        "name":  "Koyuki Hikawa",
        "anime":  "The Ramparts of Ice",
        "age":  16,
        "gender":  "Female",
        "height":  152,
        "image":  "assets/images/koyukihikawa.png",
        "haircolor":  "Blonde",
        "animegenre":  "Drama / Romance"
    },
    {
        "name":  "Kuina Sazanami",
        "anime":  "Tougen Anki",
        "age":  16,
        "gender":  "Female",
        "height":  160,
        "image":  "assets/images/kuina.png",
        "haircolor":  "Blonde",
        "animegenre":  "Action / Supernatural"
    },
    {
        "name":  "Kurisu Makise",
        "anime":  "Steins;Gate",
        "age":  18,
        "gender":  "Female",
        "height":  160,
        "image":  "assets/images/kurisu.png",
        "haircolor":  "Red",
        "animegenre":  "Sci-Fi / Mystery / Thriller / Drama"
    },
    {
        "name":  "Kyoko Hori",
        "anime":  "Horimiya",
        "age":  16,
        "gender":  "Female",
        "height":  158,
        "image":  "assets/images/hori.png",
        "haircolor":  "Brown",
        "animegenre":  "Romance / Comedy / School / Slice of Life"
    },
    {
        "name":  "Leafa",
        "anime":  "Sword Art Online",
        "age":  16,
        "gender":  "Female",
        "height":  167,
        "image":  "assets/images/leafa.png",
        "haircolor":  "Blonde",
        "animegenre":  "Action / Fantasy / Isekai / Romance"
    },
    {
        "name":  "Leone",
        "anime":  "Akame ga Kill",
        "age":  23,
        "gender":  "Female",
        "height":  170,
        "image":  "assets/images/leone.png",
        "haircolor":  "Blonde",
        "animegenre":  "Action / Fantasy / Drama"
    },
    {
        "name":  "Lucky Cyan",
        "anime":  "To Be Hero X",
        "age":  17,
        "gender":  "Female",
        "height":  160,
        "image":  "assets/images/luckycyan.png",
        "haircolor":  "Cyan",
        "animegenre":  "Action / Sci-Fi / Comedy"
    },
    {
        "name":  "Lucoa",
        "anime":  "Miss Kobayashi's Dragon Maid",
        "age":  26,
        "gender":  "Female",
        "height":  180,
        "image":  "assets/images/lucoa.png",
        "haircolor":  "Green",
        "animegenre":  "Comedy / Slice of Life / Fantasy"
    },
    {
        "name":  "Lucy",
        "anime":  "Cyber Punk: Edgerunners",
        "age":  20,
        "gender":  "Female",
        "height":  173,
        "image":  "assets/images/lucy.png",
        "haircolor":  "White / Pink / Blue",
        "animegenre":  "Action / Sci-Fi / Drama"
    },
    {
        "name":  "Lucy Heartfilia",
        "anime":  "Fairy Tail",
        "age":  17,
        "gender":  "Female",
        "height":  165,
        "image":  "assets/images/lucyft.png",
        "haircolor":  "Blonde",
        "animegenre":  "Action / Adventure / Fantasy"
    },
    {
        "name":  "Mai Sakurajima",
        "anime":  "Rascal Does Not Dream of Bunny Girl Senpai",
        "age":  17,
        "gender":  "Female",
        "height":  164,
        "image":  "assets/images/maisakurajima.png",
        "haircolor":  "Black",
        "animegenre":  "Romance / Drama / Supernatural / School"
    },
    {
        "name":  "Makima",
        "anime":  "Chainsaw Man",
        "age":  24,
        "gender":  "Female",
        "height":  173,
        "image":  "assets/images/makima.png",
        "haircolor":  "Red",
        "animegenre":  "Action / Horror / Supernatural"
    },
    {
        "name":  "Maomao",
        "anime":  "The Apothecary Diaries",
        "age":  17,
        "gender":  "Female",
        "height":  152,
        "image":  "assets/images/maomao.png",
        "haircolor":  "Green",
        "animegenre":  "Mystery / Drama / Historical"
    },
    {
        "name":  "Marin Kitagawa",
        "anime":  "My Dress-Up Darling",
        "age":  15,
        "gender":  "Female",
        "height":  165,
        "image":  "assets/images/marinkitagawa.png",
        "haircolor":  "Blonde",
        "animegenre":  "Romance / Comedy / School / Slice of Life"
    },
    {
        "name":  "Maruzensky",
        "anime":  "Uma Musume",
        "age":  23,
        "gender":  "Female",
        "height":  164,
        "image":  "assets/images/maruzensky.png",
        "haircolor":  "Brown",
        "animegenre":  "Sports / Comedy / School"
    },
    {
        "name":  "Masha Kujo",
        "anime":  "Alya Sometimes Hides Her Feelings in Russian",
        "age":  17,
        "gender":  "Female",
        "height":  160,
        "image":  "assets/images/masha.png",
        "haircolor":  "Brown",
        "animegenre":  "Romance / Comedy / School"
    },
    {
        "name":  "Matiere",
        "anime":  "Pokemon",
        "age":  30,
        "gender":  "Female",
        "height":  173,
        "image":  "assets/images/matiere.jpg",
        "haircolor":  "Black",
        "animegenre":  "Adventure / Fantasy / Comedy"
    },
    {
        "name":  "Mavuika",
        "anime":  "Genshin Impact",
        "age":  26,
        "gender":  "Female",
        "height":  173,
        "image":  "assets/images/mavuika.png",
        "haircolor":  "Rot",
        "animegenre":  "Action / Adventure / Fantasy"
    },
    {
        "name":  "Megumin",
        "anime":  "KonoSuba",
        "age":  14,
        "gender":  "Female",
        "height":  152,
        "image":  "assets/images/megumin.png",
        "haircolor":  "Brown",
        "animegenre":  "Comedy / Fantasy / Isekai"
    },
    {
        "name":  "Merlin",
        "anime":  "The Seven Deadly Sins",
        "age":  30,
        "gender":  "Female",
        "height":  177,
        "image":  "assets/images/merlin.png",
        "haircolor":  "Black",
        "animegenre":  "Action / Adventure / Fantasy / Romance"
    },
    {
        "name":  "Mikasa Ackerman",
        "anime":  "Attack on Titan",
        "age":  15,
        "gender":  "Female",
        "height":  170,
        "image":  "assets/images/mikasa.png",
        "haircolor":  "Black",
        "animegenre":  "Action / Drama / Thriller / Fantasy"
    },
    {
        "name":  "Miki Azumi",
        "anime":  "The Ramparts of Ice",
        "age":  16,
        "gender":  "Female",
        "height":  152,
        "image":  "assets/images/mikiazumi.png",
        "haircolor":  "Blonde",
        "animegenre":  "Drama / Romance"
    },
    {
        "name":  "Miko Iino",
        "anime":  "Kaguya-sama: Love is War",
        "age":  16,
        "gender":  "Female",
        "height":  160,
        "image":  "assets/images/mikoiino.png",
        "haircolor":  "Brown",
        "animegenre":  "Romance / Comedy / School"
    },
    {
        "name":  "Miko Yotsuya",
        "anime":  "Mieruko-chan",
        "age":  16,
        "gender":  "Female",
        "height":  160,
        "image":  "assets/images/miko.png",
        "haircolor":  "Black",
        "animegenre":  "Horror / Supernatural / School"
    },
    {
        "name":  "Miku Nakano",
        "anime":  "The Quintessential Quintuplets",
        "age":  17,
        "gender":  "Female",
        "height":  164,
        "image":  "assets/images/mikunakano.png",
        "haircolor":  "Pink",
        "animegenre":  "Romance / Comedy / School"
    },
    {
        "name":  "Miku Sakura",
        "anime":  "I want to end this Love-Game",
        "age":  15,
        "gender":  "Female",
        "height":  154,
        "image":  "assets/images/mikusakura.png",
        "haircolor":  "Black",
        "animegenre":  "Romance / Comedy / School"
    },
    {
        "name":  "Miori Motomiya",
        "anime":  "Haibaras Teenage New Game+",
        "age":  16,
        "gender":  "Female",
        "height":  156,
        "image":  "assets/images/miorimotomiya.png",
        "haircolor":  "Black",
        "animegenre":  "Comedy / Romance"
    },
    {
        "name":  "Mirko",
        "anime":  "My Hero Academia",
        "age":  27,
        "gender":  "Female",
        "height":  159,
        "image":  "assets/images/mirko.png",
        "haircolor":  "White",
        "animegenre":  "Action / School / Supernatural"
    },
    {
        "name":  "Misa Amane",
        "anime":  "Death Note",
        "age":  19,
        "gender":  "Female",
        "height":  152,
        "image":  "assets/images/misa.jpg",
        "haircolor":  "Blonde",
        "animegenre":  "Mystery / Thriller / Psychological / Supernatural"
    },
    {
        "name":  "Misato Katsuragi",
        "anime":  "Neon Genesis Evangelion",
        "age":  29,
        "gender":  "Female",
        "height":  163,
        "image":  "assets/images/mistao.png",
        "haircolor":  "Black",
        "animegenre":  "Action / Mecha / Sci-Fi / Psychological"
    },
    {
        "name":  "Mitsuri Kanroji",
        "anime":  "Demon Slayer",
        "age":  19,
        "gender":  "Female",
        "height":  167,
        "image":  "assets/images/mitsuri.png",
        "haircolor":  "Pink / Green",
        "animegenre":  "Action / Fantasy / Supernatural"
    },
    {
        "name":  "Miyu Suzuki",
        "anime":  "You and I are Polar Opposites",
        "age":  16,
        "gender":  "Female",
        "height":  160,
        "image":  "assets/images/suzuki.png",
        "haircolor":  "Pink",
        "animegenre":  "Romance / Comedy / School"
    },
    {
        "name":  "Momo Ayase",
        "anime":  "Dandadan",
        "age":  17,
        "gender":  "Female",
        "height":  162,
        "image":  "assets/images/momo.png",
        "haircolor":  "Brown",
        "animegenre":  "Action / Comedy / Romance / Supernatural"
    },
    {
        "name":  "Mona",
        "anime":  "Genshin Impact",
        "age":  19,
        "gender":  "Female",
        "height":  160,
        "image":  "assets/images/mona.png",
        "haircolor":  "Black",
        "animegenre":  "Action / Adventure / Fantasy"
    },
    {
        "name":  "Mt. Lady",
        "anime":  "My Hero Academia",
        "age":  23,
        "gender":  "Female",
        "height":  162,
        "image":  "assets/images/mtlady.png",
        "haircolor":  "Blonde",
        "animegenre":  "Action / School / Supernatural"
    },
    {
        "name":  "Nagisa Shiota",
        "anime":  "Assassination Classroom",
        "age":  15,
        "gender":  "Male",
        "height":  169,
        "image":  "assets/images/nagisa.png",
        "haircolor":  "Blue",
        "animegenre":  "Action / Comedy"
    },
    {
        "name":  "Najimi Osana",
        "anime":  "Komi Can't Communicate",
        "age":  16,
        "gender":  "Male",
        "height":  168,
        "image":  "assets/images/najimi.jpg",
        "haircolor":  "Pink",
        "animegenre":  "Romance / Comedy / School"
    },
    {
        "name":  "Nami",
        "anime":  "One Piece",
        "age":  20,
        "gender":  "Female",
        "height":  170,
        "image":  "assets/images/nami.png",
        "haircolor":  "Orange",
        "animegenre":  "Action / Adventure / Comedy"
    },
    {
        "name":  "Nanase",
        "anime":  "Chitose in the Ramune Bottle",
        "age":  16,
        "gender":  "Female",
        "height":  158,
        "image":  "assets/images/nanase.png",
        "haircolor":  "Black",
        "animegenre":  "Romance / Drama / School"
    },
    {
        "name":  "Nazuna Nanakusa",
        "anime":  "Call of the Night",
        "age":  39,
        "gender":  "Female",
        "height":  158,
        "image":  "assets/images/nazuna.png",
        "haircolor":  "Silver / Pink",
        "animegenre":  "Romance / Supernatural"
    },
    {
        "name":  "Nefertari Vivi",
        "anime":  "One Piece",
        "age":  16,
        "gender":  "Female",
        "height":  169,
        "image":  "assets/images/vivi.jpg",
        "haircolor":  "Blue",
        "animegenre":  "Action / Adventure / Comedy"
    },
    {
        "name":  "Nico Robin",
        "anime":  "One Piece",
        "age":  30,
        "gender":  "Female",
        "height":  188,
        "image":  "assets/images/nicorobin.png",
        "haircolor":  "Black",
        "animegenre":  "Action / Adventure / Comedy"
    },
    {
        "name":  "Nino Nakano",
        "anime":  "The Quintessential Quintuplets",
        "age":  17,
        "gender":  "Female",
        "height":  164,
        "image":  "assets/images/ninonakano.png",
        "haircolor":  "Pink",
        "animegenre":  "Romance / Comedy / School"
    },
    {
        "name":  "Nobara Kugisaki",
        "anime":  "Jujutsu Kaisen",
        "age":  16,
        "gender":  "Female",
        "height":  160,
        "image":  "assets/images/nobara.png",
        "haircolor":  "Brown",
        "animegenre":  "Action / Supernatural / School"
    },
    {
        "name":  "Noi Komazawa",
        "anime":  "Cosmic Princess Kaguya",
        "age":  20,
        "gender":  "Male",
        "height":  171,
        "image":  "assets/images/cpkNoi.png",
        "haircolor":  "Black",
        "animegenre":  "Action / Sci-Fi / Supernatural"
    },
    {
        "name":  "Noreason",
        "anime":  "Uma Musume",
        "age":  18,
        "gender":  "Female",
        "height":  160,
        "image":  "assets/images/noreason.png",
        "haircolor":  "Brown",
        "animegenre":  "Sports / Comedy / School"
    },
    {
        "name":  "Nowa Sugaya",
        "anime":  "My Dress-Up Darling",
        "age":  17,
        "gender":  "Female",
        "height":  158,
        "image":  "assets/images/nowa.png",
        "haircolor":  "Black / Red",
        "animegenre":  "Romance / Comedy / School / Slice of Life"
    },
    {
        "name":  "Osaragi",
        "anime":  "Sakamoto Days",
        "age":  21,
        "gender":  "Female",
        "height":  175,
        "image":  "assets/images/osaragi.png",
        "haircolor":  "Black",
        "animegenre":  "Action / Comedy"
    },
    {
        "name":  "Ouka Shiunji",
        "anime":  "Children of the Shiunji Family",
        "age":  16,
        "gender":  "Female",
        "height":  162,
        "image":  "assets/images/ouka.png",
        "haircolor":  "Pink",
        "animegenre":  "Romance / Comedy / School"
    },
    {
        "name":  "Pencilgon",
        "anime":  "Shangri-La Frontier",
        "age":  24,
        "gender":  "Female",
        "height":  165,
        "image":  "assets/images/pencilgon.png",
        "haircolor":  "Purple",
        "animegenre":  "Action / Fantasy / Isekai"
    },
    {
        "name":  "Poemu Kohinata",
        "anime":  "The Klutzy Class Monitor and the Girl with the Short Skirt",
        "age":  16,
        "gender":  "Female",
        "height":  163,
        "image":  "assets/images/poemukohinata.png",
        "haircolor":  "Blonde",
        "animegenre":  "Comedy / Romance"
    },
    {
        "name":  "Power",
        "anime":  "Chainsaw Man",
        "age":  18,
        "gender":  "Female",
        "height":  169,
        "image":  "assets/images/Power.png",
        "haircolor":  "Blonde / Pink",
        "animegenre":  "Action / Horror / Supernatural"
    },
    {
        "name":  "Queen",
        "anime":  "To Be Hero X",
        "age":  27,
        "gender":  "Female",
        "height":  180,
        "image":  "assets/images/queen.png",
        "haircolor":  "White",
        "animegenre":  "Action / Sci-Fi / Comedy"
    },
    {
        "name":  "Raiha Uesugi",
        "anime":  "The Quintessential Quintuplets",
        "age":  14,
        "gender":  "Female",
        "height":  147,
        "image":  "assets/images/raihauesugi.png",
        "haircolor":  "Black",
        "animegenre":  "Romance / Comedy / School"
    },
    {
        "name":  "Rebecca",
        "anime":  "Cyber Punk: Edgerunners",
        "age":  18,
        "gender":  "Female",
        "height":  164,
        "image":  "assets/images/rebecca.png",
        "haircolor":  "Cyan",
        "animegenre":  "Action / Sci-Fi / Drama"
    },
    {
        "name":  "Rem",
        "anime":  "Re:Zero",
        "age":  17,
        "gender":  "Female",
        "height":  154,
        "image":  "assets/images/rem.png",
        "haircolor":  "Blue",
        "animegenre":  "Action / Fantasy / Isekai / Drama"
    },
    {
        "name":  "Revy",
        "anime":  "Black Lagoon",
        "age":  24,
        "gender":  "Female",
        "height":  165,
        "image":  "assets/images/revy.jpg",
        "haircolor":  "Brown",
        "animegenre":  "Action / Thriller"
    },
    {
        "name":  "Reze",
        "anime":  "Chainsaw Man",
        "age":  19,
        "gender":  "Female",
        "height":  164,
        "image":  "assets/images/Reze.png",
        "haircolor":  "Purple",
        "animegenre":  "Action / Horror / Supernatural"
    },
    {
        "name":  "Rias Gremory",
        "anime":  "High School DxD",
        "age":  17,
        "gender":  "Female",
        "height":  172,
        "image":  "assets/images/rias.png",
        "haircolor":  "Red",
        "animegenre":  "Action / Romance / School / Supernatural"
    },
    {
        "name":  "Rin Tohsaka",
        "anime":  "Fate/stay night",
        "age":  17,
        "gender":  "Female",
        "height":  159,
        "image":  "assets/images/rintohsaka.png",
        "haircolor":  "Black",
        "animegenre":  "Action / Fantasy / Romance"
    },
    {
        "name":  "Ritsuko Akagi",
        "anime":  "Neon Genesis Evangelion",
        "age":  30,
        "gender":  "Female",
        "height":  167,
        "image":  "assets/images/ritsuko.png",
        "haircolor":  "Blonde",
        "animegenre":  "Action / Mecha / Sci-Fi / Psychological"
    },
    {
        "name":  "Riyo Reaper",
        "anime":  "Gachiakuta",
        "age":  16,
        "gender":  "Female",
        "height":  155,
        "image":  "assets/images/riyoreaper.png",
        "haircolor":  "Red",
        "animegenre":  "Action / Adventure / Fantasy"
    },
    {
        "name":  "Rory Mercury",
        "anime":  "Gate",
        "age":  961,
        "gender":  "Female",
        "height":  152,
        "image":  "assets/images/rory.png",
        "haircolor":  "Black",
        "animegenre":  "Action / Fantasy / Isekai"
    },
    {
        "name":  "Ruby Hoshino",
        "anime":  "Oshi no Ko",
        "age":  16,
        "gender":  "Female",
        "height":  158,
        "image":  "assets/images/rubyhoshino.png",
        "haircolor":  "Blonde",
        "animegenre":  "Drama / Mystery"
    },
    {
        "name":  "Ruby Rose",
        "anime":  "RWBY",
        "age":  15,
        "gender":  "Female",
        "height":  158,
        "image":  "assets/images/rubyRose.jpg",
        "haircolor":  "Black / Red",
        "animegenre":  "Action / Adventure / Fantasy"
    },
    {
        "name":  "Rukia Kuchiki",
        "anime":  "Bleach",
        "age":  150,
        "gender":  "Female",
        "height":  144,
        "image":  "assets/images/rukia.png",
        "haircolor":  "Black",
        "animegenre":  "Action / Adventure / Supernatural"
    },
    {
        "name":  "Ryuji Ayukawa",
        "anime":  "Blue Period",
        "age":  16,
        "gender":  "Male",
        "height":  175,
        "image":  "assets/images/ayukawa.png",
        "haircolor":  "Blonde",
        "animegenre":  "Drama / School / Slice of Life"
    },
    {
        "name":  "Saber",
        "anime":  "Fate/stay night",
        "age":  15,
        "gender":  "Female",
        "height":  154,
        "image":  "assets/images/saber.png",
        "haircolor":  "Blonde",
        "animegenre":  "Action / Fantasy / Romance"
    },
    {
        "name":  "Serie",
        "anime":  "Frieren: Beyond Journey's End",
        "age":  2000,
        "gender":  "Female",
        "height":  156,
        "image":  "assets/images/serie.png",
        "haircolor":  "Blonde",
        "animegenre":  "Adventure / Fantasy / Drama"
    },
    {
        "name":  "Shion",
        "anime":  "That Time I Got Reincarnated as a Slime",
        "age":  25,
        "gender":  "Female",
        "height":  180,
        "image":  "assets/images/shion.png",
        "haircolor":  "Purple",
        "animegenre":  "Action / Fantasy / Isekai / Comedy"
    },
    {
        "name":  "Shuna",
        "anime":  "That Time I Got Reincarnated as a Slime",
        "age":  22,
        "gender":  "Female",
        "height":  160,
        "image":  "assets/images/shuna.png",
        "haircolor":  "Pink",
        "animegenre":  "Action / Fantasy / Isekai / Comedy"
    },
    {
        "name":  "Super Sonico",
        "anime":  "Super Sonico",
        "age":  18,
        "gender":  "Female",
        "height":  158,
        "image":  "assets/images/sonico.png",
        "haircolor":  "Pink",
        "animegenre":  "Slice of Life / Comedy"
    },
    {
        "name":  "Sylpha Langlis",
        "anime":  "Reincarnated as the7th Prince",
        "age":  18,
        "gender":  "Female",
        "height":  177,
        "image":  "assets/images/sylpha.png",
        "haircolor":  "Silver",
        "animegenre":  "Action / Fantasy / Isekai"
    },
    {
        "name":  "Tatsumaki",
        "anime":  "One Punch Man",
        "age":  28,
        "gender":  "Female",
        "height":  130,
        "image":  "assets/images/tatsumaki.png",
        "haircolor":  "Green",
        "animegenre":  "Action / Comedy / Supernatural"
    },
    {
        "name":  "Tayuya",
        "anime":  "Naruto",
        "age":  14,
        "gender":  "Female",
        "height":  154,
        "image":  "assets/images/tayuya.jpg",
        "haircolor":  "Red",
        "animegenre":  "Action / Adventure / Fantasy"
    },
    {
        "name":  "Temari",
        "anime":  "Naruto",
        "age":  15,
        "gender":  "Female",
        "height":  159,
        "image":  "assets/images/temari.png",
        "haircolor":  "Blonde",
        "animegenre":  "Action / Adventure / Fantasy"
    },
    {
        "name":  "Totsuka Saika",
        "anime":  "My Teen Romantic Comedy SNAFU",
        "age":  16,
        "gender":  "Male",
        "height":  163,
        "image":  "assets/images/totsuka.png",
        "haircolor":  "Silver",
        "animegenre":  "Romance / Comedy / Drama / School"
    },
    {
        "name":  "Tuka Luna Marceau",
        "anime":  "Gate",
        "age":  16,
        "gender":  "Female",
        "height":  165,
        "image":  "assets/images/TukaLuna.png",
        "haircolor":  "Blonde",
        "animegenre":  "Action / Fantasy / Isekai"
    },
    {
        "name":  "Ubel",
        "anime":  "Frieren: Beyond Journey's End",
        "age":  22,
        "gender":  "Female",
        "height":  166,
        "image":  "assets/images/ubel.png",
        "haircolor":  "Green",
        "animegenre":  "Adventure / Fantasy / Drama"
    },
    {
        "name":  "Umi Asanagi",
        "anime":  "I made friends with the second-prettiest Girl in Class",
        "age":  16,
        "gender":  "Female",
        "height":  160,
        "image":  "assets/images/umiasanagi.jpg",
        "haircolor":  "Black / Blue",
        "animegenre":  "Romance / Comedy / School"
    },
    {
        "name":  "Uzaki Hana",
        "anime":  "Uzaki-chan Wants to Hang Out!",
        "age":  19,
        "gender":  "Female",
        "height":  150,
        "image":  "assets/images/uzaki.png",
        "haircolor":  "Brown",
        "animegenre":  "Romance / Comedy / Slice of Life"
    },
    {
        "name":  "Vladilena Milize",
        "anime":  "86 Eighty-Six",
        "age":  16,
        "gender":  "Female",
        "height":  160,
        "image":  "assets/images/vladilena.png",
        "haircolor":  "Silver",
        "animegenre":  "Action / Sci-Fi / Drama / Mecha"
    },
    {
        "name":  "Weiss Schnee",
        "anime":  "RWBY",
        "age":  17,
        "gender":  "Female",
        "height":  158,
        "image":  "assets/images/weissSchnee.png",
        "haircolor":  "White",
        "animegenre":  "Action / Adventure / Fantasy"
    },
    {
        "name":  "Yachiyo Runami",
        "anime":  "Cosmic Princess Kaguya",
        "age":  8000,
        "gender":  "Female",
        "height":  155,
        "image":  "assets/images/cpkYachiyo.png",
        "haircolor":  "White",
        "animegenre":  "Action / Sci-Fi / Supernatural"
    },
    {
        "name":  "Yamato",
        "anime":  "One Piece",
        "age":  28,
        "gender":  "Female",
        "height":  263,
        "image":  "assets/images/yamato.jpg",
        "haircolor":  "White / Cyan",
        "animegenre":  "Action / Adventure / Comedy"
    },
    {
        "name":  "Yamato Nadeshiko",
        "anime":  "The Klutzy Class Monitor and the Girl with the Short Skirt",
        "age":  16,
        "gender":  "Female",
        "height":  166,
        "image":  "assets/images/yamatonadeshiko.png",
        "haircolor":  "Brown",
        "animegenre":  "Comedy / Romance"
    },
    {
        "name":  "Yang Xiao Long",
        "anime":  "RWBY",
        "age":  17,
        "gender":  "Female",
        "height":  173,
        "image":  "assets/images/yang.png",
        "haircolor":  "Blonde",
        "animegenre":  "Action / Adventure / Fantasy"
    },
    {
        "name":  "Yor Forger",
        "anime":  "Spy x Family",
        "age":  27,
        "gender":  "Female",
        "height":  170,
        "image":  "assets/images/YorForger.png",
        "haircolor":  "Black",
        "animegenre":  "Action / Comedy / Slice of Life"
    },
    {
        "name":  "Yoruichi Shihōin",
        "anime":  "Bleach",
        "age":  350,
        "gender":  "Female",
        "height":  156,
        "image":  "assets/images/yuroichishihouin.png",
        "haircolor":  "Purple",
        "animegenre":  "Action / Adventure / Supernatural"
    },
    {
        "name":  "Yotsuba Nakano",
        "anime":  "The Quintessential Quintuplets",
        "age":  17,
        "gender":  "Female",
        "height":  164,
        "image":  "assets/images/yotsuba.png",
        "haircolor":  "Pink",
        "animegenre":  "Romance / Comedy / School"
    },
    {
        "name":  "Yui Yuigahama",
        "anime":  "My Teen Romantic Comedy SNAFU",
        "age":  16,
        "gender":  "Female",
        "height":  160,
        "image":  "assets/images/yuiyuigahama.png",
        "haircolor":  "Orange / Pink",
        "animegenre":  "Romance / Comedy / Drama / School"
    },
    {
        "name":  "Yuki Suou",
        "anime":  "Alya Sometimes Hides Her Feelings in Russian",
        "age":  16,
        "gender":  "Female",
        "height":  158,
        "image":  "assets/images/yuki.png",
        "haircolor":  "Brown",
        "animegenre":  "Romance / Comedy / School"
    },
    {
        "name":  "Yuki Yoshikawa",
        "anime":  "Horimiya",
        "age":  16,
        "gender":  "Female",
        "height":  158,
        "image":  "assets/images/yukihori.png",
        "haircolor":  "Blonde",
        "animegenre":  "Romance / Comedy / School / Slice of Life"
    },
    {
        "name":  "Yuki Yukinoshita",
        "anime":  "My Teen Romantic Comedy SNAFU",
        "age":  17,
        "gender":  "Female",
        "height":  165,
        "image":  "assets/images/yukiyukinoshita.png",
        "haircolor":  "Black",
        "animegenre":  "Romance / Comedy / Drama / School"
    },
    {
        "name":  "Yuu Amami",
        "anime":  "I made friends with the second-prettiest Girl in Class",
        "age":  16,
        "gender":  "Female",
        "height":  160,
        "image":  "assets/images/yuuamami.png",
        "haircolor":  "Blonde",
        "animegenre":  "Romance / Comedy / School"
    },
    {
        "name":  "Yuuko Hiiragei",
        "anime":  "Chitose in the Ramune Bottle",
        "age":  16,
        "gender":  "Female",
        "height":  157,
        "image":  "assets/images/yuuko.png",
        "haircolor":  "Blonde",
        "animegenre":  "Romance / Drama / School"
    },
    {
        "name":  "Yuzuriha",
        "anime":  "Hell's Paradise",
        "age":  27,
        "gender":  "Female",
        "height":  160,
        "image":  "assets/images/yuzuriha.png",
        "haircolor":  "Purple",
        "animegenre":  "Action / Adventure / Supernatural"
    },
    {
        "name":  "Zero Two",
        "anime":  "Darling in the FranXX",
        "age":  17,
        "gender":  "Female",
        "height":  170,
        "image":  "assets/images/zerotwo.png",
        "haircolor":  "Pink",
        "animegenre":  "Action / Romance / Mecha / Sci-Fi / Drama"
    },
    {
        "name":  "Zoro",
        "anime":  "One Piece",
        "age":  21,
        "gender":  "Male",
        "height":  181,
        "image":  "assets/images/zorro.png",
        "haircolor":  "Green",
        "animegenre":  "Action / Adventure / Comedy"
    }
];
