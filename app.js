const raw = [
  {p:"Ene.2022", clp:822.383, cop:4000.72, mxn:20.4734, brl:5.53350476190476, pen:3.88928571428572},
  {p:"Feb.2022", clp:807.976111111111, cop:3938.36, mxn:20.4823, brl:5.19597894736842, pen:3.7908},
  {p:"Mar.2022", clp:799.187391304348, cop:3805.52, mxn:20.6061, brl:4.96778181818182, pen:3.73878260869565},
  {p:"Abr.2022", clp:815.123, cop:3796.39, mxn:20.0475, brl:4.75741578947368, pen:3.73973684210526},
  {p:"May.2022", clp:850.682380952381, cop:4027.6, mxn:20.1101, brl:4.95445, pen:3.75754545454545},
  {p:"Jun.2022", clp:856.828421052632, cop:3922.5, mxn:19.9743, brl:5.04860952380952, pen:3.74714285714286},
  {p:"Jul.2022", clp:950.016842105263, cop:4394.01, mxn:20.5254, brl:5.37445, pen:3.90473684210526},
  {p:"Ago.2022", clp:904.352272727273, cop:4326.77, mxn:20.142, brl:5.14455, pen:3.87431818181818},
  {p:"Sep.2022", clp:922.875263157895, cop:4437.31, mxn:20.073, brl:5.23765, pen:3.89668421052632},
  {p:"Oct.2022", clp:955.894736842105, cop:4714.96, mxn:20.0146, brl:5.24935, pen:3.97894736842105},
  {p:"Nov.2022", clp:916.922105263158, cop:4922.3, mxn:19.497, brl:5.27495, pen:3.87715789473684},
  {p:"Dic.2022", clp:877.52875, cop:4787.89, mxn:19.5825, brl:5.24115, pen:3.82945},
  {p:"Ene.2023", clp:823.224545454546, cop:4710.75, mxn:18.9632, brl:5.18858095238095, pen:3.83259090909091},
  {p:"Feb.2023", clp:800.34375, cop:4803.92, mxn:18.6012, brl:5.1744, pen:3.84},
  {p:"Mar.2023", clp:807.372173913043, cop:4754.2, mxn:18.3941, brl:5.19933043478261, pen:3.78373913043478},
  {p:"Abr.2023", clp:805.80725, cop:4537.92, mxn:18.0816, brl:5.0212, pen:3.76675},
  {p:"May.2023", clp:798.925, cop:4532.67, mxn:17.7365, brl:4.97995, pen:3.69221739130435},
  {p:"Jun.2023", clp:799.619318181818, cop:4195.47, mxn:17.2344, brl:4.84959090909091, pen:3.65127272727273},
  {p:"Jul.2023", clp:815.87, cop:4050.64, mxn:16.9093, brl:4.8007619047619, pen:3.59833333333333},
  {p:"Ago.2023", clp:857.050869565217, cop:4076.55, mxn:16.9953, brl:4.91412173913043, pen:3.69826086956522},
  {p:"Sep.2023", clp:886.961904761905, cop:4008.73, mxn:17.3167, brl:4.9467, pen:3.73233333333333},
  {p:"Oct.2023", clp:926.065454545454, cop:4220.3, mxn:18.091, brl:5.06225, pen:3.84140909090909},
  {p:"Nov.2023", clp:885.141590909091, cop:4029.74, mxn:17.3762, brl:4.89906818181818, pen:3.76404545454545},
  {p:"Dic.2023", clp:876.095, cop:3943.32, mxn:17.1765, brl:4.8956, pen:3.7323},
  {p:"Ene.2024", clp:909.801086956522, cop:3918.81, mxn:17.0738, brl:4.91123043478261, pen:3.74108695652174},
  {p:"Feb.2024", clp:965.702619047619, cop:3930.41, mxn:17.0887, brl:4.9631380952381, pen:3.82552380952381},
  {p:"Mar.2024", clp:968.18, cop:3897.84, mxn:16.766, brl:4.9842, pen:3.71085},
  {p:"Abr.2024", clp:958.535227272727, cop:3864.7, mxn:16.8022, brl:5.12727272727273, pen:3.71409090909091},
  {p:"May.2024", clp:916.695869565217, cop:3865.84, mxn:16.8091, brl:5.13733043478261, pen:3.72813043478261},
  {p:"Jun.2024", clp:928.546, cop:4062.71, mxn:18.247, brl:5.4031, pen:3.7836},
  {p:"Jul.2024", clp:936.360434782609, cop:4034.92, mxn:18.1183, brl:5.54419130434783, pen:3.76291304347826},
  {p:"Ago.2024", clp:928.630454545455, cop:4071.24, mxn:19.1869, brl:5.54503636363636, pen:3.74027272727273},
  {p:"Sep.2024", clp:926.79, cop:4192.39, mxn:19.6078, brl:5.5387, pen:3.77475},
  {p:"Oct.2024", clp:938.37652173913, cop:4267.87, mxn:19.7006, brl:5.6230347826087, pen:3.75217391304348},
  {p:"Nov.2024", clp:972.06, cop:4407.05, mxn:20.3139, brl:5.7957619047619, pen:3.78161904761905},
  {p:"Dic.2024", clp:984.18, cop:4385.8, mxn:20.2684, brl:6.1077, pen:3.7343},
  {p:"Ene.2025", clp:1000.72, cop:4373.57, mxn:20.4967, brl:6.15643043478261, pen:3.74713043478261},
  {p:"Feb.2025", clp:961.95, cop:4206.88, mxn:20.3499, brl:5.8999, pen:3.70115},
  {p:"Mar.2025", clp:932.72, cop:4136.33, mxn:20.2276, brl:5.76393043478261, pen:3.6539},
  {p:"Abr.2025", clp:961.83, cop:4275.78, mxn:19.999, brl:5.77759090909091, pen:3.69613636363636},
  {p:"May.2025", clp:941.47, cop:4200.42, mxn:19.4431, brl:5.67139130434783, pen:3.65747826086957},
  {p:"Jun.2025", clp:937.79, cop:4108.27, mxn:19.0233, brl:5.5422, pen:3.60378947368421},
  {p:"Jul.2025", clp:954.14, cop:4055.08, mxn:18.698, brl:5.5345, pen:3.55785},
  {p:"Ago.2025", clp:965.7, cop:4041.52, mxn:18.7043, brl:5.44195, pen:3.53961904761905},
  {p:"Sep.2025", clp:960.15, cop:3918.5, mxn:18.4864, brl:5.37325, pen:3.4979},
  {p:"Oct.2025", clp:952.77, cop:3881.09, mxn:18.4365, brl:5.38915, pen:3.41282608695652},
  {p:"Nov.2025", clp:934.67, cop:3770.77, mxn:18.4142, brl:5.34115, pen:3.37394736842105},
  {p:"Dic.2025", clp:914, cop:3800, mxn:18.07, brl:5.4585, pen:3.36839130434783},
  {p:"Ene.2026", clp:882.75, cop:3688.12, mxn:17.6572, brl:5.3375380952381, pen:3.36352380952381},
  {p:"Feb.2026", clp:861.94, cop:3679.37, mxn:17.2324, brl:5.19872857142857, pen:3.35644444444444},
  {p:"Mar.2026", clp:912.76, cop:3710.28, mxn:17.7783, brl:5.23478095238095, pen:3.44952380952381},
  {p:"Abr.2026", clp:898, cop:3620.25, mxn:17.4589, brl:5.03445238095238, pen:3.43933333333333},
  {p:"May.2026", clp:897.9, cop:3717.98, mxn:17.3209, brl:4.9848, pen:3.4312380952381},
  {p:"Jun.2026", clp:906.52, cop:3492.45, mxn:17.4017, brl:5.12984761904762, pen:3.40019047619048},
  {p:"Jul.2026", clp:931.52, cop:3251.22, mxn:17.47, brl:5.1146, pen:3.40166666666667},
  {p:"Ago.2026*", clp:916.6578947368421, cop:3275.0, mxn:17.35, brl:5.08, pen:3.405, provisional:true},
];

