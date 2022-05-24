#ionic build
cd www
rsync -rv ./ root@pwa.cotg.edrivenapps.com:/var/www/cotg/pwa
cd ..
