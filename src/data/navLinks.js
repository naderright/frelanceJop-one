export const Menus = [
    {
        name: "Employers",
        submenu: true,
        sublinks: [
            {name:'Submit a staffing or recruiting request',link:'/staffing-request'},
            { name: "What sets us apart", link: "/diffrent-employer" },
            { name: "Guarantees", link: "/employer-guarantee" },
            { name: "Staffing Fees And Terms", link: "/staffing-fees-and-terms" },
            { name: "Consider Hiring On A Temp Basis", link: "/hiring-a-contractor" },
        ],


    },
    {
        name: "Job seekers",
        submenu: true,
        sublinks: [

            { name: "What sets us apart", link: "/what-sets-us-apart" },
            { name: "Consider contract/temp employment", link: "/contract-temporary-employment" },
            { name: "Over the age of 60?", link: "/over-60" },
            // { name: "Counteroffers", link: "/counteroffers" },
        ],
    },
    // {
    //     name: "Benfits",
    //     submenu: true,

    //     sublinks: [

    //         { name: "PTO & Holiday Pay", link: "/benefits" },
    //         { name: "Health & Dental Insurance", link: "/benefits" },
    //         { name: "401(k) Plan", link: "/benefits" },
    //     ],

    // },
    {
        name: "About Us",
        submenu: true,
        sublinks: [

            { name: "Our Expertise", link: "/our-expertise" },
            { name: "All our account executives are degreed engineers", link: "/meet-our-team" },
           
        ],
    },
    {
        name: 'Contact',
        link:'/contact-us',
        submenu: false
    }
];