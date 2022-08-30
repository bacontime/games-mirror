---
title: Random Word Generator
parent: Tools
---

# Random Word Generator

*For Charades, Medium, Goldfish, etc.*  

<div class="fs-8" style="text-align: center;">
<button  onclick='generateWord()' class="btn btn-red text-grey-lt-000">Generate Word</button>
</div>

---

<div id="newOutput" style="font-size: xx-large; text-align: center;"></div>

---

<div id="oldOutputs" style="font-size: large; text-align: center;"></div>


<script>
    function rD(i){return i[Math.floor(Math.random()*i.length)];} //draw a random item from a list.

    wordList = ['River', 'Train', 'Beautiful', 'Chip', 'Ant', 'Table', 'Firefighter', 'Hammer', 'Banana', 'Wedding', 'Shakespeare', 'Rodeo', 'Antarctica', 'Melt', 'Fireworks', 'Muscle', 'Heart', 'Ski', 'Cloud', 'Canoe', 'Cough', 'Waffle', 'Horse', 'Lamp', 'Soldier', 'Brush', 'Angel', 'Halloween', 'Voyage', 'Rollercoaster', 'England', 'Ring', 'Chalk', 'Nose', 'Ribbon', 'Tropical', 'Ocean', 'Space', 'Boil', 'Wild', 'Turtle', 'Kitchen', 'Actor', 'Cup', 'Ketchup', 'Playground', 'Hero', 'Strike', 'Mexico', 'Oatmeal', 'Camping', 'Slippers', 'North', 'Peel', 'Tree', 'Bicycle', 'Sticky', 'Short', 'Dolphin', 'Bathtub', 'Chef', 'Bat', 'Doughnut', 'Vacation', 'Mug', 'Fence', 'Canada', 'Crawl', 'Machine', 'Tower', 'Maze', 'Pop', 'Flower', 'Cart', 'Tiny', 'Castle', 'Bear', 'Couch', 'Doctor', 'Glove', 'Coffee', 'July Fourth', 'Ghost', 'Thumb', 'Pyramid', 'Fly', 'Cookie', 'Cabin', 'Hawaii', 'Horn', 'Rock', 'Whisky', 'Eagle', 'Blue', 'owl', 'Refrigerator', 'Teacher', 'Ball', 'Pretzel', 'Airport', 'Brother', 'Sky', 'China', 'Trip', 'Danger', 'Eye', 'Equipment', 'Burger', ]


    //test a more complicated version which includes english and chinese translations.

//{english:'',    pinyin:'',    hanzi:'',    symbol:''}

