function changeColor() {
    
    const btn = document.getElementById("btn");

    btn.classList.remove("btn-primary");
    btn.classList.add("btn-success");
}

function htmlSkillOnAction(){
    Swal.fire({
        title: "HTML",
        text: "HTML (HyperText Markup Language) is the standard language used to create and structure web pages. It defines elements such as headings, paragraphs, images, links, buttons, forms, and tables. HTML provides the basic structure of a website, while CSS is used for styling and JavaScript is used for functionality.",
        imageUrl: "images/html logo 1.png",
        imageWidth: 100,
        imageHeight: 80,
        imageAlt: "Custom image",
        background: "rgb(0, 0, 49)",
        color: "#fff",
        confirmButtonColor: "#1e0cbe"
    });
}

function cssSkillOnAction(){
    Swal.fire({
        title: "CSS",
        text: "CSS (Cascading Style Sheets) is a styling language used to design and customize web pages. It controls the colors, fonts, sizes, spacing, backgrounds, borders, layouts, and responsiveness of HTML elements. CSS helps make websites more attractive, organized, and user-friendly.",
        imageUrl: "images/css logo.png",
        imageWidth: 100,
        imageHeight: 80,
        imageAlt: "Custom image",
        background: "rgb(0, 0, 49)",
        color: "#fff",
        confirmButtonColor: "#1e0cbe"
    });
}

function javaScriptOnAction(){
    Swal.fire({
        title: "JAVASCRIPT",
        text: "JavaScript (JS) is a programming language used to make web pages interactive and dynamic. It can handle button clicks, form validation, animations, alerts, API requests, calculations, and changes to HTML and CSS. JavaScript adds functionality and behavior to a website.",
        imageUrl: "images/jss.png",
        imageWidth: 100,
        imageHeight: 100,
        imageAlt: "Custom image",
        background: "rgb(0, 0, 49)",
        color: "#fff",
        confirmButtonColor: "#1e0cbe"
    });
}

function javaOnAction(){
    Swal.fire({
        title: "JAVA",
        text: "Java is a powerful, object-oriented programming language used to build desktop applications, web applications, mobile apps, enterprise software, and backend systems. It is known for being platform-independent, secure, reliable, and widely used in software development. Java also provides important programming concepts such as classes, objects, inheritance, polymorphism, and encapsulation.",
        imageUrl: "images/java.png",
        imageWidth: 110,
        imageHeight: 100,
        imageAlt: "Custom image",
        background: "rgb(0, 0, 49)",
        color: "#fff",
        confirmButtonColor: "#1e0cbe"
    });
}

function mySqlOnAction(){
    Swal.fire({
        title: "MYSQL",
        text: "MySQL is a popular relational database management system (RDBMS) used to store, organize, and manage data. It uses SQL (Structured Query Language) to create databases, tables, insert data, update records, delete data, and retrieve information. MySQL is commonly used in websites and applications to manage user accounts, products, orders, and other data.",
        imageUrl: "images/mysql.png",
        imageWidth: 100,
        imageHeight: 100,
        imageAlt: "Custom image",
        imageAlt: "Custom image",
        background: "rgb(0, 0, 49)",
        color: "#fff",
        confirmButtonColor: "#1e0cbe"
    });
}