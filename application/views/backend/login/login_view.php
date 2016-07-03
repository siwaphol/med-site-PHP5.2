<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
 <head>
   <title>Simple Login with CodeIgniter</title>
 </head>
 <body>
   <h1>Simple Login with CodeIgniter</h1>
   <?php echo validation_errors(); ?>
    <form action="<?php echo site_url("admin/login"); ?>" method="post" enctype="multipart/form-data">
     <label for="username">Username:</label>
     <input type="text" size="20" id="username" name="username" required />
     <br/>
     <label for="password">Password:</label>
     <input type="password" size="20" id="passowrd" name="password" required />
     <br/>
     <input type="submit" value="Login"/>
   </form>
 </body>
</html>