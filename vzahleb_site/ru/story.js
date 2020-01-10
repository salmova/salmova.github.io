var demoLines = [
  {'title': 'Страж'},  
  {'img_bg': ''},
  {'name':'Папа', 'align': 'left-side', 'text':'Ты уже в постели?'},
  {'name':'Лина', 'align': 'right-side', 'text':'Да, пап, что случилось?'},
  {'name':'Папа', 'align': 'left-side', 'text':'Ты закрыла входную дверь?'},
  {'name':'Лина', 'align': 'right-side', 'text':'Не помню...'},
  {'name':'Лина', 'align': 'right-side', 'text':'А разве ты ещё не идёшь домой?'},
  {'name':'Папа', 'align': 'left-side', 'text':'Нет.'},
  {'name':'Папа', 'align': 'left-side', 'text':'Слушай меня внимательно...'},
  {'name':'Папа', 'align': 'left-side', 'text':'Посмотри в окно.'},
  {'name':'Папа', 'align': 'left-side', 'text':'Видишь мужчину?'},
  {'name':'Лина', 'align': 'right-side', 'text':'Ты меня пугаешь.<br>Что происходит?'},
  {'name':'Папа', 'align': 'left-side', 'text':'Посмотри скорее!'},
  {'name':'Лина', 'align': 'right-side', 'text':'О_о папа, кто это?'},
  {'name':'Папа', 'align': 'left-side', 'text':'Не спускай с него глаз!'},
  {'name':'Лина', 'align': 'right-side', 'text':'Ничего не понимаю... Зачем это?'},
  {'name':'Папа', 'align': 'left-side', 'text':'Я серьезно. Смотри, не отрываясь!'},
  {'name':'Папа', 'align': 'left-side', 'text':'И если он будет тебе писать, обещай не отвечать ему!'},
  {'name':'Лина', 'align': 'right-side', 'text':'Что?? С чего это он будет мне писать?'},
  {'name':'Папа', 'align': 'left-side', 'text':'ОБЕЩАЙ!'},
  {'name':'Лина', 'align': 'right-side', 'text':'Хорошо. Но... Тебя ведь здесь нет...'},
  {'name':'Лина', 'align': 'right-side', 'text':'Откуда ты знаешь, что он там, за окном?'},
  {'name':'Лина', 'align': 'right-side', 'text':'ПАПА?!!?!'}
];

let storyRead_0 = [
  {'title': 'Старшая школа'},  
  {'img_bg': '../img/pict_stor1.png'},
  {'name':'Папа', 'align': 'left-side', 'text':'Ты уже в постели?'},
  {'name':'Лина', 'align': 'right-side', 'text':'Да, пап, что случилось?'},
  {'name':'Папа', 'align': 'left-side', 'text':'Ты закрыла входную дверь?'},
  {'name':'Лина', 'align': 'right-side', 'text':'Не помню...'},
  {'name':'Лина', 'align': 'right-side', 'text':'А разве ты ещё не идёшь домой?'},
  {'name':'Папа', 'align': 'left-side', 'text':'Нет.'},
  {'name':'Папа', 'align': 'left-side', 'text':'Слушай меня внимательно...'},
  {'name':'Папа', 'align': 'left-side', 'text':'Посмотри в окно.'},
  {'name':'Папа', 'align': 'left-side', 'text':'Видишь мужчину?'},
  {'name':'Лина', 'align': 'right-side', 'text':'Ты меня пугаешь.<br>Что происходит?'},
  {'name':'Папа', 'align': 'left-side', 'text':'Посмотри скорее!'},
  {'name':'Лина', 'align': 'right-side', 'text':'О_о папа, кто это?'},
  {'name':'Папа', 'align': 'left-side', 'text':'Не спускай с него глаз!'},
  {'name':'Лина', 'align': 'right-side', 'text':'Ничего не понимаю... Зачем это?'},
  {'name':'Папа', 'align': 'left-side', 'text':'Я серьезно. Смотри, не отрываясь!'},
  {'name':'Папа', 'align': 'left-side', 'text':'И если он будет тебе писать, обещай не отвечать ему!'},
  {'name':'Лина', 'align': 'right-side', 'text':'Что?? С чего это он будет мне писать?'},
  {'name':'Папа', 'align': 'left-side', 'text':'ОБЕЩАЙ!'},
  {'name':'Лина', 'align': 'right-side', 'text':'Хорошо. Но... Тебя ведь здесь нет...'},
  {'name':'Лина', 'align': 'right-side', 'text':'Откуда ты знаешь, что он там, за окном?'},
  {'name':'Лина', 'align': 'right-side', 'text':'ПАПА?!!?!'} 
];

