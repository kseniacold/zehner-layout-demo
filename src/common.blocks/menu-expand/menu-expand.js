(function() {
    if (typeof $ == "undefined") { return; }
    var BREAKPOINT = 1200;

    $(document).ready(function () {
        toggleMenu();
        $jQ(window).resize(toggleMenu);
    });

    /**
     * Handles additional menu expansion
     */
    function toggleMenu() {
        var jHeader = $('.site__header'),
            jAdBar = $('.site__bar'),
            jMenu = $('.site__menu-expand');

        if (getViewportWidth() >= BREAKPOINT) {
            jHeader.on({
                mouseenter: function() {
                    expandMenu(jMenu, jHeader, jAdBar);
                    var jMenuActive = $('.menu-expand_active');

                    jMenuActive.on({
                        mouseleave: function() {
                            hideMenu(jMenuActive);
                        }
                    });
                }
            });
        }

    }

    /**
     * Expands additional menu by adding 'menu-expand_active' class
     * @param jMenu
     */
    function expandMenu(jMenu, jHeader, jAdBar) {
        if (!jMenu.hasClass('menu-expand_active')) {
            jMenu.addClass('menu-expand_active');

            // set top property based on the header height
            jMenu.css('top', jHeader.outerHeight(true) + jAdBar.outerHeight(true));
        }
    }

    /**
     * Removes additional menu by removing 'menu-expand_active' class
     * @param jMenu
     */
    function hideMenu(jMenu) {
        if (jMenu.hasClass('menu-expand_active')) {
            jMenu.removeClass('menu-expand_active');
        }
    }

    /**
     * Util function - returns viewport width
     */
    function getViewportWidth() {
        return document.body.parentNode.clientWidth;
    }
}());