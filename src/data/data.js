const data = [
    // {
    //     name:"JavaScript",
    //     blog:"https://medium.com/swlh/introduction-to-javascript-basics-cf901c05ca47",
    //     video:"https://www.youtube.com/playlist?list=PLnHJACx3NwAfRUcuKaYhZ6T5NRIpzgNGJ",
    //     book:"https://github.com/getify/You-Dont-Know-JS"
    // },
    // {
    //     name:"Swift",
    //     blog:"https://medium.com/swift-tutorial-for-begginers",
    //     video:"https://www.youtube.com/watch?v=Ulp1Kimblg0",
    //     book:"https://github.com/MHM5000/swift-cheat-sheet"
    // },
    {
        name:"Python",
        blog:"https://medium.com/the-renaissance-developer/learning-python-from-zero-to-hero-8ceed48486d5",
        video:"https://www.youtube.com/watch?v=rfscVS0vtbw",
        book:"https://pythonbooks.revolunet.com/"
    },
    {
        name:"Go",
        blog:"https://medium.com/rungo/go-introductory-tutorials-896aeda0fb8a",
        video:"https://www.youtube.com/watch?v=YS4e4q9oBaU",
        book:"https://github.com/dariubs/GoBooks"
    },
    {
        name:"Scala",
        blog:"https://medium.com/educative/scala-101-a-beginners-guide-to-the-scalable-language-ae4650d5f6fb",
        video:"https://www.youtube.com/playlist?list=PLS1QulWo1RIagob5D6kMIAvu7DQC5VTh3",
        book:"https://github.com/alexandru/scala-best-practices"
    },
    {
        name:"C",
        blog:"https://medium.com/@puthnith/c-programming-from-0-to-1-c18d1c431f06",
        video:"https://www.youtube.com/watch?v=KJgsSFOSQv0",
        book:"https://github.com/LiquidatorCoder/Coding-E-Books/blob/master/C%20Notes%20For%20Pros.pdf"
    },
    {
        name:"Cpp",
        blog:"https://medium.com/@cybercodetwins/intro-to-c-your-first-program-8fcc936ce1bb",
        video:"https://www.youtube.com/watch?v=vLnPwxZdW4Y",
        book:"https://github.com/LiquidatorCoder/Coding-E-Books/blob/master/C%2B%2B%20Notes%20For%20Profs.pdf"
    },
    {
        name:"R",
        blog:"https://medium.com/@TheDataGyan/getting-started-with-data-science-in-30-days-using-r-programming-62b61b98c207",
        video:"https://www.youtube.com/watch?v=_V8eKsto3Ug",
        book:"https://r4ds.had.co.nz/"
    },
    {
        name:"Java",
        blog:"https://www.janbasktraining.com/blog/java-tutorial/",
        video:"https://www.youtube.com/playlist?list=PLBlnK6fEyqRjKA_NuK9mHmlk0dZzuP1P5",
        book:"https://github.com/LiquidatorCoder/Coding-E-Books/blob/master/Java%20Notes%20For%20Profs.pdf"
    },
    {
        name:"Kotlin",
        blog:"https://www.bugsnag.com/blog/introduction-to-kotlin",
        video:"https://www.youtube.com/watch?v=F9UC9DY-vIU",
        book:"https://github.com/LiquidatorCoder/Coding-E-Books/blob/master/Kotlin%20Notes%20For%20Profs.pdf"
    },
    {
        name:"PHP",
        blog:"https://medium.com/@mayomi1/easy-way-to-learn-php-the-beginning-5a60d600e3bd",
        video:"https://www.youtube.com/watch?v=OK_JCtrrv-c",
        book:"https://github.com/LiquidatorCoder/Coding-E-Books/blob/master/PHP%20Notes%20For%20Pros.pdf"
    },
    {
        name:"HTML",
        blog:"https://medium.com/hackernoon/learn-basic-html-be230361457",
        video:"https://www.youtube.com/watch?v=pQN-pnXPaVg",
        book:"https://github.com/LiquidatorCoder/Coding-E-Books/blob/master/HTML5%20Notes%20For%20Pros.pdf"
    },
    {
        name:"CSS",
        blog:"https://medium.com/level-up-web/the-ultimate-guide-to-css-103b0f883de3",
        video:"https://www.youtube.com/watch?v=1Rs2ND1ryYc",
        book:"https://github.com/LiquidatorCoder/Coding-E-Books/blob/master/CSS%20Notes%20For%20Pros.pdf"
    },
    {
        name:"ReactJs",
        blog:"https://ahmedrebai.medium.com/my-first-reactjs-blog-part1-e72fae2895c0",
        video:"https://www.youtube.com/watch?v=-cMqr9HpZ-Y",
        book:"https://softchris.github.io/react-book/#/"
    },
    {
        name:"AngularJs",
        blog:"https://medium.com/justcompile/learn-angular-from-0-to-100-journey-begins-98a845daa7b5",
        video:"https://www.youtube.com/watch?v=2OHbjep_WjQ",
        book:"https://github.com/LiquidatorCoder/Coding-E-Books/blob/master/AngularJS%20Notes%20For%20Pros.pdf"
    },
    {
        name:"VueJs",
        blog:"https://medium.com/js-dojo/getting-started-with-vuejs-for-web-and-native-285dc64f0f0d",
        video:"https://www.youtube.com/watch?v=4deVCNJq3qc",
        book:"https://www.freecodecamp.org/news/the-vue-handbook-a-thorough-introduction-to-vue-js-1e86835d8446/"
    },
    {
        name:"jQuery",
        blog:"https://medium.com/edureka/jquery-tutorial-for-beginners-679021d74ab4",
        video:"https://www.youtube.com/playlist?list=PLr6-GrHUlVf_RNxQQkQnEwUiHELmB0fW1",
        book:"https://github.com/LiquidatorCoder/Coding-E-Books/blob/master/jQuery%20Notes%20For%20Pros.pdf"
    },
    {
        name:"Sass",
        blog:"https://baraksaidoff.medium.com/intro-to-sass-syntactically-awesome-style-sheets-2d7e7eb3d671",
        video:"https://www.youtube.com/watch?v=_a5j7KoflTs",
        book:"https://github.com/LiquidatorCoder/Coding-E-Books/blob/master/Sass.pdf"
    },
    {
        name:"MaterialUI",
        blog:"https://medium.com/codingthesmartway-com-blog/getting-started-with-material-ui-for-react-material-design-for-react-364b2688b555",
        video:"https://www.youtube.com/watch?v=m-2_gb_3L7Q",
        book:"https://www.google.co.in/books/edition/React_Material_UI_Cookbook/m86PDwAAQBAJ?hl=en&gbpv=1&printsec=frontcover"
    },
    {
        name:"Flask",
        blog:"https://medium.com/analytics-vidhya/an-introduction-to-flask-a-micro-framework-f8b3d789e2a3",
        video:"https://www.youtube.com/watch?v=Z1RJmh_OqeA",
        book:"https://github.com/LiquidatorCoder/Coding-E-Books/blob/master/Flask%20Web%20Development%20(en).pdf"
    },
    {
        name:"NextJs",
        blog:"https://medium.com/spidernitt/introduction-to-server-side-rendering-with-next-js-d7b046d121c8",
        video:"https://www.youtube.com/watch?v=mTz0GXj8NN0",
        book:"https://github.com/unicodeveloper/awesome-nextjs"
    },
    {
        name:"Django",
        blog:"https://medium.com/@rinu.gour123/best-python-django-tutorial-for-beginners-advanced-2018-8944e900e1dd",
        video:"https://www.youtube.com/watch?v=F5mRW0jo-U4",
        book:"https://github.com/LiquidatorCoder/Coding-E-Books/blob/master/Django%20Tutorial.pdf"
    },
    {
        name:"NodeJs",
        blog:"https://codeburst.io/the-only-nodejs-introduction-youll-ever-need-d969a47ef219",
        video:"https://www.youtube.com/watch?v=RLtyhwFtXQA",
        book:"https://github.com/LiquidatorCoder/Coding-E-Books/blob/master/Node.JS%20Notes%20For%20Pros.pdf"
    },
    {
        name:"Laravel",
        blog:"https://www.phptpoint.com/laravel-introduction/",
        video:"https://www.youtube.com/watch?v=ImtZ5yENzgE",
        book:"https://www.programmer-books.com/wp-content/uploads/2018/08/Laravel%20Up%20and%20Running.pdf"
    },
    {
        name:"MySQL",
        blog:"https://www.educative.io/blog/mysql-tutorial",
        video:"https://www.youtube.com/watch?v=7S_tz1z_5bA",
        book:"https://github.com/LiquidatorCoder/Coding-E-Books/blob/master/MySQLNotesForProfessionals(1).pdf"
    },
    {
        name:"MongoDB",
        blog:"https://www.bmc.com/blogs/mongodb-overview-getting-started-with-mongodb/",
        video:"https://www.youtube.com/watch?v=-56x56UppqQ",
        book:"https://github.com/LiquidatorCoder/Coding-E-Books/blob/master/MongoDB%20Notes%20For%20Pros.pdf"
    },
    {
        name:"ExpressJs",
        blog:"https://medium.com/@jaeger.rob/introduction-to-nodes-express-js-db5617047150",
        video:"https://www.youtube.com/watch?v=L72fhGm1tfE",
        book:"https://web.archive.org/web/20140621124403/https://leanpub.com/express/read#leanpub-auto-foreword"
    },    
    {
        name:"Flutter",
        blog:"https://www.freecodecamp.org/news/an-introduction-to-flutter-the-basics-9fe541fd39e2/",
        video:"https://www.youtube.com/playlist?list=PL4cUxeGkcC9jLYyp2Aoh6hcWuxFDX6PBJ",
        book:"https://www.tutorialspoint.com/flutter/flutter_tutorial.pdf"
    },
    {
        name:"Dart",
        blog:"https://www.raywenderlich.com/4482551-dart-basics",
        video:"https://www.youtube.com/watch?v=Ej_Pcr4uC2Q",
        book:"https://www.programmer-books.com/wp-content/uploads/2018/12/Dart-in-Action.pdf"
    }, 
    {
        name:"Bootstrap",
        blog:"https://websitesetup.org/bootstrap-tutorial-for-beginners/",
        video:"https://www.youtube.com/playlist?list=PLS1QulWo1RIaBQ1DOYYiJz38edqH_zwM1",
        book:"https://github.com/LiquidatorCoder/Coding-E-Books/blob/master/Bootstrap%20guide%20.pdf"
    },  
    {
        name:"Typescript",
        blog:"https://www.valentinog.com/blog/typescript/",
        video:"https://www.youtube.com/watch?v=BwuLxPH8IDs",
        book:"http://sd.blackball.lv/library/TypeScript_-_Modern_JavaScript_Development_(2016).pdf"
    },   
   

]

// export default data;