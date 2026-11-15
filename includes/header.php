<!DOCTYPE html>
<html lang="en">
<head> <meta charset="utf-8">
  <!--we add the viewport meta tag-->
  <meta name="viewport" 
     content="width=device-width,initial-scale=1.0">
  <title><?php echo $page_title; ?> — Ereteti Dairy Sacco</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Source+Sans+3:ital,wght@0,200..900;1,200..900&family=Source+Serif+4:ital,opsz,wght@0,8..60,200..900;1,8..60,200..900&display=swap" rel="stylesheet">
  
 <link rel="stylesheet" href="css/style.css">
  <!-- placeholder: swap for img/favicon.png -->
  <link rel="icon" type="image/png"
        href="img/favicon-edairy.png">

 <script src="js/main.js" defer></script>       
</head>
<body>

  <header>
     <h1><?php echo $page_title; ?></h1>
    <p>Milk collected twice a day, on three routes
       out of Ngong.</p>
  </header>

  <nav>
    <ul>
      <li><a href="index.php">Home</a></li>
      <li><a href="about.php">About</a></li>
      <li><a href="routes.php">Routes</a></li>
      <li><a href="contact.php">Contact</a></li>
      <li><a href="deliveries.php">Deliveries</a>
      </li>
    </ul>
  </nav>