  $(document).ready(function() {
    $('[data-fancybox="gallery"]').fancybox({
      loop: true,
      buttons: [
        "zoom",
        "slideShow",
        "fullScreen",
        "thumbs",
        "close"
      ],
      animationEffect: "zoom",
      transitionEffect: "fade",
      btnTpl: {
        zoom: '<button data-fancybox-zoom class="fancybox-button fancybox-button--zoom" title="{{ZOOM}}"><i class="far fa-search-plus"></i></button>'
      }
    });
  });
