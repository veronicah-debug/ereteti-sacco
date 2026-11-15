<?php
$page_title = 'Apply for membership';
include 'includes/header.php';
?>
<main>
  <h2>Join Ereteti Dairy Sacco</h2>
  <p>Fill in the form and the office will contact you.</p>

  <form action="process-register.php" method="post">

    <p>
      <label for="first-name">First name</label><br>
      <input type="text" id="first-name" name="first_name" required>
    </p>

    <p>
      <label for="last-name">Last name</label><br>
      <input type="text" id="last-name" name="last_name" required>
    </p>

    <p>
      <label for="phone">Phone number</label><br>
      <input type="tel" id="phone" name="phone" required>
    </p>

    <p>
      <label for="route">Your route</label><br>
      <select id="route" name="route" required>
        <option value="">Choose a route</option>
        <option value="1">Kiserian route</option>
        <option value="2">Ngong route</option>
        <option value="3">Rongai route</option>
      </select>
    </p>

    <button type="submit">Apply to join</button>

  </form>
</main>
<?php include 'includes/footer.php'; ?>