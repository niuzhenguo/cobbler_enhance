cobbler_enhance
===============

cobbler_enhance is based on cobbler_web, /usr/share/cobbler/cobbler_web.

;！1. How to install.
:a. You should install Cobbler 2.4.0, then mv /usr/share/cobbler/cobbler_web /usr/share/cobbler/cobbler_web.bak
:b. Checkout cobbler_enhance to /usr/share/cobbler/cobbler_web
:c. Copy cobbler_web/tools/jreview to /usr/local/bin/ and chmod +x /usr/local/bin/jreview
:d. Copy cobbler_web/style.css to /var/www/cobbler_webui_content/style.css
:e. mkdir /var/www/html/Java then chmod 777 /var/www/html/Java
:f. service httpd restart
  
;！2. What's new we added.
:a. Console connect.
:b. Power on/off of host
:c. Bios reboot
:d. Pxe reboot
:e. Rebuild Host
:f. Clear the left tab
