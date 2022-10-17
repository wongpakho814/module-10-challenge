// Defines the first half of the HTML content, so we can populate the section later
const defaultHTMLPart1 = `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">
    <link rel="stylesheet" href="./css/reset.css" />
    <link rel="stylesheet" href="./css/style.css" />
    <title>Team Profile Generator</title>
</head>

<body>
    <header>
        <nav class="navbar navbar-expand-lg custom-navbar justify-content-center">
            <h1>My Team</h1>
        </nav>
    </header>

    <main class="container mt-5">
        <section class="row justify-content-center">`;

// Defines the end part of the HTML content, after we populated everything we need into the section
const defaultHTMLPart2 = `
        </section>
    </main>
</body>

</html>`;

// Array of card that contains the HTML card for each personnel
var cardList = [];

// Function to generate the HTML code that populates the section with cards
function generateHTML(peopleList) {
  // Iterate through the peopleList to add the corresponding HTML card code to the cardList
  peopleList.forEach((person) => {
    // If the person is a manager
    if (person.getRole() === "Manager") {
      cardList.push(`
<div class="col-12 col-md-4 mb-5">
    <div class="card">
        <h3>${person.getName()} [${person.getRole()}]</h3>
        <div class="container mt-3">
            <p>ID: ${person.getId()}</p>
            <p>Email: <a href="mailto:${person.getEmail()}?subject=Subject&body=message%20goes%20here">${person.getEmail()}</a></p>
            <p>Office number: ${person.getOfficeNum()}</p>
        </div>
    </div>
</div>`);
      // If the person is an engineer
    } else if (person.getRole() === "Engineer") {
      cardList.push(`
<div class="col-12 col-md-4 mb-5">
    <div class="card">
        <h3>${person.getName()} [${person.getRole()}]</h3>
        <div class="container mt-3">
            <p>ID: ${person.getId()}</p>
            <p>Email: <a href="mailto:${person.getEmail()}?subject=Subject&body=message%20goes%20here">${person.getEmail()}</a></p>
            <p>GitHub: <a href="https://www.github.com/${person.getGitHub()}">${person.getGitHub()}</a></p>
        </div>
    </div>
</div>`);
      // If the person is an intern
    } else {
      cardList.push(`
<div class="col-12 col-md-4 mb-5">
    <div class="card">
        <h3>${person.getName()} [${person.getRole()}]</h3>
        <div class="container mt-3">
            <p>ID: ${person.getId()}</p>
            <p>Email: <a href="mailto:${person.getEmail()}?subject=Subject&body=message%20goes%20here">${person.getEmail()}</a></p>
            <p>School: ${person.getSchool()}</p>
        </div>
    </div>
</div>`);
    }
  });

  return defaultHTMLPart1 + cardList.join("") + defaultHTMLPart2;
}

module.exports = {
  generateHTML
};
