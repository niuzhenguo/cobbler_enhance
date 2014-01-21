cobbler_enhance
===============

cobbler_enhance is based on cobbler_web, /usr/share/cobbler/cobbler_web.

#How to install.
##You should install Cobbler 2.4.0, then mv /usr/share/cobbler/cobbler_web /usr/share/cobbler/cobbler_web.bak
##Checkout cobbler_enhance to /usr/share/cobbler/cobbler_web
##Copy cobbler_web/tools/jreview to /usr/local/bin/ and chmod +x /usr/local/bin/jreview
##Copy cobbler_web/style.css to /var/www/cobbler_webui_content/style.css
##mkdir /var/www/html/Java then chmod 777 /var/www/html/Java
##service httpd restart

#What's new we added.
##Console connect.
##Power on/off of host
##Bios reboot
##Pxe reboot
##Rebuild Host
##Clear the left tab
