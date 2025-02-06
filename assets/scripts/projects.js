var projectData = [
    {
        'id': 'project-mortar',
        'name': 'SOON&#8482; Project Mortar',
        'image': '../assets/images/placeholder_1.png',
        'desc': 'My new game based on my framework "Mortar"',
        'languages': ['C++', 'Lua'],
        'libraries': ['SFML', 'RmlUi', 'sol2'],
        'other': ['HTML', 'CSS', 'XML', 'TOML'],
        'collaborators': ['3lyrion (Mikhail Grasin)']
    },
    {
        'id': 'arena-tanks',
        'name': 'ArenaTanks',
        'image': '../assets/images/placeholder_1.png',
        'desc': 'My first game written in an object-oriented style. Genre: 2D top-down shooter. Before starting the game, the user selects the tank\'s hull and turret in the Main Menu. Next, he will have to survive in the Arena for 20 waves, each more difficult than the previous one (the arena is a playing field where bonuses and enemies appear). At the end of each round, the player enters the Store, where he can improve the characteristics of his tank and change weapons.',
        'languages': ['C++'],
        'libraries': ['SFML'],
        'other': [],
        'collaborators': ['3lyrion (Mikhail Grasin)']
    },
    {
        'id': 'interpreter',
        'name': 'Interpeter (Simplified JavaScript)',
        'image': '../assets/images/projects/interpeter.png',
        'desc': 'The interpreter for my Easy JS language. It consists of a lexer (lexical analysis), a parser (syntactic analysis) and a shell (code execution).',
        'languages': ['C++'],
        'libraries': [],
        'other': [],
        'collaborators': ['3lyrion (Mikhail Grasin)']
    },
    {
        'id': 'pizza-delivery',
        'name': 'Pizza Delivery',
        'image': '../assets/images/placeholder_3.png',
        'desc': 'My first project is in C# + WPF, using the MVVM design pattern. Customers use the client app, while cooks and couriers use the employee app. The server application automatically distributes orders among employees.',
        'languages': ['C#'],
        'libraries': ['WPF'],
        'other': ['XML', 'SQL'],
        'collaborators': ['3lyrion (Mikhail Grasin)']
    },
    {
        'id': 'event-manager',
        'name': 'Event Manager',
        'image': '../assets/images/placeholder_3.png',
        'desc': 'Header-only C++20 simple and fast event bus',
        'languages': ['C++'],
        'libraries': [],
        'other': [],
        'collaborators': ['3lyrion (Mikhail Grasin)']
    },
    {
        'id': 'state-machine',
        'name': 'State Machine',
        'image': '../assets/images/placeholder_3.png',
        'desc': 'Header-only C++20 simple and fast state machine which uses my Event Manager',
        'languages': ['C++'],
        'libraries': [],
        'other': [],
        'collaborators': ['3lyrion (Mikhail Grasin)']
    },
    {
        'id': 'universal-storage',
        'name': 'Universal Storage',
        'image': '../assets/images/placeholder_3.png',
        'desc': 'Header-only C++20 simple and fast universal container',
        'languages': ['C++'],
        'libraries': [],
        'other': [],
        'collaborators': ['3lyrion (Mikhail Grasin)']
    },
    {
        'id': 'sol2-wrapper',
        'name': 'Simple sol2 Wrapper',
        'image': '../assets/images/placeholder_3.png',
        'desc': 'Header-only C++20 simple sol2 wrapper',
        'languages': ['C++', 'Lua'],
        'libraries': ['sol2'],
        'other': [],
        'collaborators': ['3lyrion (Mikhail Grasin)']
    }
]

var appliedFilters = {
    'languages': ['C++', 'C#', 'Lua'],
    'libraries': ['SFML', 'RmlUi', 'WPF', 'sol2'],
    'other': ['HTML', 'CSS', 'XML', 'TOML', 'SQL']
}

$(document).ready(() =>
    {
        var tiles = ``;
        projectData.forEach(data =>
            {
                tiles += `
                    <a href="#" id="${data.id}" class="card div_border_acc3">
                        <div style="width: 100%; height: 100%;">
                            <img src="${data.image}" class="card-img" style="border: none; border-radius: 0px;">
                        </div>
                        <div class="card-img-overlay" style="top: 55%; height: 38.5%;">
                            <div class="div_tile_info text_light">
                                <div style="width: 64%;">
                                    <h5 class="text_acc3">${data.name}</h5>
                                    <span style="width: 50%;">${data.desc}</span>
                                </div>

                                <div style="width: 33%;">
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

                var div_tags = card.querySelector('div#tags');
                div_tags.innerHTML = tags;

                // var image = card.querySelector('img');
                // card.addEventListener('mouseover', (event) => image.style.transform = 'scale(1.20, 1.20)')

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