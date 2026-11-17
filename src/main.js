// Menú, barra al hacer scroll y aparición suave de secciones. Todo opcional: sin JavaScript la web se ve completa.
const nav = document.getElementById('nav')
const btn = document.getElementById('menuBtn')

const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 20)
onScroll()
window.addEventListener('scroll', onScroll, { passive: true })

btn?.addEventListener('click', () => {
  const open = nav.classList.toggle('open')
  btn.setAttribute('aria-expanded', String(open))
})
document.querySelectorAll('#navLinks a').forEach((a) =>
  a.addEventListener('click', () => { nav.classList.remove('open'); btn?.setAttribute('aria-expanded', 'false') })
)

const io = new IntersectionObserver((entries) => {
  entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target) } })
}, { rootMargin: '0px 0px -10% 0px' })
document.querySelectorAll('.reveal').forEach((el) => io.observe(el))

const y = document.getElementById('year')
if (y) y.textContent = String(new Date().getFullYear())
