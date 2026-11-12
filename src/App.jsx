import React, { useState } from 'react';
import { 
  LayoutDashboard, Users, Bot, GitBranch, Calendar, 
  MessageSquare, Globe, QrCode, Settings, Bell, 
  Search, Plus, CheckCircle, AlertCircle, PhoneCall, 
  Star, Gift, Clock, Sparkles, Send, RefreshCw, ChevronRight, 
  ShieldCheck, Smartphone, DollarSign, ExternalLink, Play, Mic, Volume2
} from 'lucide-react';

export default function AgentiaConnect() {
  const [activeTab, setActiveTab] = useState('demo_generator');
  
  const [demoProspect, setDemoProspect] = useState({
    businessName: 'Clínica Dental Sonrisas',
    industry: 'Salud y Estética Dental',
    phone: '+56 9 4444 5555',
    packageType: 'full', 
  });

  const [demoToggles, setDemoToggles] = useState({
    aiAgent: true,
    voiceAgent: true,
    reminders: true,
    winback: true,
    birthday: true,
    callback: true,
    reviews: true,
    mapReplies: true,
  });

  const [selectedSubAccount, setSelectedSubAccount] = useState('Dental Studio Pro');
  const [isAiPaused, setIsAiPaused] = useState(false);
  const [chatInput, setChatInput] = useState('');
  const [messages, setMessages] = useState([
    { sender: 'ai', text: `¡Hola! Bienvenido a ${demoProspect.businessName}. ¿En qué podemos ayudarte hoy?`, time: '10:00 AM' }
  ]);

  const [isRecording, setIsRecording] = useState(false);
  const [voiceLogs, setVoiceLogs] = useState([
    { speaker: 'system', text: 'Esperando interacción por voz del cliente en el widget web...' }
  ]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!chatInput.trim()) return;

    const newMsgs = [...messages, { sender: 'user', text: chatInput, time: '10:05 AM' }];
    setMessages(newMsgs);
    setChatInput('');

    setTimeout(() => {
      if (!isAiPaused) {
        setMessages(prev => [...prev, { 
          sender: 'ai', 
          text: `[Asistente IA - ${demoProspect.businessName}]: Entendido. He registrado tu solicitud, verificado el calendario y enviado la confirmación a tu WhatsApp.`, 
          time: '10:05 AM' 
        }]);
      }
    }, 1000);
  };

  const simulateVoiceInteraction = () => {
    setIsRecording(true);
    setVoiceLogs(prev => [...prev, { speaker: 'user', text: '🎤 [Cliente hablando por voz en la web]: "Hola, necesito agendar una limpieza dental para mañana en la tarde y saber si aceptan tarjeta."' }]);
    
    setTimeout(() => {
      setIsRecording(false);
      setVoiceLogs(prev => [
        ...prev, 
        { speaker: 'ai', text: `🤖 [Agente de Voz IA]: "¡Hola! Con gusto te agendo para mañana a las 16:00 hrs y sí aceptamos todas las tarjetas. ¿Te confirmo la cita?"` },
        { speaker: 'whatsapp', text: `📱 [WhatsApp Automático enviado a ${demoProspect.phone}]: "✅ ¡Cita confirmada en ${demoProspect.businessName}! Mañana a las 16:00 hrs. Te hemos enviado los detalles."` }
      ]);
    }, 2500);
  };

  const handleApplyPreset = (type) => {
    if (type === 'full') {
      setDemoToggles({
        aiAgent: true,
        voiceAgent: true,
        reminders: true,
        winback: true,
        birthday: true,
        callback: true,
        reviews: true,
        mapReplies: true,
      });
      setDemoProspect(prev => ({ ...prev, packageType: 'full' }));
    } else {
      setDemoToggles({
        aiAgent: true,
        voiceAgent: false,
        reminders: true,
        winback: false,
        birthday: false,
        callback: false,
        reviews: true,
        mapReplies: false,
      });
      setDemoProspect(prev => ({ ...prev, packageType: 'custom' }));
    }
  };

  return (
    <div className="flex h-screen bg-slate-950 text-slate-100 font-sans overflow-hidden">
      
      {/* SIDEBAR */}
      <aside className="w-64 bg-slate-900 border-r border-slate-800 flex flex-col justify-between">
        <div>
          <div className="p-6 border-b border-slate-800 flex items-center space-x-3">
            <div className="bg-indigo-600 p-2 rounded-xl text-white font-black text-xl shadow-lg shadow-indigo-500/30">
              AC
            </div>
            <div>
              <h1 className="font-bold text-lg tracking-wide text-white">Agentia Connect</h1>
              <p className="text-xs text-indigo-400 font-medium">SaaS White-Label Agency</p>
            </div>
          </div>

          <nav className="p-4 space-y-1.5">
            {[
              { id: 'demo_generator', label: '🚀 Demo Express (Ventas)', icon: Play },
              { id: 'voice_demo', label: '🎙️ Demo Agente de Voz Web', icon: Mic },
              { id: 'dashboard', label: 'Super Admin / MRR', icon: LayoutDashboard },
              { id: 'subaccounts', label: 'Clientes / Subcuentas', icon: Users },
              { id: 'agents', label: 'Constructor Agentes IA', icon: Bot },
              { id: 'advanced_agents', label: 'Agentes Especiales IA', icon: Sparkles },
              { id: 'kanban', label: 'Embudos Comerciales', icon: GitBranch },
              { id: 'calendar', label: 'Calendarios & Turnos', icon: Calendar },
              { id: 'inbox', label: 'Inbox & WhatsApp', icon: MessageSquare },
              { id: 'webbuilder', label: 'Landing Pages & IA', icon: Globe },
              { id: 'whatsapp_api', label: 'Conexión WhatsApp QR', icon: QrCode },
              { id: 'domains', label: 'Dominios & SSL', icon: Settings },
            ].map(item => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center space-x-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                    isActive 
                      ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30' 
                      : 'text-slate-400 hover:bg-slate-800 hover:text-slate-200'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>
        </div>

        <div className="p-4 border-t border-slate-800">
          <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
            <p className="text-xs text-slate-400">Prospecto en Reunión:</p>
            <p className="text-sm font-bold text-indigo-300 truncate">{demoProspect.businessName}</p>
          </div>
        </div>
      </aside>

      {/* MAIN CONTENT AREA */}
      <main className="flex-1 flex flex-col overflow-hidden bg-slate-950">
        
        {/* HEADER */}
        <header className="h-16 bg-slate-900 border-b border-slate-800 px-6 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <span className="text-xs bg-emerald-500/20 text-emerald-400 px-3 py-1 rounded-full font-semibold border border-emerald-500/30">
              Modo Cierre de Venta en Vivo
            </span>
            <span className="text-sm text-slate-400">|</span>
            <span className="text-sm font-medium text-slate-300">Demostrando para: <strong className="text-white">{demoProspect.businessName}</strong></span>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-700">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-xs font-medium text-slate-200">OpenRouter API Conectado</span>
            </div>
            <div className="w-9 h-9 rounded-full bg-indigo-600 text-white flex items-center font-bold justify-center shadow">
              P
            </div>
          </div>
        </header>

        {/* TAB VIEWS */}
        <div className="flex-1 overflow-y-auto p-8">

          {/* SECCIÓN: DEMO EXPRESS (CIERRE DE VENTAS) */}
          {activeTab === 'demo_generator' && (
            <div className="space-y-6 max-w-5xl mx-auto">
              <div className="bg-gradient-to-r from-indigo-900/50 via-slate-900 to-slate-900 border border-indigo-500/30 p-6 rounded-2xl flex justify-between items-center">
                <div>
                  <h2 className="text-2xl font-bold text-white flex items-center space-x-2">
                    <Sparkles className="w-6 h-6 text-indigo-400" />
                    <span>Demo Express para Reunión de Ventas</span>
                  </h2>
                  <p className="text-sm text-slate-300 mt-1">
                    Configura los datos del prospecto en 30 segundos y preséntale la plataforma funcionando con su marca sin preparación previa.
                  </p>
                </div>
                <div className="bg-indigo-600 text-white px-4 py-2 rounded-xl text-xs font-bold shadow-lg shadow-indigo-600/30">
                  Listo para Presentar
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                
                {/* Columna 1: Datos del Prospecto */}
                <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-4">
                  <h3 className="font-bold text-white text-lg">1. Datos del Negocio del Prospecto</h3>
                  
                  <div>
                    <label className="text-xs text-slate-400 font-semibold uppercase">Nombre del Negocio</label>
                    <input 
                      type="text" 
                      value={demoProspect.businessName}
                      onChange={e => setDemoProspect({...demoProspect, businessName: e.target.value})}
                      className="w-full mt-2 bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-slate-200 focus:outline-none focus:border-indigo-500 font-semibold"
                    />
                  </div>

                  <div>
                    <label className="text-xs text-slate-400 font-semibold uppercase">Industria / Giro</label>
                    <input 
                      type="text" 
                      value={demoProspect.industry}
                      onChange={e => setDemoProspect({...demoProspect, industry: e.target.value})}
                      className="w-full mt-2 bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-slate-200 focus:outline-none focus:border-indigo-500"
                    />
                  </div>

                  <div>
                    <label className="text-xs text-slate-400 font-semibold uppercase">Número de WhatsApp Business</label>
                    <input 
                      type="text" 
                      value={demoProspect.phone}
                      onChange={e => setDemoProspect({...demoProspect, phone: e.target.value})}
                      className="w-full mt-2 bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-slate-200 focus:outline-none focus:border-indigo-500"
                    />
                  </div>

                  <div className="pt-2">
                    <label className="text-xs text-slate-400 font-semibold uppercase block mb-2">Estrategia Comercial de Venta</label>
                    <div className="grid grid-cols-2 gap-3">
                      <button 
                        onClick={() => handleApplyPreset('full')}
                        className={`p-3 rounded-xl border text-xs font-bold transition ${demoProspect.packageType === 'full' ? 'bg-indigo-600 border-indigo-500 text-white' : 'bg-slate-950 border-slate-800 text-slate-300'}`}
                      >
                        🌟 Paquete Completo (Todo Activado)
                      </button>
                      <button 
                        onClick={() => handleApplyPreset('custom')}
                        className={`p-3 rounded-xl border text-xs font-bold transition ${demoProspect.packageType === 'custom' ? 'bg-indigo-600 border-indigo-500 text-white' : 'bg-slate-950 border-slate-800 text-slate-300'}`}
                      >
                        ⚡ Paquete Esencial (A medida)
                      </button>
                    </div>
                  </div>
                </div>

                {/* Columna 2: Selección de Módulos para la Demo */}
                <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-4 flex flex-col justify-between">
                  <div>
                    <h3 className="font-bold text-white text-lg mb-3">2. Activar / Apagar Funciones para la Demo</h3>
                    <p className="text-xs text-slate-400 mb-4">Si el cliente no quiere todo el sistema, apaga lo que no le interese en un solo clic.</p>

                    <div className="space-y-3">
                      {[
                        { key: 'aiAgent', label: '🤖 Agente de IA para WhatsApp & Web (Texto)' },
                        { key: 'voiceAgent', label: '🎙️ Agente de Voz IA en Widget Web (Nuevo)' },
                        { key: 'reminders', label: '⏰ Recordatorios Automáticos de Citas' },
                        { key: 'winback', label: '🔄 Activación de Clientes Perdidos' },
                        { key: 'birthday', label: '🎁 Fidelización (Cumpleaños)' },
                        { key: 'callback', label: '📞 Agente de Devolución de Llamada (Callback)' },
                        { key: 'reviews', label: '⭐ Solicitud Automática Reseñas Google' },
                        { key: 'mapReplies', label: '🌐 Autorespuesta Reseñas Google Maps' },
                      ].map((item) => (
                        <div key={item.key} className="flex items-center justify-between bg-slate-950 px-4 py-2.5 rounded-xl border border-slate-800">
                          <span className="text-xs font-medium text-slate-200">{item.label}</span>
                          <input 
                            type="checkbox" 
                            checked={demoToggles[item.key]} 
                            onChange={() => setDemoToggles({...demoToggles, [item.key]: !demoToggles[item.key]})}
                            className="w-4 h-4 accent-indigo-600"
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  <button 
                    onClick={() => setActiveTab('voice_demo')}
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-xl font-bold text-sm shadow-lg shadow-emerald-600/30 flex items-center justify-center space-x-2 transition"
                  >
                    <Play className="w-4 h-4" />
                    <span>¡Probar Agente de Voz en la Reunión!</span>
                  </button>
                </div>

              </div>
            </div>
          )}

          {/* SECCIÓN: DEMO AGENTE DE VOZ WEB & WHATSAPP SYNC */}
          {activeTab === 'voice_demo' && (
            <div className="space-y-6 max-w-4xl mx-auto">
              <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl flex justify-between items-center">
                <div>
                  <h2 className="text-2xl font-bold text-white flex items-center space-x-2">
                    <Mic className="w-6 h-6 text-indigo-400" />
                    <span>Demo en Vivo: Agente de Voz Web & WhatsApp Sync</span>
                  </h2>
                  <p className="text-sm text-slate-300 mt-1">
                    Muéstrale al cliente cómo el usuario le habla por voz al widget de la web, la IA resuelve la duda y envía de inmediato la confirmación a su WhatsApp.
                  </p>
                </div>
                <div className="bg-indigo-600/20 text-indigo-400 px-3 py-1 rounded-full text-xs font-bold border border-indigo-500/30">
                  {demoProspect.businessName}
                </div>
              </div>

              <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl flex flex-col items-center justify-center space-y-6 text-center">
                <div className="relative">
                  <div className={`w-32 h-32 rounded-full flex items-center justify-center transition-all ${isRecording ? 'bg-red-600 animate-pulse shadow-xl shadow-red-600/50' : 'bg-indigo-600 shadow-xl shadow-indigo-600/40'}`}>
                    <Mic className="w-12 h-12 text-white" />
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white">
                    {isRecording ? "Escuchando voz del cliente en el widget..." : "Micrófono del Agente de Voz Listo"}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">Haz clic en el botón para simular una llamada de voz en la web del cliente.</p>
                </div>

                <button 
                  onClick={simulateVoiceInteraction}
                  disabled={isRecording}
                  className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-xl font-bold text-sm shadow-lg shadow-indigo-600/30 flex items-center space-x-2 transition"
                >
                  <Volume2 className="w-4 h-4" />
                  <span>{isRecording ? "Procesando voz..." : "Simular Conversación por Voz"}</span>
                </button>

                {/* Consola de Logs de Voz y WhatsApp */}
                <div className="w-full bg-slate-950 border border-slate-800 rounded-xl p-4 text-left space-y-3 mt-4">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Historial de Interacción Voz + WhatsApp:</p>
                  <div className="space-y-2 max-h-48 overflow-y-auto">
                    {voiceLogs.map((log, index) => (
                      <div key={index} className={`p-3 rounded-xl text-xs font-medium ${log.speaker === 'user' ? 'bg-slate-900 text-indigo-300 border border-indigo-500/20' : log.speaker === 'ai' ? 'bg-indigo-950/40 text-emerald-300 border border-emerald-500/20' : 'bg-emerald-950/40 text-amber-300 border border-amber-500/20'}`}>
                        {log.text}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 1. DASHBOARD */}
          {activeTab === 'dashboard' && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-white">Panel Super Admin (Agencia)</h2>
                <p className="text-sm text-slate-400">Resumen general de tus ingresos, consumo de IA y subcuentas activas.</p>
              </div>

              <div className="grid grid-cols-4 gap-6">
                {[
                  { title: 'MRR (Ingresos Recurrentes)', value: '$2,450 USD', change: '+18% este mes', color: 'text-emerald-400' },
                  { title: 'Subcuentas Activas', value: '14 Clientes', change: '2 en prueba', color: 'text-indigo-400' },
                  { title: 'Consumo OpenRouter IA', value: '$12.40 USD', change: 'Optimizado', color: 'text-amber-400' },
                  { title: 'Leads Capturados', value: '1,280', change: '+320 esta semana', color: 'text-purple-400' },
                ].map((stat, i) => (
                  <div key={i} className="bg-slate-900 border border-slate-800 p-6 rounded-2xl shadow-xl">
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">{stat.title}</p>
                    <h3 className={`text-3xl font-extrabold mt-2 ${stat.color}`}>{stat.value}</h3>
                    <p className="text-xs text-slate-400 mt-2 font-medium">{stat.change}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 2. SUBACCOUNTS */}
          {activeTab === 'subaccounts' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-2xl font-bold text-white">Gestión de Clientes (Subcuentas)</h2>
                  <p className="text-sm text-slate-400">Administra los accesos y planes de tus negocios locales.</p>
                </div>
                <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-xl text-sm font-semibold shadow-lg shadow-indigo-600/30 flex items-center space-x-2">
                  <Plus className="w-4 h-4" />
                  <span>Nueva Subcuenta</span>
                </button>
              </div>

              <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-slate-800 bg-slate-950/50 text-xs text-slate-400 uppercase">
                      <th className="p-4">Negocio</th>
                      <th className="p-4">Plan</th>
                      <th className="p-4">WhatsApp Conectado</th>
                      <th className="p-4">Estado IA</th>
                      <th className="p-4">Acción</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800 text-sm">
                    {[
                      { name: demoProspect.businessName, plan: 'Paquete Personalizado + Voz', phone: demoProspect.phone, status: 'Demo Activa' },
                      { name: 'Dental Studio Pro', plan: 'Pro ($199/mes)', phone: '+56 9 1234 5678', status: 'Activo' },
                    ].map((row, idx) => (
                      <tr key={idx} className="hover:bg-slate-800/50 transition">
                        <td className="p-4 font-semibold text-white">{row.name}</td>
                        <td className="p-4 text-indigo-400 font-medium">{row.plan}</td>
                        <td className="p-4 text-slate-300">{row.phone}</td>
                        <td className="p-4">
                          <span className="bg-emerald-500/20 text-emerald-400 px-2.5 py-1 rounded-full text-xs font-semibold border border-emerald-500/30">
                            {row.status}
                          </span>
                        </td>
                        <td className="p-4">
                          <button 
                            onClick={() => setSelectedSubAccount(row.name)}
                            className="bg-slate-800 hover:bg-slate-700 text-indigo-300 px-3 py-1.5 rounded-lg text-xs font-semibold border border-slate-700 transition"
                          >
                            Administrar
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* 3. CONSTRUCTOR DE AGENTES IA */}
          {activeTab === 'agents' && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-white">Constructor de Agentes IA (8 Secciones)</h2>
                <p className="text-sm text-slate-400">Define la personalidad, directrices y herramientas de voz y texto para {demoProspect.businessName}.</p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-4">
                  <h3 className="font-bold text-white flex items-center space-x-2">
                    <Bot className="w-5 h-5 text-indigo-400" />
                    <span>Configuración Operativa (Voz & Texto)</span>
                  </h3>
                  <div>
                    <label className="text-xs text-slate-400 font-semibold uppercase">Prompt / Instrucción Principal</label>
                    <textarea 
                      rows={5}
                      className="w-full mt-2 bg-slate-950 border border-slate-800 rounded-xl p-3 text-sm text-slate-200 focus:outline-none focus:border-indigo-500"
                      value={`Eres el asistente virtual experto de voz y texto de ${demoProspect.businessName}, enfocado en el sector de ${demoProspect.industry}. Tu objetivo es calificar al lead, resolver dudas, agendar citas y disparar la confirmación a WhatsApp.`}
                      onChange={() => {}}
                    />
                  </div>
                  <div className="flex items-center justify-between pt-2">
                    <span className="text-sm text-slate-300">Herramienta de Sincronización WhatsApp</span>
                    <input type="checkbox" defaultChecked className="toggle" />
                  </div>
                </div>

                <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl flex flex-col justify-between">
                  <div>
                    <h3 className="font-bold text-white mb-2">Simulador de Chat en Vivo</h3>
                    <p className="text-xs text-slate-400 mb-4">Probando la demo para: <strong className="text-indigo-300">{demoProspect.businessName}</strong></p>
                    <div className="bg-slate-950 border border-slate-800 h-64 rounded-xl p-4 overflow-y-auto space-y-3">
                      {messages.map((m, idx) => (
                        <div key={idx} className={`flex ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                          <div className={`max-w-[80%] p-3 rounded-xl text-sm ${m.sender === 'user' ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-200'}`}>
                            {m.text}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <form onSubmit={handleSendMessage} className="mt-4 flex space-x-2">
                    <input 
                      type="text" 
                      value={chatInput}
                      onChange={e => setChatInput(e.target.value)}
                      placeholder="Escribe una prueba en la demo..."
                      className="flex-1 bg-slate-950 border border-slate-800 rounded-xl px-4 text-sm text-slate-200 focus:outline-none focus:border-indigo-500"
                    />
                    <button type="submit" className="bg-indigo-600 hover:bg-indigo-700 text-white p-3 rounded-xl">
                      <Send className="w-4 h-4" />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          )}

          {/* 4. AGENTES ESPECIALES IA */}
          {activeTab === 'advanced_agents' && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-white">Agentes Especiales & Automatizaciones IA</h2>
                <p className="text-sm text-slate-400">Estado de módulos activos para la demo de {demoProspect.businessName}:</p>
              </div>

              <div className="grid grid-cols-3 gap-6">
                
                <div className={`bg-slate-900 border ${demoToggles.voiceAgent ? 'border-indigo-500/50' : 'border-slate-800 opacity-60'} p-6 rounded-2xl flex flex-col justify-between space-y-4`}>
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="p-2.5 bg-indigo-500/20 rounded-xl text-indigo-400"><Mic className="w-6 h-6" /></div>
                      <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${demoToggles.voiceAgent ? 'bg-emerald-500/20 text-emerald-400' : 'bg-slate-800 text-slate-400'}`}>
                        {demoToggles.voiceAgent ? 'Activo en Demo' : 'Apagado'}
                      </span>
                    </div>
                    <h3 className="font-bold text-white text-lg">Agente de Voz Web Híbrido</h3>
                    <p className="text-xs text-slate-400 mt-2">El cliente habla por voz en la web, la IA agenda y sincroniza el WhatsApp.</p>
                  </div>
                </div>

                <div className={`bg-slate-900 border ${demoToggles.reminders ? 'border-indigo-500/50' : 'border-slate-800 opacity-60'} p-6 rounded-2xl flex flex-col justify-between space-y-4`}>
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="p-2.5 bg-indigo-500/20 rounded-xl text-indigo-400"><Clock className="w-6 h-6" /></div>
                      <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${demoToggles.reminders ? 'bg-emerald-500/20 text-emerald-400' : 'bg-slate-800 text-slate-400'}`}>
                        {demoToggles.reminders ? 'Activo en Demo' : 'Apagado'}
                      </span>
                    </div>
                    <h3 className="font-bold text-white text-lg">Recordatorio de Citas IA</h3>
                    <p className="text-xs text-slate-400 mt-2">Envía recordatorios inteligentes por WhatsApp 24h y 2h antes de la cita.</p>
                  </div>
                </div>

                <div className={`bg-slate-900 border ${demoToggles.reviews ? 'border-indigo-500/50' : 'border-slate-800 opacity-60'} p-6 rounded-2xl flex flex-col justify-between space-y-4`}>
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="p-2.5 bg-amber-500/20 rounded-xl text-amber-400"><Star className="w-6 h-6" /></div>
                      <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${demoToggles.reviews ? 'bg-emerald-500/20 text-emerald-400' : 'bg-slate-800 text-slate-400'}`}>
                        {demoToggles.reviews ? 'Activo en Demo' : 'Apagado'}
                      </span>
                    </div>
                    <h3 className="font-bold text-white text-lg">Solicitud Reseñas Google</h3>
                    <p className="text-xs text-slate-400 mt-2">Mensaje amable a WhatsApp solicitando valoración de 5 estrellas al concluir el servicio.</p>
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* 5. KANBAN */}
          {activeTab === 'kanban' && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-white">Embudos Comerciales & Kanban</h2>
                <p className="text-sm text-slate-400">Pipeline de ventas para {demoProspect.businessName}.</p>
              </div>

              <div className="grid grid-cols-4 gap-4">
                {[
                  { title: 'Nuevos Leads (Voz/Chat)', count: '12', color: 'border-indigo-500' },
                  { title: 'Agendados', count: '5', color: 'border-amber-500' },
                  { title: 'Servicio Realizado', count: '8', color: 'border-purple-500' },
                  { title: 'Reseña Solicitada', count: '3', color: 'border-emerald-500' },
                ].map((col, i) => (
                  <div key={i} className={`bg-slate-900 border-t-4 ${col.color} border border-slate-800 p-4 rounded-2xl min-h-[400px]`}>
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="font-bold text-white text-sm">{col.title}</h3>
                      <span className="bg-slate-800 text-slate-300 text-xs px-2 py-0.5 rounded-full font-semibold">{col.count}</span>
                    </div>
                    <div className="space-y-3">
                      <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 shadow cursor-pointer hover:border-indigo-500 transition">
                        <p className="font-semibold text-xs text-white">Lead por Voz Web</p>
                        <p className="text-[11px] text-slate-400 mt-1">Sincronizado con WhatsApp</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 6. CALENDAR */}
          {activeTab === 'calendar' && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-white">Calendario & Turnos Partidos</h2>
                <p className="text-sm text-slate-400">Horarios configurados para {demoProspect.businessName}.</p>
              </div>

              <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-4">
                <h3 className="font-bold text-white">Horario de Atención General</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                    <p className="text-xs text-slate-400 font-semibold">Turno Matutino</p>
                    <p className="text-lg font-bold text-white mt-1">09:00 AM - 13:00 PM</p>
                  </div>
                  <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                    <p className="text-xs text-slate-400 font-semibold">Almuerzo / Descanso (Turno Partido)</p>
                    <p className="text-lg font-bold text-amber-400 mt-1">13:00 PM - 15:00 PM (Bloqueado)</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 7. INBOX */}
          {activeTab === 'inbox' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-2xl font-bold text-white">Inbox Unificado & Control de IA</h2>
                  <p className="text-sm text-slate-400">Atendiendo chat en vivo para: <strong className="text-indigo-300">{demoProspect.businessName}</strong></p>
                </div>
                <div className="flex items-center space-x-3 bg-slate-900 border border-slate-800 px-4 py-2 rounded-xl">
                  <span className="text-xs font-semibold text-slate-300">Pausar IA en este chat:</span>
                  <input 
                    type="checkbox" 
                    checked={isAiPaused} 
                    onChange={() => setIsAiPaused(!isAiPaused)} 
                    className="toggle"
                  />
                </div>
              </div>

              <div className="bg-slate-900 border border-slate-800 h-[500px] rounded-2xl flex flex-col justify-between p-4">
                <div className="flex-1 overflow-y-auto space-y-3 pr-2">
                  {messages.map((m, idx) => (
                    <div key={idx} className={`flex ${m.sender === 'user' ? 'justify-start' : 'justify-end'}`}>
                      <div className={`max-w-[70%] p-3 rounded-xl text-sm ${m.sender === 'user' ? 'bg-slate-800 text-slate-200' : 'bg-indigo-600 text-white'}`}>
                        {m.text}
                      </div>
                    </div>
                  ))}
                </div>
                <form onSubmit={handleSendMessage} className="mt-4 flex space-x-2 border-t border-slate-800 pt-4">
                  <input 
                    type="text" 
                    value={chatInput}
                    onChange={e => setChatInput(e.target.value)}
                    placeholder="Escribe como asesor humano..."
                    className="flex-1 bg-slate-950 border border-slate-800 rounded-xl px-4 text-sm text-slate-200 focus:outline-none focus:border-indigo-500"
                  />
                  <button type="submit" className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2.5 rounded-xl font-semibold text-sm">
                    Enviar
                  </button>
                </form>
              </div>
            </div>
          )}

          {/* 8. WEBBUILDER */}
          {activeTab === 'webbuilder' && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-white">Landing Pages & IA</h2>
                <p className="text-sm text-slate-400">Generador de sitios web con widget de voz y texto integrado para {demoProspect.businessName}.</p>
              </div>
              <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl text-center space-y-4">
                <div className="w-16 h-16 bg-indigo-600/20 text-indigo-400 rounded-2xl flex items-center justify-center mx-auto">
                  <Globe className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-white">Landing Page con Widget de Voz IA</h3>
                <p className="text-slate-400 text-sm max-w-lg mx-auto">
                  Cada web incluye el botón para que los clientes hablen por voz y reciban su confirmación automática en WhatsApp.
                </p>
                <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl font-semibold text-sm shadow-lg shadow-indigo-600/30">
                  Previsualizar Web de la Demo
                </button>
              </div>
            </div>
          )}

          {/* 9. WHATSAPP API */}
          {activeTab === 'whatsapp_api' && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-white">Conexión WhatsApp Business (Modo Coexistencia)</h2>
                <p className="text-sm text-slate-400">Vincular número de {demoProspect.businessName} ({demoProspect.phone}).</p>
              </div>
              <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl flex flex-col items-center justify-center space-y-4">
                <div className="bg-white p-4 rounded-2xl shadow-xl">
                  <QrCode className="w-48 h-48 text-slate-950" />
                </div>
                <p className="text-sm text-slate-300 font-medium">Escanea este código QR desde el celular de {demoProspect.businessName}</p>
                <span className="text-xs bg-emerald-500/20 text-emerald-400 px-3 py-1 rounded-full border border-emerald-500/30">
                  Modo Coexistencia Activo
                </span>
              </div>
            </div>
          )}

          {/* 10. DOMAINS */}
          {activeTab === 'domains' && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-white">Conexión de Dominios & Certificado SSL</h2>
                <p className="text-sm text-slate-400">Vincula el dominio personalizado para {demoProspect.businessName}.</p>
              </div>
              <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-4">
                <label className="text-xs text-slate-400 font-semibold uppercase">Dominio del Cliente</label>
                <div className="flex space-x-3">
                  <input 
                    type="text" 
                    defaultValue="clinicasonrisas.cl"
                    className="flex-1 bg-slate-950 border border-slate-800 rounded-xl px-4 text-sm text-slate-200 focus:outline-none focus:border-indigo-500"
                  />
                  <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2.5 rounded-xl text-sm font-semibold">
                    Conectar con Cloudflare
                  </button>
                </div>
              </div>
            </div>
          )}

        </div>
      </main>
    </div>
  );
}
