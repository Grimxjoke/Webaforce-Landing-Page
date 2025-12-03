import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Sparkles, AlertCircle, Phone } from 'lucide-react';
import { ChatMessage, LoadingState } from '../types';
import { sendMessageToGemini, initializeChat } from '../services/geminiService';

const AIDemo: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: 'model',
      text: "Bonjour ! Je suis l'intelligence artificielle de WEBAFORCE. Je peux gérer vos chats et vos appels téléphoniques. Comment puis-je vous aider ?",
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [loadingState, setLoadingState] = useState<LoadingState>(LoadingState.IDLE);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    initializeChat();
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!input.trim() || loadingState === LoadingState.LOADING) return;

    const userMessage: ChatMessage = {
      role: 'user',
      text: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setLoadingState(LoadingState.LOADING);

    try {
      const responseText = await sendMessageToGemini(userMessage.text);
      
      const aiMessage: ChatMessage = {
        role: 'model',
        text: responseText,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, aiMessage]);
      setLoadingState(LoadingState.SUCCESS);
    } catch (error) {
      setLoadingState(LoadingState.ERROR);
      const errorMessage: ChatMessage = {
        role: 'model',
        text: "Désolé, j'ai rencontré un problème technique. Essayez de rafraîchir la page.",
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    }
  };

  return (
    <section id="demo" className="py-20 bg-slate-950 relative overflow-hidden scroll-mt-20">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
         <div className="absolute right-0 bottom-0 w-1/2 h-full bg-gradient-to-l from-brand-900/30 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
             <div className="inline-flex items-center gap-2 mb-2 px-4 py-1 rounded-full bg-brand-900/30 border border-brand-500/30">
                <Sparkles className="text-brand-400 h-4 w-4" />
                <span className="text-brand-400 font-semibold uppercase tracking-wider text-xs">Démonstration Interactive</span>
            </div>
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Testez la puissance de <span className="text-brand-400">l'IA</span>
            </h2>
            <p className="text-slate-400 mt-2">Interagissez par chat ou par téléphone avec nos agents virtuels simulés.</p>
        </div>

        <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-start">
          
          {/* Phone Demo Section */}
          <div className="col-span-12 lg:col-span-4 mb-8 lg:mb-0">
             <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl hover:border-brand-500/30 transition-colors h-full">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-brand-600/20 text-brand-400 mx-auto mb-4 animate-pulse-slow">
                    <Phone className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-white text-center mb-2">Agent Vocal IA</h3>
                <p className="text-slate-400 text-center text-sm mb-6">
                    Imaginez : vos prospects appellent, l'IA répond, qualifie le besoin et prend le RDV dans votre agenda.
                </p>
                
                <div className="bg-slate-950 border border-slate-800 rounded-lg p-4 text-center mb-4">
                    <p className="text-xs text-slate-500 uppercase tracking-widest mb-1">Ligne de Démonstration</p>
                    <p className="text-2xl font-mono font-bold text-white tracking-wider">+33 1 23 45 67 89</p>
                </div>

                <button disabled className="block w-full bg-slate-800 text-slate-400 text-center font-bold py-3 rounded-lg transition-all cursor-not-allowed border border-slate-700">
                    Simulation Visuelle
                </button>
             </div>
          </div>

          {/* Chat Interface */}
          <div className="col-span-12 lg:col-span-8">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col h-[600px]">
                {/* Chat Header */}
                <div className="bg-slate-800 p-4 border-b border-slate-700 flex items-center justify-between">
                <div className="flex items-center">
                    <div className="relative">
                    <div className="h-10 w-10 rounded-full bg-brand-600 flex items-center justify-center text-white">
                        <Bot className="h-6 w-6" />
                    </div>
                    <div className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-500 border-2 border-slate-800"></div>
                    </div>
                    <div className="ml-3">
                    <p className="text-sm font-medium text-white">Assistant WEBAFORCE</p>
                    <p className="text-xs text-slate-400">En ligne • Prêt à conclure</p>
                    </div>
                </div>
                </div>

                {/* Chat Messages */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-900 scrollbar-hide">
                {messages.map((msg, index) => (
                    <div
                    key={index}
                    className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                    <div
                        className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm ${
                        msg.role === 'user'
                            ? 'bg-brand-600 text-white rounded-tr-none'
                            : 'bg-slate-800 text-slate-200 rounded-tl-none border border-slate-700'
                        }`}
                    >
                        {msg.text}
                    </div>
                    </div>
                ))}
                {loadingState === LoadingState.LOADING && (
                    <div className="flex justify-start">
                    <div className="bg-slate-800 border border-slate-700 rounded-2xl rounded-tl-none px-4 py-3 flex items-center space-x-1">
                        <div className="w-2 h-2 bg-brand-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                        <div className="w-2 h-2 bg-brand-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                        <div className="w-2 h-2 bg-brand-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                    </div>
                    </div>
                )}
                <div ref={messagesEndRef} />
                </div>

                {/* Chat Input */}
                <div className="p-4 bg-slate-800 border-t border-slate-700">
                    <div className="flex gap-2 mb-3 overflow-x-auto pb-2 scrollbar-hide">
                        {["Quel est le prix du pack Croissance ?", "Comment l'IA gère les appels ?", "Je veux plus de prospects"].map((q, i) => (
                            <button 
                                key={i}
                                onClick={() => { setInput(q); if(inputRef.current) inputRef.current.focus(); }}
                                className="whitespace-nowrap px-3 py-1 bg-slate-700 hover:bg-slate-600 text-xs text-slate-300 rounded-full transition-colors border border-slate-600"
                            >
                                {q}
                            </button>
                        ))}
                    </div>
                <form onSubmit={handleSend} className="flex gap-2">
                    <input
                    ref={inputRef}
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Posez votre question à l'IA..."
                    className="flex-1 bg-slate-900 text-white border border-slate-700 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent placeholder-slate-500"
                    />
                    <button
                    type="submit"
                    disabled={loadingState === LoadingState.LOADING || !input.trim()}
                    className="bg-brand-600 hover:bg-brand-500 text-white rounded-full p-2.5 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                    <Send className="h-5 w-5" />
                    </button>
                </form>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIDemo;