import React, { useState } from 'react';
import { Menu, X, PenSquare, Home, LogIn, UserPlus } from 'lucide-react';

// Main App Component
export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const renderPage = () => {
    switch(currentPage) {
      case 'home':
        return <HomePage setCurrentPage={setCurrentPage} />;
      case 'login':
        return <LoginPage setCurrentPage={setCurrentPage} />;
      case 'signup':
        return <SignupPage setCurrentPage={setCurrentPage} />;
      case 'create':
        return <CreatePostPage setCurrentPage={setCurrentPage} />;
      case 'feed':
        return <FeedPage setCurrentPage={setCurrentPage} />;
      default:
        return <HomePage setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-red-700 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center cursor-pointer" onClick={() => setCurrentPage('home')}>
              <h1 className="text-2xl font-bold">The Kop Stories</h1>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-4">
              <button 
                onClick={() => setCurrentPage('home')}
                className="flex items-center space-x-2 hover:bg-red-800 px-3 py-2 rounded transition"
              >
                <Home size={20} />
                <span>Home</span>
              </button>
              <button 
                onClick={() => setCurrentPage('feed')}
                className="flex items-center space-x-2 hover:bg-red-800 px-3 py-2 rounded transition"
              >
                <PenSquare size={20} />
                <span>Stories</span>
              </button>
              <button 
                onClick={() => setCurrentPage('login')}
                className="flex items-center space-x-2 hover:bg-red-800 px-3 py-2 rounded transition"
              >
                <LogIn size={20} />
                <span>Login</span>
              </button>
              <button 
                onClick={() => setCurrentPage('signup')}
                className="bg-white text-red-700 px-4 py-2 rounded font-semibold hover:bg-gray-100 transition"
              >
                Sign Up
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden pb-4 space-y-2">
              <button 
                onClick={() => { setCurrentPage('home'); setIsMenuOpen(false); }}
                className="w-full text-left px-3 py-2 hover:bg-red-800 rounded flex items-center space-x-2"
              >
                <Home size={20} />
                <span>Home</span>
              </button>
              <button 
                onClick={() => { setCurrentPage('feed'); setIsMenuOpen(false); }}
                className="w-full text-left px-3 py-2 hover:bg-red-800 rounded flex items-center space-x-2"
              >
                <PenSquare size={20} />
                <span>Stories</span>
              </button>
              <button 
                onClick={() => { setCurrentPage('login'); setIsMenuOpen(false); }}
                className="w-full text-left px-3 py-2 hover:bg-red-800 rounded flex items-center space-x-2"
              >
                <LogIn size={20} />
                <span>Login</span>
              </button>
              <button 
                onClick={() => { setCurrentPage('signup'); setIsMenuOpen(false); }}
                className="w-full text-left px-3 py-2 bg-white text-red-700 rounded font-semibold"
              >
                Sign Up
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Page Content */}
      {renderPage()}
    </div>
  );
}

