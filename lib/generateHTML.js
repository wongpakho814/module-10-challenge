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

// Function to generate the HTML code that populates the section with cards
function generateHTML(manager) {
  const card = `
<div class="col-12 col-md-4 mb-5">
    <div class="card">
        <h3>${manager.getName()} [Manager]</h3>
        <div class="container mt-3">
            <p>ID: ${manager.getId()}</p>
            <p>Email: <a href="mailto:${manager.getEmail()}?subject=Subject&body=message%20goes%20here">${manager.getEmail()}</a></p>
            <p>Office number: ${manager.getOfficeNum()}</p>
        </div>
    </div>
</div>
    `;
  return (defaultHTMLPart1 + card + defaultHTMLPart2);
}

module.exports = {
  generateHTML,
};