let storyRead_1 = [
  {'title': 'Смерть в поезде'},  
  {'img_bg': '../img/pict_stor2.png'},
  {'name':'Папа', 'align': 'left-side', 'text':'Ты уже в постели?'},
  {'name':'Лина', 'align': 'right-side', 'text':'Да, пап, что случилось?'},
  {'name':'Папа', 'align': 'left-side', 'text':'Ты закрыла входную дверь?'},
  {'name':'Лина', 'align': 'right-side', 'text':'Не помню...'},
  {'name':'Лина', 'align': 'right-side', 'text':'А разве ты ещё не идёшь домой?'},
  {'name':'Папа', 'align': 'left-side', 'text':'Нет.'},
  {'name':'Папа', 'align': 'left-side', 'text':'Слушай меня внимательно...'},
  {'name':'Папа', 'align': 'left-side', 'text':'Посмотри в окно.'},
  {'name':'Папа', 'align': 'left-side', 'text':'Видишь мужчину?'},
  {'name':'Лина', 'align': 'right-side', 'text':'Ты меня пугаешь.<br>Что происходит?'},
  {'name':'Папа', 'align': 'left-side', 'text':'Посмотри скорее!'},
  {'name':'Лина', 'align': 'right-side', 'text':'О_о папа, кто это?'},
  {'name':'Папа', 'align': 'left-side', 'text':'Не спускай с него глаз!'},
  {'name':'Лина', 'align': 'right-side', 'text':'Ничего не понимаю... Зачем это?'},
  {'name':'Папа', 'align': 'left-side', 'text':'Я серьезно. Смотри, не отрываясь!'},
  {'name':'Папа', 'align': 'left-side', 'text':'И если он будет тебе писать, обещай не отвечать ему!'},
  {'name':'Лина', 'align': 'right-side', 'text':'Что?? С чего это он будет мне писать?'},
  {'name':'Папа', 'align': 'left-side', 'text':'ОБЕЩАЙ!'},
  {'name':'Лина', 'align': 'right-side', 'text':'Хорошо. Но... Тебя ведь здесь нет...'},
  {'name':'Лина', 'align': 'right-side', 'text':'Откуда ты знаешь, что он там, за окном?'},
  {'name':'Лина', 'align': 'right-side', 'text':'ПАПА?!!?!'} 
];

let storyRead_2 = [
  {'title': 'Любовь не знает преград!'},  
  {'img_bg': '../img/pict_stor3.png'},
  {'name':'', 'align': 'left-side', 'text':'Ты уже в постели?'},
  {'name':'', 'align': 'right-side', 'text':'Да, пап, что случилось?'},
  {'name':'Папа', 'align': 'left-side', 'text':'Ты закрыла входную дверь?'},
  {'name':'Лина', 'align': 'right-side', 'text':'Не помню...'},
  {'name':'Лина', 'align': 'right-side', 'text':'А разве ты ещё не идёшь домой?'},
  {'name':'Папа', 'align': 'left-side', 'text':'Нет.'},
  {'name':'Папа', 'align': 'left-side', 'text':'Слушай меня внимательно...'},
  {'name':'Папа', 'align': 'left-side', 'text':'Посмотри в окно.'},
  {'name':'Папа', 'align': 'left-side', 'text':'Видишь мужчину?'},
  {'name':'Лина', 'align': 'right-side', 'text':'Ты меня пугаешь.<br>Что происходит?'},
  {'name':'Папа', 'align': 'left-side', 'text':'Посмотри скорее!'},
  {'name':'Лина', 'align': 'right-side', 'text':'О_о папа, кто это?'},
  {'name':'Папа', 'align': 'left-side', 'text':'Не спускай с него глаз!'},
  {'name':'Лина', 'align': 'right-side', 'text':'Ничего не понимаю... Зачем это?'},
  {'name':'Папа', 'align': 'left-side', 'text':'Я серьезно. Смотри, не отрываясь!'},
  {'name':'', 'align': 'left-side', 'text':'И если он будет тебе писать, обещай не отвечать ему!'},
  {'name':'Лина', 'align': 'right-side', 'text':'Что?? С чего это он будет мне писать?'},
  {'name':'Папа', 'align': 'left-side', 'text':'ОБЕЩАЙ!'},
  {'name':'Лина', 'align': 'right-side', 'text':'Хорошо. Но... Тебя ведь здесь нет...'},
  {'name':'Лина', 'align': 'right-side', 'text':'Откуда ты знаешь, что он там, за окном?'},
  {'name':'Лина', 'align': 'right-side', 'text':'ПАПА?!!?!'} 
];

let storyAudio_0 = [
  {'title': 'Прячься'},  
  {'img_bg': '../img/pict_stor4.png'},
  {'audio': '../data/Зеркало_Суперфинал.wav'}
];
let storyAudio_1 = [
  {'title': 'Страж'},  
  {'img_bg': '../img/pict_stor5.png'},
  {'audio': '../data/Зеркало_Суперфинал.wav'}
];
let storyAudio_2 = [
  {'title': 'Дом возле Мёртвого озера'},  
  {'img_bg': '../img/pict_stor6.png'},
  {'audio': '../data/Зеркало_Суперфинал.wav'}
];
let currentLocal = 'Русский';