// Home Page Component
function HomePage({ setCurrentPage }) {
  return (
    <div className="relative">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-red-700 to-red-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            The Kop Stories
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-red-100">
            Where Liverpool Fans Share Their Passion
          </p>
          <p className="text-lg mb-8 text-red-50">
            Join our community and share your thoughts about the Reds. Match reviews, player analysis, and unforgettable Anfield moments.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => setCurrentPage('signup')}
              className="bg-white text-red-700 px-8 py-3 rounded-lg font-bold text-lg hover:bg-gray-100 transition transform hover:scale-105"
            >
              Start Writing
            </button>
            <button 
              onClick={() => setCurrentPage('feed')}
              className="bg-red-800 text-white px-8 py-3 rounded-lg font-bold text-lg hover:bg-red-900 transition transform hover:scale-105"
            >
              Read Stories
            </button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-6xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          You'll Never Walk Alone
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
            <div className="text-red-700 text-4xl mb-4">✍️</div>
            <h3 className="text-xl font-bold mb-3 text-gray-800">Share Your Voice</h3>
            <p className="text-gray-600">Write about your favorite Liverpool moments, matches, and players.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
            <div className="text-red-700 text-4xl mb-4">👥</div>
            <h3 className="text-xl font-bold mb-3 text-gray-800">Join the Community</h3>
            <p className="text-gray-600">Connect with passionate Reds fans from around the world.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
            <div className="text-red-700 text-4xl mb-4">⚽</div>
            <h3 className="text-xl font-bold mb-3 text-gray-800">All Things LFC</h3>
            <p className="text-gray-600">From Anfield to the Champions League, share it all.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Login Page Component
function LoginPage({ setCurrentPage }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (email && password) {
      alert('Login functionality will be connected to Firebase!');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-red-100 flex items-center justify-center px-4 py-12">
      <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold text-center mb-2 text-gray-800">Welcome Back</h2>
        <p className="text-center text-gray-600 mb-8">Log in to share your Liverpool stories</p>
        
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
              placeholder="your@email.com"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
              placeholder="••••••••"
            />
          </div>
          
          <button
            onClick={handleLogin}
            className="w-full bg-red-700 text-white py-3 rounded-lg font-semibold hover:bg-red-800 transition transform hover:scale-105"
          >
            Log In
          </button>
        </div>
        
        <p className="text-center mt-6 text-gray-600">
          Don't have an account?{' '}
          <button 
            onClick={() => setCurrentPage('signup')}
            className="text-red-700 font-semibold hover:underline"
          >
            Sign Up
          </button>
        </p>
      </div>
    </div>
  );
}

// Signup Page Component
function SignupPage({ setCurrentPage }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    if (name && email && password) {
      alert('Signup functionality will be connected to Firebase!');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-red-100 flex items-center justify-center px-4 py-12">
      <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold text-center mb-2 text-gray-800">Join The Kop</h2>
        <p className="text-center text-gray-600 mb-8">Create your account and start sharing</p>
        
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
              placeholder="John Smith"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
              placeholder="your@email.com"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
              placeholder="••••••••"
            />
          </div>
          
          <button
            onClick={handleSignup}
            className="w-full bg-red-700 text-white py-3 rounded-lg font-semibold hover:bg-red-800 transition transform hover:scale-105"
          >
            Sign Up
          </button>
        </div>
        
        <p className="text-center mt-6 text-gray-600">
          Already have an account?{' '}
          <button 
            onClick={() => setCurrentPage('login')}
            className="text-red-700 font-semibold hover:underline"
          >
            Log In
          </button>
        </p>
      </div>
    </div>
  );
}

// Create Post Page Component
function CreatePostPage({ setCurrentPage }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = () => {
    if (title && content) {
      alert('Post created! Firebase integration coming next.');
      setCurrentPage('feed');
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Share Your Story</h2>
        
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-lg"
              placeholder="My thoughts on yesterday's match..."
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Your Story</label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent h-64 resize-none"
              placeholder="Write your thoughts about Liverpool FC..."
            />
          </div>
          
          <div className="flex gap-4">
            <button
              onClick={handleSubmit}
              className="flex-1 bg-red-700 text-white py-3 rounded-lg font-semibold hover:bg-red-800 transition"
            >
              Publish Story
            </button>
            <button
              onClick={() => setCurrentPage('feed')}
              className="px-6 bg-gray-200 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-300 transition"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Feed Page Component
function FeedPage({ setCurrentPage }) {
  // Sample posts - will be replaced with Firebase data
  const samplePosts = [
    {
      id: 1,
      title: "What a Performance at Anfield!",
      content: "Last night's match was absolutely incredible. The atmosphere at Anfield was electric from the first minute...",
      author: "RedsFan23",
      date: "2 hours ago"
    },
    {
      id: 2,
      title: "Mohamed Salah: The Egyptian King",
      content: "Let's talk about why Salah is one of the greatest players to ever wear the Liverpool shirt...",
      author: "KopEnd",
      date: "5 hours ago"
    },
    {
      id: 3,
      title: "My First Time at Anfield",
      content: "I finally made it to Anfield for the first time last weekend and I'm still emotional about it...",
      author: "NewRed2024",
      date: "1 day ago"
    }
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">Latest Stories</h2>
        <button
          onClick={() => setCurrentPage('create')}
          className="bg-red-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-800 transition flex items-center space-x-2"
        >
          <PenSquare size={20} />
          <span>Write a Story</span>
        </button>
      </div>

      <div className="space-y-6">
        {samplePosts.map(post => (
          <div key={post.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition p-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-3 hover:text-red-700 cursor-pointer">
              {post.title}
            </h3>
            <p className="text-gray-600 mb-4">
              {post.content}
            </p>
            <div className="flex items-center justify-between text-sm text-gray-500">
              <span className="font-medium text-red-700">{post.author}</span>
              <span>{post.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}