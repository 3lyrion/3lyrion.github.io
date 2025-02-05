var projectData = [
    {
        "id": "project-mortar",
        "name": "SOON&#8482; Project Mortar",
        "image": "../assets/images/placeholder_1.png",
        "desc": "My new game based on my framework 'Mortar'",
        "languages": ["C++", "Lua"],
        "libraries": ["SFML", "RmlUi", "sol2"],
        "other": ["HTML", "CSS", "XML", "TOML"],
        "collaborators": ["3lyrion (Mikhail Grasin)"]
    },
    {
        "id": "arena-tanks",
        "name": "ArenaTanks",
        "image": "../assets/images/placeholder_1.png",
        "desc": "An engine I've been working on occasionally over the past few years",
        "languages": ["C++"],
        "libraries": ["SFML"],
        "other": [],
        "collaborators": ["3lyrion (Mikhail Grasin)"]
    },
    {
        "id": "interpreter",
        "name": "Interpeter (Simplified JavaScript)",
        "image": "../assets/images/placeholder_2.png",
        "desc": "A physics based 3D golf game with an integrated course builder, a collaborative project with Brodie Griggs",
        "languages": ["C++"],
        "libraries": [],
        "other": [],
        "collaborators": ["3lyrion (Mikhail Grasin)"]
    },
    {
        "id": "pizza-delivery",
        "name": "Pizza Delivery",
        "image": "../assets/images/placeholder_3.png",
        "desc": "An extension of my old voxel engine, features infinite terrain creation, cave generation and chunk management",
        "languages": ["C#"],
        "libraries": ["WPF"],
        "other": ["XML", "SQL"],
        "collaborators": ["3lyrion (Mikhail Grasin)"]
    },
    {
        "id": "event-manager",
        "name": "Event Manager",
        "image": "../assets/images/placeholder_3.png",
        "desc": "A Rollercoaster building and simulation project that uses splines to generate track meshes and car animations",
        "languages": ["C++"],
        "libraries": [],
        "other": [],
        "collaborators": ["3lyrion (Mikhail Grasin)"]
    },
    {
        "id": "state-machine",
        "name": "State Machine",
        "image": "../assets/images/placeholder_3.png",
        "desc": "A Rollercoaster building and simulation project that uses splines to generate track meshes and car animations",
        "languages": ["C++"],
        "libraries": [],
        "other": [],
        "collaborators": ["3lyrion (Mikhail Grasin)"]
    },
    {
        "id": "universal-storage",
        "name": "Universal Storage",
        "image": "../assets/images/placeholder_3.png",
        "desc": "A Rollercoaster building and simulation project that uses splines to generate track meshes and car animations",
        "languages": ["C++"],
        "libraries": [],
        "other": [],
        "collaborators": ["3lyrion (Mikhail Grasin)"]
    },
    {
        "id": "sol2-wrapper",
        "name": "Simple sol2 Wrapper",
        "image": "../assets/images/placeholder_3.png",
        "desc": "A Rollercoaster building and simulation project that uses splines to generate track meshes and car animations",
        "languages": ["C++", "Lua"],
        "libraries": ["sol2"],
        "other": [],
        "collaborators": ["3lyrion (Mikhail Grasin)"]
    }
]

var appliedFilters = {
    "languages": ["C++", "C#", "Lua"],
    "libraries": ["SFML", "RmlUi", "WPF", "sol2"],
    "other": ["HTML", "CSS", "XML", "TOML", "SQL"]
}

$(document).ready(() =>
    {
        var tiles = ``;
        projectData.forEach(data =>
            {
                tiles += `
                    <a href="#" id="${data.id}" class="card div_border_acc3">
                        <img src="${data.image}" class="card-img" style="opacity: 0.33">
                        <div class="card-img-overlay" style="top: 66%;">
                            <div class="div_tile_info text_light">
                                <div style="width: 50%;">
                                    <h5 class="text_acc3">${data.name}</h5>
                                    <span style="width: 50%;">${data.desc}</span>
                                </div>

                                <div class="text_size_a" style="width: 40%;">
                                    <h5 class="text_acc4">Tags</h5>
                                    <div id="tags" class="grid_1_4 div_border_acc4 text_code" style="width: 100%; margin-top: 10px; padding: 7.5px 0px;">

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

                var data = projectData.find(d => d.id == card.id);
                data.languages  .forEach(el => tags += `<span class="text_code text_acc1">${el}</span>`);
                data.libraries  .forEach(el => tags += `<span class="text_code text_acc2">${el}</span>`);
                data.other      .forEach(el => tags += `<span class="text_code text_acc3">${el}</span>`);

                var div_tags = $(card).find('div#tags')[0];
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
        var data = projectData.find(d => d.id == card.id);

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