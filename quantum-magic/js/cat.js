
jQuery(window).load(function () {
    /*как это работает*/
    /*if (jQuery('.how-to-container').length > 0) {
        jQuery('.how-to-container').twentytwenty({
            default_offset_pct: 0.33,
            no_overlay: true
        });
    }*/
    /*как это работает*/
})

jQuery(document).ready(function() {

    /*картинки в карточке*/
    /*jQuery('a.light-zoom').fancybox({
        helpers: {
            title	: { type : 'inside' },
            thumbs	: {
				width	: 100,
				height	: 100
			}
        }
    })*/
    /*картинки в карточке*/

    /*кнопка далее*/
    if (jQuery('#whatis-section .right-tabs').length > 0) {
        jQuery('#whatis-section .sppb-tab-tabs-content').append('<a href="javascript:void(0)" class="scroll-forward">Читать далее</a>')

        jQuery('.scroll-forward').click(function (event) {
            $activeLi = jQuery('#whatis-section .right-tabs .sppb-nav-tabs li.active')
            if ($activeLi.is(':last-child')) {
                $targetIndex = 0
            } else {
                $targetIndex = $activeLi.index() + 1
            }

            jQuery('#whatis-section .right-tabs .sppb-nav-tabs li').eq($targetIndex).find('a').trigger('click')
        })
    }
    /*кнопка далее*/

    /*картинка в бэкграунде*/
    jQuery('.adv-tabs li a').click(function () {
        if (this.dataset.bgimage != undefined) {
            //console.info(this, jQuery(this).parents('.adv-sections'), this.dataset.bgimage, jQuery(this).data('bgimage'))
            jQuery(this).parents('.adv-sections').css({
                backgroundImage: 'url:("'+this.dataset.bgimage+'")'
            })
            jQuery(this).parents('.adv-sections').attr('style', 'background-image: url('+this.dataset.bgimage+')')
        }
    })
    /*картинка в бэкграунде*/

    /*плавная прокрутка лендинга*/
    if (jQuery('.menu-translation').length > 0) {
        jQuery('a').click(function (event) {
            $linkArr = this.href.split('#');
            if ($linkArr.length > 1) {
                event.preventDefault()
                $neededEl = jQuery('#' + $linkArr[$linkArr.length - 1])
                jQuery('body, html').animate({
                    scrollTop: $neededEl.offset().top
                }, ( ($neededEl.offset().top * 13 + 840 ) / 133) + 700)
            }
        })
    }
    /*плавная прокрутка*/

    /*список вариантов подписки*/
    if (jQuery('.dur-select').length > 0) {
        /*jQuery('.dur-select').chosen({
            disable_search: true
            //width: '134px',
        })*/
        jQuery('.dur-select').select2({
            width: '134px',
            minimumResultsForSearch: -1,
            dropdownAutoWidth : true
        })
    }
    /*список вариантов подписки*/

    /*включение поля загрузки*/
    if (jQuery('.fc_files_uploader_toggle_btn').length > 0) {
        //jQuery('.container_fcfield_name_fotografiya').append('<div class="insert-photo"><a class="add-photo">Добавить фотографию</a></div>')
        jQuery('.fc_files_uploader_toggle_btn').trigger('click')
        if (jQuery('body').hasClass('.task-edit')) {
            //jQuery('.fc_files_uploader_toggle_btn').click()
        } else {
            console.info('heyu')
            setTimeout(function () {
                //jQuery('.container_fcfield_name_fotografiya li:last-child .fcfield-insertvalue.fc_after').get(0).click()
            }, 200)
        }

        var inputIDS = []
        jQuery('body').on('change', 'input[id*=html5]', function (event) {
            $exitFunction = false;
            $currID = jQuery(this).attr('id');
            $currThis = jQuery(this)
            $parentLi = $currThis.parents('li')
            console.info('start uploading', jQuery('ul.plupload_filelist > li'))
            setTimeout(function () {
                if ($parentLi.find('.plupload_droptext').length > 0) {
                    $exitFunction = true;
                    return true
                }
                $parentLi.find('ul.plupload_filelist li').height('auto')
                if ($parentLi.find('.img-info').length < 1) {
                    $parentLi.append('<div class="img-info"><span class="total"><span class="fill"></span><span class="count">0%</span></span><span class="delete-img" uk-icon="icon:close"></span></div>')
                }

                console.info(event)

                //if ($exitFunction == true) return true;

                if (jQuery('.profile-type-person').length > 0) {
                    if (jQuery('.fcfield-sortables > li').length < 2) {
                        jQuery('.fcfield-insertvalue.fc_after').last().trigger('click')
                    }
                } else {
                    jQuery('.fcfield-insertvalue.fc_after').last().trigger('click')
                }

                let timerID = setInterval(function () {
                    $stopInterval = true;
                    jQuery('input[id*=html5]').each(function() {
                        $parentLi = jQuery(this).parents('li')
                        $currProgress = $parentLi.find('.plupload_filelist .plupload_file_status').text()
                        $parentLi.find('.total .count').text($currProgress)
                        $parentLi.find('.total .fill').css({width: $currProgress})
                        //console.info($currProgress)
                        if ($currProgress != '100%' && $currProgress != '') {
                            $stopInterval = false
                        } else {
                            $parentLi.find('.total .count').text('Заменить')
                        }
                    })

                    console.info($stopInterval, timerID)
                    if ($stopInterval == true) clearInterval(timerID)
                }, 3000)
            }, 300)
        })

        jQuery('body').on('click','.total:contains(Заменить)', function () {
            $currThis = jQuery(this)
            $parentLi = $currThis.parents('li')

            $parentLi.find('.add-on.fcfield-clearvalue').trigger('click')
            $parentLi.find('.add-on.fcfield-uploadvalue').trigger('click')
        })

        jQuery('body').on('click','.delete-img', function () {
            $currThis = jQuery(this)
            $parentLi = $currThis.parents('li')

            if (jQuery('.fcfield-sortables > li').length < 3 && jQuery('.profile-type-person').length > 0) {
                $parentLi.find('.add-on.fcfield-clearvalue').trigger('click')
                $parentLi.find('.add-on.fcfield-uploadvalue').trigger('click')
            } else {
                $parentLi.find('.add-on.fcfield-delvalue').trigger('click')
            }
            $parentLi.find('.img-info').remove()
        })

        jQuery('[name*=status]').change(function () {
            console.info(this.value)
        })

        jQuery('body').on('click', 'input[id*=html5]', function (event) {
            console.info(event)
            return true
            //jQuery(this).trigger('click')
            //event.preventDefault()
            //jQuery(this).unbind('click').trigger('click')
        })
    }

    jQuery('.add-photo').click(function () {
        //jQuery('#custom_fotografiya_uploader_1_browse').trigger('click')
    })
    /*включение поля загрузки*/

    /*предустановка флажка*/
    if (jQuery('.com_flexicontent.task-edit').length > 0) {
        jQuery('[name*=profile-agreement]').trigger('click')
    }
    /*предустановка флажка*/

    /*выбор профиля*/
    if (jQuery('.profile-choise select').length > 0) {
        jQuery('.profile-choise select').select2({
            minimumResultsForSearch: -1
        })
    }
    /*выбор профиля*/

    /*выбор категории*/
    if (jQuery('.itemid-315').length > 0) {
        $catID = 21;
        if (jQuery('.profile-type-person').length > 0) {
            jQuery('[name*=fio]').attr('required', 'required').addClass('required')
        }
        if (jQuery('.profile-type-group').length > 0) {
            jQuery('[name*=gruppy]').attr('required', 'required').addClass('required')
            $catID = 22;
        }
        if (jQuery('.profile-type-object').length > 0) {
            jQuery('[name*="opisanie-ob-ekta"]').attr('required', 'required').addClass('required')
            $catID = 23;
        }
        jQuery('[name="jform[catid]"]').val($catID).trigger('change')
    }
    /*выбор категории*/

    /*текст сообщения*/
    if (jQuery('body[class*=up-type] #fc_ajax_system_messages .alert-success').length > 0) {
        console.info('success')
        jQuery('#fc_ajax_system_messages .alert-success .alert-message').text('Изменения сохранены')
    }
    /*текст сообщения*/

    //обновить профиль
    jQuery('.item-row .add-photo, .item-row .put-info, .item-row .put-email').click(function () {
        $targerType = (jQuery(this).hasClass('put-info')) ? 'description' : 'image';
        if (jQuery(this).hasClass('put-email')) $targerType = 'email'
        jQuery.fancybox.open({
            src: jQuery(this).parents('.catalogitem').find('.fc_editbutton').attr('href') + '&update_type=' + $targerType,
            type: 'iframe',
            beforeClose: function () {
                //console.info('beforeClose', jQuery(window.frames[0].document.body).find('#fc_ajax_system_messages .alert-success'))
                if (jQuery(window.frames[0].document.body).find('#fc_ajax_system_messages .alert-success').length > 0) {
                    location.reload()
                }
                //return false
            },
            afterShow: function () {
                setTimeout(function () {
                    jQuery.fancybox.getInstance().update()
                }, 200)
            }
        })
        /*jQuery.ajax({
            url: '/index.php?option=com_transmanager&task=ajax.updateUserImages&format=json',
            type: 'post',
            data: {
                token: Joomla.optionsStorage["csrf.token"]
            },
            success: function (data) {
                $data = jQuery.parseJSON(data)
                console.info(data, $data)
                //console.info(data)
            }
        })*/
    })

    jQuery('.close-fancy').click(function () {
        //console.info(window.parent)
        window.parent.jQuery.fancybox.close()
        return false
    })
    //обновить профиль

    //изменение срока в корзине
    jQuery('.cart-page .dur-select').change(function (event) {
        jQuery(this).parents('.catalogitem').find('.order-trans')
            .attr('data-cancel', 0)
            .get(0)
            .click()
    })
    //изменение срока в корзине

    /*подключить трансляцию*/
    jQuery('#main').on('click', '.order-trans', function (event) {
        $this = jQuery(this)
        $profileSelect = jQuery('.mod_flexicontent_wrapselect-profile-mod select')
        $profileSelectValue = $profileSelect.val()
        $addType = ($this.parents('.catalogitem').data('state') == 3 || $this.parents('.catalogitem').data('state') == 1) ? 1 : 0
        console.info(event)
        if ($profileSelect.val() == '' || ($profileSelect.val() == undefined && jQuery('.menuitem209').length > 0)) {
            jQuery.fancybox.open({
                src: jQuery('.no-profile-selected-warn'),
                type: 'inline',
                afterClose: function () {
                    jQuery('html, body').animate({
                        scrollTop: jQuery('.cattitle').offset().top
                    }, 700)
                }
            })
            console.info('no profile selected')
            return false
        } else {
            //console.info($this.data('cancel'), event)
            if (event.target.dataset.ordered == 1) return false;
            if ($profileSelect.length < 1) $profileSelectValue = $this.data('profile')

            //перевод в отключенные
            if ($this.data('pstate') == 1) {
                $pstate = (event.target.dataset.cancel == 1) ? 3 : 1
                jQuery.ajax({
                    url: '/index.php?option=com_transmanager&task=ajax.updateTransState&format=json',
                    data: {
                        transID: jQuery(this).data('id'),
                        pstate: $pstate,
                        token: Joomla.optionsStorage["csrf.token"]
                    },
                    success: function (data) {
                        $data = jQuery.parseJSON(data)
                        if (event.target.dataset.cancel == 0) {
                            $this.text('Удалить').attr('data-cancel', '1')
                        } else {
                            $this.text('Отменить').attr('data-cancel', '0')
                        }

                        console.info(data, $data)
                        //console.info(data)
                    }
                })
                return true;
            }
            //перевод в отключенные

            if (event.target.dataset.cancel == 1) {
                //удалить
                console.info('remove translation')
                jQuery.ajax({
                    url: '/index.php?option=com_transmanager&task=ajax.removeTranslation&format=json',
                    data: {
                        profileID: $profileSelectValue,
                        translationID: jQuery(this).data('id'),
                        token: Joomla.optionsStorage["csrf.token"]
                    },
                    success: function (data) {
                        $data = jQuery.parseJSON(data)
                        $this.text('Подключить').attr('data-cancel', '0')
                        if (jQuery('.active-trans-page').length > 0 && ($this.parents('.catalogitem').data('state') == 1 || $this.parents('.catalogitem').data('state') == 3)) $this.text('Продлить')
                        jQuery('.trans-count .value').text($data.cart.transCount)
                        jQuery('.trans-sum .value').text($data.cart.total)
                        console.info(data, $data)
                        //console.info(data)
                        //обновление корзины
                        if (jQuery('.cart-page').length > 0) {
                            if ($data.cart.total == 0) location.reload()
                            jQuery('.cart-form .total .value').text($data.cart.total)
                            if ($this.parents('.products-wrapper').find('.catalogitem').length < 2) {
                                $this.parents('.products-wrapper').remove()
                            }
                            $this.parents('.catalogitem').remove()
                        }
                        //обновление корзины
                    }
                })
                //удалить
            } else {
                //добавить
                console.info('add translation')
                jQuery.ajax({
                    url: '/index.php?option=com_transmanager&task=ajax.addTranslationTask&format=json',
                    data: {
                        profileID: $profileSelectValue,
                        timeRange: $this.parents('.item-row').find('select').val(),
                        translationID: jQuery(this).data('id'),
                        addType: $addType,
                        token: Joomla.optionsStorage["csrf.token"]
                    },
                    success: function (data) {
                        $data = jQuery.parseJSON(data)
                        jQuery('.trans-count .value').text($data.cart.transCount)
                        jQuery('.trans-sum .value').text($data.cart.total)
                        console.info($data)
                        if (jQuery('.cart-page').length > 0) {
                            jQuery('.cart-form .total .value').text($data.cart.total)
                        } else {
                            $this.text('Отменить').attr('data-cancel', 1)
                        }
                        //console.info(data)
                    },
                    error: function (data) {
                        console.info(data)
                    }
                })
                //добавить
            }
        }
    })

    jQuery('.no-profile-selected-warn .close-btn a').click(function () {
        jQuery.fancybox.close()
    })

    jQuery('.mod_flexicontent_wrapselect-profile-mod form select').change(function (event) {
        if (this.value == '') return false;
        console.info(this)
        jQuery.ajax({
            url: '?tmpl=component',
            type: 'post',
            dataType: 'html',
            data: {'profile-select': this.value},
            success: function (data) {
                $data = jQuery(jQuery.parseHTML(data))
                $flexicontent = jQuery(data).filter('.flexicontent')
                $flexiHTML = jQuery(jQuery.parseHTML($flexicontent.html()))
                jQuery('.flexicontent .items').replaceWith($flexiHTML.filter('.items'))

                jQuery('.dur-select').select2({
                    width: '134px',
                    minimumResultsForSearch: -1,
                    dropdownAutoWidth : true
                })
                //console.info($flexicontent, $flexiHTML)
            }
        })
        //return false
        event.preventDefault()
    })
    /*подключить трансляцию*/

    /*переключение текущих*/
    jQuery('.current-items-choise a').click(function (event) {
        jQuery('.current-items-choise a.active').removeClass('active')
        jQuery(this).addClass('active')
        if (event.currentTarget.dataset.state == 'all') {
            jQuery('.block-wrapper:hidden').fadeIn(300)
            return true;
        } else {
            jQuery('.block-wrapper')
                .hide()
                .filter('.block-'+event.currentTarget.dataset.state)
                .fadeIn(300)
        }
        event.preventDefault()
    })
    /*переключение текущих*/

    /*переключение трансляций*/
    jQuery('.fccat14 .subcat').click(function () {
        jQuery('.fccat14 .subcategorieslist .active').removeClass('active')
        jQuery(this).addClass('active')
        $currCatID = jQuery(this).data('subid')
        jQuery('.items [class*=subcatinst]')
            .hide()
            .filter('.subcatinst-' + $currCatID)
            .fadeIn(300)
    })

    /*jQuery('.subcategorieslabel.show-all').click(function () {
        jQuery(this).addClass('active')
        jQuery('.catalogitem, .header-wrapper').fadeIn(300);
    })*/
    /*переключение трансляций*/

    /*развернуть*/
    jQuery('.show-hidden').click(function () {
        jQuery(this).fadeOut(150).parent().find('.hidden-row').slideDown(300)
        if (jQuery(this).hasClass('table-show')) {
            jQuery(this).parents('.extra-table').find('tr:hidden').slideDown(300)
        }
    })
    /*развернуть*/

    /*цифры слайдера*/
    UIkit.util.on('.home-popular-ex-cats', 'itemshown', function (event, options) {
        jQuery('.home-popular-ex-cats .current').text(options.index + 1)
        console.info(event, options)
    })
    /*цифры слайдера*/

    /*обратный звонок*/
    /*jQuery('.order-btn').fancybox({
        //selector: '.order-btn',
        src: '.callback-module .module-content',
        type: 'inline',
        infobar: false,
        toolbar: false,
        arrows: false,
        baseClass: 'callback-tpl',
        opts: {
            padding: 0,
        }
    })*/
    /*обратный звонок*/

    /*обратный звонок*/
    jQuery('.vac-items .bordered-sq-btn').fancybox({
        //selector: '.order-btn',
        src: '.offer-module .module-content',
        type: 'inline',
        infobar: false,
        toolbar: false,
        arrows: false,
        baseClass: 'callback-tpl',
        opts: {
            padding: 0,
        }
    })
    /*обратный звонок*/

    /*файл*/
    jQuery('.callback-form input[type=file]').change(function (data, data2) {
        jQuery(this.labels[0]).text(this.files[0].name)
    })
    /*файл*/

    /*клик по стрелкам*/
    jQuery('.docs-section .slidec-nav a').click(function (event) {
        $dirType = jQuery(this).attr('href').replace(/#/g, '');
        //console.info($dirType, jQuery('.docs-section .uk-slidenav[data-uk-slider-item='+$dirType+']'))
        jQuery('.docs-section .uk-slidenav[data-uk-slider-item='+$dirType+']').get(0).click();
        event.preventDefault()
    })

    jQuery('.uk-slidenav').click(function () {
        $this = jQuery(this)
        $currType = jQuery(this).attr('data-uk-slider-item')
        $currSlider = UIkit.slider(jQuery(this).parents('.uk-slider').get(0))
        $currIndex = $currSlider.index
        $currScrollbar = jQuery(this).parents('.uk-slider').find('+ div').get(0)
        $currScBpos = $currScrollbar.noUiSlider.get()
        //console.info($currSlider, $currScrollbar, $currIndex, $currType, $currScBpos, $currScrollbar.noUiSlider.options.range)

        if ($currType == 'next') {
            $currScrollbar.noUiSlider.set([$currIndex + 1])
            //console.info(jQuery(this).attr('class'))
            /*setTimeout(function () {
                if ($this.parent().find('[data-uk-slider-item=next].uk-invisible').length > 0) {
                    $currScrollbar.noUiSlider.set([$currScrollbar.noUiSlider.options.range.max])
                }
                console.info('aha')
                console.info($this.parent().find('[data-uk-slider-item=next]'))
            }, 100)*/
        } else {
            $currScrollbar.noUiSlider.set([$currIndex - 1])
        }

    })

    UIkit.util.on('.uk-slider', 'itemshown', function (event, options) {
        //console.info(event, options)
        //if (jQuery(this).hasClass('uk-invisible')) console.info('aha')
    })
    /*клик по стрелкам*/

    /*покзать еще*/
    jQuery('.service-category').on('click', '.readmore-btn a', function () {
        $rdmrBtn = jQuery(this)
        if (jQuery('.li-next.control a').length > 0) {
            jQuery.ajax({
                url: jQuery('.li-next.control a').attr('href'),
                beforeSend: function () {
                    jQuery('.service-category').toggleClass('loading');
                },
                success: function (data) {
                    $parsedHTML = jQuery.parseHTML(data)
                    jQuery('.article-items').append(jQuery($parsedHTML).find('.article-items').html())
                    jQuery('.service-category').toggleClass('loading');
                    if (jQuery($parsedHTML).find('.li-next.control a').length < 1) {
                        $rdmrBtn.parent().remove()
                    } //jQuery(this).parent().
                }
            })
        }
    })
    /*покзать еще*/

    /*карта*/
    // Функция ymaps.ready() будет вызвана, когда
    // загрузятся все компоненты API, а также когда будет готово DOM-дерево.
    if (jQuery('#map').length > 0) {
        initYaMap()
    }

    function initYaMap() {
        ymaps.ready(init);
        function init(){
            // Создание карты.
            var myMap = new ymaps.Map("map", {
                center: [55.765200, 37.602705],
                zoom: 16,
                controls: ['zoomControl', 'fullscreenControl', 'routeButtonControl']
            });
            myMap.geoObjects.add(
                new ymaps.Placemark([55.765200, 37.602705], {
                    balloonContent: '<strong>Adetail</strong><br />Москва, Малый Палашевский пер.,<br />' +
                    'д. 6, 4 этаж'
                }, {
                    iconLayout: 'default#image',
                    iconImageHref: '/images/map.png'
                })
            )
        }
    }
    /*карта*/

    /*прокрутка на главной*/

    /*прокрутка кнопками*/
    /*jQuery('body').keydown(function (event) {
        if (jQuery('.uk-slider').length > 0 && jQuery('body.view-item').length < 1) {
            if (event.keyCode == 37) {
                jQuery('.uk-slider [uk-slider-item=previous]').get(0).click()
            } else {
                if (event.keyCode == 39) {
                    jQuery('.uk-slider [uk-slider-item=next]').get(0).click()
                }
            }
        }
        //console.info(event)
    })*/
    /*прокрутка кнопками*/

    /*подробнее*/
    /*jQuery('.readmore-button a').click(function (event) {
        $linkObject = jQuery(this);
        $locLink = jQuery(this).attr('href')
        jQuery.ajax({
            beforeSend: function () {
                jQuery('body').addClass('loading-item')
            },
            url: $locLink,
            success: function (data) {
                $pageData = jQuery(jQuery.parseHTML(data))
                //console.info($pageData.filter('section#page'), $pageData)
                jQuery('.main-section .fcitems').remove()
                jQuery('body').removeClass('loading-item')
                jQuery('.main-section')
                    .append($pageData.find('.main-section').html())
                //jQuery('body').attr('class', $pageData.filter('section#page').data('class'))
                jQuery('body').addClass('view-item inner-page')
                $currIndex = 0;
                history.pushState(null, null, $locLink)
            }
        })
        event.preventDefault();
    })*/
    /*подробнее*/

    /*прокрутка на главной*/

    /*прокрутка слайдера и слайдшоу*/
    //$currIndex = 0;
    /*jQuery('body').on('beforeitemshow', '.uk-slider, .uk-slideshow', function (event) {
        //console.info(event.currentTarget.__uikit__, event)
        $event = event.detail[0];
        if ($event.dir == 1) {
            jQuery($event.$el).addClass('dir-right').removeClass('dir-left')
        } else {
            jQuery($event.$el).addClass('dir-left').removeClass('dir-right')
        }
        jQuery($event.$el).find('.progress-start').text($event.index + 1)
        //console.info(event, options)
    })

    jQuery('body').on('itemshow', '.uk-slider', function (event) {
        $event = event.detail[0];
        if (jQuery('.project-list .uk-slider').length > 0) {
            //console.info($currIndex, $event.index)
            if ($currIndex != $event.index) {
                jQuery('.projects-slides').find('[uk-slideshow-item]').eq($event.index).find('a').get(0).click()
                //UIkit.slideshow('.projects-slides .uk-slideshow').show(parseInt($event.index));
                //console.info($event)

            }
            //console.info($event.index, $currIndex)
            $currIndex = $event.index;
        }
    })*/
    /*прокрутка слайдера*/

    /*слайдер на главной*/
    /*if (jQuery('.home-projects img').length > 1) {
        $projSlider = jQuery('.home-projects ul:visible').bxSlider({
            mode: 'vertical',
            pager: false,
            hideControlOnEnd: true,
            moveSlides: 1,
            minSlides: 1,
            maxSlides: 1,
            onSlideAfter:function (event) {
                console.info(event)
            }
        })

        jQuery('.home-projects ul').on('onSlideAfter', function (event) {
            //console.info(event)
        })
    }*/
    /*слайдер на главной*/

    /*загрузить еще*/
    /*jQuery('.flexicontent').on('click', '.load-more', function () {
        //console.info('hi')
        jQuery.ajax({
            url: jQuery('.pagination .li-next a').attr('href'),
            success: function (data) {
                $parsedData = jQuery(jQuery.parseHTML(data))
                $catalogItems = $parsedData.find('.catalogitem');
                $newPag = $parsedData.find('.flexicontent div.pagination');
                //console.info($newPag)
                jQuery($catalogItems).each(function () {
                    //console.info(jQuery(this).get(0))
                    jQuery('.flexicontent .items-list').append(jQuery(this))
                })

                if ($parsedData.find('.pagination .li-next').length > 0) {
                    jQuery('.flexicontent div.pagination').replaceWith($newPag)
                    console.info('found .li-next')
                } else {
                    jQuery('.flexicontent .load-more').remove()
                }//
            }
        })
    })*/
    /*загрузить еще*/

    /*Обратный звонок*/
    jQuery('.order-link, .module-slajdernaglavnoj .uk-button').fancybox({
        content: jQuery('.bottom-form-callback .module-content'),
        padding: 0
    })
    /*Обратный звонок*/

    /*меню мобильное*/
    jQuery('.show-menu').click(function (event) {
        jQuery('.top-menu ul').toggleClass('opened')
    })
    /*меню мобильное*/

    /*скролл отзывов*/
    if (jQuery('.class-home .scrollbar-inner').length > 0) {
        jQuery('.scrollbar-inner').scrollbar();
    }
    /*скролл отзывов*/

    /*док-меню*/
    //if (window.innerWidth > 1024) {
    /*if (jQuery('#header').length > 0) {
        var $menuTop = jQuery('#header').offset().top
        jQuery(window).scroll(function (data) {
            if (window.scrollY > 0) {
                jQuery('#page').not('.floating').addClass('floating')
                //jQuery('#page.floating').css('padding-top', jQuery('#header-menu').outerHeight)
            } else {
                jQuery('#page.floating').removeClass('floating')
            }
        })
    }*/
    //}
    /*док-меню*/

    //Плашка фильтра
    /*jQuery('body')
        .on('change','form.cf_form [type=checkbox]', totalShield)
        .on('change','form.cf_form select', totalShield)
        .on('click','button.cf_search_button', totalShield)
        .on('mouseup','div.cf_filtering_knob', totalShield) 
    
    function totalShield() {
        var $this = jQuery(this)
        FormId = jQuery('a.cf_resetAll_link').data('module-id')
        FormEl = document.id('cf_form_'+FormId)
        
        filterObj = customFiltersProp[FormId];
        
        elementID = $this.prop('id')
        //console.log($this.context)
        
        jQuery.ajax({
            beforeSend: function() {
                jQuery('a.total-shield').remove()
                //console.info('hi')
            },
            type: 'GET',
            url: filterObj.component_base_url+'?'+FormEl.toQueryString(),
            success: function(data) {
                $data = jQuery(jQuery.parseHTML(data))
                $totalProduct = $data.find('span.product-count').text() 
                
                //console.info($totalProduct)
                
                shieldHTML = 
                        '<a class="total-shield">'+
                            '<span class="shield-count">Найдено товаров: '+$totalProduct+'</span>'+
                            '<span class="shield-show">Показать</span>'+
                        '</a>';
                
                if ($this.prop('localName') == 'input') {
                    jQuery('#'+elementID).parents('li').append(shieldHTML)    
                } else {
                    jQuery('#'+elementID).parents('div.cf_wrapper_inner').find('div.cf_wrapper_input_text').append(shieldHTML)
                }
                
                jQuery('a.total-shield').click(function() {
                    jQuery('form.cf_form input[type=submit]').trigger('click')
                })
            }
        })
    }*/
    //Плашка фильтра

    /*маска для инпута телефона*/
    /*if (jQuery('#phone_1_field').length > 0) {
        jQuery('#phone_1_field').mask('+7 000 000-00-00', {
            placeholder: "+7 ___ ___-__-__"
        });
    }*/
    /*маска для инпута телефона*/

    /*появление кнопки скролла*/
    /*jQuery(window).scroll(function (event) {
        if (jQuery(window).scrollTop() > jQuery(window).height()/2) {
            jQuery('span.up:hidden').fadeIn(300)
        } else {
            jQuery('span.up:visible').fadeOut(100)
        }
    })*/
    /*появление кнопки скролла*/

    /*скролл наверх*/
    jQuery('span.up').click(function() {
        jQuery('body, html').animate({
            scrollTop: 0
        }, 700)
    });
    /*скролл наверх*/
    
});