const ghosts = [
  {name:'Friendly Spook', emoji:'👻', tag:'legend', desc:'Gentle apparitions often blamed for small mischief.'},
  {name:'Poltergeist', emoji:'🔔', tag:'noisy', desc:'Associated with objects moving, loud noises, and short-lived activity.'},
  {name:'Residual Haunting', emoji:'🌫️', tag:'residual', desc:'Repeating impressions of past events; not aware of living people.'},
  {name:'Shadow Person', emoji:'🕶️', tag:'shadow', desc:'Dark, humanoid shapes often seen peripherally.'},
  {name:'Apparition', emoji:'✨', tag:'sighting', desc:'Full-bodied ghostly image reported in many traditions.'},
  {name:'Crisis Apparition', emoji:'⚠️', tag:'crisis', desc:'Reported simultaneous sightings linked to major life events.'},
  {name:'Ancestor Spirit', emoji:'🕯️', tag:'ancestral', desc:'Spirits seen as protectors or messengers in many cultures.'}
];

function renderGrid(list){
  const grid = document.getElementById('grid');
  grid.innerHTML = list.map(g => `
    <article class="ghost" tabindex="0" data-name="${g.name}">
      <div class="row"><div class="emoji">${g.emoji}</div><div class="name">${g.name}</div></div>
      <div class="desc">${g.desc}</div>
      <div class="tag">${g.tag}</div>
    </article>
  `).join('');

  grid.querySelectorAll('.ghost').forEach(el=>{
    el.addEventListener('click', ()=> showDetail(el.dataset.name));
    el.addEventListener('keypress', e=>{ if(e.key==='Enter') showDetail(el.dataset.name); });
  });
}

function showDetail(name){
  const g = ghosts.find(x=>x.name===name);
  if(!g) return;
  const body = `${g.emoji}  ${g.name}\n\n${g.desc}\n\nTag: ${g.tag}`;
  alert(body);
}

function init(){
  renderGrid(ghosts);
  const search = document.getElementById('search');
  const reset = document.getElementById('reset');
  search.addEventListener('input', ()=>{
    const q = search.value.trim().toLowerCase();
    if(!q) return renderGrid(ghosts);
    const filtered = ghosts.filter(g=> (g.name+g.tag+g.desc).toLowerCase().includes(q));
    renderGrid(filtered);
  });
  reset.addEventListener('click', ()=>{ document.getElementById('search').value=''; renderGrid(ghosts); });
}

window.addEventListener('DOMContentLoaded', init);
