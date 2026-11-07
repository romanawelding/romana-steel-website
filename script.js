const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');
toggle?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
});
nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  toggle?.setAttribute('aria-expanded', 'false');
}));
document.getElementById('year').textContent = new Date().getFullYear();

document.getElementById('quoteForm').addEventListener('submit', (event) => {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  const subject = encodeURIComponent(`Project enquiry — ${form.get('service')}`);
  const body = encodeURIComponent(
    `Name: ${form.get('name')}\nEmail: ${form.get('email')}\nRequirement: ${form.get('service')}\n\nProject details:\n${form.get('message')}`
  );
  window.location.href = `mailto:romanawelding@gmail.com?subject=${subject}&body=${body}`;
});
