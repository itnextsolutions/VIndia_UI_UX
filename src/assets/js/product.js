
$(document).ready(function () {
    $(".big_img").imagezoomsl({
        zoomrange: [1,3]
    });
});

$(document).ready(function () {
    $(".small_img").hover(function () {
        $(".big_img").attr('src', $(this).attr('src'));
    });
});

const navbarAutocomplete = document.querySelector('#navbar-search-autocomplete');
const navbarData = ['One', 'Two', 'Three', 'Four', 'Five'];
const navbarDataFilter = (value) => {
  return navbarData.filter((item) => {
    return item.toLowerCase().startsWith(value.toLowerCase());
  });
};

new mdb.Autocomplete(navbarAutocomplete, {
  filter: navbarDataFilter,
});
