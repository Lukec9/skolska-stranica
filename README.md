# Srednja Strukovna Škola Antuna Horvata - Web Stranica

Moderna web stranica izrađena s React framework-om za Srednju strukturnu školu Antuna Horvata.

## 🚀 Brzi Start

### Instalacija
```bash
npm install
```

### Razvoj
```bash
npm run dev
```
Pokreće aplikaciju na `http://localhost:5173` s automatskim reloadom.

### Production Build
```bash
npm run build
```

---

## 📁 Struktura Projekta

```
src/
├── components/
│   ├── Navbar.jsx              # Navigacijski bar
│   ├── HeroSection.jsx         # Uvodna sekcija
│   ├── HighlightMenu.jsx       # Istaknute informacije
│   ├── sidebar/
│   │   ├── Sidebar.jsx
│   │   └── SidebarNavLinks.jsx
│   └── ui/
│       └── Carousel.jsx        # Karusel komponenta
├── pages/
│   ├── Home.jsx               # Naslovnica
│   ├── Palette1.jsx           # Tema 1
│   ├── Palette2.jsx           # Tema 2
│   ├── Palette3.jsx           # Tema 3
│   └── CarouselDemo.jsx       # Demo karusela
├── styles/                    # CSS datoteke
├── App.jsx                    # Glavna komponenta s rutama
└── main.jsx                   # Entry point
```

---

## 🎯 Karakteristike

- ✅ **Responzivan dizajn** - Optimiziran za sve veličine ekrana
- ✅ **Brz UI** - Vite za instant feedback tijekom razvoja
- ✅ **Modularni kod** - Fleksibilne React komponente
- ✅ **Dinamični karusel** - Embla carousel s autoplay
- ✅ **Moderna estetika** - Gradijenti, animacije i smooth efekti
- ✅ **Jednostavna navigacija** - React Router za klijentsku navigaciju

---

## 🛣️ Rute

| Ruta | Opis |
|------|------|
| `/` | Naslovnica s hero seksijom |
| `/palette1` | Primarna tema |
| `/palette2` | Accent tema |
| `/palette3` | Highlight tema |
| `/carousel` | Demo karusela |

---

## 📦 Korišteni Paketi

- **React 18.2.0** - Frontend framework
- **React Router 7.13.0** - Client-side routing
- **Vite 5.0.0** - Build tool i dev server
- **Embla Carousel 8.6.0** - Karusel komponenta

---

## 🔧 Tehnike Responzivnosti

Projekt koristi CSS media querije s sljedećim breakpointi:
- **90rem** - Tablet optimizacija
- **64rem** - Mobilna srednja veličina
- **48rem** - Mobilni telefoni
