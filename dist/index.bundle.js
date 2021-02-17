!function(){const e=window.Marzipano,t=window.bowser,n=window.screenfull,s=window.APP_DATA,i=document.querySelector("#pano"),c=document.querySelector("#titleBar .sceneName"),d=(document.querySelector("#sceneList"),document.querySelectorAll("#sceneList .scene")),a=(document.querySelector("#sceneListToggle"),document.querySelector("#fullscreenToggle"));if(window.matchMedia){const e=function(){t.matches?(document.body.classList.remove("desktop"),document.body.classList.add("mobile")):(document.body.classList.remove("mobile"),document.body.classList.add("desktop"))},t=matchMedia("(max-width: 700px), (max-height: 500px)");e(),t.addListener(e)}else document.body.classList.add("desktop");document.body.classList.add("no-touch"),window.addEventListener("touchstart",(function(e){document.body.classList.remove("no-touch"),document.body.classList.add("touch")})),t.msie&&parseFloat(t.version)<11&&document.body.classList.add("tooltip-fallback");const l={controls:{mouseViewMode:s.settings.mouseViewMode,scrollZoom:!0}},o=new e.Viewer(i,l),r=s.scenes.map((function(t){const n=e.ImageUrlSource.fromString("tiles/"+t.id+"/{z}/{f}/{y}/{x}.jpg",{cubeMapPreviewUrl:"tiles/"+t.id+"/preview.jpg"}),s=new e.CubeGeometry(t.levels),i=e.RectilinearView.limit.traditional(t.faceSize,100*Math.PI/180,120*Math.PI/180),c=new e.RectilinearView(t.initialViewParameters,i),d=o.createScene({source:n,geometry:s,view:c,pinFirstLevel:!0});return t.linkHotspots.forEach((function(e){const t=function(e){const t=document.createElement("div");t.classList.add("hotspot"),t.classList.add("link-hotspot");const n=document.createElement("img");n.src="./SVG/arrow-up-circle-fill.svg",n.classList.add("link-hotspot-icon");const s=["-ms-transform","-webkit-transform","transform"];for(let t=0;t<s.length;t++){const i=s[t];n.style[i]="rotate("+e.rotation+"rad)"}t.addEventListener("click",(function(){p(function(e){for(let t=0;t<r.length;t++)if(r[t].data.id===e)return r[t];return null}(e.target))}));const i=document.createElement("div");return i.classList.add("hotspot-tooltip"),i.classList.add("link-hotspot-tooltip"),i.innerHTML=u(e.target).name,t.appendChild(n),t.appendChild(i),t}(e);d.hotspotContainer().createHotspot(t,{yaw:e.yaw,pitch:e.pitch})})),t.infoHotspots.forEach((function(e){const t=function(e){const t=document.createElement("div");t.classList.add("hotspot"),t.classList.add("info-hotspot");const n=document.createElement("div");n.classList.add("info-hotspot-header");const s=document.createElement("div");s.classList.add("info-hotspot-icon-wrapper");const i=document.createElement("img");i.src="./assets/PC-Seal_Solid-white-95black_Registered.png",i.classList.add("info-hotspot-icon"),s.appendChild(i);const c=document.createElement("div");c.classList.add("info-hotspot-title-wrapper");const d=document.createElement("div");d.classList.add("info-hotspot-title"),d.innerHTML=e.title,c.appendChild(d);const a=document.createElement("div");a.classList.add("info-hotspot-close-wrapper");const l=document.createElement("img");l.src="./SVG/close-line.svg",l.classList.add("info-hotspot-close-icon"),a.appendChild(l),n.appendChild(s),n.appendChild(c),n.appendChild(a);const o=document.createElement("div");o.classList.add("info-hotspot-content");const r=document.createElement("div");r.classList.add("product-txt-container");const p=document.createElement("div");p.classList.add("product-txt-wrapper");const u=document.createElement("h2");u.classList.add("product-txt-subhead"),u.innerHTML=e.subhead;const m=document.createElement("div");m.innerHTML=e.text,m.classList.add("product-txt");const h=document.createElement("div");h.classList.add("recipes");const L=document.createElement("h2");L.classList.add("recipes-header"),L.textContent="Recipes to Try:",h.appendChild(L);const f=document.createElement("div");if(f.classList.add("recipes-list"),null!=e.recipes)for(let t=0;t<e.recipes.length;t++){const n=document.createElement("li"),s=document.createElement("a");s.classList.add("recipe-link"),s.href=e.recipes[t].link,s.setAttribute("target","_blank");const i=document.createElement("div");i.classList.add("recipe-preview-img-wrap"),i.style.backgroundImage=`url(${e.recipes[t].preview_image})`;const c=document.createElement("p");c.classList.add("recipe-title"),c.innerHTML=e.recipes[t].id,c.href=e.recipes[t].link,c.setAttribute("target","_blank"),s.appendChild(i),s.appendChild(c),n.appendChild(s),f.appendChild(n)}else if(null!=e.related_content){for(let t=0;t<e.related_content.length;t++){const n=document.createElement("li"),s=document.createElement("a");s.classList.add("recipe-link"),s.href=e.related_content[t].link,s.setAttribute("target","_blank");const i=document.createElement("div");i.classList.add("recipe-preview-img-wrap"),i.classList.add("__related-content"),i.style.backgroundImage=`url(${e.related_content[t].preview_image})`;const c=document.createElement("p");c.classList.add("recipe-title"),c.classList.add("__related_"),c.innerHTML=e.related_content[t].id,c.href=e.related_content[t].link,c.setAttribute("target","_blank"),s.appendChild(i),s.appendChild(c),n.appendChild(s),f.appendChild(n)}L.textContent="Related Content:"}else if(null!=e.pdf_links){for(let t=0;t<e.pdf_links.length;t++){const n=document.createElement("li"),s=document.createElement("a");s.classList.add("recipe-link"),s.href=e.pdf_links[t].link,s.setAttribute("target","_blank");const i=document.createElement("div");s.appendChild(i),i.classList.add("recipe-preview-img-wrap"),i.style.backgroundImage=`url(${e.pdf_links[t].preview_image})`;const c=document.createElement("p");c.classList.add("recipe-title"),c.innerHTML=e.pdf_links[t].id,c.href=e.pdf_links[t].link,c.setAttribute("target","_blank"),s.appendChild(c),n.appendChild(s),f.appendChild(n)}L.textContent="Downloads"}else L.textContent="";h.appendChild(f),p.appendChild(u),p.appendChild(m),p.appendChild(h),r.appendChild(p);const g=document.createElement("div");g.classList.add("carousel_container");const v=document.createElement("div");v.classList.add("carousel");const E=document.createElement("div");E.classList.add("carousel-images");const b=document.createElement("div");b.classList.add("carousel-nav");const y=document.createElement("img");y.src="./SVG/chevron-right.svg",y.classList.add("carousel-button"),y.classList.add("next"),y.setAttribute("id","next");const w=document.createElement("img");w.src="./SVG/chevron-left.svg",w.classList.add("carousel-button"),w.classList.add("previous"),w.setAttribute("id","previous");const C=document.createElement("ul");C.classList.add("carousel-pagination");for(let t=0;t<e.images.length;t++){const n=document.createElement("li");n.classList.add("carousel-bullet");const s=document.createElement("div");if(2===e.images[t].length){s.style.backgroundImage=`url(${e.images[t][1]})`;const n=document.createElement("div");n.classList.add("influencer_credit_container");const i=document.createElement("div");i.classList.add("pointer"),n.appendChild(i);const c=document.createElement("span");c.classList.add("influencer_credit"),c.innerHTML="📷: "+e.images[t][0],n.appendChild(c),s.appendChild(n)}else s.style.backgroundImage=`url(${e.images[t]})`;s.classList.add("product-image"),e.containImages&&(s.style.backgroundSize="contain",s.style.width="80%",s.style.height="80%",s.style.alignSelf="center"),E.appendChild(s),C.appendChild(n),g.appendChild(C)}if(null!=e.videos)for(let t=0;t<e.videos.length;t++){const n=document.createElement("li");n.classList.add("carousel-bullet");const s=document.createElement("div");s.classList.add("iframe_container__video"),s.innerHTML=e.videos[t],C.appendChild(n),E.appendChild(s)}b.appendChild(y),v.appendChild(E),b.appendChild(w),g.appendChild(b),g.appendChild(v),o.appendChild(r),o.appendChild(g),t.appendChild(n),t.appendChild(o);const k=document.createElement("div");k.innerHTML=t.innerHTML,k.classList.add("info-hotspot-modal"),document.body.appendChild(k);const _=function(){let e=k.getElementsByTagName("iframe");if(null!=e)for(let t=0;t<e.length;t++)e[t].src=e[t].src},S=function(){setTimeout((function(){k.querySelector(".product-txt-container")&&(k.querySelector(".product-txt-container").scrollTo(0,0),R(0))}),1e3),_()},T=function(){k.classList.toggle("visible")};t.querySelector(".info-hotspot-header").addEventListener("click",T),k.querySelector(".info-hotspot-close-wrapper").addEventListener("click",T),k.addEventListener("mouseover",(function(e){e.target===k&&k.classList.contains("visible")&&k.addEventListener("click",(function(e){e.target===k&&k.classList.contains("visible")&&(k.classList.remove("visible"),S())}))}));const M=k.querySelector("#next"),x=k.querySelector("#previous"),q=k.querySelector(".carousel-images"),H=k.querySelectorAll(".carousel-images > *").length,A=k.querySelector(".carousel-pagination"),V=[].slice.call(k.querySelectorAll(".carousel-bullet"));let I=0,P=0,G=0;function R(e){e=e<0?H-1:e>=H?0:e,q.style.WebkitTransform=q.style.transform="translate(-"+100*e+"%, 0)",V[I].classList.remove("active-bullet"),V[e].classList.add("active-bullet"),I=e,_()}if(document.body.addEventListener("keydown",(e=>{"Escape"===e.key&&k.classList.remove("visible"),S()}),{passive:!0}),q.addEventListener("touchstart",(e=>{P=e.changedTouches[0].pageX})),q.addEventListener("touchend",(e=>{G=e.changedTouches[0].pageX,G<P&&I!==H-1&&M.click(),G>P&&0!==I&&x.click()})),q.addEventListener("wheel",(e=>{let t=1*e.deltaY;-1===Math.sign(t)?0!==I&&x.click():I!==H-1&&M.click()}),{passive:!0}),V[I].classList.add("active-bullet"),x.addEventListener("click",(function(){R(I-1)}),!1),M.addEventListener("click",(function(){R(I+1)}),!1),A.addEventListener("click",(function(e){let t=V.indexOf(e.target);-1!==t&&t!==I&&R(t)}),!1),e.fullWidth){let t=k.querySelector("div.info-hotspot-content");t.classList.add("fullwidth_modal"),function(e){for(;e.firstChild;)e.removeChild(e.firstChild)}(t);const n=document.createElement("div");n.classList.add("iframe_container"),n.innerHTML=e.text,t.appendChild(n)}return t}(e);d.hotspotContainer().createHotspot(t,{yaw:e.yaw,pitch:e.pitch},{perspective:{radius:500}})})),{data:t,scene:d,view:c}}));function p(e){e.view.setParameters(e.data.initialViewParameters),e.scene.switchTo(),function(e){c.innerHTML=e.data.name.replace("&","&amp;").replace("<","&lt;").replace(">","&gt;")}(e),function(e){for(let t=0;t<d.length;t++){const n=d[t];n.getAttribute("data-id")===e.data.id?n.classList.add("current"):n.classList.remove("current")}}(e)}function u(e){for(let t=0;t<s.scenes.length;t++)if(s.scenes[t].id===e)return s.scenes[t];return null}n.enabled&&s.settings.fullscreenButton?(document.body.classList.add("fullscreen-enabled"),a.addEventListener("click",(function(){n.toggle()})),n.on("change",(function(){n.isFullscreen?a.classList.add("enabled"):a.classList.remove("enabled")}))):document.body.classList.add("fullscreen-disabled"),p(r[0]);const m=document.querySelector(".preloader"),h=document.querySelector("#titleBar");window.addEventListener("load",(function(){i.style.opacity=1,h.style.opacity=1,m.style.display="none"}))}();