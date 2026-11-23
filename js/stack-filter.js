{
  const filters = document.querySelector('.stack-filters');
  const technologies = document.querySelectorAll('.stack-list li');
  filters.hidden = false;
  filters.addEventListener('click', event => {
    const selected = event.target.closest('button');
    if (!selected) return;
    for (const button of filters.querySelectorAll('button')) {
      button.setAttribute('aria-pressed', String(button === selected));
    }
    for (const item of technologies) {
      item.hidden = selected.dataset.filter !== 'todas' && item.dataset.area !== selected.dataset.filter;
    }
  });
}
