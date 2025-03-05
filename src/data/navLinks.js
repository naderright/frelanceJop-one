export const Menus = [
    {
        name: "Employers",
        submenu: true,
        sublinks: [
            {name:'Submit A Staffing Or Recruiting Request',link:'/staffing-request'},
            { name: "What Sets Us Apart", link: "/diffrent-employer" },
            { name: "Guarantees", link: "/employer-guarantee" },
            { name: "Staffing Fees And Terms", link: "/staffing-fees-and-terms" },
            { name: "Consider Hiring On A Temp Basis", link: "/hiring-a-contractor" },
        ],


    },
    {
        name: "Job Seekers",
        submenu: true,
        sublinks: [

            { name: "What Sets Us Apart", link: "/what-sets-us-apart" },
            { name: "Consider Contract/Temp Employment", link: "/contract-temporary-employment" },
            { name: "Over The Age Of 60?", link: "/over-60" },
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
            { name: "All Our Account Executives Are Degreed Engineers", link: "/meet-our-team" },
           
        ],
    },
    {
        name: 'Contact',
        link:'/contact-us',
        submenu: false
    }
];