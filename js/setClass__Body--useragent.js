'use strict'

document.addEventListener("load", setClass__Body__useragent, true);


function setClass__Body__useragent () {
    var
    aKeys = ["MSIE", "Firefox", "Safari", "Chrome", "Opera"],
    sUsrAg = navigator.userAgent, nIdx = aKeys.length - 1;

    for (nIdx; nIdx > -1 && sUsrAg.indexOf(aKeys[nIdx]) === -1; nIdx--)  { 
       var SingleBrowser = nIdx;
    }
    
    if( SingleBrowser === 4 ) {

        // IE's allgemein gültig //        
        document.getElementsByTagName("Body")[0].setAttribute("class","browser__fontSize--prio1");
        
        GetElementById('nav_a1','nav__links-1');
        GetElementById('nav_a2','nav__links-1');
        GetElementById('nav_a3','nav__links-1');
        GetElementById('nav_a4','nav__links-1');
        GetElementById('nav_a5','nav__links-1');
        GetElementById('nav_a6','nav__links-1');
        GetElementById('nav_a7','nav__links-1');
        GetElementById('nav_a8','nav__links-1');

        GetElementById('button__standard','button__fonzSize--prio1');
        GetElementById('nav_verstecken','button__fonzSize--prio1');

        for( var s=1;s<2;s++) {
            GetElementById('left__link-size1','left__link--size2');
        }

        for( var z=1;z<6;z++) {
            GetElementById('item--left-txt'+z,'innen__left--txt-1');
        }

        for( var r=1;r<6;r++) {
            GetElementById('left__txt-size'+r,'left__txt--size1');
        }

        for( var y=1;y<5;y++) {
            GetElementById('left__img-width'+y,'left__img--width1');
        }

        GetElementById( 'img-tpw-logo','container__height--3-5em');
        GetElementById( 'img--nummer-gegen-kummer','container__height--3-5em');
        GetElementById( 'img--hello','container__height--5-5-1em');
        GetElementById( 'img--viel-spass','container__height--2em');
        GetElementById( 'img__button-arabisch','article__content--img--size4');
        GetElementById( 'article__abstand--top4em','article__abstand--top6em');
        GetElementById( 'img--comic1','container__height--10em');
        GetElementById( 'img--comic2','container__height--10em');
        GetElementById( 'img--comic3','container__height--10em'); 


        
        /* stuck.htl */
        GetElementById( 'img--stueck1','container__float--left container__width--8em');  
        GetElementById( 'blub','container__float--left container__width--8em');  
        GetElementById( 'img--stueck3','container__float--left container__width--8em');
        GetElementById( 'img--stueck4','container__float--right container__width--8em');
        GetElementById( 'blub1','container__float--right container__width--8em');
        for( var o=6;o<10;o++) {
            GetElementById('img--stueck'+o,'container__float--right container__width--8em');
        }        

        for( var y=1;y<5;y++) {
            GetElementById('img--materialien'+y,'container__float--left container__width--8em');
        }
        GetElementById('img-materialien5','container__height--14-1em');
        GetElementById('img--links1','container__height--14-1em');

        GetElementById( 'img--chatregeln','container__height--4-1em');

        GetElementById( 'img-songs-notenblatt','container__height--60-1em');
        GetElementById( 'img-songs','container__height--14-1em');
        GetElementById( 'innen__link-size','innen__link--size1');
        GetElementById( 'innen__link-size1','innen__link--size1');  
        GetElementById( 'innen__link-size2','innen__link--size3');

       for( var c=1;c<6;c++) {
            GetElementById( 'innen__headline'+c,'innen__headline--color1');
        }
    
        for( var f=1;f<16;f++) {
           GetElementById( 'innen__link-txt'+f,'innen__link--size3');
        }

        GetElementById( 'form__size-hinweis', 'font__size--hinweis1');

        for( var fx=1;fx<5;fx++) {
            GetElementById( 'form__size-input'+fx, 'input font__size--input1');
        }
        
        GetElementById( 'form__size-textarea','textarea font__size--input1');
        GetElementById( 'form__size-submit','font__size--input1');

        for( var b=1;b<13;b++) {
            GetElementById( 'section__abstand-top'+b,'section1 article__abstand--top1');
        }
        for(var s=1;s<16;s++) {
            GetElementById( 'section__abstand-txt'+s,'section5');
        }
        for( var r=1;r<5;r++) {
            GetElementById( 'artikel__size-'+r,'innen__link--size5');
        }

        for( var a=1;a<12;a++) {
            if(a<10){a = '0'+a}
            GetElementById( 'galerie__img-size'+a,'galerie__img--size1 galerie__link--a');
            GetElementById( 'galerie__link-size'+a,'galerie__link--size1');
        }

        GetElementById( 'article__content-img','article__content--img1');

    }
}

function  GetElementById(element,className) {
    var el1 = document.getElementById(element);
    if (el1 !== null) {
       document.getElementById(element).className=className;   
    }
}

function  GetElementById(element,className) {
    var el1 = document.getElementById(element);
    if (el1 !== null) {
       document.getElementById(element).className=className;   
    }
}
