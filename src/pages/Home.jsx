import { motion } from "framer-motion";
import { Activity, Shield, ArrowRight, Target, Zap, HeartPulse } from "lucide-react";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">

            {/* Header */}
            <header className="relative bg-black/30 backdrop-blur-md border-b border-white/10 sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-20">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg flex items-center justify-center">
                                <Activity className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h1 className="text-2xl font-black text-white tracking-tight">
                                    ATHLETIQ<span className="text-cyan-400">AI</span>
                                </h1>
                                <p className="text-xs text-gray-400 font-medium tracking-wide">SMART TRAINING SYSTEM</p>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <div className="relative overflow-hidden">
                {/* Background Grid */}
                <div className="absolute inset-0 opacity-10">
                    <div
                        className="absolute inset-0"
                        style={{
                            backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,.03) 2px, rgba(255,255,255,.03) 4px)`
                        }}
                    />
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">

                    {/* Intro Badge */}
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        className="text-center mb-6"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full">
                            <HeartPulse className="w-4 h-4 text-cyan-400" />
                            <span className="text-cyan-400 text-sm font-bold tracking-wider">OPTIMISE YOUR PERFORMANCE</span>
                        </div>
                    </motion.div>

                    {/* Main Title */}
                    <motion.h2
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-7xl text-center font-black text-white mb-6 tracking-tight"
                    >
                        PRENEZ LE CONTRÔLE DE
                        <br />
                        VOTRE <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">SANTÉ SPORTIVE</span>
                    </motion.h2>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-gray-400 max-w-2xl mx-auto text-center mb-16 leading-relaxed"
                    >
                        Analyse personnalisée, conseils intelligents et visualisations dynamiques pour améliorer votre posture,
                        technicité et puissance athlétique.
                    </motion.p>


                    {/* Features Grid */}
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16"
                    >
                        {[
                            { icon: Shield, title: "Prévention des blessures", color: "cyan" },
                            { icon: Target, title: "Coaching sur mesure", color: "blue" },
                            { icon: Zap, title: "Visualisation intelligente", color: "purple" },
                        ].map((item, idx) => (
                            <div
                                key={idx}
                                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-all"
                            >
                                <div className={`w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br from-${item.color}-500/20 to-${item.color}-600/10 flex items-center justify-center`}>
                                    <item.icon className={`w-7 h-7 text-${item.color}-400`} />
                                </div>
                                <h3 className="text-white font-bold mb-2">{item.title}</h3>
                                <p className="text-gray-400 text-sm font-medium">
                                    Une approche moderne et intelligente de la performance.
                                </p>
                            </div>
                        ))}
                    </motion.div>

                    {/* CTA Button */}
                    <motion.div
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="text-center"
                    >
                        <Link
                            to="/sante-posturale"
                            className="group relative inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl text-white font-black text-xl hover:shadow-2xl hover:shadow-cyan-500/40 transition-all duration-300 hover:scale-105"
                        >
                            <span>ACCÉDER À L'ANALYSE</span>
                            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                        </Link>

                        <p className="text-gray-500 text-sm mt-4 font-medium">
                            Évaluation rapide et intuitive • Aucun matériel requis
                        </p>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
