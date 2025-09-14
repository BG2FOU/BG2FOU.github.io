import{u as G}from"../MapboxPanel/stores/deviceStore-C0BIN_ip.js";import{d as b,o as k,k as $,E as m}from"../../../vendor-UN2rW63P.js";const v={__name:"exportGPX",props:{geojsonData:{type:Object,required:!1}},setup(h,{expose:S}){const l=h,s=G(),g=o=>{const r=o.features.filter(a=>a.geometry.type==="Point"),p=o.features.filter(a=>a.geometry.type==="LineString");let n=`<?xml version="1.0" encoding="UTF-8"?>
<gpx xmlns="http://www.topografix.com/GPX/1/1" 
     creator="Vue3-GPX-Exporter" 
     version="1.1"
     xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
     xsi:schemaLocation="http://www.topografix.com/GPX/1/1 http://www.topografix.com/GPX/1/1/gpx.xsd">
  <metadata>
    <time>${new Date().toISOString()}</time>
  </metadata>`;return r.forEach(a=>{const{coordinates:e}=a.geometry,t=a.properties;s.propsMap[t.id]&&s.propsMap[t.id].name&&s.propsMap[t.id].name!==t.id&&(t.id=s.propsMap[t.id].name),n+=`
  <wpt lat="${e[1]}" lon="${e[0]}">
    <name>${t.id||"Waypoint"}</name>
    <time>${t.TimeStamp||""}</time>
    <desc>ItemID: ${t.id}, Status: ${t.Status}</desc>
  </wpt>`}),p.forEach(a=>{const e=a.properties.id;n+=`
  <trk>
    <name>${e}</name>
    <trkseg>`,a.geometry.coordinates.forEach(t=>{n+=`
      <trkpt lat="${t[1]}" lon="${t[0]}">
        <time>${a.properties.TimeStamp||new Date().toISOString()}</time>
      </trkpt>`}),n+=`
    </trkseg>
  </trk>`}),n+=`
</gpx>`,n},x=o=>{const r=o.features.filter(n=>n.geometry.type==="Point");let p=`<?xml version="1.0" encoding="UTF-8"?>
<gpx xmlns="http://www.topografix.com/GPX/1/1" 
     creator="Vue3-GPX-Exporter" 
     version="1.1"
     xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
     xsi:schemaLocation="http://www.topografix.com/GPX/1/1 http://www.topografix.com/GPX/1/1/gpx.xsd">
  <metadata>
    <time>${new Date().toISOString()}</time>
  </metadata>`;return r.forEach(n=>{const{coordinates:a}=n.geometry,e=n.properties;s.propsMap[e.id]&&s.propsMap[e.id].name&&s.propsMap[e.id].name!==e.id&&(e.id=s.propsMap[e.id].name),p+=`
  <wpt lat="${a[1]}" lon="${a[0]}">
    <name>${e.id||"Waypoint"}</name>
    <time>${e.TimeStamp||""}</time>
    <desc>ItemID: ${e.id}, Status: ${e.Status}</desc>
  </wpt>`}),p+=`
</gpx>`,p},w=(o,r)=>{const n=(i=>{const d=new Date,y=`${d.getFullYear()}${String(d.getMonth()+1).padStart(2,"0")}${String(d.getDate()).padStart(2,"0")}`,c=i.lastIndexOf("."),P=c>0?i.substring(0,c):i,X=c>0?i.substring(c):"";return`${P}_${y}${X}`})(r),a=new Blob([o],{type:"application/gpx+xml"}),e=URL.createObjectURL(a),t=document.createElement("a");t.href=e,t.download=n,t.style.display="none",document.body.appendChild(t),t.click(),setTimeout(()=>{document.body.removeChild(t),URL.revokeObjectURL(e)},100)},u=()=>{try{const o=g(l.geojsonData.data);w(o,"full_tracks.gpx"),m.success("完整GPX文件(含轨迹)已导出！")}catch(o){console.error("GPX生成失败:",o),m.error("导出失败: "+o.message)}},f=()=>{try{const o=x(l.geojsonData.data);w(o,"waypoints.gpx"),m.success("航点GPX文件已导出！")}catch(o){console.error("GPX生成失败:",o),m.error("导出失败: "+o.message)}};return S({convertToFullGPX:g,convertToWaypointsGPX:x,exportFullGPX:u,exportWaypointsGPX:f}),(o,r)=>(k(),b("div",null,[$("button",{class:"gpx-export-btn",onClick:u},"导出完整GPX(含轨迹)"),$("button",{class:"gpx-export-btn",onClick:f},"导出航点GPX")]))}};export{v as _};
