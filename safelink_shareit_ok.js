var Base64={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(input){var output="";var chr1,chr2,chr3,enc1,enc2,enc3,enc4;var i=0;input=Base64._utf8_encode(input);while(i<input.length){chr1=input.charCodeAt(i++);chr2=input.charCodeAt(i++);chr3=input.charCodeAt(i++);enc1=chr1>>2;enc2=((chr1&3)<<4)|(chr2>>4);enc3=((chr2&15)<<2)|(chr3>>6);enc4=chr3&63;if(isNaN(chr2)){enc3=enc4=64;}else if(isNaN(chr3)){enc4=64;}
output=output+ this._keyStr.charAt(enc1)+ this._keyStr.charAt(enc2)+ this._keyStr.charAt(enc3)+ this._keyStr.charAt(enc4);}
return output;},decode:function(input){var output="";var chr1,chr2,chr3;var enc1,enc2,enc3,enc4;var i=0;input=input.replace(/[^A-Za-z0-9\+\/\=]/g,"");while(i<input.length){enc1=this._keyStr.indexOf(input.charAt(i++));enc2=this._keyStr.indexOf(input.charAt(i++));enc3=this._keyStr.indexOf(input.charAt(i++));enc4=this._keyStr.indexOf(input.charAt(i++));chr1=(enc1<<2)|(enc2>>4);chr2=((enc2&15)<<4)|(enc3>>2);chr3=((enc3&3)<<6)|enc4;output=output+ String.fromCharCode(chr1);if(enc3!=64){output=output+ String.fromCharCode(chr2);}
if(enc4!=64){output=output+ String.fromCharCode(chr3);}}
output=Base64._utf8_decode(output);return output;},_utf8_encode:function(string){string=string.replace(/\r\n/g,"\n");var utftext="";for(var n=0;n<string.length;n++){var c=string.charCodeAt(n);if(c<128){utftext+=String.fromCharCode(c);}
else if((c>127)&&(c<2048)){utftext+=String.fromCharCode((c>>6)|192);utftext+=String.fromCharCode((c&63)|128);}
else{utftext+=String.fromCharCode((c>>12)|224);utftext+=String.fromCharCode(((c>>6)&63)|128);utftext+=String.fromCharCode((c&63)|128);}}
return utftext;},_utf8_decode:function(utftext){var string="";var i=0;var c=c1=c2=0;while(i<utftext.length){c=utftext.charCodeAt(i);if(c<128){string+=String.fromCharCode(c);i++;}
else if((c>191)&&(c<224)){c2=utftext.charCodeAt(i+ 1);string+=String.fromCharCode(((c&31)<<6)|(c2&63));i+=2;}
else{c2=utftext.charCodeAt(i+ 1);c3=utftext.charCodeAt(i+ 2);string+=String.fromCharCode(((c&15)<<12)|((c2&63)<<6)|(c3&63));i+=3;}}
return string;}}
var encode=document.getElementById('encode'),decode=document.getElementById('decode'),output=document.getElementById('output'),input=document.getElementById('input');var User_ID="";var protected_links="";var a_to_va=0;var a_to_vb=0;var a_to_vc="";function auto_safelink(){auto_safeconvert();}
function auto_safeconvert(){var a_to_vd=window.location.hostname;if(protected_links!=""&&!protected_links.match(a_to_vd)){protected_links+=", "+ a_to_vd;}else if(protected_links=="")
{protected_links=a_to_vd;}
var a_to_ve="";var a_to_vf=new Array();var a_to_vg=0;a_to_ve=document.getElementsByTagName("a");a_to_va=a_to_ve.length;a_to_vf=a_to_fa();a_to_vg=a_to_vf.length;var a_to_vh=false;var j=0;var a_to_vi="";for(var i=0;i<a_to_va;i++)
{a_to_vh=false;j=0;while(a_to_vh==false&&j<a_to_vg)
{a_to_vi=a_to_ve[i].href;if(a_to_vi.match(a_to_vf[j])||!a_to_vi||!a_to_vi.match("http"))
{a_to_vh=true;}
j++;}
if(a_to_vh==false)
{var encryptedUrl=Base64.encode(a_to_vi);
var x=Math.floor((Math.random()*48)+ 1);
var xxx=null;
if(x=="1"){xxx="5-cara-menjadi-youtuber-pemula-yang.html"}
if(x=="2"){xxx="cara-download-dan-install-codeblocks-di.html"}
if(x=="3"){xxx="mengenal-bahasa-pemrograman-c.html"}
if(x=="4"){xxx="cara-membuat-live-chat-whatsapp-di.html"}
if(x=="5"){xxx="penasaran-dengan-wahana-pantai-sowan.html"}
if(x=="6"){xxx="zona-wisata-islami-di-masjid-agung.html"}
if(x=="7"){xxx="cara-sukses-bisnis-budidaya-ikan-cupang.html"}
if(x=="8"){xxx="cara-membuat-video-timelapse.html"}
if(x=="9"){xxx="cara-mengurus-atau-memperpanjang-sim.html"}
if(x=="10"){xxx="cara-memasang-iklan-adsense-di-tengah.html"}
if(x=="11"){xxx="worms-zone-mod-apk-full-unlocked-game.html"}
if(x=="12"){xxx="cara-membuat-dan-menghubungkan-beberapa.html"}
if(x=="13"){xxx="mengenal-fungsi-dan-cara-kerja-widget.html"}
if(x=="14"){xxx="cara-membuat-aplikasi-sosial-media-di.html"}
if(x=="15"){xxx="cara-membuat-aplikasi-webviews.html"}
if(x=="16"){xxx="cara-membuat-aplikasi-android.html"}
if(x=="17"){xxx="cara-mudah-reset-printer-epson.html"}
if(x=="18"){xxx="cara-membuat-night-mode-blogger.html"}
if(x=="19"){xxx="cara-ampuh-melacak-hp-yang-hilang-atau.html"}
if(x=="20"){xxx="cara-mudah-membuat-barcode-lokasi.html"}
if(x=="21"){xxx="cara-cek-nomor-rekening-bermasalah-atau.html"}
if(x=="22"){xxx="cara-mengantisipasi-penipuan-online.html"}
if(x=="23"){xxx="praktek-caranya-mas-timon-meningkatkan.html"}
if(x=="24"){xxx="cara-memperbaiki-masalah-adstxt-google.html"}
if(x=="25"){xxx="bisnis-pulsa-murah-menggunakan.html"}
if(x=="26"){xxx="cara-cerdas-mengatur-gaji-bulanan-26.html"}
if(x=="27"){xxx="cara-download-video-menit-tertentu-di.html"}
if(x=="28"){xxx="cara-membuat-kotak-kode-script-di.html"}
if(x=="29"){xxx="cara-menyimpan-status-wa-ke-galeri.html"}
if(x=="30"){xxx="cara-gampang-booyah-pada-game-free-fire.html"}
if(x=="31"){xxx="tips-dan-trik-cepat-kaya-pada-game.html"}
if(x=="32"){xxx="usaha-dengan-modal-kecil-ini-bisa.html"}
if(x=="33"){xxx="fitur-terbaru-whatsapp-yang-perlu.html"}
if(x=="34"){xxx="cara-mudah-riset-keyword-menggunakan.html"}
if(x=="35"){xxx="cara-gampang-memasang-kolom-komentar-di.html"}
if(x=="36"){xxx="cara-menambahkan-font-awesome-pada-menu.html"}
if(x=="37"){xxx="cara-mudah-download-video-youtube-di.html"}
if(x=="38"){xxx="cara-membuat-kotak-berlangganan-di-blog.html"}
if(x=="39"){xxx="cara-memasang-related-post-di-dalam.html"}
if(x=="40"){xxx="cara-main-mobile-legend-sampai-tier.html"}
if(x=="41"){xxx="cara-mengatasi-vmix-error-acces-to.html"}
if(x=="42"){xxx="cara-mengatasi-vmix-error-value-of-0-is.html"}
if(x=="43"){xxx="cara-menjadi-reseller-modal-kecil-43.html"}
if(x=="44"){xxx="cara-mengembalikan-file-flashdisk-yang.html"}
if(x=="45"){xxx="cara-melihat-pesan-wa-yang-sudah.html"}
if(x=="46"){xxx="cara-live-streaming-facebook.html"}
if(x=="47"){xxx="cara-membuat-sitemap-di-blog-seo.html"}
if(x=="48"){xxx="cara-live-streaming-youtube-menggunakan.html"}a_to_ve[i].href="https://shareitaja.blogspot.com/2020/10/"+xxx+"?url="+ encryptedUrl;a_to_ve[i].rel="nofollow";a_to_vb++;a_to_vc+=i+":::"+ a_to_ve[i].href+"\n";}}
var a_to_vj=document.getElementById("anonyminized");var a_to_vk=document.getElementById("found_links");if(a_to_vj)
{a_to_vj.innerHTML+=a_to_vb;}
if(a_to_vk)
{a_to_vk.innerHTML+=a_to_va;}}
function a_to_fa()
{var a_to_vf=new Array();protected_links=protected_links.replace(" ","");a_to_vf=protected_links.split(",");return a_to_vf;}