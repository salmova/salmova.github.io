var demoLines = [
  {'title': 'Strazh'},  
  {'img_bg': ''},
  {'name':'Dad', 'align': 'left-side', 'text':'Are you already in bed?'},
  {'name':'Lina', 'align': 'right-side', 'text':'Yeah, dad, what happened?'},
  {'name':'Dad', 'align': 'left-side', 'text':'Ты закрыла входную дверь?'},
  {'name':'Lina', 'align': 'right-side', 'text':'Не помню...'},
  {'name':'Lina', 'align': 'right-side', 'text':'А разве ты ещё не идёшь домой?'},
  {'name':'Dad', 'align': 'left-side', 'text':'Нет.'},
  {'name':'Dad', 'align': 'left-side', 'text':'Слушай меня внимательно...'},
  {'name':'Dad', 'align': 'left-side', 'text':'Посмотри в окно.'},
  {'name':'Dad', 'align': 'left-side', 'text':'Видишь мужчину?'},
  {'name':'Lina', 'align': 'right-side', 'text':'Ты меня пугаешь.<br>Что происходит?'},
  {'name':'Dad', 'align': 'left-side', 'text':'Посмотри скорее!'},
  {'name':'Lina', 'align': 'right-side', 'text':'О_о папа, кто это?'},
  {'name':'Dad', 'align': 'left-side', 'text':'Не спускай с него глаз!'},
  {'name':'Lina', 'align': 'right-side', 'text':'Ничего не понимаю... Зачем это?'},
  {'name':'Dad', 'align': 'left-side', 'text':'Я серьезно. Смотри, не отрываясь!'},
  {'name':'Dad', 'align': 'left-side', 'text':'И если он будет тебе писать, обещай не отвечать ему!'},
  {'name':'Lina', 'align': 'right-side', 'text':'Что?? С чего это он будет мне писать?'},
  {'name':'Dad', 'align': 'left-side', 'text':'ОБЕЩАЙ!'},
  {'name':'Lina', 'align': 'right-side', 'text':'Хорошо. Но... Тебя ведь здесь нет...'},
  {'name':'Lina', 'align': 'right-side', 'text':'Откуда ты знаешь, что он там, за окном?'},
  {'name':'Lina', 'align': 'right-side', 'text':'DAD?!!?!'}
];

let storyRead_0 = [
  {'title': 'Old school'},  
  {'img_bg': '../img/pict_stor1.png'},
  {'name':'Dad', 'align': 'left-side', 'text':'Are you already in bed?'},
  {'name':'Lina', 'align': 'right-side', 'text':'Yeah, dad, what happened?'},
  {'name':'Dad', 'align': 'left-side', 'text':'Ты закрыла входную дверь?'},
  {'name':'Lina', 'align': 'right-side', 'text':'Не помню...'},
  {'name':'Lina', 'align': 'right-side', 'text':'А разве ты ещё не идёшь домой?'},
  {'name':'Dad', 'align': 'left-side', 'text':'Нет.'},
  {'name':'Dad', 'align': 'left-side', 'text':'Слушай меня внимательно...'},
  {'name':'Dad', 'align': 'left-side', 'text':'Посмотри в окно.'},
  {'name':'Dad', 'align': 'left-side', 'text':'Видишь мужчину?'},
  {'name':'Lina', 'align': 'right-side', 'text':'Ты меня пугаешь.<br>Что происходит?'},
  {'name':'Dad', 'align': 'left-side', 'text':'Посмотри скорее!'},
  {'name':'Lina', 'align': 'right-side', 'text':'О_о папа, кто это?'},
  {'name':'Dad', 'align': 'left-side', 'text':'Не спускай с него глаз!'},
  {'name':'Lina', 'align': 'right-side', 'text':'Ничего не понимаю... Зачем это?'},
  {'name':'Dad', 'align': 'left-side', 'text':'Я серьезно. Смотри, не отрываясь!'},
  {'name':'Dad', 'align': 'left-side', 'text':'И если он будет тебе писать, обещай не отвечать ему!'},
  {'name':'Lina', 'align': 'right-side', 'text':'Что?? С чего это он будет мне писать?'},
  {'name':'Dad', 'align': 'left-side', 'text':'ОБЕЩАЙ!'},
  {'name':'Lina', 'align': 'right-side', 'text':'Хорошо. Но... Тебя ведь здесь нет...'},
  {'name':'Lina', 'align': 'right-side', 'text':'Откуда ты знаешь, что он там, за окном?'},
  {'name':'Lina', 'align': 'right-side', 'text':'DAD?!!?!'}
];

