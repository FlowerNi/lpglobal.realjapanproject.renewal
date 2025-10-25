// Scroll to Top Button
$(document).ready(function() {
    const scrollToTopBtn = $('#scrollToTop');
    
    // Show/hide button based on scroll position
    $(window).on('scroll', function() {
        const scrollTop = $(window).scrollTop();
        
        if (scrollTop > 300) {
            scrollToTopBtn.addClass('visible');
        } else {
            scrollToTopBtn.removeClass('visible');
        }
    });
    
    // Smooth scroll to top when clicked
    scrollToTopBtn.on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 800, 'easeInOutCubic');
    });
});

// Header scroll effect - similar to Cursor.com
$(document).ready(function() {
    const headerInner = $('.header-inner');
    
    $(window).on('scroll', function() {
        const scrollTop = $(window).scrollTop();
        
        if (scrollTop > 50) {
            headerInner.addClass('scrolled');
        } else {
            headerInner.removeClass('scrolled');
        }
    });
});

// Scroll Animation Observer
$(document).ready(function() {
    // Create intersection observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe all animated elements
    const animatedElements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right, .scale-in');
    animatedElements.forEach(el => {
        observer.observe(el);
    });
});

$(function () {
    var pagetop = $('#page_top');
    // ボタン非表示
    pagetop.hide();

    // 100px スクロールしたらボタン表示
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            pagetop.fadeIn();
        } else {
            pagetop.fadeOut();
        }
    });
    pagetop.click(function () {
        $('body, html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });
});

$(function () {
    $('.mv-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        fade: true,
        speed: 1000,
        dots: true,
        arrows: false,
        pauseOnFocus: false,
        pauseOnHover: false,
        swipe: true,
        touchMove: true,
        draggable: true,
        cssEase: 'linear'
    });
    $('.wcd-slider').slick({
        infinite: true,
        initialSlide: 1,
        slidesToShow: 4.1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        variableWidth: false,
        speed: 1000,
        dots: false,
        centerMode: false,
        arrows: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    autoplaySpeed: 3000,
                    speed: 800
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplaySpeed: 4000,
                    speed: 600,
                    centerMode: true,
                    centerPadding: '20px'
                }
            }
        ]
    });
    $('.partner-slider').slick({
        infinite: true,
        slidesToShow: 7,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0, // 0で連続的に
        speed: 3000,      // 8秒かけて1枚分流れる
        cssEase: 'linear',
        variableWidth: true,
        dots: false,
        centerMode: true,
        arrows: false,
        pauseOnHover: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    variableWidth: false,
                    centerPadding: '20px',
                    speed: 2000
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    variableWidth: false,
                    centerPadding: '10px',
                    speed: 1500
                }
            }
        ]
    });
});

/*
//ドロワー用
$(document).ready(function () {
    $('.drawer').drawer({
        iscroll: {
            mouseWheel: false
        }
    });
});

jQuery(function () {
    $('.drawer').drawer();
    $('.drawer-nav li a').on('click', function () {
        $('.drawer').drawer('close');
    });
});

//タブ用
$(function () {
    $('.tabName li').click(function () {
        var index = $('.tabName li').index(this);
        $('.tabName li').removeClass('active');
        $(this).addClass('active');
        $('.tabArea >li').removeClass('show').eq(index).addClass('show');
    });
});
*/
//////////////////////////////////////////////////
//iOSサファリ用 下部のメニュー被り解決
//※ブラウザ幅でのリアルタイム処理より先に記述する
//////////////////////////////////////////////////
/*
jQuery(function () {
    $('.drawer').drawer();
    $('.drawer-nav li a').on('click', function () {
        $('.drawer').drawer('close');
    });
});
const setFillHeight = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}
// 画面のサイズ変動があった時に高さを再計算する
window.addEventListener('resize', setFillHeight);
// 初期化
setFillHeight();
*/
///////////////////////////////////////
//ブラウザ幅でリアルタイムに処理を分ける
///////////////////////////////////////
function checkBreakPoint() {
    w = $(window).width();
    if (w <= 767) {
        // スマホ向け（767px以下のとき）
        $('#shop-slider').not('.slick-initialized').slick({
            infinite: true,
            initialSlide: 1,
            slidesToShow: 2.2,
            slidesToScroll: 1,
            dots: false,
            centerMode: false,
            arrows: false,
            adaptiveHeight: true
        });
        $('#ranking-slider').not('.slick-initialized').slick({
            infinite: true,
            initialSlide: 1,
            slidesToShow: 2.2,
            slidesToScroll: 1,
            dots: false,
            centerMode: false,
            arrows: false,
            adaptiveHeight: true
        });
        $('#must-slider').not('.slick-initialized').slick({
            infinite: true,
            initialSlide: 1,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            centerMode: true,
            arrows: false,
            adaptiveHeight: true
        });
    } else {
        // PC向け
        $('#shop-slider').slick('unslick');
        $('#ranking-slider').slick('unslick');
        $('#must-slider').slick('unslick');
    }
}
// ウインドウがリサイズする度にチェック
$(window).resize(function () {
    checkBreakPoint();
});
// 初回チェック
checkBreakPoint();



