var animation   = 'arrival';
var targets     = new Set();
// var newTargets  = new Set();

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
    // var el = $(element);
    // if (el.visible() && el.hasClass(animation))
    // {
    //     el.removeClass(animation);
    //     setTimeout(() => el.addClass(animation), 33);

    //     newTargets.add(element);
    // }
}

function animate(element)
{
    var el = $(element);
    if (el.visible() && !el.hasClass(animation))
        el.addClass(animation);
//        el.addClass(animation)
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
                // for (var i = 0; i < newTargets.size; i++)
                // {
                //     var el = $(newTargets[i]);
                //     if (el.visible())
                //     {
                //         if (el.hasClass(animation))
                //         {
                //             el.removeClass(animation);
                //             setTimeout(() => el.addClass(animation), 33);
                //         }

                //         else
                //             setTimeout(() => el.addClass(animation), 33);
                //     }

                //     targets.add(newTargets[i]); 
                // }

                targets.forEach(el =>
                    {
                        // if (!newTargets.has(el))
                            animate(el);
                    }
                );

                // newTargets.clear();
            }
        );
    }
);