let storyRead_1 = [
  {'title': 'Death on the train'},  
  {'img_bg': '../img/pict_stor2.png'},
  {'name':'Dad', 'align': 'left-side', 'text':'Are you already in bed?'},
  {'name':'Lina', 'align': 'right-side', 'text':'Yeah, dad, what happened?'},
  {'name':'Dad', 'align': 'left-side', 'text':'Ты закрыла входную дверь?'},
  {'name':'Lina', 'align': 'right-side', 'text':'Не помню...'},
  {'name':'Lina', 'align': 'right-side', 'text':'А разве ты ещё не идёшь домой?'},
  {'name':'Dad', 'align': 'left-side', 'text':'Нет.'},
  {'name':'Dad', 'align': 'left-side', 'text':'Слушай меня внимательно...'},
  {'name':'Dad', 'align': 'left-side', 'text':'Посмотри в окно.'},
  {'name':'Dad', 'align': 'left-side', 'text':'Видишь мужчину?'},
  {'name':'Lina', 'align': 'right-side', 'text':'Ты меня пугаешь.<br>Что происходит?'},
  {'name':'Dad', 'align': 'left-side', 'text':'Посмотри скорее!'},
  {'name':'Lina', 'align': 'right-side', 'text':'О_о папа, кто это?'},
  {'name':'Dad', 'align': 'left-side', 'text':'Не спускай с него глаз!'},
  {'name':'Lina', 'align': 'right-side', 'text':'Ничего не понимаю... Зачем это?'},
  {'name':'Dad', 'align': 'left-side', 'text':'Я серьезно. Смотри, не отрываясь!'},
  {'name':'Dad', 'align': 'left-side', 'text':'И если он будет тебе писать, обещай не отвечать ему!'},
  {'name':'Lina', 'align': 'right-side', 'text':'Что?? С чего это он будет мне писать?'},
  {'name':'Dad', 'align': 'left-side', 'text':'ОБЕЩАЙ!'},
  {'name':'Lina', 'align': 'right-side', 'text':'Хорошо. Но... Тебя ведь здесь нет...'},
  {'name':'Lina', 'align': 'right-side', 'text':'Откуда ты знаешь, что он там, за окном?'},
  {'name':'Lina', 'align': 'right-side', 'text':'DAD?!!?!'}
];

let storyRead_2 = [
  {'title': 'Love knows no barriers!'},  
  {'img_bg': '../img/pict_stor3.png'},
  {'name':'Dad', 'align': 'left-side', 'text':'Are you already in bed?'},
  {'name':'Lina', 'align': 'right-side', 'text':'Yeah, dad, what happened?'},
  {'name':'Dad', 'align': 'left-side', 'text':'Ты закрыла входную дверь?'},
  {'name':'Lina', 'align': 'right-side', 'text':'Не помню...'},
  {'name':'Lina', 'align': 'right-side', 'text':'А разве ты ещё не идёшь домой?'},
  {'name':'Dad', 'align': 'left-side', 'text':'Нет.'},
  {'name':'Dad', 'align': 'left-side', 'text':'Слушай меня внимательно...'},
  {'name':'Dad', 'align': 'left-side', 'text':'Посмотри в окно.'},
  {'name':'Dad', 'align': 'left-side', 'text':'Видишь мужчину?'},
  {'name':'Lina', 'align': 'right-side', 'text':'Ты меня пугаешь.<br>Что происходит?'},
  {'name':'Dad', 'align': 'left-side', 'text':'Посмотри скорее!'},
  {'name':'Lina', 'align': 'right-side', 'text':'О_о папа, кто это?'},
  {'name':'Dad', 'align': 'left-side', 'text':'Не спускай с него глаз!'},
  {'name':'Lina', 'align': 'right-side', 'text':'Ничего не понимаю... Зачем это?'},
  {'name':'Dad', 'align': 'left-side', 'text':'Я серьезно. Смотри, не отрываясь!'},
  {'name':'Dad', 'align': 'left-side', 'text':'И если он будет тебе писать, обещай не отвечать ему!'},
  {'name':'Lina', 'align': 'right-side', 'text':'Что?? С чего это он будет мне писать?'},
  {'name':'Dad', 'align': 'left-side', 'text':'ОБЕЩАЙ!'},
  {'name':'Lina', 'align': 'right-side', 'text':'Хорошо. Но... Тебя ведь здесь нет...'},
  {'name':'Lina', 'align': 'right-side', 'text':'Откуда ты знаешь, что он там, за окном?'},
  {'name':'Lina', 'align': 'right-side', 'text':'DAD?!!?!'}
];

let storyAudio_0 = [
  {'title': 'Hide'},  
  {'img_bg': '../img/pict_stor4.png'},
  {'audio': '../data/Зеркало_Суперфинал.wav'}
];
let storyAudio_1 = [
  {'title': 'Strazh'},  
  {'img_bg': '../img/pict_stor5.png'},
  {'audio': '../data/Зеркало_Суперфинал.wav'}
];
let storyAudio_2 = [
  {'title': 'House near Dead Lake'},  
  {'img_bg': '../img/pict_stor6.png'},
  {'audio': '../data/Зеркало_Суперфинал.wav'}
];
let currentLocal = 'English';