const monthMap = {Ene:0, Feb:1, Mar:2, Abr:3, May:4, Jun:5, Jul:6, Ago:7, Sep:8, Oct:9, Nov:10, Dic:11};
function parseDate(s){
  const clean = s.replace("*","").trim();
  const [m, y] = clean.split(".");
  return new Date(+y, monthMap[m], 1);
}
raw.forEach(d=>{
  d.date = parseDate(d.p);
  d.clpIdx = d.clp != null ? d.clp / raw[0].clp * 100 : null;
  d.copIdx = d.cop != null ? d.cop / raw[0].cop * 100 : null;
  d.mxnIdx = d.mxn != null ? d.mxn / raw[0].mxn * 100 : null;
  d.brlIdx = d.brl != null ? d.brl / raw[0].brl * 100 : null;
  d.penIdx = d.pen != null ? d.pen / raw[0].pen * 100 : null;
});

const series = [
  {key:"clpIdx", absKey:"clp", label:"CLP Chile", color:"#3fb1ff", width:2.8},
  {key:"copIdx", absKey:"cop", label:"COP Colombia", color:"#ffd166", width:2.2},
  {key:"mxnIdx", absKey:"mxn", label:"MXN México", color:"#06d6a0", width:2.0},
  {key:"brlIdx", absKey:"brl", label:"BRL Brasil", color:"#ef476f", width:2.0},
  {key:"penIdx", absKey:"pen", label:"PEN Perú", color:"#a78bfa", width:2.0},
];
let active = new Set(series.map(s=>s.key));
let mode = "indexed"; // indexed | absolute | log

