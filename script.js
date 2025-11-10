// menu mobile + calculateur + année footer
(function(){
  const menuBtn = document.querySelector('.menu-btn');
  const nav = document.getElementById('menu');
  if(menuBtn && nav){
    menuBtn.addEventListener('click', ()=>{
      const open = nav.classList.toggle('open');
      menuBtn.setAttribute('aria-expanded', String(open));
      menuBtn.setAttribute('aria-label', open ? 'Fermer le menu' : 'Ouvrir le menu');
    });
  }
  const y = document.getElementById('year');
  if (y) y.textContent = String(new Date().getFullYear());

  const budgetEl = document.getElementById('budget');
  const rateEl = document.getElementById('rate');
  const feeEl = document.getElementById('fee');
  const payoutEl = document.getElementById('payout');
  function formatEUR(n){try{return new Intl.NumberFormat('fr-FR',{style:'currency',currency:'EUR'}).format(n);}catch{return n.toFixed(2)+' €';}}
  function recalc(){
    const b = parseFloat(budgetEl?.value||'0')||0;
    const r = Math.min(100, Math.max(0, parseFloat(rateEl?.value||'0')||0));
    const fee = b*(r/100);
    const payout = Math.max(0, b-fee);
    if (feeEl) feeEl.textContent = formatEUR(fee);
    if (payoutEl) payoutEl.textContent = formatEUR(payout);
  }
  if (budgetEl && rateEl){ budgetEl.addEventListener('input', recalc); rateEl.addEventListener('input', recalc); recalc(); }
})();
