import Head from 'next/head';
import { useState } from 'react';

const D = {
  brand: 'ASUSTOTO',
  domain: 'asustotowaplogin.com',
  logo: 'https://ik.imagekit.io/kq8uttasd/asus_pp.png',
  linkLogin: 'https://loginwap.gelapsekali.com/asus',
  linkDaftar: 'https://daftarwap.gelapsekali.com/asus',
  amphtml: 'asustotowaplogin.com',
};

const features = [
  { icon: '\u26A1', title: 'Akses Super Cepat', desc: 'Server berperforma tinggi memastikan loading dalam hitungan detik.' },
  { icon: '\u{1F512}', title: 'Keamanan Berlapis', desc: 'Enkripsi SSL 256-bit dan proteksi DDoS tingkat enterprise.' },
  { icon: '\u{1F4F1}', title: 'Mobile Responsive', desc: 'Tampilan otomatis menyesuaikan di semua perangkat.' },
  { icon: '\u{1F517}', title: 'Link Alternatif', desc: 'Banyak link alternatif resmi yang selalu diperbarui.' },
  { icon: '\u{1F3AF}', title: 'Tampilan Modern', desc: 'Desain antarmuka clean dan intuitif untuk kemudahan navigasi.' },
  { icon: '\u{1F4AC}', title: 'Layanan 24 Jam', desc: 'Tim customer service siap membantu kapan saja.' },
];

const faqs = [
  { q: 'Bagaimana cara login ASUSTOTO?', a: 'Kunjungi halaman login resmi di situs resmi ASUSTOTO, masukkan username dan password, lalu klik Login.' },
  { q: 'Apakah ASUSTOTO aman?', a: 'Ya, kami menggunakan enkripsi SSL 256-bit dan proteksi keamanan berlapis tingkat enterprise.' },
  { q: 'Bisa akses dari smartphone?', a: 'Tentu, ASUSTOTO dioptimalkan untuk semua perangkat mobile dengan tampilan responsif.' },
  { q: 'Berapa lama proses daftar?', a: 'Proses pendaftaran kurang dari 2 menit, sangat cepat dan mudah.' },
  { q: 'Ada link alternatif?', a: 'Ya, tersedia beberapa link alternatif resmi yang selalu aktif dan diperbarui.' },
];

