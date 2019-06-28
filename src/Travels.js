import React from 'react'

import Travel from './Travel';

const travels = [
    {
        destination: 'Bali',
        country: 'Indonesia',
        photo: "https://img-4.linternaute.com/uzneGwQt_ySLMWQ4EK6yCMRtKJs=/620x465/smart/629b900540754aaa9ab1fc9cc764588e/ccmcms-linternaute/10500670.jpg",
        distance: 'Loin'
    },
    {
        destination: "Les Caraïbes",
        country: "Cuba",
        photo: "https://www.airtransat.com/getmedia/95c15c8b-d29d-48a9-9b95-d32246661243/cuba-cayo-coco-plage-beach-2050x1200.aspx?width=2050&height=1200&ext=.jpg",
        distance: "Moins loin"
    },
    {
        destination: "New-York",
        country: "USA",
        photo: "https://lonelyplanetimages.imgix.net/mastheads/GettyImages-538096543_medium.jpg?sharp=10&vib=20&w=1200",
        distance: "6 000 km"
    },
    {
        destination: "Paris",
        country: "France",
        photo: "https://d39gusjpdm7p1o.cloudfront.net/data/layout_grouping/static_page_step/20784_a330628091ede7eb1548d6cda58e0357.jpg?ver=1477297804",
        distance: "Tout près"
    },
    {
        destination: "Barcelona",
        country: "Spain",
        photo: "https://www.railtour.ch/_images/ccd/417898/Escapade-a-Barcelone-42695558.jpg",
        distance: "1 044 km"
    },
]

const Travels = () => (
    <div>
        {travels.map((travel, index) => (
            <Travel {...travel} key={index} />
        ))}
    </div>
)

export default Travels
