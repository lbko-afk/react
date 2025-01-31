import React, { useState } from 'react';
import { Menu, ShoppingCart, User, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartItemsCount] = useState(3); // À remplacer par un contexte/state global

  const categories = [
    {
      id: 1,
      title: 'Maison',
      description: 'Produits écologiques pour votre intérieur',
      image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=320&q=80'
    },
    {
      id: 2,
      title: 'Beauté',
      description: 'Cosmétiques naturels et zéro déchet',
      image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=320&q=80'
    },
    {
      id: 3,
      title: 'Mode',
      description: 'Vêtements éthiques et durables',
      image: 'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=320&q=80'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white shadow-sm z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <Link to="/" className="flex-shrink-0">
              <span className="text-2xl font-bold text-green-700">ÉcoShop</span>
            </Link>

            {/* Navigation desktop */}
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-gray-700 hover:text-green-700 transition-colors">
                Accueil
              </Link>
              <Link to="/categories" className="text-gray-700 hover:text-green-700 transition-colors">
                Catégories
              </Link>
              <Link to="/about" className="text-gray-700 hover:text-green-700 transition-colors">
                À propos
              </Link>
              <Link to="/contact" className="text-gray-700 hover:text-green-700 transition-colors">
                Contact
              </Link>
            </div>

            {/* Icons */}
            <div className="flex items-center space-x-4">
              <button className="p-2 hover:bg-gray-100 rounded-full relative">
                <User className="h-6 w-6 text-gray-700" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-full relative">
                <ShoppingCart className="h-6 w-6 text-gray-700" />
                {cartItemsCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-green-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                    {cartItemsCount}
                  </span>
                )}
              </button>
              <button 
                className="md:hidden p-2 hover:bg-gray-100 rounded-full"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-t">
              <div className="px-4 py-4 space-y-4">
                <Link to="/" className="block text-gray-700 hover:text-green-700">Accueil</Link>
                <Link to="/categories" className="block text-gray-700 hover:text-green-700">Catégories</Link>
                <Link to="/about" className="block text-gray-700 hover:text-green-700">À propos</Link>
                <Link to="/contact" className="block text-gray-700 hover:text-green-700">Contact</Link>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative pt-16">
        <div className="h-[60vh] bg-gray-900">
          <img 
            src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&h=1080&q=80"
            alt="Nature"
            className="w-full h-full object-cover opacity-50"
            loading="lazy"
          />
          <div className="absolute inset-0 flex items-center justify-center text-center">
            <div className="max-w-3xl px-4">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Vivez écologique, vivez durable
              </h1>
              <p className="text-xl text-white mb-8">
                Découvrez notre sélection de produits responsables pour un mode de vie plus durable
              </p>
              <Link 
                to="/categories" 
                className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors"
              >
                Découvrir
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          Nos Catégories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div 
              key={category.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow group"
            >
              <img 
                src={category.image}
                alt={category.title}
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
                <p className="text-gray-600">{category.description}</p>
                <Link 
                  to={`/category/${category.id}`} 
                  className="mt-4 inline-block text-green-600 font-medium hover:text-green-700 transition-colors"
                >
                  Voir plus →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-lg font-semibold mb-4">ÉcoShop</h3>
              <p className="text-gray-400 text-sm">
                Votre destination pour un mode de vie durable. Nous sélectionnons avec soin des produits
                écologiques, éthiques et respectueux de l'environnement.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Navigation</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/about" className="hover:text-green-500 transition-colors">À propos</Link></li>
                <li><Link to="/contact" className="hover:text-green-500 transition-colors">Contact</Link></li>
                <li><Link to="/blog" className="hover:text-green-500 transition-colors">Blog</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Légal</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/cgv" className="hover:text-green-500 transition-colors">CGV</Link></li>
                <li><Link to="/privacy" className="hover:text-green-500 transition-colors">Confidentialité</Link></li>
                <li><Link to="/ethics" className="hover:text-green-500 transition-colors">Charte éthique</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
            <p>© 2024 ÉcoShop - Tous droits réservés</p>
            <p className="mt-2">Paiements sécurisés avec Stripe</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