// legend
const legend = d3.select("#legend");
series.forEach(s=>{
  const item = legend.append("div").attr("class","legend-item").attr("data-key",s.key);
  item.html(`<span class="dot" style="background:${s.color}"></span> ${s.label}`);
  item.on("click", ()=>{
    if(active.has(s.key)){
      if(active.size===1) return;
      active.delete(s.key);
      item.classed("off", true);
    } else {
      active.add(s.key);
      item.classed("off", false);
    }
    update();
  });
});

// controls
d3.selectAll(".toggles .btn").on("click", function(){
  d3.selectAll(".toggles .btn").classed("active", false);
  d3.select(this).classed("active", true);
  mode = d3.select(this).attr("data-mode");
  update();
});

// chart setup
const chartDiv = document.getElementById("chart");
const brushDiv = document.getElementById("brush");
let width, height, brushHeight=60;

function render(){
  chartDiv.innerHTML="";
  brushDiv.innerHTML="";
  width = chartDiv.clientWidth;
  height = 420;
  drawMain();
  drawBrush();
  renderVarTable();
  renderExtremes();
  renderTable();
}
function getYDomain(){
  if(mode==="indexed"){
    const vals = raw.flatMap(d=> series.filter(s=>active.has(s.key)).map(s=> d[s.key]).filter(v=>v!=null));
    const min = d3.min(vals), max = d3.max(vals);
    const pad = (max-min)*0.15;
    return [Math.floor(min-pad), Math.ceil(max+pad)];
  } else if(mode==="log"){
    return [1, 6000];
  } else {
    return [1, 6000];
  }
}
let xScale, yScale, x2, y2;

