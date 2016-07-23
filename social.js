//<![CDATA[
var siteurl = window.location.href;
  document.write('<div class="sharebrow"><div class="sharede"> \
<a class="gp social-popup" href="https://plus.google.com/share?url=' + siteurl + '" target="_blank" title="Google+">\
    <i class="fa fa-google-plus gotea"></i> Google</a> \
<a class="fb social-popup" href="https://www.facebook.com/sharer/sharer.php?u=' + siteurl + '" target="_blank" title="Facebook">\
    <i class="fa fa-facebook fbtea"></i> Facebook</a> \
<a class="tw social-popup" href="https://twitter.com/intent/tweet?text='+encodeURIComponent(document.title)+'&url='+siteurl+'" target="_blank" title="Twitter">\
    <i class="fa fa-twitter twtea"></i> Twitter</a> \
    <span class="pl" data-target="#share-menu"><i class="fa fa-plus plustea"></i> More</span> \
<ul class="dropdown-menu" id="share-menu"> \
    <li><a class="social-popup" href="javascript:pinIt();">Pinterest</a></li> \
    <li><a class="social-popup" href="//www.digg.com/submit?url=' + siteurl + '" target="_blank" title="Digg">Digg</a></li> \
    <li><a class="social-popup" href="//www.linkedin.com/shareArticle?mini=true&amp;url=' + siteurl + '" target="_blank" title="Linkedin">Linkedin</a></li> \
    <li><a class="social-popup" href="//www.stumbleupon.com/submit?url=' + siteurl + '&amp;title='+encodeURIComponent(document.title)+'" target="_blank" title="Stumbleupon">Stumbleupon</a></li> \
    <li><a class="social-popup" href="//delicious.com/post?url=' + siteurl + '&amp;title='+encodeURIComponent(document.title)+'" target="_blank" title="Delicious">Delicious</a></li> \
    <li><a class="social-popup" href="http://www.tumblr.com/share/link?url=' + siteurl + '&name='+encodeURIComponent(document.title)+'&description='+encodeURIComponent(document.title)+'" target="_blank" title="Share This On Tumblr">Tumblr</a></li> \
    <li><a class="social-popup" href="http://bufferapp.com/add?text='+encodeURIComponent(document.title)+'&url=' + siteurl + '" target="_blank" title="BufferApp">BufferApp</a></li> \
    <li><a class="social-popup" href="https://getpocket.com/save?url=' + siteurl + '&title='+encodeURIComponent(document.title)+'" target="_blank" title="Pocket">Pocket</a></li> \
    <li><a class="social-popup" href="http://www.evernote.com/clip.action?url=' + siteurl + '&title='+encodeURIComponent(document.title)+'" target="_blank" title="Evernote">Evernote</a></li> \
    </ul> \
</div><div class="clear"></div></div> \
');
$(document).ready(function(){$(".pl").click(function(){$("#share-menu").slideToggle("fast")})});
function pinIt(){var t=document.createElement("script");t.setAttribute("type","text/javascript"),t.setAttribute("charset","UTF-8"),t.setAttribute("src","https://assets.pinterest.com/js/pinmarklet.js?r="+99999999*Math.random()),document.body.appendChild(t)};
//]]>
// Çizgi Film Hkayeleri URL=(http://cizgifilmhikayeleri.blogspot.com.tr/)
// Blogger Eklentileri URL=(http://bloggereklentileri.blogspot.com.tr/)
// Manuel Şablon URL=(http://manuelsablon.blogspot.com.tr/)
// İTunes Tema URL=(http://itunestema.blogspot.com.tr/)
//<![CDATA[
$(document).ready(function()
{
if($("#mycredit").attr("href")!="http://cizgifilmhikayeleri.blogspot.com.tr/")
{
window.location.href="http://cizgifilmhikayeleri.blogspot.com.tr/";
}
});
//]]>