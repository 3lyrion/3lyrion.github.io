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
        "other": [""],
        "collaborators": ["3lyrion (Mikhail Grasin)"]
    },
    {
        "id": "interpreter",
        "name": "Interpeter (Simplified JavaScript)",
        "image": "../assets/images/placeholder_2.png",
        "desc": "A physics based 3D golf game with an integrated course builder, a collaborative project with Brodie Griggs",
        "languages": ["C++"],
        "libraries": [""],
        "other": [""],
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
        "libraries": [""],
        "other": [""],
        "collaborators": ["3lyrion (Mikhail Grasin)"]
    },
    {
        "id": "state-machine",
        "name": "State Machine",
        "image": "../assets/images/placeholder_3.png",
        "desc": "A Rollercoaster building and simulation project that uses splines to generate track meshes and car animations",
        "languages": ["C++"],
        "libraries": [""],
        "other": [""],
        "collaborators": ["3lyrion (Mikhail Grasin)"]
    },
    {
        "id": "universal-storage",
        "name": "Universal Storage",
        "image": "../assets/images/placeholder_3.png",
        "desc": "A Rollercoaster building and simulation project that uses splines to generate track meshes and car animations",
        "languages": ["C++"],
        "libraries": [""],
        "other": [""],
        "collaborators": ["3lyrion (Mikhail Grasin)"]
    },
    {
        "id": "sol2-wrapper",
        "name": "Simple sol2 Wrapper",
        "image": "../assets/images/placeholder_3.png",
        "desc": "A Rollercoaster building and simulation project that uses splines to generate track meshes and car animations",
        "languages": ["C++", "Lua"],
        "libraries": ["sol2"],
        "other": [""],
        "collaborators": ["3lyrion (Mikhail Grasin)"]
    }
]

$(document).ready(function()
    {
        var tiles = ``;
        projectData.forEach(data =>
            {
                tiles += `
                    <div id="${data.id}" class="card">
                        <img src="${data.image}" class="card-img-top">
                        <div class="card-body">
                            <h5 class="card-title">${data.name}</h5>
                            <p class="card-text text_light">${data.desc}</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                `;
            }
        );

        document.querySelector('div#content div#tiles').innerHTML = tiles;
    }
);

function updateFilter(group, id)
{
    var cards = $('div#tiles > div.card');

    for (var i = 0; i < cards.length; i++)
    {
        var card = cards[i];
        var data = projectData.find(d => d.id == card.id);
            
        if (data[group].includes(id))
            card.style.display = 'block';

        else
            card.style.display = 'none';
    }
}


// function getProjectData(projectId)
// {
//     for (let i = 0; i < projectData.length; ++i)
//     {
//         if (projectData[i].id == projectId)
//         {
//             return projectData[i];
//         }
//     }
// }

// function addProjectCardToDiv(project, divId, reverseGrid)
// {
//     let projectDiv = document.createElement("div");

//     let projectDivHTML = "";
//     projectDivHTML += '<a href = "/projects/' + project.id + '">';
    
//     if (reverseGrid)
//     {
//         projectDivHTML += '<div class = "portfolio_tile reversed_grid">';
//         projectDivHTML += '<div class = "portfolio_tile_text reversed_grid_a">';
//     }
//     else
//     {
//         projectDivHTML += '<div class = "portfolio_tile">';
//         projectDivHTML += '<div class = "portfolio_tile_text">';
//     }
    
//     projectDivHTML += '<span class = "alt_accent_text"><span class = "medium_detail">' + project.name + '</span></span><br>';

//     projects["languages"].forEach(lang =>
//         {
//             projectDivHTML += '<span class = "text-code text-lang">' + lang + '</span>';
//         }
//     );

//     projects["libraries"].forEach(lang =>
//         {
//             projectDivHTML += '<span class = "text-code text-lang">' + language + '</span>';
//         }
//     );
    
//     let library = project["libraries"][0];
//     if (library != "")
//     {
//         projectDivHTML += '<span class = "light_text"> & </span>';
//     }
    
//     if (library == "opengl" || library == "directx11")
//     {
//         projectDivHTML += '<span class = "cpp_text">' + library + '</span>';
//     }
//     else if (library == "s2d" || library == "sdl2" || library == "winforms")
//     {
//         projectDivHTML += '<span class = "cls_text">' + library + '</span>';
//     }
//     else if (library == "pygame")
//     {
//         projectDivHTML += '<span class = "py_text">' + library + '</span>';
//     }
    
//     projectDivHTML += '<div class = "portfolio_tile_description"><span class = "light_text">' + project.desc + '</span></div>';

//     projectDivHTML += '</div>';
    
//     if (reverseGrid)
//     {
//         projectDivHTML += '<img class = "portfolio_tile_image reversed_grid_b" src = "' + project.image + '">';
//     }
//     else
//     {
//         projectDivHTML += '<img class = "portfolio_tile_image" src = "' + project.image + '">';
//     }
    
//     projectDivHTML += '</div></a>';
    
//     projectDiv.classList.add("content_main");
    
//     projectDiv.innerHTML = projectDivHTML;
    
//     document.getElementById(divId).append(projectDiv);
// }
