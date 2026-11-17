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

// Intro con el logo (se decide en el <head> para que no parpadee): se retira al terminar
const intro = document.getElementById('intro')
const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
if (document.documentElement.classList.contains('intro-on')) setTimeout(() => intro?.remove(), 1800)
else intro?.remove()

// Vídeo de portada: versión vertical en móvil y horizontal en ordenador
const v = document.getElementById('heroVideo')
if (v) {
  const mobile = window.matchMedia('(max-width: 900px)').matches
  if (mobile) v.poster = v.dataset.posterMobile
  if (!reduce) {
    v.src = mobile ? v.dataset.mobile : v.dataset.desktop
    v.play?.().catch(() => {})
  }
}

// Palabra que cambia en la portada
const words = ['inmobiliarias', 'clínicas', 'academias', 'talleres', 'gimnasios', 'despachos']
const rot = document.getElementById('rotator')
if (rot && !reduce) {
  let i = 0
  setInterval(() => {
    i = (i + 1) % words.length
    rot.innerHTML = `<span>${words[i]}</span>`
  }, 2200)
}

// Palabras grandes que se rellenan al bajar
const wio = new IntersectionObserver((entries) => {
  entries.forEach((e) => e.target.classList.toggle('on', e.isIntersecting))
}, { rootMargin: '-35% 0px -35% 0px' })
document.querySelectorAll('.words .w').forEach((el) => wio.observe(el))