function drawMain(){
  const margin={top:16,right:16,bottom:32,left:52};
  const w = width - margin.left - margin.right;
  const h = height - margin.top - margin.bottom;
  const svg = d3.select("#chart").append("svg").attr("width",width).attr("height",height);
  const g = svg.append("g").attr("transform",`translate(${margin.left},${margin.top})`);

  xScale = d3.scaleTime().domain(d3.extent(raw,d=>d.date)).range([0,w]);
  if(mode==="indexed"){
    yScale = d3.scaleLinear().domain(getYDomain()).range([h,0]).nice();
  } else {
    yScale = d3.scaleLog().domain([2, 6000]).range([h,0]);
  }

  // grid
  g.append("g").attr("class","grid")
    .call(d3.axisLeft(yScale).ticks(mode==="indexed"?6:5).tickSize(-w).tickFormat(""))
    .selectAll("line").attr("stroke-opacity",0.15);
  g.select(".grid .domain").remove();

  const xAxis = g.append("g").attr("class","axis").attr("transform",`translate(0,${h})`)
    .call(d3.axisBottom(xScale).ticks(d3.timeMonth.every(4)).tickFormat(d3.timeFormat("%b %y")));
  const yAxis = g.append("g").attr("class","axis")
    .call(d3.axisLeft(yScale).ticks(mode==="indexed"?6:5).tickFormat(d=> mode==="indexed"? d+"": (d>=1000? d3.format(",")(d): d)));

  // clip
  svg.append("defs").append("clipPath").attr("id","clip").append("rect").attr("width",w).attr("height",h);
  const linesG = g.append("g").attr("clip-path","url(#clip)");

  const lineGen = (key)=> d3.line().x(d=>xScale(d.date)).y(d=>yScale(mode==="indexed"? d[key] : d[series.find(s=>s.key===key).absKey])).curve(d3.curveMonotoneX);

  series.forEach(s=>{
    if(!active.has(s.key)) return;
    const yVal = d=> mode==="indexed"? d[s.key] : d[s.absKey];
    const solidData = raw.filter(d=> !d.provisional && yVal(d)!=null);
    const provData = raw.filter(d=> yVal(d)!=null).slice(-2); // last solid + provisional
    const lineSolid = d3.line().defined(d=> yVal(d)!=null).x(d=>xScale(d.date)).y(d=>yScale(yVal(d))).curve(d3.curveMonotoneX);
    // solid
    linesG.append("path").datum(solidData).attr("class","line").attr("d", lineSolid).attr("stroke", s.color).attr("stroke-width", s.width).attr("opacity", s.key==="clpIdx"?1:0.92);
    // provisional dashed (last segment)
    if(provData.length===2 && provData[1].provisional){
      const lineProv = d3.line().defined(d=> yVal(d)!=null).x(d=>xScale(d.date)).y(d=>yScale(yVal(d))).curve(d3.curveMonotoneX);
      linesG.append("path").datum(provData).attr("class","line").attr("d", lineProv).attr("stroke", s.color).attr("stroke-width", s.width).attr("opacity",0.9).attr("stroke-dasharray","6 4");
      // dot provisional
      const last = provData[1];
      linesG.append("circle").attr("cx", xScale(last.date)).attr("cy", yScale(yVal(last))).attr("r",4).attr("fill", s.color).attr("stroke","#0f1419").attr("stroke-width",1.5).attr("opacity",0.9);
      if(s.key==="clpIdx" && mode==="indexed"){
        g.append("text").attr("x", xScale(last.date)+6).attr("y", yScale(yVal(last))-10).attr("fill", s.color).attr("font-size","11px").attr("font-weight","600").text("Ago* 916.66 provisional");
      }
    }
    // area for CLP (only solid)
    if(s.key==="clpIdx" && mode==="indexed"){
      const area = d3.area().defined(d=> d[s.key]!=null).x(d=>xScale(d.date)).y0(h).y1(d=>yScale(d[s.key])).curve(d3.curveMonotoneX);
      linesG.append("path").datum(solidData).attr("class","area").attr("d", area).attr("fill", s.color);
    }
  });

  // overlay for tooltip
  const overlay = g.append("rect").attr("width",w).attr("height",h).attr("fill","transparent");
  const tooltip = d3.select("#tooltip");
  const bisect = d3.bisector(d=>d.date).left;
  overlay.on("mousemove", (event)=>{
    const [mx] = d3.pointer(event);
    const x0 = xScale.invert(mx);
    const i = bisect(raw, x0, 1);
    const d0 = raw[i-1], d1 = raw[i];
    if(!d0||!d1) return;
    const d = x0 - d0.date > d1.date - x0 ? d1 : d0;
    const xPos = xScale(d.date);
    // vertical line
    g.selectAll(".hover-line").remove();
    g.append("line").attr("class","hover-line").attr("x1",xPos).attr("x2",xPos).attr("y1",0).attr("y2",h).attr("stroke","#2a3d55").attr("stroke-dasharray","4 4");
    // dots
    g.selectAll(".hover-dot").remove();
    series.forEach(s=>{
      if(!active.has(s.key)) return;
      const yVal = mode==="indexed"? d[s.key] : d[s.absKey];
      g.append("circle").attr("class","hover-dot").attr("cx",xPos).attr("cy",yScale(yVal)).attr("r",4).attr("fill",s.color).attr("stroke","#0f1419").attr("stroke-width",1.5);
    });
    // tooltip content
    let html = `<div class="tt-date">${d.p}</div>`;
    series.forEach(s=>{
      if(!active.has(s.key)) return;
      const abs = d[s.absKey].toLocaleString('es-CL',{maximumFractionDigits:2});
      const idx = d[s.key].toFixed(1);
      const base = raw[0][s.absKey];
      const varBase = ((d[s.absKey]/base-1)*100).toFixed(1);
      const col = varBase>=0? "#ff6b6b":"#2ecc71";
      html += `<div class="tt-row"><span style="display:flex;align-items:center;gap:6px"><span style="width:8px;height:8px;border-radius:50%;background:${s.color};display:inline-block"></span>${s.label}</span><span style="text-align:right"><strong>${mode==="indexed"? idx+" • "+abs : abs}</strong><br><span style="color:${col};font-size:11px">${varBase>0?"+":""}${varBase}% vs Ene22</span></span></div>`;
    });
    tooltip.html(html).style("display","block");
    const rect = chartDiv.getBoundingClientRect();
    const ttW = 240;
    let left = event.clientX - rect.left + 16;
    if(left + ttW > rect.width) left = event.clientX - rect.left - ttW - 16;
    tooltip.style("left", left + "px").style("top", (event.clientY - rect.top - 10) + "px");
  }).on("mouseleave", ()=>{
    g.selectAll(".hover-line, .hover-dot").remove();
    tooltip.style("display","none");
  });
}

