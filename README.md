cobbler_enhance
===============

How to install
--------------
  * You should install Cobbler 2.4.0, then mv /usr/share/cobbler/cobbler_web /usr/share/cobbler/cobbler_web.bak\<h3\><br />
  * Checkout cobbler_enhance to /usr/share/cobbler/cobbler_web<br />
  * Copy cobbler_web/tools/jreview to /usr/local/bin/ and chmod +x /usr/local/bin/jreview<br />
  * Copy cobbler_web/style.css to /var/www/cobbler_webui_content/style.css<br />
  * mkdir /var/www/html/Java then chmod 777 /var/www/html/Java<br />
  * service httpd restart<br />

What's new we added
-------------------
  * Console connect\<h3\><br />
  * Power on/off of host<br />
  * Bios reboot<br />
  * Pxe reboot<br />
  * Rebuild Host<br />
  * Clear the left tab<br />
  
Demo Screen
-----------
![github](http://raw.github.com/niuzhenguo/cobbler_enhance/master/screenshot/system.png)

![github](http://raw.github.com/niuzhenguo/cobbler_enhance/master/screenshot/console_redirection.png)

![github](http://raw.github.com/niuzhenguo/cobbler_enhance/master/screenshot/console.png)
