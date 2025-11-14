import { useState } from 'react'

function App() {
  const [email, setEmail] = useState('')

  const products = [
    { title: 'Essentials Kit', img: 'https://images.unsplash.com/photo-1556228724-4b3aa4882a36?q=80&w=1600&auto=format&fit=crop', price: '$39' },
    { title: 'Daily Duo', img: 'https://images.unsplash.com/photo-1556228453-efd1e3f0ff50?q=80&w=1600&auto=format&fit=crop', price: '$29' },
    { title: 'Glow Serum', img: 'https://images.unsplash.com/photo-1594223274512-ad4803739b7c?q=80&w=1600&auto=format&fit=crop', price: '$24' },
    { title: 'Hydra Cream', img: 'https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1600&auto=format&fit=crop', price: '$32' },
    { title: 'Mint Cleanser', img: 'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa0?q=80&w=1600&auto=format&fit=crop', price: '$18' },
    { title: 'Balance Toner', img: 'https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?q=80&w=1600&auto=format&fit=crop', price: '$16' }
  ]

  const features = [
    { title: 'Clean formulas', desc: 'Plant-powered, cruelty-free ingredients for everyday care.' },
    { title: 'Derm-tested', desc: 'Carefully crafted and tested for all skin types.' },
    { title: 'Sustainable', desc: 'Recyclable packaging and responsible sourcing.' },
  ]

  const testimonials = [
    { name: 'Asha', quote: 'Kulitku jadi lebih lembap dan sehat. Simpel tapi works!', role: 'Content Creator' },
    { name: 'Rama', quote: 'Packaging-nya keren, formulanya ringan, suka banget.', role: 'Photographer' },
    { name: 'Nadia', quote: 'After 2 minggu, tekstur kulit terasa lebih halus.', role: 'UI Designer' },
  ]

  const onSubscribe = (e) => {
    e.preventDefault()
    alert(`Terima kasih! Kami akan mengirimkan update ke ${email}`)
    setEmail('')
  }

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Top Bar */}
      <div className="w-full text-center text-xs sm:text-sm bg-emerald-50 text-emerald-800 py-2">
        Free shipping for orders over $50 · New summer collection out now
      </div>

      {/* Navbar */}
      <header className="sticky top-0 z-40 w-full backdrop-blur bg-white/70 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-16 flex items-center justify-between">
            <a href="#" className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-gradient-to-br from-emerald-400 to-blue-500" />
              <span className="text-xl font-extrabold tracking-tight">MintStudio</span>
            </a>
            <nav className="hidden md:flex items-center gap-8 text-sm text-gray-700">
              <a href="#services" className="hover:text-gray-900">Services</a>
              <a href="#products" className="hover:text-gray-900">Products</a>
              <a href="#about" className="hover:text-gray-900">About</a>
              <a href="#contact" className="hover:text-gray-900">Contact</a>
            </nav>
            <div className="hidden md:flex">
              <a href="#contact" className="inline-flex items-center bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-black transition">Get Started</a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-emerald-50/70 via-white to-white" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
                Fresh care for everyday glow
              </h1>
              <p className="mt-5 text-lg text-gray-600 max-w-xl">
                Simple, effective formulas inspired by nature. Designed to balance, hydrate, and keep your routine light.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a href="#products" className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-gray-900 text-white hover:bg-black transition">
                  Shop Collection
                </a>
                <a href="#services" className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-gray-300 hover:bg-gray-50 transition">
                  Our Services
                </a>
              </div>
              <div className="mt-8 flex items-center gap-4 text-sm text-gray-600">
                <div className="flex -space-x-2">
                  {[1,2,3].map(i => (
                    <img key={i} className="h-8 w-8 rounded-full ring-2 ring-white" alt="avatar" src={`https://i.pravatar.cc/64?img=${i+10}`} />
                  ))}
                </div>
                <span>Trusted by 10k+ happy customers</span>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <img src="https://images.unsplash.com/photo-1586370740632-f910eb4ad077?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxIZXJvJTIwdmlzdWFsfGVufDB8MHx8fDE3NjMxMDc4OTV8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Hero visual" className="h-full w-full object-cover" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white shadow-lg rounded-xl p-4 hidden sm:flex items-center gap-4">
                <img className="h-12 w-12 rounded-lg object-cover" src="https://images.unsplash.com/photo-1626682265474-39e839533069?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxtaW5pfGVufDB8MHx8fDE3NjMxMDc4OTZ8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="mini" />
                <div>
                  <p className="text-sm font-semibold">Top Rated</p>
                  <p className="text-xs text-gray-500">4.8/5 from 2,145 reviews</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-16 sm:py-24 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((f) => (
              <div key={f.title} className="p-6 rounded-2xl border border-gray-200 hover:shadow-lg transition bg-white">
                <div className="h-10 w-10 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5"><path d="M12 3l2.5 7.5H22l-6 4.5 2.5 7.5L12 18l-6 4.5L8.5 15 2 10.5h7.5z"/></svg>
                </div>
                <h3 className="text-xl font-semibold">{f.title}</h3>
                <p className="mt-2 text-gray-600">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-4 mb-8">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Featured Products</h2>
              <p className="text-gray-600 mt-2">Curated picks for a refreshed routine.</p>
            </div>
            <a href="#" className="hidden sm:inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900">View all →</a>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((p) => (
              <div key={p.title} className="group bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-xl transition flex flex-col">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={p.img} alt={p.title} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="p-4 flex-1 flex flex-col">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold">{p.title}</h3>
                    <span className="text-gray-900 font-medium">{p.price}</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">Lightweight everyday essentials.</p>
                  <div className="mt-4 flex gap-2">
                    <button className="flex-1 bg-gray-900 text-white py-2 rounded-lg hover:bg-black transition">Add to cart</button>
                    <button className="px-3 border border-gray-300 rounded-lg hover:bg-gray-50">♡</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-16 sm:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Balanced by design</h2>
            <p className="mt-4 text-gray-600">We focus on what matters: clean formulas, gentle performance, and delightful textures. Every product is built to fit your routine so you can feel good in your skin—every day.</p>
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-gray-50 border border-gray-200">
                <p className="text-2xl font-bold">98%</p>
                <p className="text-sm text-gray-600">would recommend to a friend</p>
              </div>
              <div className="p-4 rounded-xl bg-gray-50 border border-gray-200">
                <p className="text-2xl font-bold">4.8/5</p>
                <p className="text-sm text-gray-600">average customer rating</p>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=1600&auto=format&fit=crop" alt="About visual" className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-center">What people say</h2>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="p-6 rounded-2xl bg-white border border-gray-200 shadow-sm">
                <p className="text-gray-700">“{t.quote}”</p>
                <div className="mt-4 flex items-center gap-3">
                  <img className="h-10 w-10 rounded-full" src={`https://i.pravatar.cc/80?u=${t.name}`} alt={t.name} />
                  <div>
                    <p className="font-semibold">{t.name}</p>
                    <p className="text-sm text-gray-500">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter / Contact */}
      <section id="contact" className="py-16 sm:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Stay in the loop</h2>
          <p className="mt-3 text-gray-600">Subscribe to get product drops, tips, and special offers. No spam—ever.</p>
          <form onSubmit={onSubscribe} className="mt-6 flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="flex-1 rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-400"
            />
            <button type="submit" className="px-6 py-3 rounded-lg bg-gray-900 text-white hover:bg-black transition">Subscribe</button>
          </form>
          <p className="text-xs text-gray-500 mt-2">By subscribing you agree to our Terms & Privacy.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-gradient-to-br from-emerald-400 to-blue-500" />
                <span className="text-lg font-extrabold">MintStudio</span>
              </div>
              <p className="text-sm text-gray-600 mt-3 max-w-xs">Everyday essentials that keep your routine fresh, light, and joyful.</p>
            </div>
            <div>
              <p className="font-semibold">Shop</p>
              <ul className="mt-3 space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-gray-900">New Arrivals</a></li>
                <li><a href="#" className="hover:text-gray-900">Best Sellers</a></li>
                <li><a href="#" className="hover:text-gray-900">Gift Sets</a></li>
              </ul>
            </div>
            <div>
              <p className="font-semibold">Company</p>
              <ul className="mt-3 space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-gray-900">About</a></li>
                <li><a href="#" className="hover:text-gray-900">Careers</a></li>
                <li><a href="#" className="hover:text-gray-900">Contact</a></li>
              </ul>
            </div>
            <div>
              <p className="font-semibold">Help</p>
              <ul className="mt-3 space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-gray-900">Shipping</a></li>
                <li><a href="#" className="hover:text-gray-900">Returns</a></li>
                <li><a href="#" className="hover:text-gray-900">FAQs</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 mt-8 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between text-sm text-gray-500">
            <p>© {new Date().getFullYear()} MintStudio. All rights reserved.</p>
            <div className="flex items-center gap-4 mt-4 sm:mt-0">
              <a href="#" className="hover:text-gray-700">Privacy</a>
              <a href="#" className="hover:text-gray-700">Terms</a>
              <a href="#" className="hover:text-gray-700">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