function drawBrush(){
  const margin={top:6,right:16,bottom:20,left:52};
  const w = width - margin.left - margin.right;
  const h = brushHeight - margin.top - margin.bottom;
  const svg = d3.select("#brush").append("svg").attr("width",width).attr("height",brushHeight);
  const g = svg.append("g").attr("transform",`translate(${margin.left},${margin.top})`);
  x2 = d3.scaleTime().domain(d3.extent(raw,d=>d.date)).range([0,w]);
  if(mode==="indexed"){
    y2 = d3.scaleLinear().domain(getYDomain()).range([h,0]);
  } else {
    y2 = d3.scaleLog().domain([2,6000]).range([h,0]);
  }
  g.append("g").attr("class","axis").attr("transform",`translate(0,${h})`).call(d3.axisBottom(x2).ticks(d3.timeMonth.every(6)).tickFormat(d3.timeFormat("%b %y")));
  series.forEach(s=>{
    if(!active.has(s.key)) return;
    const yVal = d=> mode==="indexed"? d[s.key] : d[s.absKey];
    const line = d3.line().defined(d=> yVal(d)!=null).x(d=>x2(d.date)).y(d=>y2(yVal(d))).curve(d3.curveMonotoneX);
    g.append("path").datum(raw).attr("fill","none").attr("stroke",s.color).attr("stroke-width",1.2).attr("opacity",0.9).attr("d", line);
  });
  const brush = d3.brushX().extent([[0,0],[w,h]]).on("brush end", brushed);
  g.append("g").attr("class","brush").call(brush);
  function brushed(event){
    if(!event.selection) return;
    const [x0,x1] = event.selection.map(x2.invert);
    xScale.domain([x0,x1]);
    d3.select("#chart svg g").selectAll(".axis").remove();
    // quick re-render main x axis only
    // easiest: full update without recreating brush
    const margin={top:16,right:16,bottom:32,left:52};
    const w2 = width - margin.left - margin.right;
    const h2 = height - margin.top - margin.bottom;
    const gMain = d3.select("#chart svg > g");
    gMain.selectAll(".axis").remove();
    gMain.append("g").attr("class","axis").attr("transform",`translate(0,${h2})`).call(d3.axisBottom(xScale).ticks(d3.timeMonth.every(2)).tickFormat(d3.timeFormat("%b %y")));
    // redraw lines with new xScale
    const linesG = gMain.select("g[clip-path]");
    linesG.selectAll("path").remove();
    series.forEach(s=>{
      if(!active.has(s.key)) return;
      const yVal = d=> mode==="indexed"? d[s.key] : d[s.absKey];
      const line = d3.line().x(d=>xScale(d.date)).y(d=>yScale(yVal(d))).curve(d3.curveMonotoneX);
      linesG.append("path").datum(raw).attr("class","line").attr("d", line).attr("stroke", s.color).attr("stroke-width", s.width);
    });
    if(!event.sourceEvent || event.sourceEvent.type==="brush") return;
  }
}

