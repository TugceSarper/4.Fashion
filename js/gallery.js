for (var i = 1; i <= 17; i++) {
    var html = '<div id="gallery__item--%id%" class="gallery__item gallery__item--%id% animated-on-scroll zoom-in"><img alt="" class="gallery__img" src="img/g%id%.jpg"><div id="gallery__overlay--%id%" class="gallery__overlay"><div class="gallery__icon"><i class="fas fa-search-plus"></i></div></div></div>';
    var newHtml = html.replace('%id%', i);
    newHtml = newHtml.replace('%id%', i);
    newHtml = newHtml.replace('%id%', i);
    newHtml = newHtml.replace('%id%', i);
    newHtml = newHtml.replace('%id%', i);
    document.getElementById('gallery__grid').insertAdjacentHTML('beforeend', newHtml);
}

$('.gallery__overlay').on('click', function () {
    $('.lightbox').addClass('lightbox-open');
    let id = this.id,
        newId = id.match(/\d/g).join(""),
        html = '<img id="lightbox__img" alt="" class="lightbox__img" src="img/gallery/g%id%.jpg">';
    var newHtml = html.replace('%id%', newId);
    document.getElementById('lightbox__picture').insertAdjacentHTML('beforeend', newHtml);

});

function remChild() {
    var child = document.getElementById('lightbox__img');
    child.parentNode.removeChild(child);
}

$('.lightbox__close-btn').on('click', function () {
    $('.lightbox').removeClass('lightbox-open');
    setTimeout(remChild, 300)
});


function changeImage(a) {
    let src = $('#lightbox__img').attr("src");
    var numb = src.match(/\d/g);
    numb = parseInt(numb.join(""));
    if (numb === 17 && a === 1) {
        numb = 1;
    } else if (numb === 1 && a === -1) {
        numb = 17
    } else {
        numb = numb + a;
    }

    $('#lightbox__img').attr("src", `img/gallery/g${numb}.jpg`)
}