//**********************************************
// 対象となる要素の動きを監視して処理（後からjavascriptで追加された要素など）
//**********************************************
// 監視対象のノードを選択（'selectID'というIDを持つタグを指定）
var targetNode = document.getElementById('selectID');

// MutationObserverの設定
var config = { childList: true, subtree: true };

// 変更が発見されたときに実行されるコールバック関数
const callback = function (mutationsList, observer) {
    for (const mutation of mutationsList) {
        //ここに処理を記述
    }
    observer.disconnect();
};

// MutationObserverのインスタンスを作成
var observer = new MutationObserver(callback);

// 監視を開始（targetNodeが存在する場合のみ）
if (targetNode) {
    observer.observe(targetNode, config);
}


//////////////////////////////////////////////////////////
//要素が領域に入ったか監視する場合のサンプル
//////////////////////////////////////////////////////////
/*
const target = document.getElementById("ターゲットID"); //ターゲット指定

const options = { //オプション設定
  root: null,
  rootMargin: 0px,
  hreshold: 0
};

const observer = new IntersectionObserver(callback, options); //オブザーバー呼び出し

observer.observe(target); //root(optiobs)とターゲットが交差したら発火

function callback() { //実行する動作
  target.classList.add('show');
}
  */

// REMOVED DUPLICATE CAROUSEL SCRIPT - KEEPING ONLY THE WORKING ONE

// PRICE Section Mobile Slider - Removed (No longer needed)

// Pause rotator animation on hover/focus and manage aria-hidden for accessibility
$(function(){
    var $rotator = $('.rotator');
    if (!$rotator.length) return;

    $rotator.on('mouseenter focusin', function(){
        $(this).addClass('rotator-paused');
        $(this).find('.rotator-item').css('animation-play-state','paused');
    });
    $rotator.on('mouseleave focusout', function(){
        $(this).removeClass('rotator-paused');
        $(this).find('.rotator-item').css('animation-play-state','running');
    });

    // keep aria-hidden in sync (only the currently visible one should be aria-hidden=false)
    function updateAria(){
        $('.rotator-item').each(function(){
            var visible = $(this).css('opacity')>0.5;
            $(this).attr('aria-hidden', !visible);
        });
    }
    // run periodically to update aria (cheap interval)
    setInterval(updateAria, 500);
});


//////////////////////////////////////////////////////////
//要素が領域に入ったか複数要素に対して監視する場合のサンプル
//////////////////////////////////////////////////////////
/*
const target = document.querySelectorAll('.item');

const observer = new IntersectionObserver(callback);
target.forEach((tgt) => {
  observer.observe(tgt);
});

function callback(entries) {
  entries.forEach((entry) => {
    const target = entry.target;
    if (entry.isIntersecting) {
      target.classList.add('show');
    } else {
      target.classList.remove('show');
    }
  });
}
  */

// REMOVED DUPLICATE CAROUSEL SCRIPT - KEEPING ONLY THE WORKING ONE

// Pause rotator animation on hover/focus and manage aria-hidden for accessibility