function update(){
  render();
}

function renderVarTable(){
  const vars = [
    {label:"Ene22 → Jul26", ref:"Ene.2022", tgt:"Jul.2026"},
    {label:"Ene24 → Jul26", ref:"Ene.2024", tgt:"Jul.2026"},
    {label:"Ene25 → Jul26", ref:"Ene.2025", tgt:"Jul.2026"},
    {label:"YTD 2026 (Ene26→Jul26)", ref:"Ene.2026", tgt:"Jul.2026"},
    {label:"12m (Jul25→Jul26)", ref:"Jul.2025", tgt:"Jul.2026"},
    {label:"Dic24→Jul26", ref:"Dic.2024", tgt:"Jul.2026"},
  ];
  const keys = ["clp","cop","mxn","brl","pen"];
  const labels = {clp:"CLP", cop:"COP", mxn:"MXN", brl:"BRL", pen:"PEN"};
  let html = `<table><thead><tr><th>Ventana</th><th>CLP</th><th>COP</th><th>MXN</th><th>BRL</th><th>PEN</th></tr></thead><tbody>`;
  vars.forEach(v=>{
    const dRef = raw.find(d=>d.p===v.ref);
    const dTgt = raw.find(d=>d.p===v.tgt);
    html+=`<tr><td>${v.label}</td>`;
    keys.forEach(k=>{
      const varP = (dTgt[k]/dRef[k]-1)*100;
      const cls = varP>0.05? "neg": varP < -0.05? "pos": "";
      html+=`<td class="${cls}">${varP>0?"+":""}${varP.toFixed(2)}%</td>`;
    });
    html+=`</tr>`;
  });
  html+=`</tbody></table><p style="color:var(--muted);font-size:11px;margin-top:6px">Positivo = depreciación (más moneda local por USD). Negativo = apreciación.</p>`;
  document.getElementById("varTable").innerHTML=html;
}

