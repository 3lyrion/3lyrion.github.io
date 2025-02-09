var animation   = 'arrival';
var targets     = new Set();

$.fn.visible = function()
{
    var viewTop       = $(window).scrollTop();
    var viewBottom    = viewTop + $(window).height();
    var compareBottom = $(this).offset().top;
    var compareTop    = compareBottom + $(this).height();

    return ((compareBottom <= viewBottom) && (compareTop >= viewTop));
}

function appear(element)
{
    var el = $(element);
    if (el.hasClass(animation))
        setTimeout(() => 
        {
            el.removeClass(animation);

        }, 16.66);

    targets.add(element);
}

function animate(element)
{
    var el = $(element);
    if (el.visible() && !el.hasClass(animation))
        el.addClass(animation);
}

$(document).ready(() => 
    {
        

        $(".div_title, .div_info, .div_carousel").each(
            (_, el) => 
            {
                animate(el);
                targets.add(el);
            }
        );

        $(document).scroll(() =>
            {
                targets.forEach(el =>
                    {
                        animate(el);
                    }
                );
            }
        );
    }
);