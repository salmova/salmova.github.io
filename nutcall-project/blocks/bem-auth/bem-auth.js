/**
    Block: AuthBlock
*/
(function ($) {

    /**
     * AuthBlock - block of authorization/registration
     * @param {object} $label
     * @constructor
     */
    function AuthBlock($label) {

        this.$label = $label;
        this.server = 'https://api-dev2x86.nutcall.org/v0.1/registration';
        this.id = null;
        this.btnNext = 'Продолжить';
        this.warningText = 'Введите корректные данные';
        this.step = 'PrimaryInfo';        
        this.init();

    }
    AuthBlock.prototype.handleData = function (data) {
        return data;
    } 
    AuthBlock.prototype.sendAjaxForm = function (form_id, url, urlSubmit = '', method = 'POST') {
        let res = null;
        $.ajax({
            url: url + urlSubmit, //url страницы 
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'X-Client-Id': 'nutcall_layout_dev',
                'X-Client-Secret': 'c883d4519638087b52273a4e08a6014b',
            },
            type: method, //метод отправки
            data: $("#"+form_id).serialize(),  // Сеарилизуем объект
            async: false,
            success:function(data) {
              res = data; 
              console.log(data);
            }
     	});
     	return res;
    }
    AuthBlock.prototype.stepPersonalInfo = function (email, password, stringer = false, primaryInfoType = 'basic') {
        const elContainer =  $('<div>', {
                        'class': `bem-page__column bem-page_max-container bem-page__row_center bem-auth__step-personal-info bem-auth__content`
                    }).append($('<div>', {
                        'class': `bem-auth__title`,
                        'text': 'Как вас зовут?'
                    })).append($('<div>', {
                        'class': 'bem-page__subtitle',
                        text : 'Заполните поля, чтобы продолжить регистрацию'
                    })).append($('<form>', {
                        'class': 'bem-form',
                        id: 'personal-info',
                        action: '',
                        method: 'post',
                        text : ''
                    }).append($('<fieldset>').append($('<div>', {
                        'class': 'bem-page__column bem-page_margin_bottom bem-auth__name'
                    }).append($('<input>', {
                        'class': 'bem-form__input',
                        id: 'name',
                        name: 'firstname',
                        placeholder: 'Имя',
                        type: 'text' 
                    }))).append($('<div>', {
                        'class': 'bem-page__column bem-auth__surname'
                    }).append($('<input>', {
                        'class': 'bem-form__input',
                        id: 'surname',
                        type: 'text', 
                        placeholder: 'Фамилия', 
                        name: 'lastname'
                    }))).append($('<div>', {
                        'class': 'bem-page__column bem-page_margin_top bem-auth__btn'
                    }).append($('<button>', {
                        'class': 'bem-button bem-button_fix_200',
                        text: this.btnNext
                    }))).append($('<input>', {
                        'id': 'email',
                        type: 'hidden',
                        name: 'email',
                        value: email
                    })).append($('<input>', {
                        'id': 'password',
                        type: 'hidden',
                        name: 'password',
                        value: password
                    })).append($('<input>', {
                        'id': 'stringer',
                        type: 'hidden',
                        name: 'im_stringer',
                        value: stringer
                    })).append($('<input>', {
                        'id': 'primary_info_type',
                        type: 'hidden',
                        name: 'primary_info_type',
                        value: primaryInfoType
                    }))).append($('<div>', {
                        'class': 'bem-page__warning-text hidden',
                        text: this.warningText
                    })));
            
            // create a popover after a given element
        this.$label.append(elContainer);
    }
    
    AuthBlock.prototype.stepEmailConfirm = function(step) {
        const elContainer =  $('<div>', {
                        'class': `bem-page__column bem-page_max-container bem-page__row_center bem-auth__step-email-confirm bem-auth__content`
                    }).append($('<div>', {
                        'class': `bem-auth__title`,
                        'text': 'Подтвердите почту'
                    })).append($('<div>', {
                        'class': 'bem-page__subtitle',
                        text : 'Мы отправили вам письмо. Пройдите по указанной в нём ссылке или введите секретный код'
                    })).append($('<form>', {
                        'class': 'bem-form',
                        id: 'email-confirm',
                        action: '',
                        method: 'post',
                        text : ''
                    }).append($('<fieldset>').append($('<div>', {
                        'class': 'bem-page__column bem-page_margin_bottom'
                    }).append($('<input>', {
                        'class': 'bem-form__input',
                        id: 'code',
                        name: 'email_confirm_code',
                        placeholder: 'Введите код',
                        type: 'text' 
                    }))).append($('<div>', {
                        'class': 'bem-page__column bem-page_margin_top bem-auth__btn'
                    }).append($('<button>', {
                        'class': 'bem-button bem-button_fix_200',
                        text: this.btnNext
                    }))).append($('<input>', {
                        'id': 'step',
                        type: 'hidden',
                        name: 'step',
                        value: step
                    }))).append($('<div>', {
                        'class': 'bem-page__warning-text hidden',
                        text: this.warningText
                    })));
            
        // create a popover after a given element
        this.$label.append(elContainer);
    }
    AuthBlock.prototype.stepPhoneAdd = function () {
        const elContainer =  $('<div>', {
                        'class': `bem-page__column bem-page_max-container bem-page__row_center bem-auth__step-phone bem-auth__content`
                    }).append($('<div>', {
                        'class': `bem-auth__title`,
                        'text': 'Укажите номер телефона'
                    })).append($('<div>', {
                        'class': 'bem-page__subtitle',
                        text : 'Телефон будет использоваться как запасной логин и для двухфакторной аутентификации. Вы можете скрыть номер из профиля после регистрации'
                    })).append($('<form>', {
                        'class': 'bem-form',
                        id: 'phone-add',
                        action: '',
                        method: 'post',
                        text : ''
                    }).append($('<fieldset>').append($('<div>', {
                        'class': 'bem-page__column bem-page_margin_bottom'
                    }).append($('<div>', {
                        'class': 'bem-form__phone'
                    }).append($('<input>', {
                        'class': 'bem-form__input bem-form__phone-code',
                        id: 'input-code',
                        name: 'country_code',
                        placeholder: '+7',
                        value: '7',
                        type: 'text' 
                    })).append($('<input>', {
                        'class': 'bem-form__input bem-form__phone-number',
                        id: 'input-phone',
                        type: 'text',
                        placeholder: '999-999-99-99',
                        name: 'number'
                    })))).append($('<div>', {
                        'class': 'bem-page__column bem-page_margin_bottom bem-auth__code-phone hidden'
                    }).append($('<input>', {
                        'class': 'bem-form__input',
                        id: 'code-phone',
                        type: 'text',
                        placeholder: 'Код подтверждения',
                        name: 'confirm_code'
                    }))).append($('<p>', {
                        'class': 'bem-auth__timer bem-page_font_gray hidden',
                        text: 'Отправить повторно можно через 45 секунд'
                    })).append($('<div>', {
                        'class': 'bem-page__column bem-page_margin_top bem-auth__btn'
                    }).append($('<button>', {
                        'class': 'bem-button',
                        text: 'Получить код подтверждения'
                    })))).append($('<div>', {
                        'class': 'bem-page__warning-text hidden',
                        text: this.warningText
                    })));
            
        // create a popover after a given element
        this.$label.append(elContainer);
        
    }
    AuthBlock.prototype.stepAgent = function () {
        const elContainer =  $('<div>', {
                        'class': `bem-page__column bem-page_max-container bem-page__row_center bem-auth__step-agent bem-auth__content`
                    }).append($('<div>', {
                        'class': `bem-auth__title`,
                        'text': 'Вы представитель персоны?'
                    })).append($('<div>', {
                        'class': 'bem-page__subtitle',
                        text : 'Являетесь ли вы официальным представителем какой-либо персоны?'
                    })).append($('<form>', {
                        'class': 'bem-form',
                        id: 'agent',
                        action: '',
                        method: 'post',
                        text : ''
                    }).append($('<fieldset>').append($('<div>', {
                        'class': 'bem-page__row bem-page__row_center'
                    }).append($('<div>', {
                        'class': 'bem-page__column bem-auth__agent'
                    }).append($('<input>', {
                        'class': 'bem-form__radio',
                        id: 'agent-yes',
                        type: 'radio',
                        name: 'im_agent',
                        value: true
                    })).append($('<label>', {
                        'class': 'bem-form__label-check-radio',
                        for: 'agent-yes',
                        text: 'Да'
                    })).append($('<p>', {
                        'class': 'bem-page_font_gray bem-page_font-size_mid',
                        text: 'Я представитель'
                    }))).append($('<div>', {
                        'class': 'bem-page__column bem-page__agent'
                    }).append($('<input>', {
                        'class': 'bem-form__radio',
                        id: 'agent-no',
                        type: 'radio',
                        name: 'im_agent',
                        value: false
                    })).append($('<label>', {
                        'class': 'bem-form__label-check-radio',
                        for: 'agent-no',
                        text: 'Нет'
                    })).append($('<p>', {
                        'class': 'bem-page_font_gray bem-page_font-size_mid',
                        text: 'Я не представитель'
                    })))).append($('<div>', {
                        'class': 'bem-page__column bem-page_margin_top bem-auth__btn'
                    }).append($('<button>', {
                        'class': 'bem-button bem-button_fix_200',
                        text: this.btnNext
                    })))).append($('<div>', {
                        'class': 'bem-page__warning-text hidden',
                        text: this.warningText
                    })));
            
        // create a popover after a given element
        this.$label.append(elContainer);
        
    }
    AuthBlock.prototype.stepWorkplace = function () {
        const elContainer =  $('<div>', {
                        'class': `bem-page__column bem-page_max-container bem-page__row_center bem-auth__step-work bem-auth__content`
                    }).append($('<div>', {
                        'class': `bem-auth__title`,
                        'text': 'Место работы'
                    })).append($('<div>', {
                        'class': 'bem-page__subtitle',
                        text : 'Чтобы продолжить регистрацию укажите место работы и должность'
                    })).append($('<form>', {
                        'class': 'bem-form',
                        id: 'workplace',
                        action: '',
                        method: 'post',
                        text : ''
                    }).append($('<fieldset>').append($('<div>', {
                        'class': 'bem-page__row bem-page__row_center bem-auth__work',
                        id: 'auth-work_0'
                    }).append($('<div>', {
                        'class': 'bem-page__column bem-auth__work-item bem-page_margin_bottom bem-search'
                    }).append($('<input>', {
                        'class': 'bem-search__input bem-form__input',
                        type: 'text',
                        name: 'workplaces_company[0]',
                        placeholder: 'Место работы'
                    })).append($('<di>', {
                        'class': 'bem-search__history'
                    }).append($('<div>', {
                        'class': 'bem-search__history-caption'
                    }).append($('<span>', {
                        text: 'Поиск организации:'
                    }))).append($('<div>', {
                        'class': 'bem-search__history-list'
                    }))).append($('<p>', {
                        'class': 'bem-page_font_gray bem-page_font-size_mid',
                        text: 'Я представитель'
                    }))).append($('<div>', {
                        'class': 'bem-page__column bem-page__agent'
                    }).append($('<input>', {
                        'class': 'bem-form__radio',
                        id: 'agent-no',
                        type: 'radio',
                        name: 'im_agent',
                        value: false
                    })).append($('<label>', {
                        'class': 'bem-form__label-check-radio',
                        for: 'agent-no',
                        text: 'Нет'
                    })).append($('<p>', {
                        'class': 'bem-page_font_gray bem-page_font-size_mid',
                        text: 'Я не представитель'
                    })))).append($('<div>', {
                        'class': 'bem-page__column bem-page_margin_top bem-auth__btn'
                    }).append($('<button>', {
                        'class': 'bem-button bem-button_fix_200',
                        text: this.btnNext
                    })))).append($('<div>', {
                        'class': 'bem-page__warning-text hidden',
                        text: this.warningText
                    })));
            
        // create a popover after a given element
        this.$label.append(elContainer);
    }
    /**
     * Init.
     */
    AuthBlock.prototype.init = function () {

        var self = this;
        
        $('.bem-auth__header .bem-landing__reg .bem-link').on('click', function() {
            $('.bem-landing__reg').toggleClass('hidden');
            $('.bem-landing__login').toggleClass('hidden');    
        });
        $('.bem-auth__header .bem-landing__login .bem-link').on('click', function() {
            $('.bem-landing__reg').toggleClass('hidden');
            $('.bem-landing__login').toggleClass('hidden');    
        });
    
        $('.bem-auth__step-primary-info .bem-auth__social-icon').on('click', function() {
            if ($(this).hasClass('fb')) {
                $('.bem-auth__step-password-email .bem-auth__email #email').val('test');
                $('.bem-auth__step-password-email .bem-auth__email').addClass('hidden');
            }
            $('.bem-auth__step-password-email').removeClass('hidden');
            $('.bem-auth__step-primary-info').addClass('hidden'); 
            return false;   
        })
        $(document).on('click', '.bem-auth__step-primary-info .bem-auth__btn .bem-button', function() {
            let error = false;
            if ($('.bem-auth__step-primary-info #email-reg').val().length == 0) {
               $('.bem-auth__step-primary-info #email-reg').addClass('bem-form__error');
               error = true;
            }
            if ($('.bem-auth__step-primary-info #password-reg').val().length == 0) {
               $('.bem-auth__step-primary-info #password-reg').addClass('bem-form__error');
               error = true;
            }
            if (error) {
                $('.bem-auth__step-primary-info .bem-page__warning-text').removeClass('hidden');
                return false;
            }
            self.stepPersonalInfo($('#primary-info #email-reg').val(), $('#primary-info #password-reg').val(), $('#primary-info #stringer').is(':checked'))
            $('.bem-auth__step-primary-info').remove();
       
            return false;
    
        });
        $(document).on('click', '.bem-auth__step-personal-info .bem-auth__btn .bem-button', function() {
            let error = false;
            if ($('.bem-auth__step-personal-info #name').val().length == 0) {
               $('.bem-auth__step-personal-info #name').addClass('bem-form__error');
               error = true;
            }
            if ($('.bem-auth__step-personal-info #surname').val().length == 0) {
               $('.bem-auth__step-personal-info #surname').addClass('bem-form__error');
               error = true;
            }
            if (error) {
                $('.bem-auth__step-personal-info .bem-page__warning-text').removeClass('hidden');
                return false;
            }            
            const dataServer = self.sendAjaxForm('personal-info', self.server); 
            self.step = dataServer.step_current;
            self.id = dataServer.id;
            if (dataServer.step_current == 'EmailConfirm') {
                self.stepEmailConfirm(dataServer.step_current);
                $('.bem-auth__step-personal-info').remove();
            }
            
            return false;
    
        });
        
        $(document).on('click', '.bem-auth__step-email-confirm .bem-auth__btn .bem-button', function() {
            if ($('.bem-auth__step-email-confirm #code').val().length == 0) {
               $('.bem-auth__step-email-confirm #code').addClass('bem-form__error');
               $('.bem-auth__step-email-confirm .bem-page__warning-text').removeClass('hidden');
               return false;
            }
            
            const dataServer = self.sendAjaxForm('email-confirm', self.server, `/${self.id}/submit`); 
            console.log(dataServer);
            self.step = dataServer.step_current;
            
            if (dataServer.step_current == 'Phone') {
                self.stepPhoneAdd();
                $('.bem-auth__step-email-confirm').remove();
            }
            
            return false;
    
        })

        $('.bem-auth__step-password-email .bem-auth__btn .bem-button').on('click', function() {
            let error = false;
            if ($('.bem-auth__step-password-email #email').val().length == 0) {
               $('.bem-auth__step-password-email #email').addClass('bem-form__error');
               error = true;
            }
            if ($('.bem-auth__step-password-email #password').val().length == 0) {
               $('.bem-auth__step-password-email #password').addClass('bem-form__error');
               error = true;
            }
            if (error) {
                $('.bem-auth__step-password-email .bem-page__warning-text').removeClass('hidden');
                return false;
            }
            $('.bem-auth__step-check-info').removeClass('hidden');
            $('.bem-auth__step-password-email').addClass('hidden');

            return false;
        })
   
        $('#add-image-btn').on('change', function () {
             var files = this.files;
             var file = files[0];
             $('.bem-auth__step-check-info .bem-page__warning-text').addClass('hidden');
    
             if ( !file.type.match(/image\/(jpeg|jpg|png|gif)/) ) {
                 $('.bem-auth__step-check-info .bem-page__warning-text').text('Фотография должна быть в формате jpg, png или gif').removeClass('hidden');
                 return false;
             }
    
             if ( file.size > (1024 * 1024) ) {
                 $('.bem-auth__step-check-info .bem-page__warning-text').text('Размер фотографии не должен превышать 2 Мб').removeClass('hidden');
                 return false;
             }
     
             preview(file);
     
             this.value = '';
        });
 
         // Создание превью
        function preview(file) {
             var reader = new FileReader();
             reader.addEventListener('load', function(event) {
                 $('.bem-auth__download-img').attr('src', event.target.result);
             });
             reader.readAsDataURL(file);
        }

        
        $(document).on('click', '.bem-auth__step-phone .bem-auth__btn .bem-button', function() {
            if ($('.bem-auth__step-phone .bem-form__phone-number').val().length == 0) {
                $('.bem-auth__step-phone .bem-form__phone-number').addClass('bem-form__error');
                $('.bem-auth__step-phone .bem-page__warning-text').removeClass('hidden');
                return false;
            }
            const dataServer = self.sendAjaxForm('phone-add', self.server, `/${self.id}/phone/add`); 
            console.log(dataServer);
            $('.bem-auth__step-phone #phone-add fieldset').append($('<input>', {
                type: 'hidden',
                name: 'phone_id',
                value: '1'
            })).append($('<input>', {
                type: 'hidden',
                name: 'confirm_id',
                value: dataServer.confirm_id
            }));
            
            $('.bem-auth__step-phone .bem-auth__code-phone').removeClass('hidden');
            $('.bem-auth__step-phone .bem-auth__timer').removeClass('hidden');
            $('.bem-auth__step-phone .bem-auth__btn').addClass('hidden');
            setTimeout(function() {
                $('.bem-auth__step-phone .bem-auth__code-phone').addClass('hidden');
                $('.bem-auth__step-phone .bem-auth__timer').addClass('hidden');
                $('.bem-auth__step-phone .bem-auth__btn').removeClass('hidden');
            }, 45000)
            return false;
        })
        $(document).on('input.input', '.bem-auth__step-phone #code-phone', function () {
            if ($('.bem-auth__step-phone #code-phone').val().length == 6) {
                self.step = 'AreYouAgent';
                const dataServer = self.sendAjaxForm('phone-add', self.server, `/${self.id}/phone/confirm`, 'PUT'); 
                console.log(dataServer);
                self.stepAgent();
                $('.bem-auth__step-phone').remove();
            }
        })
        $(document).on('click', '.bem-auth__step-agent .bem-auth__btn .bem-button', function() {
            const dataServer = self.sendAjaxForm('agent', self.server, `/${self.id}/submit?step=${self.step}`); 
            console.log(dataServer);
            self.step = 'Workplace';
            self.stepWorkplace();
            $('.bem-auth__step-agent').remove();
            return false;
        })
        let indexWork= 1; 
        $('.bem-auth__step-work .bem-auth__add-info-link').on('click', function() {
            let newWorkItem = $('.bem-auth__step-work .bem-auth__work:first').clone();
            newWorkItem.attr('id', 'auth-work_' + indexWork);
            newWorkItem.find('.bem-auth__delete-info').addClass('hidden');
            newWorkItem.find('.bem-search__input').val('');
            if (newWorkItem.find('.bem-search__icon').length) newWorkItem.find('.bem-search__icon').remove();
            $(`.bem-auth__step-work #auth-work_${indexWork-1} .bem-auth__delete-info`).removeClass('hidden');
            $('.bem-auth__step-work .bem-auth__add-info').before(newWorkItem);

            indexWork += 1;
        })       
        $(document).on('click', '.bem-auth__step-work .bem-auth__delete-info', function() {
            $(this).parent().remove();
        })
        if ($('.bem-auth__step-selfie').length) {
/*
            var canvas = $('.bem-auth__step-selfie canvas');
            var video = $('.bem-auth__step-selfie video');
            var button = $('.bem-auth__step-selfie .bem-auth__selfie-btn');
          //  var allow = document.getElementById('allow');
            var context = canvas[0].getContext('2d');
            var videoStreamUrl = false;
            var imgSelfie = $('.bem-auth__step-selfie .bem-auth__download-img'); 

            // функция которая будет выполнена при нажатии на кнопку захвата кадра
            const captureMe = function () {
              if (!videoStreamUrl) alert('Вы не нажали "разрешить" в верху окна или что-то не так с вашим видео стримом')
              // отрисовываем на канвасе текущий кадр видео
              context.drawImage(video, 0, 0, video.width(), video.height());
              // получаем data: url изображения c canvas
              var base64dataUrl = canvas[0].toDataURL('image/png');
              imgSelfie.attr('src', base64dataUrl);
            }

            button.on('click', captureMe);
        
            // navigator.getUserMedia  и   window.URL.createObjectURL
            navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
            window.URL.createObjectURL = window.URL.createObjectURL || window.URL.webkitCreateObjectURL || window.URL.mozCreateObjectURL || window.URL.msCreateObjectURL;
            // запрашиваем разрешение на доступ к поточному видео камеры
            navigator.getUserMedia({video: true}, function (stream) {
              // разрешение от пользователя получено
              // скрываем подсказку
             // allow.style.display = "none";
              // получаем url поточного видео
              var url = window.URL || window.webkitURL;
              console.log(url);
              console.log(stream);
            // create the url and set the source of the video element
              videoStreamUrl = (window.URL.srcObject = stream);
              // устанавливаем как источник для video 
              video.attr('src', window.URL.srcObject = stream);
            }, function () {
              console.log('что-то не так с видеостримом или пользователь запретил его использовать');
            });
*/
        }
/*
        $('.bem-auth__step-selfie .bem-auth__download-img').load(function() {
        })
*/
    };

    window.AuthBlock = AuthBlock;

    $(function () {
        var $labels = $('.bem-auth').not('.bem-landing');
        
        $labels.each(function () {
            $(this).data('AuthLabel', new AuthBlock($(this)));
        });
    });

}) (jQuery);