function renderExtremes(){
  const stats = [
    {k:"clp", name:"CLP", low: Math.min(...raw.map(d=>d.clp)), high: Math.max(...raw.map(d=>d.clp)), lowP: raw.find(d=>d.clp===Math.min(...raw.map(x=>x.clp))).p, highP: raw.find(d=>d.clp===Math.max(...raw.map(x=>x.clp))).p},
    {k:"cop", name:"COP", low: Math.min(...raw.map(d=>d.cop)), high: Math.max(...raw.map(d=>d.cop)), lowP: raw.find(d=>d.cop===Math.min(...raw.map(x=>x.cop))).p, highP: raw.find(d=>d.cop===Math.max(...raw.map(x=>x.cop))).p},
    {k:"mxn", name:"MXN", low: Math.min(...raw.map(d=>d.mxn)), high: Math.max(...raw.map(d=>d.mxn)), lowP: raw.find(d=>d.mxn===Math.min(...raw.map(x=>x.mxn))).p, highP: raw.find(d=>d.mxn===Math.max(...raw.map(x=>x.mxn))).p},
    {k:"brl", name:"BRL", low: Math.min(...raw.map(d=>d.brl)), high: Math.max(...raw.map(d=>d.brl)), lowP: raw.find(d=>d.brl===Math.min(...raw.map(x=>x.brl))).p, highP: raw.find(d=>d.brl===Math.max(...raw.map(x=>x.brl))).p},
    {k:"pen", name:"PEN", low: Math.min(...raw.map(d=>d.pen)), high: Math.max(...raw.map(d=>d.pen)), lowP: raw.find(d=>d.pen===Math.min(...raw.map(x=>x.pen))).p, highP: raw.find(d=>d.pen===Math.max(...raw.map(x=>x.pen))).p},
  ];
  let html="";
  stats.forEach(s=>{
    html+=`<div class="extreme"><strong>${s.name}</strong><small>Min: ${s.low.toFixed(2)} en ${s.lowP} • Max: ${s.high.toFixed(2)} en ${s.highP}</small><small>Rango: ${((s.high/s.low-1)*100).toFixed(1)}%</small></div>`;
  });
  document.getElementById("extremes").innerHTML=html;
}

function renderTable(){
  const tbody = document.querySelector("#dataTable tbody");
  const search = document.getElementById("search").value.toLowerCase();
  const sortBy = document.getElementById("sortBy").value;
  let filtered = raw.filter(d=> d.p.toLowerCase().includes(search) || d.p.includes(search));
  if(sortBy==="date-desc") filtered.sort((a,b)=> b.date - a.date);
  else if(sortBy==="date-asc") filtered.sort((a,b)=> a.date - b.date);
  else if(sortBy==="clp-desc") filtered.sort((a,b)=> b.clp - a.clp);
  else if(sortBy==="cop-desc") filtered.sort((a,b)=> b.cop - a.cop);
  tbody.innerHTML="";
  filtered.forEach((d,i)=>{
    const prev = raw[raw.indexOf(d)-1];
    const varClp = prev? ((d.clp/prev.clp-1)*100).toFixed(2)+"%": "—";
    const col = prev? (d.clp>prev.clp? "#ff6b6b":"#2ecc71"):"#8b9bb0";
    const tr=document.createElement("tr");
    tr.innerHTML=`<td>${d.p}</td><td>${d.clp.toFixed(2)}</td><td>${d.cop.toFixed(2)}</td><td>${d.mxn.toFixed(2)}</td><td>${d.brl.toFixed(2)}</td><td>${d.pen.toFixed(2)}</td><td style="color:${col};font-weight:600">${varClp}</td>`;
    tbody.appendChild(tr);
  });
}
document.getElementById("search").addEventListener("input", renderTable);
document.getElementById("sortBy").addEventListener("change", renderTable);
document.getElementById("exportCSV").addEventListener("click", ()=>{
  const header="Periodo,CLP,COP,MXN,BRL,PEN\n";
  const rows=raw.map(d=> `${d.p},${d.clp},${d.cop},${d.mxn},${d.brl},${d.pen}`).join("\n");
  const blob=new Blob([header+rows],{type:"text/csv"});
  const url=URL.createObjectURL(blob);
  const a=document.createElement("a"); a.href=url; a.download="latam_fx_2022-2026_BCRP.csv"; a.click(); URL.revokeObjectURL(url);
});
window.addEventListener("resize", render);
render();

// set repo link dynamically if we know repo
fetch("https://api.github.com/users/kiltro-dev/repos?per_page=5").catch(()=>{});
