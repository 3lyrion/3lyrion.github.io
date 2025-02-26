$(document).ready(() =>
    {
        var buttons = ``;
        var slides  = ``;
        var index   = 0;

        for (var i = 0; i < projects.length; i++) // db/project.js
        {
            var project = projects[i];
            if (project.image == 'soon.png')
                continue;

            buttons += `
                <button data-bs-target="#project-carousel" data-bs-slide-to="${index}"></button>
            `;
        
            slides += `
                <div class="carousel-item">
                    <img src="assets/images/${project.image}" class="d-block w-100">
                </div>
            `;

            index++;
        }

        {
            var div_cb = document.querySelector('.carousel > .carousel-indicators');
            div_cb.innerHTML = buttons;

            var btn = div_cb.querySelector('button');
            btn.classList.add('active');
        }

        {
            var div_cs = document.querySelector('.carousel > .carousel-inner');
            div_cs.innerHTML = slides;

            var item = div_cs.querySelector('.carousel-item');
            item.classList.add('active');
        }
    }
);