codenamesWords = [
{english:'Moon',    pinyin:'Yuè',    hanzi:'月',    symbol:''},
{english:'Mountain',    pinyin:'Shān',    hanzi:'山',    symbol:''},
{english:'Fire',    pinyin:'Huǒ',    hanzi:'火',    symbol:''},
{english:'Wood',    pinyin:'Mù',    hanzi:'木',    symbol:''},
{english:'Eye',    pinyin:'Mù',    hanzi:'目',    symbol:''},
{english:'Man',    pinyin:'Rén',    hanzi:'人',    symbol:''},
{english:'Hand',    pinyin:'Shǒu',    hanzi:'手',    symbol:''},
{english:'Mouth',    pinyin:'Kǒu',    hanzi:'口',    symbol:''},
{english:'Knife',    pinyin:'Dāo',    hanzi:'刀',    symbol:''},
{english:'Car',    pinyin:'Chē',    hanzi:'车',    symbol:''},
{english:'Net',    pinyin:'Wǎng',    hanzi:'网',    symbol:''},
{english:'Jade',    pinyin:'Yù',    hanzi:'玉',    symbol:''},
{english:'Soil',    pinyin:'Tǔ',    hanzi:'土',    symbol:''},
{english:'Plum',    pinyin:'Méi',    hanzi:'梅',    symbol:''},
{english:'Board',    pinyin:'Bǎn',    hanzi:'板',    symbol:''},
{english:'Scepter',    pinyin:'Rúyì',    hanzi:'如意',    symbol:''},
{english:'Turtle',    pinyin:'Guī',    hanzi:'龟',    symbol:''},
{english:'Radish',    pinyin:'Luóbo',    hanzi:'萝卜',    symbol:''},
{english:'Egg',    pinyin:'Dàn',    hanzi:'蛋',    symbol:''},
{english:'Chair',    pinyin:'Yǐzi',    hanzi:'椅子',    symbol:''},
{english:'Cellphone',    pinyin:'Shǒujī',    hanzi:'手机',    symbol:''},
{english:'Noon',    pinyin:'Zhōngwǔ',    hanzi:'中午',    symbol:''},
{english:'ENGLISH',    pinyin:'Wàimiàn',    hanzi:'外面',    symbol:''},
{english:'Beer',    pinyin:'Píjiǔ',    hanzi:'啤酒',    symbol:''},
{english:'Weekend',    pinyin:'Zhōumò',    hanzi:'周末',    symbol:''},
{english:'Basketball',    pinyin:'Lánqiú',    hanzi:'篮球',    symbol:''},
{english:'Water',    pinyin:'Shuǐ',    hanzi:'水',    symbol:''},
{english:'Movie',    pinyin:'Diànyǐng',    hanzi:'电影',    symbol:''},
{english:'Today',    pinyin:'Jīntiān',    hanzi:'今天',    symbol:''},
{english:'Money',    pinyin:'Qián',    hanzi:'钱',    symbol:''},
{english:'Photo',    pinyin:'Zhàopiàn',    hanzi:'照片',    symbol:''},
{english:'Cat',    pinyin:'Māo',    hanzi:'猫',    symbol:''},
{english:'Daughter',    pinyin:'Nǚér',    hanzi:'女儿',    symbol:''},
{english:'Son',    pinyin:'Érzi',    hanzi:'儿子',    symbol:''},
{english:'Little Brother',    pinyin:'Dìdi',    hanzi:'弟弟',    symbol:''},
{english:'Little Sister',    pinyin:'Mèimei',    hanzi:'妹妹',    symbol:''},
{english:'United States',    pinyin:'Měiguó',    hanzi:'美国',    symbol:''},
{english:'Fish',    pinyin:'Yú',    hanzi:'鱼',    symbol:''},
{english:'Shrimp',    pinyin:'Xiā',    hanzi:'虾',    symbol:''},
{english:'Beef',    pinyin:'Niúròu',    hanzi:'牛肉',    symbol:''},
{english:'Mutton',    pinyin:'Yángròu',    hanzi:'羊肉',    symbol:''},
{english:'Vowel',    pinyin:'Yuányīn',    hanzi:'元音',    symbol:''},
{english:'First Name',    pinyin:'Míngzi',    hanzi:'名字',    symbol:''},
{english:'China',    pinyin:'Zhōngguó',    hanzi:'中国',    symbol:''},
{english:'Book',    pinyin:'Shū',    hanzi:'书',    symbol:''},
{english:'Dog',    pinyin:'Gǒu',    hanzi:'狗',    symbol:''},
{english:'House',    pinyin:'Fángzi',    hanzi:'房子',    symbol:''},
{english:'Student',    pinyin:'Xuéshēng',    hanzi:'学生',    symbol:''},
{english:'Teacher',    pinyin:'Lǎoshī',    hanzi:'老师',    symbol:''},
{english:'Coffee',    pinyin:'Kāfēi',    hanzi:'咖啡',    symbol:''},
{english:'Father',    pinyin:'Bàba',    hanzi:'爸爸',    symbol:''},
{english:'Mother',    pinyin:'Māma',    hanzi:'妈妈',    symbol:''},
{english:'Big Brother',    pinyin:'Gēge',    hanzi:'哥哥',    symbol:''},
{english:'Big Sister',    pinyin:'Jiějie',    hanzi:'姐姐',    symbol:''},
{english:'Woman',    pinyin:'Nǚ',    hanzi:'女',    symbol:''},
{english:'Peace',    pinyin:'Ān',    hanzi:'安',    symbol:''},
{english:'Fruit',    pinyin:'Guǒ',    hanzi:'果',    symbol:''},
{english:'Field',    pinyin:'Tián',    hanzi:'田',    symbol:''},
{english:'Gold',    pinyin:'Jīn',    hanzi:'金',    symbol:''},
{english:'Silver',    pinyin:'Yín',    hanzi:'银',    symbol:''},
{english:'Lead',    pinyin:'Qiān',    hanzi:'铅',    symbol:''},
{english:'Tin',    pinyin:'Xī',    hanzi:'锡',    symbol:''},
{english:'Copper',    pinyin:'Tóng',    hanzi:'铜',    symbol:''},
{english:'Quicksilver',    pinyin:'Gǒng',    hanzi:'汞',    symbol:''},
{english:'Air',    pinyin:'Kōngqì',    hanzi:'空气',    symbol:''},
{english:'Wind',    pinyin:'Fēng',    hanzi:'风',    symbol:''},
{english:'Snow',    pinyin:'Xuě',    hanzi:'雪',    symbol:''},
{english:'Rain',    pinyin:'Yǔ',    hanzi:'雨',    symbol:''},
{english:'Sled',    pinyin:'Xuěqiāo',    hanzi:'雪橇',    symbol:''},
{english:'Squirrel',    pinyin:'Sōngshǔ',    hanzi:'松鼠',    symbol:''},
{english:'Mouse',    pinyin:'Shǔ',    hanzi:'鼠',    symbol:''},
{english:'Rabbit',    pinyin:'Tùzǐ',    hanzi:'兔子',    symbol:''},
{english:'Corgi',    pinyin:'Kē jī',    hanzi:'柯基',    symbol:''},
{english:'Poodle/VIP',    pinyin:'Guìbīn',    hanzi:'贵宾',    symbol:''},
{english:'ENGLISH',    pinyin:'Yēsū',    hanzi:'耶稣',    symbol:''},
{english:'Confucius',    pinyin:'Kǒngzǐ',    hanzi:'孔子',    symbol:''},
{english:'Jesus',    pinyin:'Lǎohǔ',    hanzi:'老虎',    symbol:''},
{english:'Wang Mang',    pinyin:'Wángmǎng',    hanzi:'王莽',    symbol:''},
{english:'Sun Tzu',    pinyin:'Sūnzi',    hanzi:'孙子',    symbol:''},
{english:'Mulan',    pinyin:'Mùlán',    hanzi:'木兰',    symbol:''},
{english:'Yellow River',    pinyin:'Huánghé',    hanzi:'黄河',    symbol:''},
{english:'Spear',    pinyin:'Máo',    hanzi:'矛',    symbol:''},
{english:'Pharoah',    pinyin:'Fǎlǎo',    hanzi:'法老',    symbol:''},
{english:'Moses',    pinyin:'Móxī',    hanzi:'摩西',    symbol:''},
{english:'Anaconda',    pinyin:'Shuǐ mǎng',    hanzi:'水蟒',    symbol:''},
{english:'Hippo',    pinyin:'Hémǎ',    hanzi:'河马',    symbol:''},
{english:'Ghost',    pinyin:'Guǐ',    hanzi:'鬼',    symbol:''},
{english:'Witch',    pinyin:'Wū',    hanzi:'巫',    symbol:''},
{english:'Broom',    pinyin:'Sàozhǒu',    hanzi:'扫帚',    symbol:''},
{english:'Castle',    pinyin:'Chéngbǎo',    hanzi:'城堡',    symbol:''},
{english:'Beard',    pinyin:'Húzi',    hanzi:'胡子',    symbol:''},
{english:'England',    pinyin:'Yīngguó',    hanzi:'英国',    symbol:''},
{english:'Yi qi (dino)',    pinyin:'Yìqí',    hanzi:'翼奇',    symbol:''},
{english:'Tooth',    pinyin:'Chǐ',    hanzi:'齿',    symbol:''},
{english:'Feather',    pinyin:'Yǔ',    hanzi:'羽',    symbol:''},
{english:'Rice Cake',    pinyin:'Niángāo',    hanzi:'年糕',    symbol:''},
{english:'Lettuce',    pinyin:'Shēngcài',    hanzi:'生菜',    symbol:''},
{english:'Chopsticks',    pinyin:'Kuàizi',    hanzi:'筷子',    symbol:''},
{english:'Steak',    pinyin:'Niú bā',    hanzi:'牛扒',    symbol:''},
{english:'Kebab',    pinyin:'Kǎoròu',    hanzi:'烤肉',    symbol:''},
{english:'String',    pinyin:'Chuàn',    hanzi:'串',    symbol:''},
{english:'Paper',    pinyin:'Zhǐ',    hanzi:'纸',    symbol:''},
{english:'Shallot',    pinyin:'Cōng',    hanzi:'葱',    symbol:''},
{english:'Electricity',    pinyin:'Diàn',    hanzi:'电',    symbol:''},
{english:'Gravity',    pinyin:'Zhòng',    hanzi:'重',    symbol:''},
{english:'Atom',    pinyin:'Yuánzǐ',    hanzi:'原子',    symbol:''},
{english:'Radiation',    pinyin:'Fúshè',    hanzi:'辐射',    symbol:''},
{english:'Acid',    pinyin:'Fúshè',    hanzi:'酸',    symbol:''},
]

    critterWords = [
        //animal-mammal
        {english:"Monkey",    pinyin:"",    hanzi:"",     symbol:"🐒"},
        {english:"Gorilla",    pinyin:"",    hanzi:"",     symbol:"🦍\uFE0F"},
        {english:"Dog",    pinyin:"",    hanzi:"",     symbol:"🐩"},
        {english:"Cat",    pinyin:"",    hanzi:"",     symbol:"🐈"},
        {english:"Tiger",    pinyin:"",    hanzi:"",     symbol:"🐅"},
        {english:"Horse",    pinyin:"",    hanzi:"",     symbol:"🐎"},
        {english:"Unicorn",    pinyin:"",    hanzi:"",     symbol:"🦄"},
        {english:"Deer",    pinyin:"",    hanzi:"",     symbol:"🦌"},
        {english:"Cow",    pinyin:"",    hanzi:"",     symbol:"🐄"},
        {english:"Pig",    pinyin:"",    hanzi:"",     symbol:"🐖"},
        {english:"Goat",    pinyin:"",    hanzi:"",     symbol:"🐐"},
        {english:"Camel",    pinyin:"",    hanzi:"",     symbol:"🐫"},
        {english:"Llama",    pinyin:"",    hanzi:"",     symbol:"🦙"},
        {english:"Giraffe",    pinyin:"",    hanzi:"",     symbol:"🦒"},
        {english:"Elephant",    pinyin:"",    hanzi:"",     symbol:"🐘"},
        {english:"Rhino",    pinyin:"",    hanzi:"",     symbol:"🦏"},
        {english:"Hippo",    pinyin:"",    hanzi:"",     symbol:"🦛"},
        {english:"Rat",    pinyin:"",    hanzi:"",     symbol:"🐀"},
        {english:"Rabbit",    pinyin:"",    hanzi:"",     symbol:"🐇"},
        {english:"Squirrel",    pinyin:"",    hanzi:"",     symbol:"🐿"},
        {english:"Hedgehog",    pinyin:"",    hanzi:"",     symbol:"🦔"},
        {english:"Bat",    pinyin:"",    hanzi:"",     symbol:"🦇"},
        {english:"Sloth",    pinyin:"",    hanzi:"",     symbol:"🦥"},
        {english:"Otter",    pinyin:"",    hanzi:"",     symbol:"🦦"},
        {english:"Skunk",    pinyin:"",    hanzi:"",     symbol:"🦨"},
        {english:"Kangaroo",    pinyin:"",    hanzi:"",     symbol:"🦘"},
        //animal-bird
        {english:"Rooster",    pinyin:"",    hanzi:"",     symbol:"🐓"},
        {english:"Penguin",    pinyin:"",    hanzi:"",     symbol:"🐧"},
        {english:"Duck",    pinyin:"",    hanzi:"",     symbol:"🦆"},
        {english:"Owl",    pinyin:"",    hanzi:"",     symbol:"🦉"},
        {english:"Flamingo",    pinyin:"",    hanzi:"",     symbol:"🦩"},
        {english:"Peacock",    pinyin:"",    hanzi:"",     symbol:"🦚"},
        //animal-amphibian
        {english:"Frog",    pinyin:"",    hanzi:"",     symbol:"🐸"},
        //animal-reptile
        {english:"Alligator",    pinyin:"",    hanzi:"",     symbol:"🐊"},
        {english:"Turtle",    pinyin:"",    hanzi:"",     symbol:"🐢"},
        {english:"Snake",    pinyin:"",    hanzi:"",     symbol:"🐍"},
        {english:"Dragon",    pinyin:"",    hanzi:"",     symbol:"🐉"},
        {english:"T-Rex",    pinyin:"",    hanzi:"",     symbol:"🐉"},
        //animal-marine
        {english:"Dolphin",    pinyin:"",    hanzi:"",     symbol:"🐬"},
        {english:"Fish",    pinyin:"",    hanzi:"",     symbol:"🐟"},
        {english:"Puffer Fish",    pinyin:"",    hanzi:"",     symbol:"🐡"},
        {english:"Shark",    pinyin:"",    hanzi:"",     symbol:"🦈"},
        {english:"Octopus",    pinyin:"",    hanzi:"",     symbol:"🐙"},
        //animal-bug
        {english:"Snail",    pinyin:"",    hanzi:"",     symbol:"🐌"},
        {english:"Butterfly",    pinyin:"",    hanzi:"",     symbol:"🦋"},
        {english:"Bee",    pinyin:"",    hanzi:"",     symbol:"🐝"},
        {english:"Cricket",    pinyin:"",    hanzi:"",     symbol:"🦗"},
        {english:"Spider",    pinyin:"",    hanzi:"",     symbol:"🕷"},
        {english:"Scorpion",    pinyin:"",    hanzi:"",     symbol:"🦂"},
        {english:"Mosquito",    pinyin:"",    hanzi:"",     symbol:"🦟"},
        {english:"Worm",    pinyin:"",    hanzi:"",     symbol:"🪱"},
        {english:"Microbe",    pinyin:"",    hanzi:"",     symbol:"🦠"},
        //food-asian / food-marine
        {english:"Crab",    pinyin:"",    hanzi:"",     symbol:"🦀"},
        {english:"Lobster",    pinyin:"",    hanzi:"",     symbol:"🦞"},
        {english:"Oyster",    pinyin:"",    hanzi:"",     symbol:"🦪"},
    ]

    natureWords = [
        //time
        {english:'Hourglass',    pinyin:'',    hanzi:'',    symbol:'⌛'},
        {english:'Alarm Clock',    pinyin:'',    hanzi:'',    symbol:'⏰'},
        //plants
        {english:"Flower",    pinyin:"",    hanzi:"",     symbol:"🌺"},
        {english:"Tree",    pinyin:"",    hanzi:"",     symbol:"🌲"},
        {english:"Cactus",    pinyin:"",    hanzi:"",     symbol:"🌵\uFE0F"},
        {english:"Leaf",    pinyin:"",    hanzi:"",     symbol:"🍁\uFE0F"},
        //place-map
        {english:"Earth",    pinyin:"",    hanzi:"",     symbol:"🌏"},
        {english:"Map",    pinyin:"",    hanzi:"",     symbol:"🗺"},
        {english:"Compass",    pinyin:"",    hanzi:"",     symbol:"🧭"},
        //place-geographic
        {english:"Mountain",    pinyin:"",    hanzi:"",     symbol:"⛰"},
        {english:"Volcano",    pinyin:"",    hanzi:"",     symbol:"🌋"},
        //sky & weather
        {english:"Moon",    pinyin:"",    hanzi:"",     symbol:"🌙"},
        {english:"Sun",    pinyin:"",    hanzi:"",     symbol:"☀"},
        {english:"Star",    pinyin:"",    hanzi:"",     symbol:"⭐"},
        {english:"Comet",    pinyin:"",    hanzi:"",     symbol:"🌠"},
        {english:"Cloud",    pinyin:"",    hanzi:"",     symbol:"☁"},
        {english:"Snow",    pinyin:"",    hanzi:"",     symbol:"❄"},
        {english:"Lightning",    pinyin:"",    hanzi:"",     symbol:"⚡"},
        {english:"Tornado",    pinyin:"",    hanzi:"",     symbol:"🌪"},
        {english:"Wind",    pinyin:"",    hanzi:"",     symbol:"🌬"},
        {english:"Rainbow",    pinyin:"",    hanzi:"",     symbol:"🌈"},
        {english:"Umbrella",    pinyin:"",    hanzi:"",     symbol:"☂"},
        {english:"Snowman",    pinyin:"",    hanzi:"",     symbol:"☃"},
        {english:"Fire",    pinyin:"",    hanzi:"",     symbol:"🔥"},
        {english:"Water",    pinyin:"",    hanzi:"",     symbol:"💧"},
        {english:"Ocean",    pinyin:"",    hanzi:"",     symbol:"🌊"},
    ]

    foodWords = [
        {english:'Apple',    pinyin:'',    hanzi:'',    symbol:'🍎'},
        {english:'Banana',    pinyin:'',    hanzi:'',    symbol:'🍌'},
        {english:'Coconut',    pinyin:'',    hanzi:'',    symbol:'🥥'},
        {english:'Mushroom',    pinyin:'',    hanzi:'',    symbol:'🍄'},
        {english:'Egg',    pinyin:'',    hanzi:'',    symbol:'🥚'},
        {english:'Cooking',    pinyin:'',    hanzi:'',    symbol:'🍳'},
        {english:'Popcorn',    pinyin:'',    hanzi:'',    symbol:'🍿'},
        {english:'Salt',    pinyin:'',    hanzi:'',    symbol:'🧂'},
        {english:'Beer',    pinyin:'',    hanzi:'',    symbol:'🍺'},
        {english:'Straw',    pinyin:'',    hanzi:'',    symbol:'🥤'},
        {english:'Ice',    pinyin:'',    hanzi:'',    symbol:'🧊'},
        {english:'Chopsticks',    pinyin:'',    hanzi:'',    symbol:'🥢'},
    ];


    personWords = [
        //face-costume
        {english:'Poo',    pinyin:'',    hanzi:'',    symbol:'💩'},
        {english:'Clown',    pinyin:'',    hanzi:'',    symbol:'🤡'},
        {english:'Ghost',    pinyin:'',    hanzi:'',    symbol:'👻'},
        {english:'Robot',    pinyin:'',    hanzi:'',    symbol:'🤖'},
        //hands
        {english:'Nail Polish',    pinyin:'',    hanzi:'',    symbol:'💅'},
        {english:'Selfie',    pinyin:'',    hanzi:'',    symbol:'🤳'},
        //body-parts
        {english:'Bicep',    pinyin:'',    hanzi:'',    symbol:'💪'},
        {english:'Foot',    pinyin:'',    hanzi:'',    symbol:'🦶'},
        {english:'Ear',    pinyin:'',    hanzi:'',    symbol:'👂'},
        {english:'Nose',    pinyin:'',    hanzi:'',    symbol:'👃'},
        {english:'Brain',    pinyin:'',    hanzi:'',    symbol:'🧠'},
        {english:'Heart',    pinyin:'',    hanzi:'',    symbol:'🫀'},
        {english:'Lungs',    pinyin:'',    hanzi:'',    symbol:'🫁'},
        {english:'Tooth',    pinyin:'',    hanzi:'',    symbol:'🦷'},
        {english:'Bone',    pinyin:'',    hanzi:'',    symbol:'🦴'},
        {english:'Eyes',    pinyin:'',    hanzi:'',    symbol:'👀'},
        {english:'Tongue',    pinyin:'',    hanzi:'',    symbol:'👅'},
        //person
        {english:'Baby',    pinyin:'',    hanzi:'',    symbol:'👶'},
        {english:'Beard',    pinyin:'',    hanzi:'',    symbol:'🧔'},
        {english:'Old Person',    pinyin:'',    hanzi:'',    symbol:'🧓'},
        //person-role
        {english:'Doctor',    pinyin:'',    hanzi:'',    symbol:'🧑‍⚕️'},
        {english:'Judge',    pinyin:'',    hanzi:'',    symbol:'🧑‍⚖️'},
        {english:'Farmer',    pinyin:'',    hanzi:'',    symbol:'🧑‍🌾'},
        {english:'Firefighter',    pinyin:'',    hanzi:'',    symbol:'🧑‍🚒'},
        {english:'Police',    pinyin:'',    hanzi:'',    symbol:'👮'},
        {english:'Princess',    pinyin:'',    hanzi:'',    symbol:'👸'},
        {english:'Pregnant',    pinyin:'',    hanzi:'',    symbol:'🤰'},
        //person-fantasy
        {english:'Angel',    pinyin:'',    hanzi:'',    symbol:'👼'},
        {english:'Santa Claus',    pinyin:'',    hanzi:'',    symbol:'🎅'},
        {english:'Superhero',    pinyin:'',    hanzi:'',    symbol:'🦸'},
        {english:'Wizard',    pinyin:'',    hanzi:'',    symbol:'🧙'},
        {english:'Fairy',    pinyin:'',    hanzi:'',    symbol:'🧚'},
        {english:'Vampire',    pinyin:'',    hanzi:'',    symbol:'🧛'},
        {english:'Mermaid',    pinyin:'',    hanzi:'',    symbol:'🧜'},
        {english:'Zombie',    pinyin:'',    hanzi:'',    symbol:'🧟'},
    ];

    artifactWords = [
        //transport-air
        {english:'Airplane',    pinyin:'',    hanzi:'',    symbol:'🛩'},
        {english:'Helicopter',    pinyin:'',    hanzi:'',    symbol:'🚁'},
        {english:'Rocketship',    pinyin:'',    hanzi:'',    symbol:'🚀'},
        {english:'Alien',    pinyin:'',    hanzi:'',    symbol:'🛸'},
        //transport-ground
        {english:'Train',    pinyin:'',    hanzi:'',    symbol:'🚂'},
        {english:'Car',    pinyin:'',    hanzi:'',    symbol:'🚗'},
        {english:'Wheelchair',    pinyin:'',    hanzi:'',    symbol:'🦽'},
        {english:'Scooter',    pinyin:'',    hanzi:'',    symbol:'🛴'},
        {english:'Skateboard',    pinyin:'',    hanzi:'',    symbol:'🛹'},
        //event
        {english:'Christmas Tree',    pinyin:'',    hanzi:'',    symbol:'🎄'},
        {english:'Fireworks',    pinyin:'',    hanzi:'',    symbol:'🎆'},
        //sport / game
        {english:'Yo-Yo',    pinyin:'',    hanzi:'',    symbol:'🪀'},
        {english:'Kite',    pinyin:'',    hanzi:'',    symbol:'🪁'},
        {english:'Billiards/Pool',    pinyin:'',    hanzi:'',    symbol:'🎱'},
        {english:'Video Games',    pinyin:'',    hanzi:'',    symbol:'🕹'},
        //arts & crafts
        {english:'Dice',    pinyin:'',    hanzi:'',    symbol:'🎲'},
        {english:'Chess',    pinyin:'',    hanzi:'',    symbol:'♟'},
        {english:'Acting',    pinyin:'',    hanzi:'',    symbol:'🎭'},
        {english:'Painting',    pinyin:'',    hanzi:'',    symbol:'🎨'},
        //musical-instrument
        {english:'Saxophone',    pinyin:'',    hanzi:'',    symbol:'🎷'},
        {english:'Accordian',    pinyin:'',    hanzi:'',    symbol:'🪗'},
        {english:'Guitar',    pinyin:'',    hanzi:'',    symbol:'🎸'},
        {english:'Piano',    pinyin:'',    hanzi:'',    symbol:'🎹'},
        {english:'Trumpet',    pinyin:'',    hanzi:'',    symbol:'🎺'},
        {english:'Violin',    pinyin:'',    hanzi:'',    symbol:'🎻'},
        {english:'Drum',    pinyin:'',    hanzi:'',    symbol:'🥁'},
        //light & video
        {english:'Television',    pinyin:'',    hanzi:'',    symbol:'📺'},
        {english:'Camera',    pinyin:'',    hanzi:'',    symbol:'📷'},
        {english:'Magnifying Glass',    pinyin:'',    hanzi:'',    symbol:'🔍'},
        {english:'Candle',    pinyin:'',    hanzi:'',    symbol:'🕯'},
        {english:'Lightbulb',    pinyin:'',    hanzi:'',    symbol:'💡'},
        //book-paper
        {english:'Book',    pinyin:'',    hanzi:'',    symbol:'📖'},
        {english:'Newspaper',    pinyin:'',    hanzi:'',    symbol:'📰'},
        //writing / office
        {english:'Pencil',    pinyin:'',    hanzi:'',    symbol:'✏'},
        {english:'Scissors',    pinyin:'',    hanzi:'',    symbol:'✂'},
        {english:'Trash',    pinyin:'',    hanzi:'',    symbol:'🗑'},
        //lock / tool
        {english:'Key',    pinyin:'',    hanzi:'',    symbol:'🗝'},
        {english:'Hammer',    pinyin:'',    hanzi:'',    symbol:'🔨'},
        {english:'Pickax',    pinyin:'',    hanzi:'',    symbol:'⛏'},
        {english:'Gun',    pinyin:'',    hanzi:'',    symbol:'🔫'},
        {english:'Bow and Arrow',    pinyin:'',    hanzi:'',    symbol:'🏹'},
        {english:'Saw',    pinyin:'',    hanzi:'',    symbol:'🪚'},
        {english:'Screwdriver',    pinyin:'',    hanzi:'',    symbol:'🪛'},
        {english:'Magnet',    pinyin:'',    hanzi:'',    symbol:'🧲'},
        //science / medical
        {english:'Telescope',    pinyin:'',    hanzi:'',    symbol:'🔭'},
        {english:'Syringe',    pinyin:'',    hanzi:'',    symbol:'💉'},
        {english:'Stethoscope',    pinyin:'',    hanzi:'',    symbol:'🩺'},
        //household
        {english:'Chair',    pinyin:'',    hanzi:'',    symbol:'🪑'},
        {english:'Toilet',    pinyin:'',    hanzi:'',    symbol:'🚽'},
        {english:'Plunger',    pinyin:'',    hanzi:'',    symbol:'🪠'},
        {english:'Shower',    pinyin:'',    hanzi:'',    symbol:'🚿'},
        {english:'Shave',    pinyin:'',    hanzi:'',    symbol:'🪒'},
        {english:'Broom',    pinyin:'',    hanzi:'',    symbol:'🧹'},
        {english:'Toilet Paper',    pinyin:'',    hanzi:'',    symbol:'🧻'},
        {english:'Soap',    pinyin:'',    hanzi:'',    symbol:'🧼'},
        {english:'Toothbrush',    pinyin:'',    hanzi:'',    symbol:'🪥'},
        {english:'Fire Extinguisher',    pinyin:'',    hanzi:'',    symbol:'🧯'},
        //other-object / flags / symbols
        {english:'Pirate',    pinyin:'',    hanzi:'',    symbol:'🏴‍☠️'},
    ];


    actionWords = [
        //person-activity
        {english:'Haircut',    pinyin:'',    hanzi:'',    symbol:'💇'},
        {english:'Dancing',    pinyin:'',    hanzi:'',    symbol:'💃'},
        {english:'Climbing',    pinyin:'',    hanzi:'',    symbol:'🧗'},
        //person-sport
        {english:'Fencing',    pinyin:'',    hanzi:'',    symbol:'🤺'},
        {english:'Horse Racing',    pinyin:'',    hanzi:'',    symbol:'🏇'},
        {english:'Snowboarding',    pinyin:'',    hanzi:'',    symbol:'🏂'},
        {english:'Golfing',    pinyin:'',    hanzi:'',    symbol:'🏌'},
        {english:'Surfing',    pinyin:'',    hanzi:'',    symbol:'🏄‍'},
        {english:'Rowing',    pinyin:'',    hanzi:'',    symbol:'🛶'},
        {english:'Swimming',    pinyin:'',    hanzi:'',    symbol:'🏊'},
        {english:'Lifting Weights',    pinyin:'',    hanzi:'',    symbol:'🏋'},
        {english:'Bike',    pinyin:'',    hanzi:'',    symbol:'🚴'},
        {english:'Cartwheel',    pinyin:'',    hanzi:'',    symbol:'🤸'},
        {english:'Wrestling',    pinyin:'',    hanzi:'',    symbol:'🤼'},
        {english:'Juggling',    pinyin:'',    hanzi:'',    symbol:'🤹'},
        //person-resting
        {english:'Sleeping',    pinyin:'',    hanzi:'',    symbol:'🛌'},
        //sport
        {english:'Soccer',    pinyin:'',    hanzi:'',    symbol:'⚽'},
        {english:'Baseball',    pinyin:'',    hanzi:'',    symbol:'⚾'},
        {english:'Basketball',    pinyin:'',    hanzi:'',    symbol:'🏀'},
        {english:'American Football',    pinyin:'',    hanzi:'',    symbol:'🏈'},
        {english:'Tennis',    pinyin:'',    hanzi:'',    symbol:'🎾'},
        {english:'Frisbee',    pinyin:'',    hanzi:'',    symbol:'🥏'},
        {english:'Bowling',    pinyin:'',    hanzi:'',    symbol:'🎳'},
        {english:'Ping Pong',    pinyin:'',    hanzi:'',    symbol:'🏓'},
        {english:'Boxing',    pinyin:'',    hanzi:'',    symbol:'🥊'},
        {english:'Kung Fu',    pinyin:'',    hanzi:'',    symbol:'🥋'},
        {english:'Fishing',    pinyin:'',    hanzi:'',    symbol:'🎣'},
    ];




    wordObjectList = [...critterWords,    ...natureWords, ...foodWords, ...artifactWords, ...personWords, ...actionWords,];

    currentWord = {english:"",    hanzi:"Nope",     symbol:"No"}; //Stores entire word object
    previousWord = ""; //Stores entire word object
    wordLog = ""; //Stores only the english portions of the words

    function generateWord(){
        //Move the words around
        previousWord = currentWord;
        wordLog = previousWord.english + "<br>" + wordLog;
        //Choose a random word from the wordlist
        currentWord = rD(wordObjectList);
        //rewrite page content
        document.getElementById("newOutput").innerHTML = currentWord.english + "<br>" + currentWord.hanzi  + "   " + currentWord.symbol ;
        document.getElementById("oldOutputs").innerHTML = wordLog;


    }



</script>