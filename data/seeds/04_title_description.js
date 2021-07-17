
exports.seed = async function(knex) {
  await knex("title_description").insert([
    // Scratch
    { id: 1, title: "CODING CONCEPTS", description: "Commands, If-else -then (conditionals), Loops, Variables, Logic operators(and, or , not) Events, Causeand-effect, Functions, Lists" },
    { id: 2, title: "GAME DEV CONCEPTS", description: "Velocity, Spawn rate, clones, Collision Detection, Animation, Graphics, Scrolling background" },
    { id: 3, title: "COMPUTATIONAL CONCEPTS", description: "Sequencing & Structuring, Testing & Debugging." },
    { id: 4, title: "MATHEMATICAL CONCEPTS", description: "Conceptual understanding of X and Y coordinates, Angles, Arithmetic, Geometry." },
    { id: 5, title: "MACHINE LEARNING AND ARTIFICIAL INTELLIGENCE", description: "Games to recognize text, images and sounds"},
    // App Inventor
    { id: 6, title: "CREATING APPS", description: "Students develop and test fully functional android apps on their smart phone. They will learn about the UI components."},
    { id: 7, title: "CONDITIONS, LOOPS", description: "Discover the programming concepts of conditionals,lists, iteration and how to use this information while building apps." },
    { id: 8, title: "DATABASE & API", description: "Introduces Databse and how to use CloudDB and TinyDb and how to access information from the web using API"},
    { id: 9, title: "VARIABLES ,PROCEDURES", description: "Introduces to the programming concepts of procedures, variables, randomness, and basic algorithms as seen in apps.."},
    { id: 10, title: "SENSORS", description: "Introduces the idea of persistence and how to use various sensors like (Acclerometer, Pedometer, etc)"},
    { id: 11, title: "PUBLISHING APPS ON PLAYSTORE", description: "Teaches them how to publish the apps they created on the playstore"},
    // Python
    { id: 12, title: "THE BASICS", description: "Get used to typing and syntax and learn the basics of Python."},
    { id: 13, title: "VARIABLES", description: "Learn to use variables to store information"},
    { id: 14, title: "LISTS, DICTIONARIES, TUPLES", description: "Learn how to use Lists and Tuples"},
    { id: 15, title: "WORKING WITH STRINGS", description: "Character Data, String Function"},
    { id: 16, title: "CONDITIONAL LOGIC", description: "Logical Expressions, The “if” Statement, Logical Operators, More Complex Expressions"},
    { id: 17, title: "LOOPS & PATTERNS", description: "Recognize patterns and use a 'for' loop to solve problems., Conditional Loops using while loops"},
    { id: 18, title: "NUMERIC AND DATE FUNCTIONS", description: "Dates and Times, Random Numbers, The Math Library"},
    { id: 19, title: "FUNCTIONS", description: "Writing and Calling Functions, Function Inputs and Outputs, Local and Global Scope"},
    { id: 20, title: "PYTHON CLASSES", description: "Thinking about Objects, Class Variables and Methods"},
    { id: 21, title: "USING THE TURTLE TOOL", description: "Discover how to draw and graph with turtle graphics"},
    { id: 22, title: "TKINTER", description: "Use Tkinter to build GUI apps."},
    { id: 23, title: "PYTHON-MYSQL", description: "Build real world applications, by connecting with the databases"},
    { id: 24, title: "GAME DESIGN & DYNAMICS", description: "Learn about game loops, win/loss conditions, and keeping score in Python."},
    { id: 25, title: "DJANGO", description: "Build Web Appilications using Django"},
    { id: 26, title: "INTRODUCTION TO AI", description: "Introduction to AI, Applications of AI"},
    { id: 27, title: "INTERNET OF THINGS", description: "Applications of IOT, IOT using a device"},
    // TinkerCAD
    { id: 28, title: "ELECTRONIC CONCEPTS", description: "Basics of Voltage, Current and Resistance Electrical Theory & Design"},
    { id: 29, title: "BUILDING CIRCUITS", description: "Basic Interfacing with Circuits"},
    { id: 30, title: "CODING CONCEPTS", description: "Integrating Scratch Using IF, For, While, etc"},
    { id: 31, title: "SENSORS", description: "what is a sensor, Different types of sensors Building projects using Sensors"},
    { id: 32, title: "SIMULATING CIRCUITS", description: "Simulate and test circuits using tinkercad"},
  ])
};
