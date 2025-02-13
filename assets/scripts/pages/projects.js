var appliedFilters = {
    'languages': ['C++', 'C#', 'Lua'],
    'libraries': ['SFML', 'RmlUi', 'WPF', 'EF6', 'sol2'],
    'other': ['HTML', 'CSS', 'XML', 'TOML', 'SQL']
}

$(document).ready(() =>
    {
        var tiles = ``;
        projects.forEach(data =>    // db/projects.js
            {
                tiles += `
                    <a href="${data.link}" id="${data.id}" class="card div_border_acc3 ${data.link == '#' ? 'disabled' : ''}">
                        <div style="width: 100%; height: 100%;">
                            <img src="../assets/images/${data.image}" class="card-img" style="border: none; border-radius: 2.5px;">
                        </div>
                        <div class="card-img-overlay" style="top: 57%; height: 38.5%;">
                            <div class="div_tile_info">
                                <div style="width: 64%;">
                                    <h5 class="text_acc3">${data.name}</h5>
                                    <span class="text_light" style="width: 50%;">${data.desc}</span>
                                </div>

                                <div style="width: 33%;">
                                    <h5 class="text_acc4">Tags</h5>
                                    <div id="tags" class="grid_1_4 div_border_acc4" style="width: 100%; margin-top: 10px; padding: 7.5px 0px;">

                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                `;
            }
        );

        var div_tiles = document.querySelector('.div_info > .div_tiles');
        div_tiles.innerHTML = tiles;

        var cards = $(div_tiles).find('a.card');
        cards.each(
            (_, card) =>
            {
                var tags = ``;

                var data = projects.find(d => d.id == card.id);
                data.languages  .forEach(el => tags += `<span class="text_code text_acc1">${el}</span>`);
                data.libraries  .forEach(el => tags += `<span class="text_code text_acc2">${el}</span>`);
                data.other      .forEach(el => tags += `<span class="text_code text_acc3">${el}</span>`);

                var div_tags = card.querySelector('div#tags');
                div_tags.innerHTML = tags;

                appear(card); // loading.js
            }
        );

        var inputs = $('.div_filters input[type="checkbox"]');
        inputs.each((_, el) => el.checked = true);
    }
);

function updateFilter(e, group, id)
{
    var input = e.srcElement;
    if (input.checked)
    {
        appliedFilters[group].push(id);
    }
    else
    {
        var tr_filters = appliedFilters[group];
        appliedFilters[group] = tr_filters.filter(f => f != id);
    }

    var cards = $('.div_tiles > a.card');
    for (var i = 0; i < cards.length; i++)
    {
        var card = cards[i];
        var data = projects.find(d => d.id == card.id);

        card.style.display = 'none';

        for (key in appliedFilters)
        {
            if (appliedFilters[key].some(f => data[key].includes(f)))
            {
                card.style.display = 'block';
                appear(card); // loading.js

                break;
            }
        }
    }
}