export default function Home() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <>
      <Head>
        <title>ASUSTOTO | Akses Terbaru & Link Anti Blokir: Gerbang Utama Menuju Kemenangan</title>
        <meta name="description" content="ASUSTOTO adalah situs resmi terpercaya dengan akses login cepat, keamanan SSL 256-bit, dan dukungan 24/7. Daftar gratis sekarang." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={D.logo} />
        <link rel="canonical" href={'https://' + D.domain + '/'} />
        <link rel="amphtml" href={'https://' + D.domain + '/amp/'} />
        <meta property="og:title" content="ASUSTOTO | Akses Terbaru & Link Anti Blokir: Gerbang Utama Menuju Kemenangan" />
        <meta property="og:description" content="ASUSTOTO adalah situs resmi terpercaya dengan akses login cepat, keamanan SSL 256-bit, dan dukungan 24/7. Daftar gratis sekarang." />
        <meta property="og:image" content={D.logo} />
        <meta property="og:url" content={'https://' + D.domain} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="ASUSTOTO | Akses Terbaru & Link Anti Blokir: Gerbang Utama Menuju Kemenangan" />
        <meta name="twitter:description" content="ASUSTOTO adalah situs resmi terpercaya dengan akses login cepat, keamanan SSL 256-bit, dan dukungan 24/7. Daftar gratis sekarang." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </Head>

      <style jsx global>{`
        *{box-sizing:border-box;margin:0;padding:0}html{scroll-behavior:smooth}
        body{font-family:'Inter',sans-serif;background:#1a0d1a;color:#e8e8e8;line-height:1.6;overflow-x:hidden}
        a{color:inherit;text-decoration:none}img{max-width:100%;display:block}
        .W{max-width:1240px;margin:0 auto;padding:0 20px}

        /* Top Bar */
        .topbar{background:#281228;border-bottom:1px solid rgba(255,0,255,.2);font-size:12px;padding:8px 0;color:#aaa}
        .topbar-inner{display:flex;justify-content:space-between;align-items:center}
        .topbar a{color:#ff00ff;transition:.2s}.topbar a:hover{opacity:.8}

        /* Header */
        header{background:#281228ee;backdrop-filter:blur(16px);border-bottom:1px solid rgba(255,0,255,.2);position:sticky;top:0;z-index:50}
        .hd{display:flex;align-items:center;justify-content:space-between;padding:12px 0;gap:16px}
        .logo{display:flex;align-items:center;gap:10px;font-weight:800;font-size:22px;color:#ff00ff;flex-shrink:0}
        .logo img{width:38px;height:38px;border-radius:12px;border:2px solid #ff00ff}
        .search-bar{flex:1;max-width:520px;display:flex;border:1.5px solid rgba(255,0,255,.2);border-radius:8px;overflow:hidden;background:#351a35}
        .search-bar input{flex:1;border:none;padding:10px 16px;font-size:13px;outline:none;font-family:inherit;background:transparent;color:#e8e8e8}
        .search-bar input::placeholder{color:#666}
        .search-bar button{background:#ff00ff;color:#1a0d1a;border:none;padding:0 18px;font-weight:700;cursor:pointer;font-family:inherit;font-size:13px;transition:.2s}
        .search-bar button:hover{background:#cc00cc}
        .hd-btns{display:flex;gap:8px;flex-shrink:0}
        .btn{display:inline-flex;align-items:center;gap:6px;padding:10px 20px;border-radius:8px;font-weight:600;font-size:13px;transition:.2s;border:none;cursor:pointer;font-family:inherit}
        .btn-p{background:#ff00ff;color:#1a0d1a}.btn-p:hover{background:#cc00cc;transform:translateY(-1px)}
        .btn-o{border:1.5px solid rgba(255,0,255,.2);color:#ff00ff;background:transparent}.btn-o:hover{background:rgba(255,0,255,.12)}

        /* Category Nav */
        .catnav{background:#351a35;border-bottom:1px solid rgba(255,0,255,.2)}
        .catnav-inner{display:flex;gap:0;overflow-x:auto}
        .catnav a{padding:10px 18px;font-size:13px;color:#bbb;font-weight:500;white-space:nowrap;border-bottom:2px solid transparent;transition:.2s}
        .catnav a:hover,.catnav a.act{color:#ff00ff;border-bottom-color:#ff00ff}

        /* Hero */
        .hero-banner{background:linear-gradient(135deg,#ff00ff,#cc00cc);padding:50px 0;position:relative;overflow:hidden}
        .hero-banner::before{content:'';position:absolute;right:-100px;top:-100px;width:400px;height:400px;border-radius:50%;background:rgba(255,255,255,.06)}
        .hero-banner::after{content:'';position:absolute;left:-60px;bottom:-80px;width:300px;height:300px;border-radius:50%;background:rgba(255,255,255,.04)}
        .hero-flex{display:flex;align-items:center;gap:40px;position:relative;z-index:1}
        .hero-text{flex:1;color:#fff}
        .hero-text .tag{display:inline-block;background:rgba(0,0,0,.3);border:1px solid rgba(255,255,255,.2);padding:5px 14px;border-radius:6px;font-size:11px;font-weight:600;margin-bottom:14px;letter-spacing:.5px;text-transform:uppercase}
        .hero-text h1{font-size:clamp(22px,3.5vw,36px);font-weight:800;line-height:1.18;margin-bottom:12px}
        .hero-text p{opacity:.9;font-size:14px;line-height:1.7;margin-bottom:22px;max-width:480px;text-align:justify}
        .hero-text .hbtns{display:flex;gap:10px;flex-wrap:wrap}
        .hero-text .btn-w{background:#fff;color:#1a0d1a;font-weight:700;padding:12px 26px;border-radius:8px;border:none;cursor:pointer;font-family:inherit;font-size:14px;transition:.2s}
        .hero-text .btn-w:hover{transform:translateY(-2px);box-shadow:0 8px 24px rgba(0,0,0,.4)}
        .hero-text .btn-g{background:rgba(0,0,0,.3);color:#fff;border:1.5px solid rgba(255,255,255,.3);padding:12px 26px;border-radius:8px;cursor:pointer;font-family:inherit;font-size:14px;font-weight:600;transition:.2s}
        .hero-text .btn-g:hover{background:rgba(0,0,0,.5);border-color:rgba(255,255,255,.6)}
        .hero-img{flex-shrink:0;width:320px}
        .hero-img img{border-radius:12px;box-shadow:0 20px 60px rgba(0,0,0,.5);border:1px solid rgba(255,255,255,.1)}
        .trust-bar{display:flex;gap:20px;margin-top:16px;font-size:12px;opacity:.8}

        /* Stats */
        .stats{background:#281228;border-bottom:1px solid rgba(255,0,255,.2);padding:22px 0}
        .stats-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:16px;text-align:center}
        .stat-item .sv{font-size:24px;font-weight:800;color:#ff00ff}
        .stat-item .sl{font-size:10px;color:#bbb;text-transform:uppercase;letter-spacing:1.5px}

        /* Sections */
        .sec{padding:50px 0}
        .sec-alt{background:#281228}
        .sec-head{text-align:center;margin-bottom:36px}
        .sec-head .label{display:inline-block;background:rgba(255,0,255,.12);color:#ff00ff;padding:5px 16px;border-radius:6px;font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:1.5px;margin-bottom:10px;border:1px solid rgba(255,0,255,.2)}
        .sec-head h2{font-size:clamp(22px,3vw,32px);font-weight:800;margin-bottom:6px;color:#fff}
        .sec-head p{color:#bbb;font-size:14px;max-width:520px;margin:0 auto}

        /* Article Row */
        .art-row{max-width:900px;margin:0 auto}
        
        .art-content h3{font-size:20px;font-weight:700;margin-bottom:14px;color:#ff00ff}
        .art-content p{color:#ccc;font-size:14px;line-height:1.85;margin-bottom:16px;text-align:justify}
        .art-gallery{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:20px}
        .art-gallery img{border-radius:10px;border:1px solid rgba(255,0,255,.2);width:100%;height:200px;object-fit:cover}
        .art-tags{display:flex;gap:8px;flex-wrap:wrap;margin-top:12px}
        .art-tag{background:rgba(255,0,255,.12);color:#ff00ff;padding:5px 14px;border-radius:6px;font-size:11px;font-weight:600;border:1px solid rgba(255,0,255,.2)}

        /* Feature Grid */
        .feat-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}
        .feat-card{background:#351a35;border:1px solid rgba(255,0,255,.2);border-radius:12px;padding:24px;transition:.3s}
        .feat-card:hover{border-color:#ff00ff;transform:translateY(-4px);box-shadow:0 8px 30px rgba(0,0,0,.3)}
        .feat-card .fi-icon{width:46px;height:46px;border-radius:10px;background:rgba(255,0,255,.12);display:flex;align-items:center;justify-content:center;font-size:20px;margin-bottom:14px}
        .feat-card h3{font-size:15px;font-weight:700;margin-bottom:4px;color:#fff}
        .feat-card p{color:#bbb;font-size:13px;margin:0;text-align:justify}

        /* CTA */
        .cta-box{background:linear-gradient(135deg,#ff00ff,#cc00cc);border-radius:16px;padding:48px 32px;text-align:center;color:#fff;position:relative;overflow:hidden}
        .cta-box::after{content:'';position:absolute;right:-80px;top:-80px;width:300px;height:300px;border-radius:50%;background:rgba(255,255,255,.06)}
        .cta-box>*{position:relative;z-index:1}
        .cta-box h2{font-size:clamp(20px,3vw,30px);font-weight:800;margin-bottom:8px}
        .cta-box p{opacity:.9;margin-bottom:20px;font-size:15px}
        .cta-box .btn-w{background:#fff;color:#1a0d1a;font-weight:700;padding:14px 32px;border-radius:8px;border:none;cursor:pointer;font-family:inherit;font-size:15px;transition:.2s}
        .cta-box .btn-w:hover{transform:translateY(-2px);box-shadow:0 8px 24px rgba(0,0,0,.4)}

        /* Banners */
        .bnr-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}
        .bnr-card{border-radius:12px;overflow:hidden;border:1px solid rgba(255,0,255,.2);transition:.3s}
        .bnr-card:hover{transform:translateY(-3px);box-shadow:0 8px 24px rgba(0,0,0,.3);border-color:#ff00ff}
        .bnr-card img{width:100%;height:auto}

        /* FAQ */
        .faq-list{max-width:720px;margin:0 auto}
        .faq-item{background:#351a35;border:1px solid rgba(255,0,255,.2);border-radius:10px;padding:16px 20px;margin-bottom:8px;cursor:pointer;transition:.2s}
        .faq-item:hover{border-color:#ff00ff}
        .faq-q{font-weight:600;display:flex;justify-content:space-between;align-items:center;font-size:14px;color:#ddd}
        .faq-q span{color:#ff00ff;font-size:18px;font-weight:700}
        .faq-a{margin-top:10px;color:#bbb;font-size:13px;line-height:1.7;border-top:1px solid rgba(255,0,255,.2);padding-top:10px}

        /* Footer */
        footer{background:#281228;border-top:1px solid rgba(255,0,255,.2);padding:32px 0;font-size:12px}
        .ft-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:30px;margin-bottom:20px}
        .ft-col h4{color:#ff00ff;font-size:14px;margin-bottom:12px}
        .ft-col a{display:block;color:#888;margin-bottom:6px;transition:.2s}.ft-col a:hover{color:#ff00ff}
        .ft-bottom{border-top:1px solid rgba(255,0,255,.2);padding-top:16px;text-align:center;color:#666}

        @media(max-width:960px){
          .hero-flex{flex-direction:column;text-align:center}
          .hero-img{width:100%;max-width:400px}
          .hero-text .hbtns,.trust-bar{justify-content:center}
          .art-gallery{grid-template-columns:1fr}
          .feat-grid{grid-template-columns:1fr 1fr}
          .ft-grid{grid-template-columns:1fr 1fr}
        }
        @media(max-width:640px){
          .search-bar{display:none}
          .feat-grid,.stats-grid{grid-template-columns:1fr}
          .bnr-grid,.ft-grid{grid-template-columns:1fr}
        }
      `}</style>

      <div className="topbar"><div className="W topbar-inner">
        <span>{D.brand} &mdash; Platform Resmi 2026</span>
        <div style={{display:'flex',gap:'16px'}}>
          <a href={D.linkLogin}>Login</a>
          <a href={D.linkDaftar}>Daftar</a>
        </div>
      </div></div>

      <header><div className="W hd">
        <a href="#" className="logo"><img src={D.logo} alt={D.brand} />{D.brand}</a>
        <div className="search-bar">
          <input type="text" placeholder="Cari fitur, panduan, atau informasi..." readOnly />
          <button>Cari</button>
        </div>
        <div className="hd-btns">
          <a href={D.linkLogin} className="btn btn-o">Login</a>
          <a href={D.linkDaftar} className="btn btn-p">Daftar</a>
        </div>
      </div></header>

      <nav className="catnav"><div className="W">
        <div className="catnav-inner">
          <a href="#fitur" className="act">Fitur</a>
          <a href="#tentang">Tentang</a>
          <a href="#promo">Promo</a>
          <a href="#faq">FAQ</a>
        </div>
      </div></nav>

      <main>
        <section className="hero-banner"><div className="W">
          <div className="hero-flex">
            <div className="hero-text">
              <div className="tag">&#11088; {D.brand} Official</div>
              <h1>ASUSTOTO | Akses Terbaru & Link Anti Blokir: Gerbang Utama Menuju Kemenangan</h1>
              <p>ASUSTOTO adalah situs resmi terpercaya dengan akses login cepat, keamanan SSL 256-bit, dan dukungan 24/7. Daftar gratis sekarang.</p>
              <div className="hbtns">
                <a href={D.linkDaftar} className="btn-w">Daftar Sekarang &rarr;</a>
                <a href={D.linkLogin} className="btn-g">Login Akun</a>
              </div>
              <div className="trust-bar">
                <span>&#10003; SSL 256-bit</span>
                <span>&#10003; Uptime 99.9%</span>
                <span>&#10003; Support 24/7</span>
              </div>
            </div>
            <div className="hero-img">
              <img src="https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&h=450&fit=crop" alt={D.brand + ' Platform'} />
            </div>
          </div>
        </div></section>

        <div className="stats"><div className="W">
          <div className="stats-grid">
            <div className="stat-item"><div className="sv">99.9%</div><div className="sl">Uptime Server</div></div>
            <div className="stat-item"><div className="sv">24/7</div><div className="sl">Customer Support</div></div>
            <div className="stat-item"><div className="sv">1M+</div><div className="sl">Pengguna Aktif</div></div>
            <div className="stat-item"><div className="sv">256-bit</div><div className="sl">Enkripsi SSL</div></div>
          </div>
        </div></div>

        <section className="sec" id="fitur"><div className="W">
          <div className="sec-head">
            <span className="label">Fitur Unggulan</span>
            <h2>Kenapa Memilih {D.brand}?</h2>
            <p>Nikmati berbagai fitur modern untuk pengalaman terbaik Anda.</p>
          </div>
          <div className="feat-grid">
            {features.map((f, i) => (
              <div className="feat-card" key={i}>
                <div className="fi-icon">{f.icon}</div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div></section>

        <section className="sec sec-alt" id="tentang"><div className="W">
          <div className="sec-head">
            <span className="label">Tentang Kami</span>
            <h2>Mengenal Lebih Dekat {D.brand}</h2>
          </div>
          <div className="art-row">
            <div className="art-content">
              <h3>Panduan Lengkap {D.brand}</h3>
              <div className="art-gallery">
                <img src="https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=400&h=250&fit=crop" alt={D.brand + ' Platform'} />
                <img src="https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=250&fit=crop" alt={D.brand + ' Gaming'} />
              </div>
              <p>ASUSTOTO adalah situs resmi terpercaya dengan akses login cepat, keamanan SSL 256-bit, dan dukungan 24/7. Daftar gratis sekarang.</p>
              <div className="art-gallery">
                <img src="https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=250&fit=crop" alt={D.brand + ' Arena'} />
                <img src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400&h=250&fit=crop" alt={D.brand + ' Tech'} />
              </div>
              <p>ASUSTOTO melalui situs resmi ASUSTOTO menghadirkan pengalaman akses digital yang modern dan menyenangkan. Seperti toko online terpercaya yang memprioritaskan kepuasan pelanggan, ASUSTOTO menyediakan proses login dan pendaftaran yang mudah, cepat, dan aman. Tampilan responsif yang otomatis menyesuaikan di semua perangkat memastikan kenyamanan akses baik dari desktop maupun smartphone.</p>
              <div className="art-tags">
                <span className="art-tag">SSL 256-bit</span>
                <span className="art-tag">Uptime 99.9%</span>
                <span className="art-tag">Anti Blokir</span>
                <span className="art-tag">Multi Platform</span>
              </div>
            </div>
          </div>
        </div></section>

        <section className="sec" id="promo"><div className="W">
          <div className="sec-head">
            <span className="label">Promo &amp; Event</span>
            <h2>Penawaran Terbaik Hari Ini</h2>
          </div>
          <div className="bnr-grid">
            <a href={D.linkDaftar} className="bnr-card"><img src="https://images.unsplash.com/photo-1542751371-adc38448a05e?w=720&h=280&fit=crop" alt={D.brand + ' Promo 1'} loading="lazy" /></a>
            <a href={D.linkDaftar} className="bnr-card"><img src="https://images.unsplash.com/photo-1511512578047-dfb367046420?w=720&h=280&fit=crop" alt={D.brand + ' Promo 2'} loading="lazy" /></a>
            <a href={D.linkDaftar} className="bnr-card"><img src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=720&h=280&fit=crop" alt={D.brand + ' Promo 3'} loading="lazy" /></a>
          </div>
        </div></section>

        <section className="sec sec-alt"><div className="W">
          <div className="cta-box">
            <h2>Bergabung dengan {D.brand} Sekarang!</h2>
            <p>Daftar gratis dan rasakan layanan premium tanpa batas.</p>
            <a href={D.linkDaftar} className="btn-w">Daftar Gratis &rarr;</a>
          </div>
        </div></section>

        <section className="sec" id="faq"><div className="W">
          <div className="sec-head">
            <span className="label">FAQ</span>
            <h2>Pertanyaan Yang Sering Diajukan</h2>
            <p>Temukan jawaban seputar {D.brand}.</p>
          </div>
          <div className="faq-list">
            {faqs.map((f, i) => (
              <div className="faq-item" key={i} onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                <div className="faq-q">{f.q}<span>{openFaq === i ? '\u2212' : '+'}</span></div>
                {openFaq === i && <div className="faq-a">{f.a}</div>}
              </div>
            ))}
          </div>
        </div></section>
      </main>

      <footer><div className="W">
        <div className="ft-grid">
          <div className="ft-col">
            <h4>{D.brand}</h4>
            <p style={{color:'#888',lineHeight:'1.7'}}>Platform digital terpercaya dengan akses cepat, aman, dan tanpa hambatan.</p>
          </div>
          <div className="ft-col">
            <h4>Navigasi</h4>
            <a href="#fitur">Fitur</a><a href="#tentang">Tentang</a><a href="#faq">FAQ</a>
          </div>
          <div className="ft-col">
            <h4>Akses</h4>
            <a href={D.linkLogin}>Login Akun</a><a href={D.linkDaftar}>Daftar Baru</a><a href={D.linkDaftar}>Link Alternatif</a>
          </div>
          <div className="ft-col">
            <h4>Keamanan</h4>
            <a href="#">SSL 256-bit</a><a href="#">Proteksi DDoS</a><a href="#">Anti Blokir</a>
          </div>
        </div>
        <div className="ft-bottom">&copy; 2026 {D.brand}. Situs resmi &mdash; {D.domain}</div>
      </div></footer>
    </>
  );
}
